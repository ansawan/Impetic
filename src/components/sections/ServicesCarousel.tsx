'use client'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface ServiceItem {
  name: string
  href: string
  category: 'VA' | 'AI' | 'Marketing' | 'Dev'
}

const ALL_SERVICES: ServiceItem[] = [
  // Virtual Assistant Services
  { name: 'Virtual Assistant Hub', href: '/virtual-assistant', category: 'VA' },
  { name: 'AI Virtual Assistant Services', href: '/services/ai-virtual-assistant-services', category: 'VA' },
  { name: 'Executive Assistants', href: '/services/executive-assistants', category: 'VA' },
  { name: 'Lead Generation Services', href: '/services/lead-generation-services', category: 'VA' },
  { name: 'CRM & Automation Services', href: '/services/crm-automation-services', category: 'VA' },
  { name: 'Legal Virtual Assistants', href: '/services/legal-virtual-assistant-services', category: 'VA' },
  { name: 'GoHighLevel Experts', href: '/services/gohighlevel-experts', category: 'VA' },
  { name: 'Client Onboarding Services', href: '/services/client-onboarding-services', category: 'VA' },
  { name: 'Real Estate Virtual Assistant', href: '/services/real-estate-virtual-assistant', category: 'VA' },
  { name: 'Home Service Virtual Assistant', href: '/services/home-service-virtual-assistant', category: 'VA' },
  { name: 'Property Management Virtual Assistant', href: '/services/property-management-virtual-assistant', category: 'VA' },
  { name: 'Marketing Operations Services', href: '/services/marketing-operations-services', category: 'VA' },
  { name: 'Virtual Assistant for Marketing Agencies', href: '/services/virtual-assistant-marketing-agencies', category: 'VA' },

  // AI & Automation
  { name: 'AI Agent Management', href: '/services/ai-agent-management', category: 'AI' },
  { name: 'LLM & Chatbot Integration', href: '/services/llm-chatbot-integration', category: 'AI' },
  { name: 'RAG Vector Search', href: '/services/rag-retrieval-augmented-generation', category: 'AI' },
  { name: 'Custom AI Agents', href: '/services/custom-ai-agents', category: 'AI' },
  { name: 'Workflow Process Automation', href: '/services/workflow-process-automation', category: 'AI' },
  { name: 'Predictive Analytics & ML', href: '/services/predictive-analytics-ml', category: 'AI' },
  { name: 'AI Search & Recommendations', href: '/services/ai-search-recommendations', category: 'AI' },
  { name: 'Model Fine-Tuning & Eval', href: '/services/model-fine-tuning-evaluation', category: 'AI' },
  { name: 'MLOps & Model Deployment', href: '/services/mlops-model-deployment', category: 'AI' },

  // Digital Marketing
  { name: 'AI-Powered SEO Services', href: '/services/seo', category: 'Marketing' },
  { name: 'Google Ads & PPC Management', href: '/services/google-ads', category: 'Marketing' },
  { name: 'Pay-Per-Click (PPC) Advertising', href: '/services/ppc', category: 'Marketing' },
  { name: 'SEM (Search Engine Marketing)', href: '/services/sem', category: 'Marketing' },
  { name: 'YouTube Ads Agency', href: '/services/youtube-ads', category: 'Marketing' },
  { name: 'Bing Ads Agency', href: '/services/bing-ads', category: 'Marketing' },
  { name: 'Social Media Marketing Agency', href: '/services/social-media-marketing', category: 'Marketing' },
  { name: 'TikTok Ads Agency', href: '/services/tiktok-ads', category: 'Marketing' },
  { name: 'LinkedIn Advertising Agency', href: '/services/linkedin-advertising', category: 'Marketing' },
  { name: 'Content Marketing & Copywriting', href: '/services/content-marketing-copywriting', category: 'Marketing' },
  { name: 'Email Marketing Agency', href: '/services/email-marketing', category: 'Marketing' },
  { name: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization', category: 'Marketing' },
  { name: 'Analytics & Tracking', href: '/services/analytics-tracking-reporting', category: 'Marketing' },
  { name: 'Brand & Growth Strategy', href: '/services/brand-growth-strategy', category: 'Marketing' },

  // Software Development
  { name: 'Website Development Company', href: '/services/web-development', category: 'Dev' },
  { name: 'Custom Web Design Services', href: '/services/custom-web-design', category: 'Dev' },
  { name: 'Custom Web Applications', href: '/services/custom-web-applications', category: 'Dev' },
  { name: 'SaaS Application Development', href: '/services/saas-application-development', category: 'Dev' },
  { name: 'Mobile App Development', href: '/services/mobile-app-development', category: 'Dev' },
  { name: 'Product Engineering & Architecture', href: '/services/product-engineering-architecture', category: 'Dev' },
  { name: 'API Development & Integration', href: '/services/api-development-integration', category: 'Dev' },
  { name: 'Legacy System Modernization', href: '/services/legacy-system-modernization', category: 'Dev' },
]

export function ServicesCarousel() {
  const loop = [...ALL_SERVICES, ...ALL_SERVICES]

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/8 bg-black/40 backdrop-blur-md select-none w-full">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex gap-3.5 w-max animate-carousel-slow hover:[animation-play-state:paused] items-center">
        {loop.map((service, i) => (
          <Link
            key={i}
            href={service.href}
            className="whitespace-nowrap rounded-full border border-[#4DE8DC]/20 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-mono text-[#EAF6F5] hover:text-[#4DE8DC] hover:border-[#4DE8DC]/70 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(77,232,220,0.35)] transition-all duration-300 inline-flex items-center gap-2 group shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4DE8DC]/60 group-hover:text-[#4DE8DC] transition-colors" />
            <span>{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel
