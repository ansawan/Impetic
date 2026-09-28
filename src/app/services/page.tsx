'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceListItem } from '@/components/cards/ServiceListItem'
import { ContentPanel } from '@/components/ui/ContentPanel'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})

const CircuitTubeScene = dynamic(() => import('@/components/3d/scenes/CircuitTubeScene').then((m) => m.CircuitTubeScene), {
  ssr: false,
})
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), {
  ssr: false,
})
const DataRibbonScene = dynamic(() => import('@/components/3d/scenes/DataRibbonScene').then((m) => m.DataRibbonScene), {
  ssr: false,
})
const GlassClusterScene = dynamic(() => import('@/components/3d/scenes/GlassClusterScene').then((m) => m.GlassClusterScene), {
  ssr: false,
})

const SERVICES_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.25, pos: [3.0, 1.0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 0.50, pos: [-3.0, 0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 0.75, pos: [2.0, -1.0, 5.0] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.0] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
]

export default function ServicesPage() {
  const stageAIAutomation = [
    { title: 'LLM & Chatbot Integration', description: 'Production-grade conversational interfaces wired into your real data and business workflows.', href: '/services/llm-chatbot-integration' },
    { title: 'Retrieval-Augmented Generation (RAG)', description: 'Grounding model outputs in your own documents, vector indices, and knowledge bases.', href: '/services/rag-retrieval-augmented-generation' },
    { title: 'Agentic AI / Custom AI Agents', description: 'Multi-step autonomous AI agents that execute real actions, tool calls, and automated decisions.', href: '/services/custom-ai-agents' },
    { title: 'Workflow & Business Process Automation', description: 'Replacing manual, repetitive operations with reliable automated pipelines and SLA guarantees.', href: '/services/workflow-process-automation' },
    { title: 'Predictive Analytics & ML Models', description: 'Custom forecasting, scoring, and classification models trained on your proprietary data.', href: '/services/predictive-analytics-ml' },
    { title: 'AI-Powered Search & Recommendations', description: 'Semantic vector search and personalization engines that understand user intent.', href: '/services/ai-search-recommendations' },
    { title: 'Model Fine-Tuning & Evaluation', description: 'Tailoring open-weight and proprietary models against real-world edge cases and evaluation benchmarks.', href: '/services/model-fine-tuning-evaluation' },
    { title: 'MLOps & Model Deployment', description: 'Model versioning, latency monitoring, cost tracking, and automated CI/CD model rollouts.', href: '/services/mlops-model-deployment' },
  ]

  const stageSoftwareDev = [
    { title: 'Website Development Company', description: 'CMS, Shopify, WooCommerce, and B2B websites built to convert across desktop and mobile devices.', href: '/services/web-development' },
    { title: 'Custom Web Design & Development', description: 'Custom website development, custom ecommerce, Magento builds, and bespoke digital experiences.', href: '/services/custom-web-design' },
    { title: 'Custom Web Applications', description: 'High-performance React/Next.js platforms built for real-time responsiveness and scale.', href: '/services/custom-web-applications' },
    { title: 'SaaS Application Development', description: 'End-to-end multi-tenant SaaS architecture, billing integration, and tenant isolation.', href: '/services/saas-application-development' },
    { title: 'Mobile App Development', description: 'Cross-platform iOS and Android applications with native-level performance and fluid UX.', href: '/services/mobile-app-development' },
    { title: 'Product Engineering & Architecture', description: 'Strategic technical architecture, domain-driven design, and scalable system blueprints.', href: '/services/product-engineering-architecture' },
    { title: 'API Development & Integration', description: 'Type-safe GraphQL and REST APIs, gRPC microservices, and third-party webhook systems.', href: '/services/api-development-integration' },
    { title: 'Legacy System Modernization', description: 'Refactoring monolithic systems into modern cloud-native architectures with zero downtime.', href: '/services/legacy-system-modernization' },
  ]

  const stageVirtualAssistants = [
    { title: 'AI Virtual Assistant Services', description: 'Combining experienced human virtual assistants with AI technology to save time and boost productivity.', href: '/services/ai-virtual-assistant-services' },
    { title: 'GoHighLevel Experts', description: 'Professional GoHighLevel expert services to manage, optimize, and maintain your CRM, workflows, and funnels.', href: '/gohighlevel-experts' },
    { title: 'AI Agent Management & Deployment', description: 'Deploy, manage, monitor, and optimize your autonomous AI agents with continuous oversight.', href: '/ai-agent-management' },
    { title: 'Lead Generation VA Services', description: 'Find new prospects, build verified contact lists, and schedule lead meetings to fill your sales pipeline.', href: '/lead-generation-services' },
    { title: 'CRM & Automation VA Services', description: 'Organize customer data, build follow-up workflows, clean databases, and optimize CRM operations.', href: '/crm-automation-services' },
    { title: 'Executive Assistants', description: 'Dedicated remote executive assistants for calendar, inbox, project management, and administrative support.', href: '/executive-assistants' },
    { title: 'Legal Virtual Assistant Services', description: 'Client intake, court calendar tracking, legal document formatting, and administrative support for law firms.', href: '/legal-virtual-assistant-services' },
  ]

  const stageDigitalMarketing = [
    { title: 'AI-Powered SEO & Technical SEO', description: 'Generative AI visibility, technical site architecture, Core Web Vitals, and local search dominance.', href: '/services/seo' },
    { title: 'Google Ads & PPC Management', description: 'Local Service Ads, B2B lead generation, white-label management, and international PPC campaigns.', href: '/services/google-ads' },
    { title: 'Pay-Per-Click (PPC) Advertising', description: 'PPC consulting, full multi-channel campaign management, and geo-targeted local PPC.', href: '/services/ppc' },
    { title: 'SEM (Search Engine Marketing)', description: 'Connected SEO, SEM, and PPC strategy operating under one unified roadmap.', href: '/services/sem' },
    { title: 'YouTube Ads Agency', description: 'High-impact video ad creative, precise audience targeting, and international/French campaigns.', href: '/services/youtube-ads' },
    { title: 'Bing Ads Agency', description: 'Bing Ads management, lower CPC pay-per-click, and Bing Shopping feed optimization.', href: '/services/bing-ads' },
    { title: 'Social Media Marketing Agency', description: 'Social media strategy built for small business, enterprise, local, and financial services.', href: '/services/social-media-marketing' },
    { title: 'TikTok Ads Agency', description: 'Native-feeling TikTok ad campaigns built for how people actually scroll, watch, and convert.', href: '/services/tiktok-ads' },
    { title: 'LinkedIn Advertising Agency', description: 'B2B LinkedIn advertising focused on decision-maker targeting, pipeline impact, and cost-per-lead optimization.', href: '/services/linkedin-advertising' },
    { title: 'Content Marketing & Copywriting', description: 'SEO content writing that speaks to human readers first, structured for high search visibility and lead conversions.', href: '/services/content-marketing-copywriting' },
    { title: 'Email Marketing Agency', description: 'Full-service B2B, SaaS, and white label email marketing campaigns built for high open rates and revenue.', href: '/services/email-marketing' },
    { title: 'Conversion Rate Optimization (CRO)', description: 'Data-driven A/B testing, landing page optimization, and conversion funnel analysis.', href: '/services/conversion-rate-optimization' },
    { title: 'Analytics, Tracking & Reporting', description: 'Clean GA4 measurement, server-side tracking, and multi-touch attribution dashboards.', href: '/services/analytics-tracking-reporting' },
    { title: 'Brand & Growth Strategy', description: 'Market positioning, go-to-market execution, and channel strategies tied to business goals.', href: '/services/brand-growth-strategy' },
  ]

  return (
    <>
      <ScrollScene keyframes={SERVICES_KEYFRAMES}>
        <CircuitTubeScene stage={0} />
        <NeuralGraphScene />
        <DataRibbonScene />
        <GlassClusterScene stage={3} />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow="full capability catalog"
            title="Services"
            description="A comprehensive breakdown of our AI intelligence, software engineering, virtual assistant operations, and digital growth capabilities."
          />

          {/* Category 01: AI & Automation */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Category 01"
                  title={
                    <>
                      AI &amp; <span className="flux-word">Automation</span>
                    </>
                  }
                  description="Agentic AI systems, RAG pipelines, and intelligent process automation."
                />
                <div className="flex flex-col gap-2 shrink-0 mb-2">
                  <Link
                    href="/services/ai-services"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline"
                  >
                    See the full AI &amp; Automation breakdown →
                  </Link>
                  <Link
                    href="/services/ai-virtual-assistant-services"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline"
                  >
                    See AI Virtual Assistant Services →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stageAIAutomation.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} href={item.href} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Category 02: Software Development */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                eyebrow="Category 02"
                title={
                  <>
                    Software <span className="flux-word">Development</span>
                  </>
                }
                description="Full-stack product engineering and custom web platform builds."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stageSoftwareDev.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} href={item.href} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Category 03: Virtual Assistant & Managed Services */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                eyebrow="Category 03"
                title={
                  <>
                    Virtual Assistant &amp; <span className="flux-word">Managed Services</span>
                  </>
                }
                description="Dedicated experts and specialized virtual assistant services to scale your operations."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stageVirtualAssistants.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} href={item.href} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Category 04: Digital Marketing */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeading
                  eyebrow="Category 04"
                  title={
                    <>
                      Digital <span className="flux-word">Marketing</span>
                    </>
                  }
                  description="Data-driven technical acquisition, SEO, PPC, and conversion rate optimization."
                />
                <Link
                  href="/services/digital-marketing"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#4DE8DC] hover:underline shrink-0 mb-2"
                >
                  See the full Digital Marketing breakdown →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
                {stageDigitalMarketing.map((item) => (
                  <ServiceListItem key={item.title} title={item.title} description={item.description} href={item.href} />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* Consultation CTA */}
          <section className="my-20">
            <ContentPanel className="max-w-4xl mx-auto text-center">
              <SectionHeading
                align="center"
                eyebrow="Consultation"
                title="Ready to engineer your next platform?"
                description="Schedule a technical roadmap session with our lead architects to discuss your project requirements."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
