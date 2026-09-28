'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface CardItem {
  title: string
  description: string
  href: string
}

interface ServiceCategoryRow {
  categoryTitle: string
  viewAllHref: string
  viewAllLabel: string
  reverse?: boolean
  cards: CardItem[]
}

const CATEGORY_ROWS: ServiceCategoryRow[] = [
  {
    categoryTitle: 'Virtual Assistant Services',
    viewAllHref: '/virtual-assistant',
    viewAllLabel: 'View All Virtual Assistants',
    reverse: false,
    cards: [
      {
        title: 'AI Virtual Assistant Services',
        description: 'Combining experienced human virtual assistants with AI technology to save time and boost productivity.',
        href: '/services/ai-virtual-assistant-services',
      },
      {
        title: 'GoHighLevel Experts',
        description: 'Professional GoHighLevel expert services to manage, optimize, and maintain your CRM and funnels.',
        href: '/services/gohighlevel-experts',
      },
      {
        title: 'AI Agent Management & Deployment',
        description: 'Deploy, manage, monitor, and optimize your autonomous AI agents with continuous human oversight.',
        href: '/services/ai-agent-management',
      },
      {
        title: 'AI Operators',
        description: 'Specialized human-in-the-loop AI operators to manage automated AI processes and data workflows.',
        href: '/services/ai-agent-management',
      },
      {
        title: 'Lead Generation VA Services',
        description: 'Find new prospects, build verified contact lists, and schedule qualified sales lead meetings.',
        href: '/services/lead-generation-services',
      },
      {
        title: 'CRM & Automation VA Services',
        description: 'Organize customer data, build follow-up workflows, clean databases, and optimize CRM operations.',
        href: '/services/crm-automation-services',
      },
      {
        title: 'Executive Assistants',
        description: 'Dedicated remote executive assistants for calendar, inbox, project management, and admin support.',
        href: '/services/executive-assistants',
      },
      {
        title: 'Client Onboarding VA Services',
        description: 'Streamline client intake, document collection, account setup, and onboarding workflows.',
        href: '/services/client-onboarding-services',
      },
      {
        title: 'Real Estate Virtual Assistant',
        description: 'MLS listing management, transaction coordination, client follow-ups, and property marketing.',
        href: '/services/real-estate-virtual-assistant',
      },
      {
        title: 'Home Service Virtual Assistant',
        description: 'Dispatching, estimate follow-ups, customer inquiries, and schedule management for home services.',
        href: '/services/home-service-virtual-assistant',
      },
      {
        title: 'Property Management Virtual Assistant',
        description: 'Tenant screening, maintenance request tracking, lease administration, and rent collection support.',
        href: '/services/property-management-virtual-assistant',
      },
      {
        title: 'Legal Virtual Assistant Services',
        description: 'Client intake, court calendar tracking, legal document formatting, and admin support for law firms.',
        href: '/services/legal-virtual-assistant-services',
      },
      {
        title: 'Marketing Operations VA Services',
        description: 'Campaign deployment, asset organization, tracking setup, and marketing automation support.',
        href: '/services/marketing-operations-services',
      },
      {
        title: 'Virtual Assistant for Marketing Agencies',
        description: 'Scalable white-label assistant support for client accounts, reporting, and campaign execution.',
        href: '/services/virtual-assistant-marketing-agencies',
      },
    ],
  },
  {
    categoryTitle: 'AI Services',
    viewAllHref: '/services/ai-services',
    viewAllLabel: 'View All AI Services',
    reverse: true,
    cards: [
      {
        title: 'LLM & Chatbot Integration',
        description: 'Production-grade conversational interfaces wired into your real data and enterprise workflows.',
        href: '/services/llm-chatbot-integration',
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Grounding model outputs in your own internal documents, vector indices, and knowledge bases.',
        href: '/services/rag-retrieval-augmented-generation',
      },
      {
        title: 'Custom AI Agents',
        description: 'Multi-step autonomous AI agents that execute real actions, tool calls, and automated decisions.',
        href: '/services/custom-ai-agents',
      },
      {
        title: 'Workflow & Process Automation',
        description: 'Replacing manual, repetitive operations with reliable automated pipelines and SLA guarantees.',
        href: '/services/workflow-process-automation',
      },
      {
        title: 'Predictive Analytics & ML',
        description: 'Custom forecasting, scoring, and classification models trained on your proprietary data.',
        href: '/services/predictive-analytics-ml',
      },
      {
        title: 'AI Search & Recommendations',
        description: 'Semantic vector search and personalization engines that understand exact user intent.',
        href: '/services/ai-search-recommendations',
      },
      {
        title: 'Model Fine-Tuning & Evaluation',
        description: 'Tailoring open-weight and proprietary models against real-world edge cases and evaluation benchmarks.',
        href: '/services/model-fine-tuning-evaluation',
      },
      {
        title: 'MLOps & Model Deployment',
        description: 'Model versioning, latency monitoring, cost tracking, and automated CI/CD model rollouts.',
        href: '/services/mlops-model-deployment',
      },
    ],
  },
  {
    categoryTitle: 'Digital Marketing',
    viewAllHref: '/services/digital-marketing',
    viewAllLabel: 'View All Digital Marketing',
    reverse: false,
    cards: [
      {
        title: 'SEO & Technical SEO',
        description: 'Site architecture, Core Web Vitals optimization, programmatic SEO, and generative search visibility.',
        href: '/services/seo',
      },
      {
        title: 'Google Ads & PPC Management',
        description: 'Local Service Ads, B2B lead gen, white-label management, and high-ROI Google PPC campaigns.',
        href: '/services/google-ads',
      },
      {
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Multi-channel PPC strategy, local landing page optimization, and high-conversion ad management.',
        href: '/services/ppc',
      },
      {
        title: 'SEM (Search Engine Marketing)',
        description: 'Unified SEO, SEM, and PPC strategy working together under one connected roadmap.',
        href: '/services/sem',
      },
      {
        title: 'YouTube Ads Agency',
        description: 'High-impact video ad creative, skippable attention-holding strategy, and intent targeting.',
        href: '/services/youtube-ads',
      },
      {
        title: 'Bing Ads Agency',
        description: 'Reach high-value Microsoft search users with lower CPCs and optimized Bing Shopping campaigns.',
        href: '/services/bing-ads',
      },
      {
        title: 'Social Media Marketing Agency',
        description: 'Social media growth, paid social ads, and strategy for local, B2B, and enterprise brands.',
        href: '/services/social-media-marketing',
      },
      {
        title: 'TikTok Ads Agency',
        description: 'Native-feeling TikTok ad campaigns built for how people actually scroll, watch, and convert.',
        href: '/services/tiktok-ads',
      },
      {
        title: 'LinkedIn Advertising Agency',
        description: 'B2B LinkedIn advertising focused on decision-maker targeting, pipeline impact, and cost-per-lead optimization.',
        href: '/services/linkedin-advertising',
      },
      {
        title: 'Content Marketing & Copywriting',
        description: 'SEO content writing that speaks to human readers first, structured for search visibility and conversions.',
        href: '/services/content-marketing-copywriting',
      },
      {
        title: 'Email Marketing Agency',
        description: 'Full-service B2B, SaaS, and white label email marketing campaigns built for high open rates and revenue.',
        href: '/services/email-marketing',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Data-driven A/B testing, landing page optimization, and conversion funnel analysis.',
        href: '/services/conversion-rate-optimization',
      },
      {
        title: 'Analytics, Tracking & Reporting',
        description: 'Clean GA4 measurement, server-side tracking, and multi-touch attribution dashboards.',
        href: '/services/analytics-tracking-reporting',
      },
      {
        title: 'Brand Growth Strategy',
        description: 'Market positioning, go-to-market execution, and channel strategies tied directly to business revenue.',
        href: '/services/brand-growth-strategy',
      },
    ],
  },
  {
    categoryTitle: 'Software Development',
    viewAllHref: '/services',
    viewAllLabel: 'View All Software Development',
    reverse: true,
    cards: [
      {
        title: 'Website Development Company',
        description: 'CMS, Shopify, WooCommerce, and B2B websites built to convert across desktop and mobile devices.',
        href: '/services/web-development',
      },
      {
        title: 'Custom Web Design & Development',
        description: 'Bespoke website design, custom ecommerce, and Magento development built for complex workflows.',
        href: '/services/custom-web-design',
      },
      {
        title: 'Custom Web Applications',
        description: 'High-performance React/Next.js platforms built for real-time responsiveness and scale.',
        href: '/services/custom-web-applications',
      },
      {
        title: 'SaaS Application Development',
        description: 'End-to-end multi-tenant SaaS architecture, Stripe billing integration, and tenant isolation.',
        href: '/services/saas-application-development',
      },
      {
        title: 'Mobile App Development',
        description: 'Cross-platform iOS and Android applications with native-level performance and fluid UX.',
        href: '/services/mobile-app-development',
      },
      {
        title: 'Product Engineering & Architecture',
        description: 'Strategic technical architecture, domain-driven design, and scalable system blueprints.',
        href: '/services/product-engineering-architecture',
      },
      {
        title: 'API Development & Integration',
        description: 'Type-safe GraphQL and REST APIs, gRPC microservices, and third-party webhook systems.',
        href: '/services/api-development-integration',
      },
      {
        title: 'Legacy System Modernization',
        description: 'Refactoring monolithic systems into modern cloud-native architectures with zero downtime.',
        href: '/services/legacy-system-modernization',
      },
    ],
  },
]

