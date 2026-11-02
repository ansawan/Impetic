import { supabase, isSupabaseConfigured } from '@/lib/supabase/client';
import { LIVE_REDIRECTS } from '@/lib/redirects';
import { SiteSeoSettings, RedirectRule, SeoData, SchemaType, PageSeoRecord } from '@/lib/supabase/types';

export const DEFAULT_SITE_SEO: SiteSeoSettings = {
  id: 'global-settings',
  default_title_template: '%page_title% | Impetic',
  default_meta_description: "Impetic is a digital marketing company delivering SEO, PPC, AI automation, virtual assistants and web development to grow your business. Get a free audit.",
  default_og_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  site_name: 'IMPETIC',
  twitter_handle: '@impetic',
  organization_schema_json: JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com/',
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
    name: "Home Page",
    defaultTitle: "Digital Marketing, AI & Web Development | Impetic",
    defaultDesc: "Impetic is a digital marketing company delivering SEO, PPC, AI automation, virtual assistants and web development to grow your business. Get a free audit.",
  },
  {
    slug: '/services/',
    name: "Services Overview Page",
    defaultTitle: "Digital Agency Services: Marketing, AI & Software | Impetic",
    defaultDesc: "Explore our digital agency services: digital marketing, AI automation, virtual assistants and software development, all under one roof. Request a quote.",
  },
  {
    slug: '/virtual-assistant/',
    name: "Virtual Assistant Hub Page",
    defaultTitle: "Virtual Assistant Services for Business | Impetic",
    defaultDesc: "Hire dedicated virtual assistant services for admin, email, CRM, lead generation and customer support. Save time and cut costs. Book a free consultation.",
  },
  {
    slug: '/about/',
    name: "About Page",
    defaultTitle: "About Impetic | AI, Marketing & Software Agency",
    defaultDesc: "About Impetic: a team that combines engineering, AI and marketing under one roof to build and grow digital products since 2022. Meet who we are.",
  },
  {
    slug: '/contact/',
    name: "Contact Page",
    defaultTitle: "Contact Impetic | Get a Free Quote or Audit",
    defaultDesc: "Contact Impetic to discuss your marketing, AI or software project. Share your goals and budget and get a reply within 24 business hours.",
  },
  {
    slug: '/blog/',
    name: "Blog Index Page",
    defaultTitle: "Impetic Blog | SEO, AI & Web Development Insights",
    defaultDesc: "The Impetic Blog shares practical insights on SEO, digital marketing, AI systems and web development to help your business grow online.",
  },
  {
    slug: '/services/ai-services/',
    name: "AI automation services Page",
    defaultTitle: "AI Automation Services for Business | Impetic",
    defaultDesc: "Custom AI automation services: LLM chatbots, RAG, AI agents and workflow automation built on your data. Book a free AI consultation with Impetic.",
  },
  {
    slug: '/services/digital-marketing/',
    name: "digital marketing services Page",
    defaultTitle: "Digital Marketing Services That Drive Growth | Impetic",
    defaultDesc: "Data-driven digital marketing services including SEO, PPC, social media, email and CRO. Get a free marketing and tracking audit from Impetic.",
  },
  {
    slug: '/services/ai-virtual-assistant-services/',
    name: "AI virtual assistant services Page",
    defaultTitle: "AI Virtual Assistant Services: Human + AI | Impetic",
    defaultDesc: "Our AI virtual assistant services pair experienced remote assistants with AI tools to save you time, cut costs and boost productivity. Get a free quote.",
  },
  {
    slug: '/services/gohighlevel-experts/',
    name: "GoHighLevel experts Page",
    defaultTitle: "GoHighLevel Experts for CRM & Funnel Management | Impetic",
    defaultDesc: "Hire GoHighLevel experts to build, manage and optimize your CRM, workflows and funnels. Dedicated support keeps your pipeline moving. Get a quote.",
  },
  {
    slug: '/services/ai-agent-management/',
    name: "AI agent management Page",
    defaultTitle: "AI Agent Management & Deployment Services | Impetic",
    defaultDesc: "AI agent management with human oversight: we deploy, monitor and optimize your autonomous AI agents and data workflows. Talk to Impetic today.",
  },
  {
    slug: '/services/lead-generation-services/',
    name: "lead generation services Page",
    defaultTitle: "Lead Generation Services | Verified Leads & Meetings",
    defaultDesc: "Lead generation services that find prospects, build verified contact lists and book qualified sales meetings. Fill your pipeline with Impetic.",
  },
  {
    slug: '/services/crm-automation-services/',
    name: "CRM automation services Page",
    defaultTitle: "CRM Automation Services & Virtual Assistants | Impetic",
    defaultDesc: "CRM automation services to organize customer data, build follow-up workflows and clean your database. Get dedicated assistant support. Request a quote.",
  },
  {
    slug: '/services/executive-assistants/',
    name: "remote executive assistants Page",
    defaultTitle: "Remote Executive Assistants for Busy Leaders | Impetic",
    defaultDesc: "Hire remote executive assistants to manage your calendar, inbox, projects and admin work. Free up your day to focus on growth. Get a free quote.",
  },
  {
    slug: '/services/client-onboarding-services/',
    name: "client onboarding services Page",
    defaultTitle: "Client Onboarding Services | Faster Setup, Happy Clients",
    defaultDesc: "Client onboarding services that streamline intake, document collection and account setup so new clients get started faster. Request a quote today.",
  },
  {
    slug: '/services/real-estate-virtual-assistant/',
    name: "real estate virtual assistant Page",
    defaultTitle: "Real Estate Virtual Assistant | Listings & Follow-Ups",
    defaultDesc: "Hire a real estate virtual assistant for MLS listings, transaction coordination, client follow-ups and property marketing. Get a free quote.",
  },
  {
    slug: '/services/home-service-virtual-assistant/',
    name: "home service virtual assistant Page",
    defaultTitle: "Home Service Virtual Assistant | Dispatch & Scheduling",
    defaultDesc: "A home service virtual assistant handles dispatching, estimate follow-ups, customer inquiries and scheduling so your crews stay busy. Get a quote.",
  },
  {
    slug: '/services/property-management-virtual-assistant/',
    name: "property management virtual assistant Page",
    defaultTitle: "Property Management Virtual Assistant | Impetic",
    defaultDesc: "Property management virtual assistant for tenant screening, maintenance request tracking, lease admin and rent collection support. Request a free quote.",
  },
  {
    slug: '/services/legal-virtual-assistant-services/',
    name: "legal virtual assistant Page",
    defaultTitle: "Legal Virtual Assistant Services for Law Firms | Impetic",
    defaultDesc: "Legal virtual assistant support for client intake, court calendar tracking, document formatting and admin tasks, so your firm can focus on clients.",
  },
  {
    slug: '/services/marketing-operations-services/',
    name: "marketing operations services Page",
    defaultTitle: "Marketing Operations Services | Campaign & Tracking Support",
    defaultDesc: "Marketing operations services covering campaign deployment, asset organization, tracking setup and marketing automation. Request a free quote.",
  },
  {
    slug: '/services/virtual-assistant-marketing-agencies/',
    name: "virtual assistant for marketing agencies Page",
    defaultTitle: "Virtual Assistant for Marketing Agencies | White-Label",
    defaultDesc: "A virtual assistant for marketing agencies: white-label support for client accounts, reporting and campaign execution. Scale without extra hires.",
  },
  {
    slug: '/services/llm-chatbot-integration/',
    name: "LLM chatbot integration Page",
    defaultTitle: "LLM Chatbot Integration for Business | Impetic",
    defaultDesc: "LLM chatbot integration that connects conversational AI to your real data and workflows. Production-grade, secure and scalable. Book a consultation.",
  },
  {
    slug: '/services/rag-retrieval-augmented-generation/',
    name: "retrieval-augmented generation Page",
    defaultTitle: "Retrieval-Augmented Generation (RAG) Services | Impetic",
    defaultDesc: "Retrieval-augmented generation grounds AI answers in your documents and knowledge base. Impetic builds RAG systems with vector search. Get a quote.",
  },
  {
    slug: '/services/custom-ai-agents/',
    name: "custom AI agents Page",
    defaultTitle: "Custom AI Agents That Take Action | Impetic",
    defaultDesc: "Custom AI agents that run multi-step tasks, call tools and make decisions for you. Built, tested and deployed by Impetic. Book a free AI consultation.",
  },
  {
    slug: '/services/workflow-process-automation/',
    name: "workflow automation Page",
    defaultTitle: "Workflow Automation Services for Business | Impetic",
    defaultDesc: "Workflow automation that replaces manual, repetitive tasks with reliable automated pipelines backed by SLAs. Request a free automation audit today.",
  },
  {
    slug: '/services/predictive-analytics-ml/',
    name: "predictive analytics Page",
    defaultTitle: "Predictive Analytics & Machine Learning Services | Impetic",
    defaultDesc: "Predictive analytics and ML models for forecasting, scoring and classification, trained on your own data. Turn data into decisions. Get a quote.",
  },
  {
    slug: '/services/ai-search-recommendations/',
    name: "AI-powered search Page",
    defaultTitle: "AI-Powered Search & Recommendation Engines | Impetic",
    defaultDesc: "AI-powered search and recommendation engines that use semantic vector search to match user intent and personalize results. Talk to Impetic.",
  },
  {
    slug: '/services/model-fine-tuning-evaluation/',
    name: "LLM fine-tuning Page",
    defaultTitle: "LLM Fine-Tuning & Model Evaluation Services | Impetic",
    defaultDesc: "LLM fine-tuning and evaluation against real-world edge cases and benchmarks, for open-weight and proprietary models. Get a free consultation.",
  },
  {
    slug: '/services/mlops-model-deployment/',
    name: "MLOps Page",
    defaultTitle: "MLOps & Model Deployment Services | Impetic",
    defaultDesc: "MLOps services for model versioning, monitoring, cost tracking and CI/CD rollouts, so your ML models run reliably in production. Get a quote.",
  },
  {
    slug: '/services/seo/',
    name: "AI SEO services Page",
    defaultTitle: "AI SEO Services & Technical SEO Agency | Impetic",
    defaultDesc: "AI SEO services that combine technical SEO, generative AI visibility and local search to get you found first. Start with a free SEO audit.",
  },
  {
    slug: '/services/google-ads/',
    name: "Google Ads management Page",
    defaultTitle: "Google Ads Management Services | Impetic",
    defaultDesc: "Google Ads management for local service ads, B2B lead generation and high-ROI campaigns, with clear reporting and white-label options. Get a free audit.",
  },
  {
    slug: '/services/ppc/',
    name: "PPC advertising Page",
    defaultTitle: "PPC Advertising Services | Multi-Channel Management",
    defaultDesc: "PPC advertising services with multi-channel strategy, local landing page optimization and high-converting ad management. Get a free PPC audit.",
  },
  {
    slug: '/services/sem/',
    name: "search engine marketing Page",
    defaultTitle: "Search Engine Marketing (SEM) Services | Impetic",
    defaultDesc: "Search engine marketing that unites SEO, SEM and PPC in one roadmap, so every channel works together to grow leads. Request a free SEM audit.",
  },
  {
    slug: '/services/youtube-ads/',
    name: "YouTube ads agency Page",
    defaultTitle: "YouTube Ads Agency for Video Ad Campaigns | Impetic",
    defaultDesc: "YouTube ads agency building high-impact video creative, skippable ad strategy and intent targeting that turns viewers into customers. Get a quote.",
  },
  {
    slug: '/services/bing-ads/',
    name: "Bing Ads agency Page",
    defaultTitle: "Bing Ads Agency | Lower CPC Microsoft Advertising",
    defaultDesc: "Bing Ads agency reaching high-value Microsoft search users with lower CPCs and optimized Bing Shopping campaigns. Request a free account audit.",
  },
  {
    slug: '/services/social-media-marketing/',
    name: "social media marketing agency Page",
    defaultTitle: "Social Media Marketing Agency for Brand Growth | Impetic",
    defaultDesc: "Social media marketing agency for local, B2B and enterprise brands. Organic growth, paid social and strategy that drives leads. Get a free quote.",
  },
  {
    slug: '/services/tiktok-ads/',
    name: "TikTok ads agency Page",
    defaultTitle: "TikTok Ads Agency | Native TikTok Ad Campaigns",
    defaultDesc: "TikTok ads agency creating native-feeling campaigns built for how people scroll, watch and buy. Reach new audiences and convert them. Get a quote.",
  },
  {
    slug: '/services/linkedin-advertising/',
    name: "LinkedIn advertising agency Page",
    defaultTitle: "LinkedIn Advertising Agency for B2B Lead Gen | Impetic",
    defaultDesc: "LinkedIn advertising agency focused on decision-maker targeting, pipeline impact and lower cost per lead. Grow your B2B pipeline. Get a free audit.",
  },
  {
    slug: '/services/content-marketing-copywriting/',
    name: "content marketing services Page",
    defaultTitle: "Content Marketing Services & SEO Copywriting | Impetic",
    defaultDesc: "Content marketing services with SEO copywriting that speaks to readers first and is built for search visibility and conversions. Get a free quote.",
  },
  {
    slug: '/services/email-marketing/',
    name: "email marketing agency Page",
    defaultTitle: "Email Marketing Agency for B2B & SaaS | Impetic",
    defaultDesc: "Email marketing agency for B2B, SaaS and white-label campaigns built for high open rates, retention and revenue. Request a free email audit.",
  },
  {
    slug: '/services/conversion-rate-optimization/',
    name: "conversion rate optimization Page",
    defaultTitle: "Conversion Rate Optimization (CRO) Services | Impetic",
    defaultDesc: "Conversion rate optimization with data-driven A/B testing, landing page improvements and funnel analysis that turn visitors into customers. Get an audit.",
  },
  {
    slug: '/services/analytics-tracking-reporting/',
    name: "GA4 tracking Page",
    defaultTitle: "GA4 Tracking, Analytics & Reporting Services | Impetic",
    defaultDesc: "GA4 tracking, server-side tracking and attribution dashboards that give you clean, accurate data to guide your marketing spend. Request a tracking audit.",
  },
  {
    slug: '/services/brand-growth-strategy/',
    name: "brand growth strategy Page",
    defaultTitle: "Brand Growth Strategy Services | Impetic",
    defaultDesc: "Brand growth strategy covering market positioning, go-to-market execution and channel plans tied directly to revenue goals. Book a free consultation.",
  },
  {
    slug: '/services/web-development/',
    name: "website development company Page",
    defaultTitle: "Website Development Company for Shopify & WordPress",
    defaultDesc: "Website development company building CMS, Shopify, WooCommerce and B2B sites that convert on desktop and mobile. Get a free project quote.",
  },
  {
    slug: '/services/custom-web-design/',
    name: "custom web design Page",
    defaultTitle: "Custom Web Design & Development Services | Impetic",
    defaultDesc: "Custom web design and development for bespoke sites, custom ecommerce and Magento builds with complex workflows. Request a free quote.",
  },
  {
    slug: '/services/custom-web-applications/',
    name: "custom web applications Page",
    defaultTitle: "Custom Web Applications Built with React & Next.js",
    defaultDesc: "Custom web applications built on React and Next.js for real-time responsiveness and scale. Impetic engineers fast, reliable platforms. Get a quote.",
  },
  {
    slug: '/services/saas-application-development/',
    name: "SaaS application development Page",
    defaultTitle: "SaaS Application Development Company | Impetic",
    defaultDesc: "SaaS application development covering multi-tenant architecture, Stripe billing and tenant isolation, built to scale. Talk to Impetic today.",
  },
  {
    slug: '/services/mobile-app-development/',
    name: "mobile app development Page",
    defaultTitle: "Mobile App Development for iOS & Android | Impetic",
    defaultDesc: "Mobile app development for iOS and Android with native-level performance and fluid UX from one cross-platform codebase. Get a free quote.",
  },
  {
    slug: '/services/product-engineering-architecture/',
    name: "product engineering Page",
    defaultTitle: "Product Engineering & Software Architecture | Impetic",
    defaultDesc: "Product engineering with strategic architecture, domain-driven design and scalable system blueprints that keep your product fast. Book a consultation.",
  },
  {
    slug: '/services/api-development-integration/',
    name: "API development Page",
    defaultTitle: "API Development & Integration Services | Impetic",
    defaultDesc: "API development and integration with type-safe GraphQL and REST APIs, gRPC microservices and webhook systems. Get a free technical consultation.",
  },
  {
    slug: '/services/legacy-system-modernization/',
    name: "legacy system modernization Page",
    defaultTitle: "Legacy System Modernization Services | Impetic",
    defaultDesc: "Legacy system modernization that refactors monoliths into cloud-native architecture with zero downtime. Reduce risk and cost. Get a free roadmap.",
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

// Redirects actually live on the server (.htaccess); shown read-only in the admin.
let MOCK_REDIRECTS: RedirectRule[] = LIVE_REDIRECTS.map((r, i) => ({
  id: `htaccess-${i}`,
  old_path: r.from,
  new_path: r.to,
  redirect_type: 301,
  created_at: '2026-09-30T00:00:00.000Z',
}));

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
      const { data, error } = await supabase.from('page_seo').upsert(record).select().single();
      if (error) throw new Error(`Could not save page SEO: ${error.message}`);
      return data as PageSeoRecord;
    }
    return record;
  },

  // Redirects Management
  async getRedirects(): Promise<RedirectRule[]> {
    // Source of truth is the server's .htaccess (see src/lib/redirects.ts), not the database.
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
