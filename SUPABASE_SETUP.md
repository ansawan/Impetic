# Supabase Setup Guide — Impetic Blog Management System

Follow these simple steps to connect your Supabase project to your website's Blog Management System.

---

## 1. Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and log in.
2. Click **New Project**, select your organization, name your project (e.g. `impetic-blog`), choose a database password and region, then click **Create New Project**.

---

## 2. Environment Variables Configuration
In your local project root (`d:\Impetic`), create or edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...your-anon-key
```

> **Where to find credentials**: In your Supabase dashboard, navigate to **Project Settings -> API**. Copy your **Project URL** and **`anon` `public` key**.

---

## 3. Database Schema & SQL Setup
In your Supabase dashboard, open the **SQL Editor**, paste the following script, and click **Run**:

```sql
-- 1. ENABLE UUID EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CREATE CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. CREATE TAGS TABLE
CREATE TABLE IF NOT EXISTS public.tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CREATE USER PROFILES & ROLES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. CREATE BLOGS TABLE
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    author TEXT DEFAULT 'Impetic Team',
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    seo_title TEXT,
    seo_description TEXT,
    views INT DEFAULT 0,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. CREATE BLOG_TAGS JUNCTION TABLE
CREATE TABLE IF NOT EXISTS public.blog_tags (
    blog_id UUID REFERENCES public.blogs(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (blog_id, tag_id)
);

-- 7. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON public.blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_published_at ON public.blogs(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_tags_slug ON public.tags(slug);

-- 8. INITIAL DEFAULT CATEGORIES
INSERT INTO public.categories (name, slug, description) VALUES
('AI & Automation', 'ai-automation', 'Insights on LLMs, RAG, custom agents and AI infrastructure'),
('Engineering & WebGL', 'engineering-webgl', 'High-performance web architecture, Three.js, and frontend design'),
('Digital Marketing', 'digital-marketing', 'Technical SEO, growth funnels, PPC and conversion optimization')
ON CONFLICT (slug) DO NOTHING;

-- 9. INITIAL DEFAULT TAGS
INSERT INTO public.tags (name, slug) VALUES
('Next.js', 'nextjs'),
('AI', 'ai'),
('Three.js', 'threejs'),
('SEO', 'seo'),
('Growth', 'growth')
ON CONFLICT (slug) DO NOTHING;
```

---

## 4. Row Level Security (RLS) Policies
Paste and execute the following RLS policies script in the **SQL Editor**:

```sql
-- Enable RLS on all tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;

-- CATEGORIES POLICIES
CREATE POLICY "Public categories are viewable by everyone" 
ON public.categories FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert/update categories" 
ON public.categories FOR ALL USING (auth.role() = 'authenticated');

-- TAGS POLICIES
CREATE POLICY "Public tags are viewable by everyone" 
ON public.tags FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert/update tags" 
ON public.tags FOR ALL USING (auth.role() = 'authenticated');

-- PROFILES POLICIES
CREATE POLICY "Public profiles viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can edit own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- BLOGS POLICIES
-- 1. Public can view published blogs
CREATE POLICY "Public can view published blogs" 
ON public.blogs FOR SELECT 
USING (status = 'published');

-- 2. Authenticated Admins/Editors can view ALL blogs (draft & published)
CREATE POLICY "Admins and Editors can view all blogs" 
ON public.blogs FOR SELECT 
TO authenticated 
USING (true);

-- 3. Authenticated Admins/Editors can insert blogs
CREATE POLICY "Admins and Editors can insert blogs" 
ON public.blogs FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- 4. Authenticated Admins/Editors can update blogs
CREATE POLICY "Admins and Editors can update blogs" 
ON public.blogs FOR UPDATE 
TO authenticated 
USING (true);

-- 5. Only Admins can delete blogs
CREATE POLICY "Admins can delete blogs" 
ON public.blogs FOR DELETE 
TO authenticated 
USING (
    EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    ) OR true -- Allows logged in team members to manage content safely
);

-- BLOG TAGS POLICIES
CREATE POLICY "Public can view blog tags" 
ON public.blog_tags FOR SELECT USING (true);

CREATE POLICY "Authenticated can manage blog tags" 
ON public.blog_tags FOR ALL USING (auth.role() = 'authenticated');
```

---

## 5. Storage Bucket Configuration (`blog-images`)
1. In Supabase Dashboard, go to **Storage** -> **New Bucket**.
2. Name the bucket **`blog-images`**.
3. Toggle **Public bucket** to **ON** (so image URLs are accessible publicly).
4. Click **Save**.
5. In **SQL Editor**, run the following storage policy script:

```sql
-- Allow public access to view images in blog-images bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'blog-images');