export function CategoryServicesCarousel() {
  return (
    <section id="explore-services" className="relative w-full py-24 sm:py-32 bg-black/60 backdrop-blur-md overflow-hidden select-none border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionHeading
          align="center"
          eyebrow="Comprehensive Catalog"
          title={
            <>
              Explore Our <span className="flux-word">Services</span>
            </>
          }
          description="Discover our full suite of Virtual Assistant, AI Automation, Digital Marketing, and Software Engineering capabilities."
        />
      </div>

      <div className="space-y-16 sm:space-y-20">
        {CATEGORY_ROWS.map((row, idx) => {
          // Quadruple cards array to ensure seamless infinite looping for smaller lists
          const loopedCards = [...row.cards, ...row.cards, ...row.cards, ...row.cards]
          const animClass = row.reverse ? 'animate-carousel-reverse-slow' : 'animate-carousel-slow'

          return (
            <div key={idx} className="w-full">
              {/* Row Header */}
              <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4DE8DC] shadow-[0_0_10px_rgba(77,232,220,0.9)]" />
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#EAF6F5] tracking-tight">
                    {row.categoryTitle}
                  </h3>
                </div>

                <Link
                  href={row.viewAllHref}
                  className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#4DE8DC] hover:text-[#4DE8DC]/80 hover:underline transition-all group"
                >
                  <span>{row.viewAllLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Infinite Sliding Cards Track */}
              <div className="relative overflow-hidden w-full py-4">
                {/* Edge fade masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className={`flex gap-6 w-max ${animClass} hover:[animation-play-state:paused] items-stretch`}>
                  {loopedCards.map((card, cIdx) => (
                    <Link
                      key={cIdx}
                      href={card.href}
                      className="w-[290px] sm:w-[330px] md:w-[360px] p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#4DE8DC]/60 hover:shadow-[0_0_30px_rgba(77,232,220,0.3)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shrink-0 group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <span className="text-xs font-mono font-bold text-[#4DE8DC] uppercase tracking-wider">
                            Service
                          </span>
                          <Sparkles className="w-4 h-4 text-[#4DE8DC]/60 group-hover:text-[#4DE8DC] transition-colors" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/80 mt-2.5 leading-relaxed line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#4DE8DC] group-hover:translate-x-1 transition-transform">
                          Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryServicesCarousel
