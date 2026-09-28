import { MetadataRoute } from 'next';
import { blogService } from '@/lib/services/blogService';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com';

  // Base static canonical routes
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
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Fetch published blog posts for sitemap (excluding any marked noindex)
  try {
    const { blogs } = await blogService.getPublishedBlogs({ limit: 500 });
    const indexableBlogs = blogs.filter((blog) => !blog.seo?.noindex);

    const blogRoutes = indexableBlogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updated_at || blog.published_at || new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
  } catch (e) {
    return routes;
  }
}
