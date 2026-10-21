import { execFileSync } from 'node:child_process';
import { MetadataRoute } from 'next';
import { blogService } from '@/lib/services/blogService';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

// Last time a page's own source (page.tsx / layout.tsx) changed, from git history.
// Falls back to the build time if git or the history is unavailable (e.g. a shallow clone).
function lastModified(route: string): string {
  const files = route === '' ? ['src/app/page.tsx'] : [`src/app${route}/page.tsx`, `src/app${route}/layout.tsx`];
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim();
    if (iso) return new Date(iso).toISOString();
  } catch {}
  return new Date().toISOString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static canonical routes (absoluteUrl adds the trailing slash the host serves with a 200)
  const routes = [
    '',
    '/about',
    '/services',
    '/virtual-assistant',
    '/contact',
    '/blog',
    // Virtual Assistant Sub-Services
    '/services/gohighlevel-experts',
    '/services/ai-agent-management',
    '/services/lead-generation-services',
    '/services/crm-automation-services',
    '/services/executive-assistants',
    '/services/legal-virtual-assistant-services',
    '/services/ai-virtual-assistant-services',
    '/services/client-onboarding-services',
    '/services/real-estate-virtual-assistant',
    '/services/home-service-virtual-assistant',
    '/services/property-management-virtual-assistant',
    '/services/marketing-operations-services',
    '/services/virtual-assistant-marketing-agencies',
    // Category Pages
    '/services/ai-services',
    '/services/digital-marketing',
    // Digital Marketing sub-services
    '/services/seo',
    '/services/google-ads',
    '/services/ppc',
    '/services/sem',
    '/services/youtube-ads',
    '/services/bing-ads',
    '/services/social-media-marketing',
    '/services/tiktok-ads',
    '/services/linkedin-advertising',
    '/services/content-marketing-copywriting',
    '/services/email-marketing',
    '/services/conversion-rate-optimization',
    '/services/analytics-tracking-reporting',
    '/services/brand-growth-strategy',
    // AI Automation sub-services
    '/services/llm-chatbot-integration',
    '/services/rag-retrieval-augmented-generation',
    '/services/custom-ai-agents',
    '/services/workflow-process-automation',
    '/services/predictive-analytics-ml',
    '/services/ai-search-recommendations',
    '/services/model-fine-tuning-evaluation',
    '/services/mlops-model-deployment',
    // Software Development sub-services
    '/services/web-development',
    '/services/custom-web-design',
    '/services/custom-web-applications',
    '/services/saas-application-development',
    '/services/mobile-app-development',
    '/services/product-engineering-architecture',
    '/services/api-development-integration',
    '/services/legacy-system-modernization',
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: lastModified(route),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Blog posts that are statically built (excluding any marked noindex)
  try {
    const blogs = await blogService.getStaticBlogs();
    const indexableBlogs = blogs.filter((blog) => !blog.seo?.noindex);

    const blogRoutes = indexableBlogs.map((blog) => ({
      url: absoluteUrl(`/blog/${blog.slug}`),
      lastModified: blog.updated_at || blog.published_at || new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
  } catch (e) {
    return routes;
  }
}
