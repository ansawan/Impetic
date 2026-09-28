'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  Database,
  Workflow,
  Kanban,
  Filter,
  Calendar,
  MessageSquare,
  Send,
  FileText,
  Layers,
  Bot,
  UserCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Clock,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Target,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const NeuralGraphScene = dynamic(
  () => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene),
  { ssr: false }
)

const SCENE_KEYFRAMES = [
  { t: 0.0, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.7, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.0, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function GoHighLevelExpertsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Database, title: 'CRM setup and management' },
    { icon: Workflow, title: 'Workflow and automation setup' },
    { icon: Kanban, title: 'Pipeline management' },
    { icon: Filter, title: 'Sales funnel creation and optimization' },
    { icon: Calendar, title: 'Calendar and appointment management' },
    { icon: Send, title: 'Email and SMS automation' },
    { icon: MessageSquare, title: 'Campaign setup and management' },
    { icon: FileText, title: 'Landing page and form updates' },
    { icon: Layers, title: 'Snapshot setup and customization' },
    { icon: Bot, title: 'AI chatbot and conversation management' },
    { icon: UserCheck, title: 'Lead nurturing workflows' },
    { icon: Headphones, title: 'Ongoing GoHighLevel account support' },
  ]

  const featureBlocks = [
    {
      icon: Database,
      title: 'GoHighLevel CRM Management',
      description:
        'Your CRM is at the center of your customer journey. We organize contacts, manage pipelines, update opportunities, and make sure your CRM supports your sales process instead of slowing it down.',
      badge: 'CRM Excellence',
    },
    {
      icon: Workflow,
      title: 'GoHighLevel Automation Support',
      description:
        "As an experienced GoHighLevel automation expert, we build, manage, troubleshoot, and optimize automations that save your team time and reduce manual work. Whether you need a complete Go High Level automation setup service or ongoing support, we're here to help.",
      badge: 'Automation Mastery',
    },
    {
      icon: Filter,
      title: 'Sales Funnel Management',
      description:
        'Funnels need regular updates and optimization to perform their best. Our GoHighLevel sales funnel experts help create, improve, and maintain funnels that support lead generation and conversions.',
      badge: 'Funnel Optimization',
    },
    {
      icon: Layers,
      title: 'GoHighLevel Onboarding',
      description:
        'Getting started with GoHighLevel can feel overwhelming. Our Go High Level onboarding service helps you set up your account correctly from day one, ensuring your CRM, automations, and workflows are ready to support your business. We also provide a complete GHL onboarding service for businesses that need hands-on guidance throughout the setup process.',
      badge: 'Seamless Onboarding',
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description:
        'Workflows are the backbone of automation. Our team reviews, improves, and maintains your workflows to ensure your business continues operating efficiently. As part of our GHL automation setup service, we help identify bottlenecks, fix broken automations, and improve performance over time.',
      badge: 'Maximum Efficiency',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Save Time Every Week',
      description:
        'Stop spending hours fixing workflows, updating funnels, or managing your CRM. Focus on growing your business while we handle the platform.',
    },
    {
      icon: TrendingUp,
      title: 'Get More From GoHighLevel',
      description:
        'Many businesses only use a small portion of what GoHighLevel can do. We help you unlock more features and improve the way your system works.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Stress',
      description:
        'Knowing your automations, funnels, and CRM are being managed by experienced professionals gives you peace of mind.',
    },
    {
      icon: Target,
      title: 'Improve Lead Management',
      description:
        'A missed automation can mean a missed customer. We help make sure your leads move smoothly through every stage of your sales process.',
    },
    {
      icon: Users,
      title: 'Scale With Confidence',
      description:
        'As your business grows, your GoHighLevel account becomes more complex. Having ongoing expert support helps your systems grow with your business.',
    },
    {
      icon: Headphones,
      title: 'Access Experienced Support',
      description:
        'Our GHL services are designed to provide ongoing support, maintenance, and improvements so your business continues getting the best results from GoHighLevel.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: "We learn about your business, your goals, and how you're currently using GoHighLevel.",
    },
    {
      step: '02',
      title: 'System Review',
      description: 'Our team reviews your CRM, automations, funnels, workflows, and account setup.',
    },
    {
      step: '03',
      title: 'Identify Opportunities',
      description: 'We look for broken workflows, missed opportunities, and areas where your system can be improved.',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Your dedicated expert begins managing, maintaining, and improving your GoHighLevel account.',
    },
    {
      step: '05',
      title: 'Continuous Optimization',
      description:
        'Your business changes over time. We continue reviewing your account and making improvements so your GoHighLevel system keeps delivering results.',
    },
  ]

  const faqs = [
    {
      q: 'What does a GoHighLevel expert do?',
      a: 'A GoHighLevel expert helps businesses set up, manage, optimize, and maintain their GoHighLevel account. This includes CRM management, automations, funnels, workflows, campaigns, and ongoing support.',
    },
    {
      q: 'Why should I hire a GoHighLevel expert?',
      a: 'When you hire a GoHighLevel expert, you save time, avoid costly mistakes, and ensure your account is running efficiently so you can focus on growing your business.',
    },
    {
      q: 'Do you provide automation setup?',
      a: 'Yes. Our team provides complete Go High Level automation setup service and GHL automation setup service to help automate your sales, marketing, and customer communication.',
    },
    {
      q: 'Do you offer onboarding?',
      a: 'Absolutely. We provide both Go High Level onboarding service and GHL onboarding service to help businesses get started with the platform quickly and correctly.',
    },
    {
      q: 'Can you manage my existing GoHighLevel account?',
      a: 'Yes. Many clients already have GoHighLevel set up. We help improve, maintain, and optimize their existing systems.',
    },
    {
      q: 'Do you build sales funnels?',
      a: 'Yes. Our GoHighLevel sales funnel experts design, update, and optimize funnels that help generate leads and improve conversions.',
    },
    {
      q: 'What are GHL VA services?',
      a: 'Our GHL VA services provide ongoing virtual assistant support for GoHighLevel tasks such as CRM updates, workflow management, pipeline organization, appointment scheduling, and automation monitoring.',
    },
    {
      q: 'I\'m looking for the best GoHighLevel expert on hourly rate. Do you offer flexible pricing?',
      a: 'Yes. If you\'re looking for the best GoHighLevel expert on hourly rate, we offer flexible engagement options based on your business needs, whether you need one-time assistance or ongoing monthly support.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GoHighLevel Expert Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional GoHighLevel expert services to manage, optimize, and maintain your GoHighLevel CRM, workflows, sales funnels, and automations.',
    areaServed: 'Worldwide',
    serviceType: 'CRM & Marketing Automation Services',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ScrollScene keyframes={SCENE_KEYFRAMES}>
        <NeuralGraphScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          {/* 1) HERO SECTION */}
          <PageHero
            eyebrow="GOHIGHLEVEL EXPERT SERVICES"
            title={
              <>
                GoHighLevel <span className="flux-word">Experts</span>
              </>
            }
            description="Stop Managing GoHighLevel Yourself. Let Our Experts Handle It."
          />

          <div className="text-center -mt-6 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2) INTRO PARAGRAPHS */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  GoHighLevel is one of the most powerful platforms for managing leads, automating workflows, and growing your business. But setting everything up—and keeping it running smoothly—takes time, experience, and ongoing attention.
                </p>
                <p>
                  The reality is that many businesses invest in GoHighLevel with big expectations. A few weeks later, workflows stop working, automations break, pipelines become disorganized, and leads start slipping through the cracks.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That's where our GoHighLevel experts come in.
                </p>
                <p>
                  At VA Hub Pro, we provide professional GoHighLevel expert services to help businesses manage, optimize, and maintain their GoHighLevel accounts. Whether you need automation setup, CRM management, sales funnel support, onboarding, or ongoing assistance, our team makes sure your system works the way it's supposed to—so you can focus on growing your business.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR GOHIGHLEVEL EXPERTS CAN HELP WITH (12 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our GoHighLevel Experts <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Comprehensive GoHighLevel platform management, funnel builds, CRM configuration, and workflow automation."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
                {capabilities.map((cap, idx) => {
                  const IconComp = cap.icon
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#4DE8DC]/40 transition-all duration-300 group flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 flex items-center justify-center text-[#4DE8DC] shrink-0 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors pt-2">
                        {cap.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>

          {/* 4) MID CTA */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Get Expert Assistance"
                title="Ready to hire a GoHighLevel expert?"
                description="Talk to our team and discover how a dedicated GoHighLevel professional can save you hours every week while helping you get more from your platform."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ContentPanel>
          </section>

          {/* 5) PROBLEM SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Operational Challenges"
                title={
                  <>
                    GoHighLevel Is Powerful. <span className="flux-word">Managing It Is Another Story.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Most business owners don't struggle with using GoHighLevel. They struggle with keeping everything running properly. A workflow may stop without anyone noticing. A campaign may fail to send. Leads can get stuck in the pipeline. Calendars stop syncing. Automations don't work the way they should. Small issues like these can quickly turn into missed opportunities.
                </p>
                <p>
                  Many businesses end up in one of two situations. The first is trying to manage everything themselves. They spend hours troubleshooting workflows, updating pipelines, and fixing automations instead of growing their business. The second is hiring expensive specialists for tasks that don't require a full-time employee. Neither option is ideal.
                </p>
                <p>
                  What businesses really need is someone who understands GoHighLevel, keeps an eye on their system, and makes sure everything continues working properly. That's exactly what our GoHighLevel expert services are designed to do.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) DEDICATED EXPERT SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Dedicated Support"
                title={
                  <>
                    A Dedicated GoHighLevel Expert <span className="flux-word">for Your Business</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Think of a dedicated GoHighLevel expert as an extension of your team. Instead of spending your day fixing automations, updating funnels, or managing your CRM, you have an experienced professional handling those responsibilities for you.
                </p>
                <p>
                  Our team supports agencies, coaches, consultants, service businesses, and growing companies that rely on GoHighLevel every day. We help you get the most out of your investment by making sure your account stays organized, optimized, and running smoothly.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 7) FEATURE BLOCKS (5 sub-services) */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionHeading
                align="center"
                eyebrow="Core Services"
                title={
                  <>
                    Specialized <span className="flux-word">GoHighLevel Capabilities</span>
                  </>
                }
                description="Tailored GoHighLevel management, automation, onboarding, and funnel optimization solutions."
              />

              {featureBlocks.map((block, idx) => {
                const IconComp = block.icon
                return (
                  <ContentPanel key={idx}>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <div className="space-y-3 grow">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                            {block.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#EAF6F5]">
                          {block.title}
                        </h3>
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </div>
                  </ContentPanel>
                )
              })}
            </div>
          </section>

          {/* 8) WHY CHOOSE US GRID (6 cards + intro) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Value Proposition"
                title={
                  <>
                    Why Businesses <span className="flux-word">Choose Us</span>
                  </>
                }
                description="The biggest benefit isn't simply having someone manage your GoHighLevel account. It's getting your time back."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {whyChooseUs.map((item, idx) => {
                  const IconComp = item.icon
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#4DE8DC]/40 transition-all duration-300 flex flex-col justify-between space-y-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#EAF6F5] mb-2">{item.title}</h4>
                        <p className="text-sm text-white leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>

          {/* 9) PROCESS STEPS (5 steps) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Simple Workflow"
                title={
                  <>
                    How Our Process <span className="flux-word">Works</span>
                  </>
                }
                description="We keep things simple."
              />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
                {processSteps.map((s, idx) => (
                  <TimelineNode
                    key={idx}
                    index={idx}
                    year={s.step}
                    title={s.title}
                    description={s.description}
                    isLast={idx === processSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* 10) CLOSING SECTION */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Focus On Growth"
                title={
                  <>
                    Focus on Growing Your Business. <span className="flux-word">We&apos;ll Handle GoHighLevel.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                You invested in GoHighLevel to save time, improve efficiency, and grow your business. But the platform still needs someone to manage it. Our GoHighLevel expert services help businesses get more from their CRM, automations, funnels, and workflows without the stress of doing everything themselves. Whether you need ongoing GHL VA services, a complete Go High Level automation setup service, onboarding support, or an experienced GoHighLevel automation expert, we're here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Take Action"
                title="Let's Build a Better GoHighLevel System Together"
                description="Ready to hire a GoHighLevel expert? Schedule a free consultation and discover how our GoHighLevel expert services can simplify your operations and help your business grow."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ContentPanel>
          </section>

          {/* 12) FAQ SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Questions & Answers"
                  title={
                    <>
                      Frequently Asked <span className="flux-word">Questions</span>
                    </>
                  }
                  description="Everything you need to know about our GoHighLevel Expert Services."
                />
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                      >
                        <span className="text-base font-semibold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors pr-4">
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8FA6A3] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#4DE8DC] border-[#4DE8DC]/40' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-white leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