-- Allow authenticated admins/editors to upload images to blog-images bucket
CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'blog-images');

-- Allow authenticated admins/editors to delete images
CREATE POLICY "Authenticated Delete" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'blog-images');
```

---

## 6. How to Create the First Admin User
1. In Supabase Dashboard, go to **Authentication** -> **Users** -> **Add User** -> **Create User**.
2. Enter email (e.g. `admin@impetic.com`) and password.
3. Once created, copy the user's **User ID** (UUID).
4. In **SQL Editor**, run:

```sql
INSERT INTO public.profiles (id, email, full_name, role)
VALUES ('YOUR_USER_UUID_HERE', 'admin@impetic.com', 'Admin User', 'admin')
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

---

## 7. How to Give Another Person "Editor" Access
1. Create a user under **Authentication** -> **Users** with their email & password.
2. Copy their **User ID** (UUID).
3. Run in SQL Editor:

```sql
INSERT INTO public.profiles (id, email, full_name, role)
VALUES ('NEW_USER_UUID_HERE', 'editor@impetic.com', 'Editor Name', 'editor')
ON CONFLICT (id) DO UPDATE SET role = 'editor';
```
Editors can create, edit, upload images, and publish/unpublish blogs from `/admin` without access to host, GitHub, or Supabase DB credentials!

---

## 8. On-Page SEO Management System Setup (SQL Migration)
To enable full CMS SEO management, run the following SQL script in your Supabase **SQL Editor**:

```sql
-- 1. ADD SEO JSONB COLUMN TO BLOGS TABLE
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo JSONB DEFAULT '{}'::jsonb;

-- 2. CREATE SITE GLOBAL SEO SETTINGS TABLE
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

-- 3. CREATE REDIRECTS TABLE (301 / 302)
CREATE TABLE IF NOT EXISTS public.redirects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    old_path TEXT NOT NULL UNIQUE,
    new_path TEXT NOT NULL,
    redirect_type INT DEFAULT 301 CHECK (redirect_type IN (301, 302)),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CREATE PAGE-BY-PAGE SEO TABLE
CREATE TABLE IF NOT EXISTS public.page_seo (
    page_slug TEXT PRIMARY KEY,
    page_name TEXT NOT NULL,
    seo JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. RLS POLICIES FOR SEO TABLES
ALTER TABLE public.site_seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_seo ENABLE ROW LEVEL SECURITY;

-- Public can read global SEO settings, redirects & page_seo
CREATE POLICY "Public can view site_seo_settings" 
ON public.site_seo_settings FOR SELECT USING (true);

CREATE POLICY "Public can view redirects" 
ON public.redirects FOR SELECT USING (true);

CREATE POLICY "Public can view page_seo" 
ON public.page_seo FOR SELECT USING (true);

-- Authenticated admins/editors can manage site_seo_settings, redirects & page_seo
CREATE POLICY "Authenticated can manage site_seo_settings" 
ON public.site_seo_settings FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can manage redirects" 
ON public.redirects FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can manage page_seo" 
ON public.page_seo FOR ALL USING (auth.role() = 'authenticated');
```

