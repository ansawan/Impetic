// Every live /services/<slug>/ page, with a short blurb and hand-picked related services.
// Used for the "Related services" links at the bottom of each service page.

export interface ServiceEntry {
  name: string
  blurb: string
}

export const SERVICES: Record<string, ServiceEntry> = {
  // Category hubs
  'ai-services': { name: 'AI & Automation Services', blurb: 'Agents, RAG, chatbots, ML and automation built for production.' },
  'digital-marketing': { name: 'Digital Marketing Services', blurb: 'SEO, paid media, social, content and CRO under one strategy.' },

  // Virtual assistants
  'gohighlevel-experts': { name: 'GoHighLevel Experts', blurb: 'Setup, automations, funnels and account management in GoHighLevel.' },
  'ai-agent-management': { name: 'AI Agent Management', blurb: 'Deploy, monitor and optimize AI agents with human oversight.' },
  'lead-generation-services': { name: 'Lead Generation Services', blurb: 'Prospect research, verified lists and appointment setting.' },
  'crm-automation-services': { name: 'CRM & Automation Services', blurb: 'Clean CRM data, follow-up workflows and pipeline hygiene.' },
  'executive-assistants': { name: 'Executive Assistants', blurb: 'Calendar, inbox, travel and admin support for leaders.' },
  'legal-virtual-assistant-services': { name: 'Legal Virtual Assistants', blurb: 'Client intake, docketing and document support for law firms.' },
  'ai-virtual-assistant-services': { name: 'AI Virtual Assistant Services', blurb: 'Human assistants amplified with AI tools for faster output.' },
  'client-onboarding-services': { name: 'Client Onboarding Services', blurb: 'Intake, document collection and account setup for new clients.' },
  'real-estate-virtual-assistant': { name: 'Real Estate Virtual Assistant', blurb: 'MLS listings, transaction coordination and lead follow-up.' },
  'home-service-virtual-assistant': { name: 'Home Service Virtual Assistant', blurb: 'Calls, scheduling, dispatch and estimate follow-ups.' },
  'property-management-virtual-assistant': { name: 'Property Management Virtual Assistant', blurb: 'Tenant care, maintenance coordination and lease admin.' },
  'marketing-operations-services': { name: 'Marketing Operations Services', blurb: 'Campaign builds, tracking setup and reporting.' },
  'virtual-assistant-marketing-agencies': { name: 'Virtual Assistant for Marketing Agencies', blurb: 'White-label support for agency client accounts.' },

  // Digital marketing
  seo: { name: 'AI-Powered SEO Services', blurb: 'Technical SEO, content and local search to rank and convert.' },
  'google-ads': { name: 'Google Ads Management', blurb: 'Search, Performance Max and Local Service Ads that convert.' },
  ppc: { name: 'Pay-Per-Click Advertising', blurb: 'Profitable PPC campaigns across search and social networks.' },
  sem: { name: 'SEM Marketing Services', blurb: 'SEO and paid search run as one connected strategy.' },
  'youtube-ads': { name: 'YouTube Ads Agency', blurb: 'Video campaigns built to be watched, not skipped.' },
  'bing-ads': { name: 'Bing Ads Management', blurb: 'Reach the Microsoft Search audience Google Ads misses.' },
  'social-media-marketing': { name: 'Social Media Marketing', blurb: 'Strategy, content and community tied to business results.' },
  'tiktok-ads': { name: 'TikTok Ads Agency', blurb: 'Native-feeling TikTok campaigns and creative testing.' },
  'linkedin-advertising': { name: 'LinkedIn Advertising', blurb: 'B2B targeting by role, company and industry.' },
  'content-marketing-copywriting': { name: 'Content Marketing & Copywriting', blurb: 'SEO content and copy written for people first.' },
  'email-marketing': { name: 'Email Marketing', blurb: 'Campaigns and automated flows people actually open.' },
  'conversion-rate-optimization': { name: 'Conversion Rate Optimization', blurb: 'Testing and UX fixes that turn traffic into leads.' },
  'analytics-tracking-reporting': { name: 'Analytics, Tracking & Reporting', blurb: 'GA4, server-side tracking and attribution dashboards.' },
  'brand-growth-strategy': { name: 'Brand & Growth Strategy', blurb: 'Positioning, go-to-market and channel planning.' },

  // AI & automation
  'llm-chatbot-integration': { name: 'LLM & Chatbot Integration', blurb: 'Chatbots and assistants connected to your real data.' },
  'rag-retrieval-augmented-generation': { name: 'RAG Systems', blurb: 'AI answers grounded in your own documents and data.' },
  'custom-ai-agents': { name: 'Custom AI Agents', blurb: 'Autonomous agents that plan, call tools and take action.' },
  'workflow-process-automation': { name: 'Workflow & Process Automation', blurb: 'Automate repetitive operations across your tools.' },
  'predictive-analytics-ml': { name: 'Predictive Analytics & ML', blurb: 'Forecasting, scoring and classification models.' },
  'ai-search-recommendations': { name: 'AI Search & Recommendations', blurb: 'Semantic search and personalization engines.' },
  'model-fine-tuning-evaluation': { name: 'Model Fine-Tuning & Evaluation', blurb: 'Adapt and benchmark models on your domain data.' },
  'mlops-model-deployment': { name: 'MLOps & Model Deployment', blurb: 'Ship, monitor and scale models in production.' },

  // Software development
  'web-development': { name: 'Website Development', blurb: 'Fast CMS, Shopify and WooCommerce websites.' },
  'custom-web-design': { name: 'Custom Web Design', blurb: 'Custom-designed websites and ecommerce stores.' },
  'custom-web-applications': { name: 'Custom Web Applications', blurb: 'React and Next.js applications built to scale.' },
  'saas-application-development': { name: 'SaaS Application Development', blurb: 'Multi-tenant SaaS platforms with billing and auth.' },
  'mobile-app-development': { name: 'Mobile App Development', blurb: 'Cross-platform iOS and Android apps.' },
  'product-engineering-architecture': { name: 'Product Engineering & Architecture', blurb: 'Technical architecture and system design.' },
  'api-development-integration': { name: 'API Development & Integration', blurb: 'REST and GraphQL APIs and third-party integrations.' },
  'legacy-system-modernization': { name: 'Legacy System Modernization', blurb: 'Move legacy software to modern, cloud-native stacks.' },
}

