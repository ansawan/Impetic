import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { SiteSeoSettings, RedirectRule, SeoData, SchemaType, PageSeoRecord } from '@/lib/supabase/types';

export const DEFAULT_SITE_SEO: SiteSeoSettings = {
  id: 'global-settings',
  default_title_template: '%page_title% | Impetic — 3D WebGL & AI Software Studio',
  default_meta_description: 'Engineering high-performance WebGL web applications, intelligent AI systems, cloud infrastructure, and digital growth platforms.',
  default_og_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  site_name: 'IMPETIC',
  twitter_handle: '@impetic',
  organization_schema_json: JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
      logo: 'https://impetic.com/impetic.svg',
      sameAs: [
        'https://github.com/impetic',
        'https://linkedin.com/company/impetic',
        'https://twitter.com/impetic',
      ],
      description: 'Engineering high-performance WebGL applications and AI infrastructure.',
    },
    null,
    2
  ),
  google_site_verification: '',
  bing_site_verification: '',
  google_analytics_id: '',
  gtag_id: '',
  custom_disallow_rules: '',
};

export const STATIC_PAGES_LIST: { slug: string; name: string; defaultTitle: string; defaultDesc: string }[] = [
  {
    slug: '/',
    name: 'Home Page',
    defaultTitle: 'IMPETIC — 3D WebGL & AI Software Studio',
    defaultDesc: 'Engineering high-performance WebGL web applications, intelligent AI systems, cloud infrastructure, and digital growth platforms.',
  },
  {
    slug: '/about',
    name: 'About Page',
    defaultTitle: 'About Impetic — Our Ethos & Engineering Team',
    defaultDesc: 'Learn about Impetic, our high-performance software collective, WebGL visual discipline, and core engineering metrics.',
  },
  {
    slug: '/services',
    name: 'Services Overview Page',
    defaultTitle: 'Services — Full Capabilities Catalog | Impetic',
    defaultDesc: 'Explore our complete software development, AI & automation, digital marketing, and cloud infrastructure capabilities.',
  },
  {
    slug: '/virtual-assistant',
    name: 'Virtual Assistant Hub Page',
    defaultTitle: 'Virtual Assistant Services — Dedicated Business Operations | Impetic',
    defaultDesc: 'Stop doing everything yourself. Let our virtual assistants handle administration, customer service, CRM, and daily operations.',
  },
  {
    slug: '/services/gohighlevel-experts',
    name: 'GoHighLevel Experts Page',
    defaultTitle: 'GoHighLevel Experts — Setup, Automation & Funnel Services | Impetic',
    defaultDesc: 'Professional GoHighLevel expert services to manage, optimize, and maintain your GoHighLevel account.',
  },
  {
    slug: '/services/ai-agent-management',
    name: 'AI Agent Management Page',
    defaultTitle: 'AI Agent Management & Deployment Services | Impetic',
    defaultDesc: 'Deploy, manage, monitor, and optimize your autonomous AI agents with professional oversight.',
  },
  {
    slug: '/services/lead-generation-services',
    name: 'Lead Generation Services Page',
    defaultTitle: 'Lead Generation Virtual Assistant Services | Impetic',
    defaultDesc: 'Dedicated B2B lead generation virtual assistants for prospect research, list building, appointment setting, and cold outreach.',
  },
  {
    slug: '/services/crm-automation-services',
    name: 'CRM & Automation Services Page',
    defaultTitle: 'CRM and Automation Virtual Assistant Services | Impetic',
    defaultDesc: 'Dedicated CRM virtual assistant support to organize customer data, manage automations, clean up databases, and optimize pipelines.',
  },
  {
    slug: '/services/executive-assistants',
    name: 'Executive Assistants Page',
    defaultTitle: 'Executive Assistant Services — Strategic Delegation | Impetic',
    defaultDesc: 'Dedicated remote Executive Assistant services for founders, CEOs, and business leaders.',
  },
  {
    slug: '/services/legal-virtual-assistant-services',
    name: 'Legal Virtual Assistant Services Page',
    defaultTitle: 'Legal Virtual Assistant Services — Law Firm Support | Impetic',
    defaultDesc: 'Dedicated Legal Virtual Assistant Services for law firms, attorneys, and legal departments. Client intake, calendar management, and document formatting.',
  },
  {
    slug: '/services/ai-services',
    name: 'AI & Automation Services Page',
    defaultTitle: 'AI & Automation Services — LLMs, RAG & Agents | Impetic',
    defaultDesc: 'Production-grade artificial intelligence systems, RAG pipelines, fine-tuned LLMs, and autonomous agents designed to scale.',
  },
  {
    slug: '/services/ai-virtual-assistant-services',
    name: 'AI Virtual Assistant Services Page',
    defaultTitle: 'AI Virtual Assistant Services — Work Smarter, Not Harder | Impetic',
    defaultDesc: 'Professional AI Virtual Assistant Services combining experienced human virtual assistants with AI technology to save time and boost productivity.',
  },
  {
    slug: '/services/digital-marketing',
    name: 'Digital Marketing Services Page',
    defaultTitle: 'Digital Marketing Services — Technical SEO & Growth | Impetic',
    defaultDesc: 'Technical SEO, Core Web Vitals optimization, paid media PPC, and conversion rate optimization built on engineering discipline.',
  },
  // Digital Marketing Sub-Services
  { slug: '/services/seo', name: 'AI-Powered SEO Services Page', defaultTitle: 'AI-Powered SEO Services | Best AI SEO Agency 2026 — Impetic', defaultDesc: "Impetic combines generative AI, technical SEO, and local search expertise to get you found first. See why we're rated among the top AI-driven SEO agencies in the US." },
  { slug: '/services/seo-technical-seo', name: 'SEO & Technical SEO Page', defaultTitle: 'AI-Powered SEO Services | Best AI SEO Agency 2026 — Impetic', defaultDesc: "Impetic combines generative AI, technical SEO, and local search expertise to get you found first. See why we're rated among the top AI-driven SEO agencies in the US." },
  { slug: '/services/google-ads', name: 'Google Ads & PPC Management Page', defaultTitle: 'Google Ads Management Services | Top B2B & LSA PPC Agency — Impetic', defaultDesc: 'Impetic runs Google Ads and Local Service Ads that actually convert — not just click. B2B lead gen, white label, and international campaigns done right.' },
  { slug: '/services/ppc', name: 'Pay-Per-Click Advertising Page', defaultTitle: 'Pay-Per-Click Advertising Services | Top PPC Agency — Impetic', defaultDesc: "Impetic is a pay-per-click advertising company that treats your budget like it's ours. Local or national, we build PPC campaigns that actually convert." },
  { slug: '/services/sem', name: 'SEM Marketing Services Page', defaultTitle: 'SEM Marketing Services | SEO, SEM & PPC Under One Roof — Impetic', defaultDesc: 'Impetic runs SEO, SEM, and PPC as one connected strategy — not three separate invoices. See how full-funnel search marketing actually grows your business.' },
  { slug: '/services/youtube-ads', name: 'YouTube Ads Agency Page', defaultTitle: 'YouTube Ads Agency | High-Impact Video Ad Services — Impetic', defaultDesc: 'Impetic is a YouTube ads agency that builds video campaigns people actually watch — not skip. Strategy, production, and targeting done right.' },
  { slug: '/services/bing-ads', name: 'Bing Ads Agency Page', defaultTitle: 'Bing Ads Management & Agency Services | Impetic', defaultDesc: 'Impetic is a Bing Ads agency that helps you reach the audience Google Ads misses. Management, PPC, and Shopping campaigns built to convert.' },
  { slug: '/services/social-media-marketing', name: 'Social Media Marketing Agency Page', defaultTitle: 'Social Media Marketing Agency | Impetic', defaultDesc: 'Impetic is a social media marketing company that builds strategy around real business results, not just post count. Small business, enterprise, local, and financial services experience.' },
  { slug: '/services/social-media-management', name: 'Social Media Management Page', defaultTitle: 'Social Media Marketing Agency | Impetic', defaultDesc: 'Impetic is a social media marketing company that builds strategy around real business results, not just post count. Small business, enterprise, local, and financial services experience.' },
  { slug: '/services/tiktok-ads', name: 'TikTok Ads Agency Page', defaultTitle: 'TikTok Advertising Agency & Cost Guide | Impetic', defaultDesc: 'Impetic runs TikTok ad campaigns built for how people actually watch — not skip. Straight answers on TikTok advertising cost, and a strategy to match.' },
  { slug: '/services/linkedin-advertising', name: 'LinkedIn Advertising Agency Page', defaultTitle: 'LinkedIn Advertising Agency & Cost Guide | Impetic', defaultDesc: 'Impetic runs LinkedIn ad campaigns built for B2B results, not just impressions. Straight answers on LinkedIn advertising cost, CPC, and what actually works.' },
  { slug: '/services/content-marketing-copywriting', name: 'Content Marketing & Copywriting Page', defaultTitle: 'SEO Content Writing Services & Agency | Impetic', defaultDesc: 'Impetic is an SEO content writing company that writes for people first, search engines second — and still ranks. Content built to convert, not just fill a word count.' },
  { slug: '/services/content-marketing', name: 'Content Marketing Page', defaultTitle: 'SEO Content Writing Services & Agency | Impetic', defaultDesc: 'Impetic is an SEO content writing company that writes for people first, search engines second — and still ranks. Content built to convert, not just fill a word count.' },
  { slug: '/services/email-marketing', name: 'Email Marketing Agency Page', defaultTitle: 'Email Marketing Agency | Full-Service, B2B & White Label — Impetic', defaultDesc: 'Impetic is a full-service email marketing agency that builds campaigns people actually open. B2B, SaaS, white label, and targeted email done right.' },
  { slug: '/services/email-marketing-automation', name: 'Email Marketing & Automation Page', defaultTitle: 'Email Marketing Agency | Full-Service, B2B & White Label — Impetic', defaultDesc: 'Impetic is a full-service email marketing agency that builds campaigns people actually open. B2B, SaaS, white label, and targeted email done right.' },
  { slug: '/services/conversion-rate-optimization', name: 'Conversion Rate Optimization (CRO) Page', defaultTitle: 'Conversion Rate Optimization (CRO) Services | Impetic', defaultDesc: 'Data-driven A/B testing, landing page optimization, and conversion funnel engineering.' },
  { slug: '/services/analytics-tracking-reporting', name: 'Analytics & Tracking Page', defaultTitle: 'Analytics, Tracking & Multi-Touch Attribution | Impetic', defaultDesc: 'GA4 measurement, server-side tracking, and custom multi-touch attribution dashboards.' },
  { slug: '/services/brand-growth-strategy', name: 'Brand & Growth Strategy Page', defaultTitle: 'Brand & Go-To-Market Growth Strategy Services | Impetic', defaultDesc: 'Market positioning, go-to-market execution, and data-backed channel growth strategies.' },
  // AI & Automation Sub-Services
  { slug: '/services/llm-chatbot-integration', name: 'LLM & Chatbot Integration Page', defaultTitle: 'LLM & Custom Chatbot Integration Services | Impetic', defaultDesc: 'Production-grade conversational interfaces wired into real business data and automated workflows.' },
  { slug: '/services/rag-retrieval-augmented-generation', name: 'RAG Systems Page', defaultTitle: 'Retrieval-Augmented Generation (RAG) Systems | Impetic', defaultDesc: 'Grounding AI outputs in private enterprise documents, vector databases, and knowledge graphs.' },
  { slug: '/services/custom-ai-agents', name: 'Agentic AI / Custom AI Agents Page', defaultTitle: 'Agentic AI & Custom Autonomous AI Agents | Impetic', defaultDesc: 'Multi-step autonomous AI agents that execute real API actions, complex reasoning, and tool calls.' },
  { slug: '/services/workflow-process-automation', name: 'Workflow Automation Page', defaultTitle: 'Workflow & Business Process Automation Services | Impetic', defaultDesc: 'Automating complex manual business operations with enterprise reliability and SLA guarantees.' },
  { slug: '/services/predictive-analytics-ml', name: 'Predictive Analytics & ML Page', defaultTitle: 'Predictive Analytics & Custom ML Models | Impetic', defaultDesc: 'Custom forecasting, scoring, and classification models trained on proprietary business data.' },
  { slug: '/services/ai-search-recommendations', name: 'AI Search & Personalization Page', defaultTitle: 'AI-Powered Vector Search & Recommendation Engines | Impetic', defaultDesc: 'Semantic vector search and real-time personalization engines that understand user intent.' },
  { slug: '/services/model-fine-tuning-evaluation', name: 'Model Fine-Tuning & Evaluation Page', defaultTitle: 'LLM Fine-Tuning & Evaluation Benchmark Services | Impetic', defaultDesc: 'Tailoring open-weight and proprietary AI models against domain-specific datasets and benchmarks.' },
  { slug: '/services/mlops-model-deployment', name: 'MLOps & Model Deployment Page', defaultTitle: 'MLOps & Production Model Deployment Services | Impetic', defaultDesc: 'Model versioning, latency optimization, cost monitoring, and automated CI/CD model deployment.' },
  // Software Development Sub-Services
  { slug: '/services/web-development', name: 'Website Development Company Page', defaultTitle: 'Website Development Company | CMS, Shopify & WooCommerce — Impetic', defaultDesc: 'Impetic builds fast, responsive websites on the platform that actually fits your business — CMS, Shopify, or WooCommerce. Built to convert, not just look nice.' },
  { slug: '/services/custom-web-design', name: 'Custom Web Design & Development Page', defaultTitle: 'Custom Web Design & Development Services | Impetic', defaultDesc: 'Impetic builds custom websites and ecommerce stores — including Magento — designed around your business, not a recycled template. Affordable custom design done right.' },
  { slug: '/services/custom-web-applications', name: 'Custom Web Applications Page', defaultTitle: 'Custom Web Application Development | Impetic', defaultDesc: 'High-performance React and Next.js applications engineered for real-time responsiveness and scale.' },
  { slug: '/services/saas-application-development', name: 'SaaS Application Development Page', defaultTitle: 'SaaS Application Engineering & Multi-Tenant Architecture | Impetic', defaultDesc: 'End-to-end multi-tenant SaaS platforms, Stripe billing integration, and tenant isolation.' },
  { slug: '/services/mobile-app-development', name: 'Mobile App Development Page', defaultTitle: 'Mobile App Development Services — iOS & Android | Impetic', defaultDesc: 'Cross-platform iOS and Android apps with native performance and fluid WebGL/3D motion.' },
  { slug: '/services/product-engineering-architecture', name: 'Product Engineering & Architecture Page', defaultTitle: 'Product Engineering & Technical Architecture | Impetic', defaultDesc: 'Strategic technical architecture, domain-driven design, and cloud-native system blueprints.' },
  { slug: '/services/api-development-integration', name: 'API Development & Integration Page', defaultTitle: 'API Development & System Integration Services | Impetic', defaultDesc: 'Type-safe GraphQL, REST APIs, gRPC microservices, and third-party webhook integrations.' },
  { slug: '/services/legacy-system-modernization', name: 'Legacy System Modernization Page', defaultTitle: 'Legacy System Modernization & Cloud Refactoring | Impetic', defaultDesc: 'Refactoring legacy monolithic software into modern cloud-native architectures with zero downtime.' },
  { slug: '/services/client-onboarding-services', name: 'Client Onboarding Services Page', defaultTitle: 'Client Onboarding Virtual Assistant Services | Impetic', defaultDesc: 'Streamline client intake, document collection, account setup, and onboarding workflows.' },
  { slug: '/services/real-estate-virtual-assistant', name: 'Real Estate Virtual Assistant Page', defaultTitle: 'Real Estate Virtual Assistant Services | Impetic', defaultDesc: 'MLS listing management, transaction coordination, client follow-ups, and property marketing.' },
  { slug: '/services/home-service-virtual-assistant', name: 'Home Service Virtual Assistant Page', defaultTitle: 'Home Service Virtual Assistant Services | Impetic', defaultDesc: 'Dispatching, estimate follow-ups, customer inquiries, and schedule management for home services.' },
  { slug: '/services/property-management-virtual-assistant', name: 'Property Management Virtual Assistant Page', defaultTitle: 'Property Management Virtual Assistant Services | Impetic', defaultDesc: 'Tenant screening, maintenance request tracking, lease administration, and rent collection support.' },
  { slug: '/services/marketing-operations-services', name: 'Marketing Operations Services Page', defaultTitle: 'Marketing Operations Virtual Assistant Services | Impetic', defaultDesc: 'Campaign deployment, asset organization, tracking setup, and marketing automation support.' },
  { slug: '/services/virtual-assistant-marketing-agencies', name: 'Virtual Assistant for Marketing Agencies Page', defaultTitle: 'Virtual Assistant for Marketing Agencies | Impetic', defaultDesc: 'Scalable white-label assistant support for client accounts, reporting, and campaign execution.' },
  {
    slug: '/contact',
    name: 'Contact & Roadmap Session Page',
    defaultTitle: 'Contact Us — Start a Project Roadmap | Impetic',
    defaultDesc: 'Schedule a free technical roadmap consultation with our lead infrastructure and WebGL architects.',
  },
  {
    slug: '/blog',
    name: 'Blog Index Page',
    defaultTitle: 'Impetic Engineering & AI Insights Blog',
    defaultDesc: 'Technical deep-dives on Three.js WebGL performance, LLM agent architectures, and Next.js technical SEO.',
  },
];

let MOCK_SITE_SEO = { ...DEFAULT_SITE_SEO };

let MOCK_PAGE_SEO: Record<string, PageSeoRecord> = STATIC_PAGES_LIST.reduce((acc, p) => {
  acc[p.slug] = {
    page_slug: p.slug,
    page_name: p.name,
    seo: {
      seo_title: p.defaultTitle,
      meta_description: p.defaultDesc,
      slug: p.slug,
      schema_type: p.slug.startsWith('/services') ? 'Service' : 'WebPage',
    },
  };
  return acc;
}, {} as Record<string, PageSeoRecord>);

const serviceCanonicalRedirects: RedirectRule[] = [
  'gohighlevel-experts', 'ai-agent-management', 'lead-generation-services', 'crm-automation-services',
  'executive-assistants', 'legal-virtual-assistant-services', 'legal-virtual-assistant', 'ai-virtual-assistant-services',
  'seo', 'seo-technical-seo', 'google-ads', 'ppc', 'sem', 'youtube-ads', 'bing-ads', 'social-media-marketing', 'social-media-management', 'tiktok-ads', 'linkedin-advertising', 'paid-media-ppc', 'content-marketing-copywriting', 'content-marketing', 'email-marketing', 'email-marketing-automation', 'conversion-rate-optimization', 'analytics-tracking-reporting', 'brand-growth-strategy',
  'llm-chatbot-integration', 'rag-retrieval-augmented-generation', 'custom-ai-agents', 'workflow-process-automation',
  'predictive-analytics-ml', 'ai-search-recommendations', 'model-fine-tuning-evaluation', 'mlops-model-deployment',
  'web-development', 'custom-web-design', 'custom-web-applications', 'saas-application-development', 'mobile-app-development', 'product-engineering-architecture',
  'api-development-integration', 'legacy-system-modernization', 'client-onboarding-services', 'real-estate-virtual-assistant',
  'home-service-virtual-assistant', 'property-management-virtual-assistant', 'marketing-operations-services', 'virtual-assistant-marketing-agencies'
].map((slug, i) => ({
  id: `red-canon-${i}`,
  old_path: `/${slug}`,
  new_path: `/services/${slug === 'legal-virtual-assistant' ? 'legal-virtual-assistant-services' : slug}`,
  redirect_type: 301,
  created_at: new Date().toISOString(),
}));

let MOCK_REDIRECTS: RedirectRule[] = [
  ...serviceCanonicalRedirects,
  { id: 'red-1', old_path: '/old-ai-service', new_path: '/services/ai-services', redirect_type: 301, created_at: new Date().toISOString() },
];

export const seoService = {
  // Get Global SEO Settings
  async getSiteSeoSettings(): Promise<SiteSeoSettings> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('site_seo_settings')
          .select('*')
          .limit(1)
          .single();
        if (!error && data) return data;
      } catch (e) {
        console.warn('Supabase fetch site_seo_settings failed, using defaults', e);
      }
    }
    return MOCK_SITE_SEO;
  },

  // Update Global SEO Settings
  async updateSiteSeoSettings(settings: Partial<SiteSeoSettings>): Promise<SiteSeoSettings> {
    const updated = { ...MOCK_SITE_SEO, ...settings, updated_at: new Date().toISOString() };
    MOCK_SITE_SEO = updated;

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('site_seo_settings')
          .upsert({ id: 'global-settings', ...updated })
          .select()
          .single();
        if (!error && data) return data;
      } catch (e) {
        console.error('Failed updating site_seo_settings in Supabase', e);
      }
    }
    return updated;
  },

  // Page-by-Page SEO Management
  async getAllPagesSeo(): Promise<PageSeoRecord[]> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('page_seo').select('*');
        if (!error && data && data.length > 0) {
          const map = new Map(data.map((item) => [item.page_slug, item]));
          return STATIC_PAGES_LIST.map((p) => {
            if (map.has(p.slug)) return map.get(p.slug)!;
            return MOCK_PAGE_SEO[p.slug];
          });
        }
      } catch (e) {
        console.warn('Supabase fetch page_seo failed, using mock page_seo', e);
      }
    }
    return Object.values(MOCK_PAGE_SEO);
  },

  async getPageSeo(slug: string): Promise<PageSeoRecord> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('page_seo').select('*').eq('page_slug', slug).single();
        if (!error && data) return data as PageSeoRecord;
      } catch (e) {}
    }
    return MOCK_PAGE_SEO[slug] || {
      page_slug: slug,
      page_name: slug,
      seo: {},
    };
  },

  async updatePageSeo(slug: string, pageName: string, seoData: SeoData): Promise<PageSeoRecord> {
    const record: PageSeoRecord = {
      page_slug: slug,
      page_name: pageName,
      seo: seoData,
      updated_at: new Date().toISOString(),
    };
    MOCK_PAGE_SEO[slug] = record;

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('page_seo').upsert(record).select().single();
        if (!error && data) return data as PageSeoRecord;
      } catch (e) {
        console.error('Failed updating page_seo in Supabase', e);
      }
    }
    return record;
  },

  // Redirects Management
  async getRedirects(): Promise<RedirectRule[]> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('redirects').select('*').order('created_at', { ascending: false });
        if (!error && data) return data;
      } catch (e) {
        console.warn('Supabase fetch redirects failed, using mock redirects', e);
      }
    }
    return MOCK_REDIRECTS;
  },

  async addRedirect(redirect: Omit<RedirectRule, 'id' | 'created_at'>): Promise<RedirectRule> {
    const newRed: RedirectRule = {
      id: `red-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...redirect,
    };
    MOCK_REDIRECTS.unshift(newRed);

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('redirects').insert(redirect).select().single();
        if (!error && data) return data;
      } catch (e) {
        console.error('Failed adding redirect to Supabase', e);
      }
    }
    return newRed;
  },

  async deleteRedirect(id: string): Promise<boolean> {
    MOCK_REDIRECTS = MOCK_REDIRECTS.filter((r) => r.id !== id);
    if (isSupabaseConfigured()) {
      try {
        const { error } = await supabase.from('redirects').delete().eq('id', id);
        return !error;
      } catch (e) {
        console.error('Failed deleting redirect in Supabase', e);
      }
    }
    return true;
  },

  // Schema Generator Helpers
  generateStructuredData(type: SchemaType, recordData: any, siteSettings: SiteSeoSettings = DEFAULT_SITE_SEO) {
    if (recordData?.seo?.custom_schema_json) {
      try {
        return JSON.parse(recordData.seo.custom_schema_json);
      } catch (e) {
        console.warn('Failed parsing custom_schema_json, falling back to auto generator', e);
      }
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com';

    switch (type) {
      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: recordData?.seo?.seo_title || recordData?.title || 'Article',
          description: recordData?.seo?.meta_description || recordData?.excerpt || '',
          image: recordData?.seo?.og_image || recordData?.featured_image || siteSettings.default_og_image,
          datePublished: recordData?.published_at || recordData?.created_at || new Date().toISOString(),
          dateModified: recordData?.updated_at || recordData?.published_at || new Date().toISOString(),
          author: {
            '@type': 'Person',
            name: recordData?.author || siteSettings.site_name,
          },
          publisher: {
            '@type': 'Organization',
            name: siteSettings.site_name,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/impetic.svg`,
            },
          },
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: recordData?.title || 'Software Engineering & AI Services',
          provider: {
            '@type': 'Organization',
            name: siteSettings.site_name,
            url: baseUrl,
          },
          description: recordData?.seo?.meta_description || recordData?.description || siteSettings.default_meta_description,
          areaServed: 'Worldwide',
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: (recordData?.faqs || []).map((faq: { q: string; a: string }) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        };

      case 'Organization':
        try {
          if (siteSettings.organization_schema_json) {
            return JSON.parse(siteSettings.organization_schema_json);
          }
        } catch (e) {}
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteSettings.site_name,
          url: baseUrl,
          logo: `${baseUrl}/impetic.svg`,
        };

      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: recordData?.seo?.seo_title || recordData?.title || siteSettings.site_name,
          description: recordData?.seo?.meta_description || recordData?.excerpt || siteSettings.default_meta_description,
          url: `${baseUrl}/${recordData?.slug || ''}`,
        };
    }
  },

  // Metadata Format Helper
  formatTitle(rawTitle: string, template: string = DEFAULT_SITE_SEO.default_title_template): string {
    if (!rawTitle) return DEFAULT_SITE_SEO.site_name;
    if (template.includes('%page_title%')) {
      return template.replace('%page_title%', rawTitle);
    }
    return `${rawTitle} | ${DEFAULT_SITE_SEO.site_name}`;
  },
};
