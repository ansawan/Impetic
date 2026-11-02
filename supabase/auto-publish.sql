-- =====================================================================
-- Impetic: admin → live website auto-publish
-- Run this whole file once in Supabase → SQL Editor. It is safe to re-run.
--
-- What it does
--   1. Creates the SEO columns/tables the admin panel saves to (they were missing,
--      so blog and page-SEO saves were failing).
--   2. Whenever a blog, its tags, a category or a page's SEO is saved in /admin,
--      Supabase asks GitHub to rebuild the site. GitHub Actions builds it and uploads
--      it to Hostinger. The change is live in about 5 minutes. No code changes needed.
--
-- Before running: replace PASTE_GITHUB_TOKEN_HERE below with a GitHub fine-grained
-- token (github.com → Settings → Developer settings → Fine-grained tokens):
--   Repository access: only ansawan/Impetic
--   Permissions: Contents → Read and write   (needed for repository_dispatch)
-- =====================================================================


-- ---------- 1. SEO storage used by the admin panel ----------

ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo JSONB DEFAULT '{}'::jsonb;

CREATE TABLE IF NOT EXISTS public.page_seo (
    page_slug TEXT PRIMARY KEY,
    page_name TEXT NOT NULL,
    seo JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.site_seo_settings (
    id TEXT PRIMARY KEY DEFAULT 'global-settings',
    default_title_template TEXT DEFAULT '%page_title% | Impetic',
    default_meta_description TEXT,
    default_og_image TEXT,
    site_name TEXT DEFAULT 'IMPETIC',
    twitter_handle TEXT DEFAULT '@impetic',
    organization_schema_json TEXT,
    google_site_verification TEXT,
    bing_site_verification TEXT,
    google_analytics_id TEXT,
    gtag_id TEXT,
    custom_disallow_rules TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.page_seo ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_seo_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view page_seo" ON public.page_seo;
CREATE POLICY "Public can view page_seo" ON public.page_seo FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated can manage page_seo" ON public.page_seo;
CREATE POLICY "Authenticated can manage page_seo" ON public.page_seo
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public can view site_seo_settings" ON public.site_seo_settings;
CREATE POLICY "Public can view site_seo_settings" ON public.site_seo_settings FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated can manage site_seo_settings" ON public.site_seo_settings;
CREATE POLICY "Authenticated can manage site_seo_settings" ON public.site_seo_settings
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Make the new column visible to the API immediately
NOTIFY pgrst, 'reload schema';


-- ---------- 2. GitHub token (stored encrypted in Supabase Vault) ----------

CREATE EXTENSION IF NOT EXISTS pg_net;

DO $$
DECLARE
    new_token TEXT := 'PASTE_GITHUB_TOKEN_HERE';
    existing UUID;
BEGIN
    IF new_token = 'PASTE_GITHUB_TOKEN_HERE' THEN
        RAISE NOTICE 'GitHub token not pasted: keeping the stored one (if any).';
        RETURN;
    END IF;
    SELECT id INTO existing FROM vault.secrets WHERE name = 'github_deploy_token';
    IF existing IS NULL THEN
        PERFORM vault.create_secret(new_token, 'github_deploy_token', 'Triggers the Impetic site rebuild');
    ELSE
        PERFORM vault.update_secret(existing, new_token);
    END IF;
END $$;


-- ---------- 3. Rebuild the site when admin content changes ----------

CREATE OR REPLACE FUNCTION public.trigger_site_rebuild()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    token TEXT;
BEGIN
    -- Ignore updates that only touch counters/timestamps (e.g. view counts)
    IF TG_OP = 'UPDATE'
       AND (to_jsonb(NEW) - 'views' - 'updated_at') = (to_jsonb(OLD) - 'views' - 'updated_at') THEN
        RETURN NULL;
    END IF;

    SELECT decrypted_secret INTO token
    FROM vault.decrypted_secrets
    WHERE name = 'github_deploy_token'
    LIMIT 1;

    IF token IS NULL THEN
        RAISE WARNING 'github_deploy_token is not set in Vault; site rebuild not triggered';
        RETURN NULL;
    END IF;

    -- Async HTTP call: never slows down or blocks the admin save
    PERFORM net.http_post(
        url := 'https://api.github.com/repos/ansawan/Impetic/dispatches',
        headers := jsonb_build_object(
            'Authorization', 'Bearer ' || token,
            'Accept', 'application/vnd.github+json',
            'X-GitHub-Api-Version', '2022-11-28',
            'User-Agent', 'impetic-supabase-autopublish',
            'Content-Type', 'application/json'
        ),
        body := jsonb_build_object(
            'event_type', 'content-updated',
            'client_payload', jsonb_build_object('table', TG_TABLE_NAME, 'op', TG_OP)
        )
    );
    RETURN NULL;
END;
$$;

REVOKE ALL ON FUNCTION public.trigger_site_rebuild() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS site_rebuild_blogs ON public.blogs;
CREATE TRIGGER site_rebuild_blogs
    AFTER INSERT OR UPDATE OR DELETE ON public.blogs
    FOR EACH ROW EXECUTE FUNCTION public.trigger_site_rebuild();

DROP TRIGGER IF EXISTS site_rebuild_blog_tags ON public.blog_tags;
CREATE TRIGGER site_rebuild_blog_tags
    AFTER INSERT OR UPDATE OR DELETE ON public.blog_tags
    FOR EACH ROW EXECUTE FUNCTION public.trigger_site_rebuild();

DROP TRIGGER IF EXISTS site_rebuild_categories ON public.categories;
CREATE TRIGGER site_rebuild_categories
    AFTER INSERT OR UPDATE OR DELETE ON public.categories
    FOR EACH ROW EXECUTE FUNCTION public.trigger_site_rebuild();

DROP TRIGGER IF EXISTS site_rebuild_page_seo ON public.page_seo;
CREATE TRIGGER site_rebuild_page_seo
    AFTER INSERT OR UPDATE OR DELETE ON public.page_seo
    FOR EACH ROW EXECUTE FUNCTION public.trigger_site_rebuild();


-- ---------- Check it worked ----------
-- After saving something in /admin, run:
--   SELECT status_code, content, created FROM net._http_response ORDER BY created DESC LIMIT 5;
-- 204 = GitHub accepted it (see the run under GitHub → Actions).
-- 401/403/404 = the token is wrong or lacks "Contents: Read and write" on ansawan/Impetic.
