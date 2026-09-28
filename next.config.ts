import type { NextConfig } from "next";

const serviceSlugs = [
  'gohighlevel-experts',
  'ai-agent-management',
  'lead-generation-services',
  'crm-automation-services',
  'executive-assistants',
  'legal-virtual-assistant-services',
  'legal-virtual-assistant',
  'ai-virtual-assistant-services',
  'seo-technical-seo',
  'paid-media-ppc',
  'social-media-management',
  'content-marketing',
  'email-marketing-automation',
  'conversion-rate-optimization',
  'analytics-tracking-reporting',
  'brand-growth-strategy',
  'llm-chatbot-integration',
  'rag-retrieval-augmented-generation',
  'custom-ai-agents',
  'workflow-process-automation',
  'predictive-analytics-ml',
  'ai-search-recommendations',
  'model-fine-tuning-evaluation',
  'mlops-model-deployment',
  'custom-web-applications',
  'saas-application-development',
  'mobile-app-development',
  'product-engineering-architecture',
  'api-development-integration',
  'legacy-system-modernization',
  'client-onboarding-services',
  'real-estate-virtual-assistant',
  'home-service-virtual-assistant',
  'property-management-virtual-assistant',
  'marketing-operations-services',
  'virtual-assistant-marketing-agencies',
];

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return serviceSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/services/${slug === 'legal-virtual-assistant' ? 'legal-virtual-assistant-services' : slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