export const RELATED: Record<string, string[]> = {
  'ai-services': ['custom-ai-agents', 'llm-chatbot-integration', 'rag-retrieval-augmented-generation', 'workflow-process-automation'],
  'digital-marketing': ['seo', 'google-ads', 'social-media-marketing', 'content-marketing-copywriting'],

  'gohighlevel-experts': ['crm-automation-services', 'marketing-operations-services', 'lead-generation-services', 'virtual-assistant-marketing-agencies'],
  'ai-agent-management': ['custom-ai-agents', 'ai-virtual-assistant-services', 'mlops-model-deployment', 'workflow-process-automation'],
  'lead-generation-services': ['crm-automation-services', 'linkedin-advertising', 'email-marketing', 'gohighlevel-experts'],
  'crm-automation-services': ['gohighlevel-experts', 'workflow-process-automation', 'lead-generation-services', 'client-onboarding-services'],
  'executive-assistants': ['ai-virtual-assistant-services', 'client-onboarding-services', 'crm-automation-services', 'legal-virtual-assistant-services'],
  'legal-virtual-assistant-services': ['client-onboarding-services', 'executive-assistants', 'ai-virtual-assistant-services', 'crm-automation-services'],
  'ai-virtual-assistant-services': ['executive-assistants', 'ai-agent-management', 'workflow-process-automation', 'llm-chatbot-integration'],
  'client-onboarding-services': ['crm-automation-services', 'executive-assistants', 'workflow-process-automation', 'legal-virtual-assistant-services'],
  'real-estate-virtual-assistant': ['property-management-virtual-assistant', 'lead-generation-services', 'crm-automation-services', 'social-media-marketing'],
  'home-service-virtual-assistant': ['crm-automation-services', 'lead-generation-services', 'google-ads', 'gohighlevel-experts'],
  'property-management-virtual-assistant': ['real-estate-virtual-assistant', 'client-onboarding-services', 'crm-automation-services', 'executive-assistants'],
  'marketing-operations-services': ['analytics-tracking-reporting', 'email-marketing', 'virtual-assistant-marketing-agencies', 'gohighlevel-experts'],
  'virtual-assistant-marketing-agencies': ['marketing-operations-services', 'gohighlevel-experts', 'social-media-marketing', 'content-marketing-copywriting'],

  seo: ['google-ads', 'ppc', 'content-marketing-copywriting', 'sem', 'conversion-rate-optimization'],
  'google-ads': ['ppc', 'sem', 'seo', 'conversion-rate-optimization', 'analytics-tracking-reporting'],
  ppc: ['google-ads', 'bing-ads', 'sem', 'conversion-rate-optimization'],
  sem: ['seo', 'google-ads', 'ppc', 'bing-ads'],
  'youtube-ads': ['google-ads', 'tiktok-ads', 'social-media-marketing', 'content-marketing-copywriting'],
  'bing-ads': ['google-ads', 'ppc', 'sem', 'linkedin-advertising'],
  'social-media-marketing': ['tiktok-ads', 'linkedin-advertising', 'content-marketing-copywriting', 'youtube-ads'],
  'tiktok-ads': ['social-media-marketing', 'youtube-ads', 'content-marketing-copywriting', 'conversion-rate-optimization'],
  'linkedin-advertising': ['social-media-marketing', 'lead-generation-services', 'content-marketing-copywriting', 'bing-ads'],
  'content-marketing-copywriting': ['seo', 'email-marketing', 'social-media-marketing', 'brand-growth-strategy'],
  'email-marketing': ['content-marketing-copywriting', 'marketing-operations-services', 'conversion-rate-optimization', 'crm-automation-services'],
  'conversion-rate-optimization': ['analytics-tracking-reporting', 'google-ads', 'seo', 'custom-web-design'],
  'analytics-tracking-reporting': ['conversion-rate-optimization', 'google-ads', 'marketing-operations-services', 'predictive-analytics-ml'],
  'brand-growth-strategy': ['content-marketing-copywriting', 'social-media-marketing', 'seo', 'custom-web-design'],

  'llm-chatbot-integration': ['rag-retrieval-augmented-generation', 'custom-ai-agents', 'ai-virtual-assistant-services', 'api-development-integration'],
  'rag-retrieval-augmented-generation': ['llm-chatbot-integration', 'ai-search-recommendations', 'model-fine-tuning-evaluation', 'custom-ai-agents'],
  'custom-ai-agents': ['ai-agent-management', 'workflow-process-automation', 'llm-chatbot-integration', 'rag-retrieval-augmented-generation'],
  'workflow-process-automation': ['custom-ai-agents', 'crm-automation-services', 'api-development-integration', 'ai-agent-management'],
  'predictive-analytics-ml': ['analytics-tracking-reporting', 'mlops-model-deployment', 'model-fine-tuning-evaluation', 'ai-search-recommendations'],
  'ai-search-recommendations': ['rag-retrieval-augmented-generation', 'predictive-analytics-ml', 'custom-web-applications', 'llm-chatbot-integration'],
  'model-fine-tuning-evaluation': ['mlops-model-deployment', 'rag-retrieval-augmented-generation', 'llm-chatbot-integration', 'predictive-analytics-ml'],
  'mlops-model-deployment': ['model-fine-tuning-evaluation', 'predictive-analytics-ml', 'ai-agent-management', 'product-engineering-architecture'],

  'web-development': ['custom-web-design', 'custom-web-applications', 'seo', 'conversion-rate-optimization'],
  'custom-web-design': ['web-development', 'conversion-rate-optimization', 'brand-growth-strategy', 'custom-web-applications'],
  'custom-web-applications': ['saas-application-development', 'api-development-integration', 'product-engineering-architecture', 'web-development'],
  'saas-application-development': ['custom-web-applications', 'product-engineering-architecture', 'api-development-integration', 'mobile-app-development'],
  'mobile-app-development': ['saas-application-development', 'api-development-integration', 'custom-web-applications', 'product-engineering-architecture'],
  'product-engineering-architecture': ['saas-application-development', 'legacy-system-modernization', 'api-development-integration', 'mlops-model-deployment'],
  'api-development-integration': ['custom-web-applications', 'workflow-process-automation', 'legacy-system-modernization', 'saas-application-development'],
  'legacy-system-modernization': ['product-engineering-architecture', 'api-development-integration', 'custom-web-applications', 'saas-application-development'],
}
