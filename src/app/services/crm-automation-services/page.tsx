'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Database,
  Users,
  Sparkles,
  Workflow,
  Kanban,
  Send,
  UserCheck,
  Mail,
  BarChart,
  Layers,
  Calendar,
  Headphones,
  FileSpreadsheet,
  ArrowRight,
  ChevronDown,
  Clock,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
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

export default function CRMAutomationServicesPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: FileSpreadsheet, title: 'CRM data entry and updates' },
    { icon: Users, title: 'Contact and lead management' },
    { icon: Sparkles, title: 'CRM cleanup and organization' },
    { icon: Workflow, title: 'Workflow automation support' },
    { icon: Kanban, title: 'Sales pipeline management' },
    { icon: Send, title: 'Follow-up automation' },
    { icon: UserCheck, title: 'Lead nurturing workflows' },
    { icon: Mail, title: 'Email and SMS automation' },
    { icon: BarChart, title: 'Reporting and dashboard updates' },
    { icon: Layers, title: 'GoHighLevel CRM management' },
    { icon: Calendar, title: 'Appointment workflow management' },
    { icon: Headphones, title: 'Ongoing CRM support' },
  ]

  const featureBlocks = [
    {
      icon: FileSpreadsheet,
      title: 'CRM Data Entry Services',
      description:
        'Accurate customer information is essential for every business. Our CRM data entry services ensure contacts, leads, notes, opportunities, and customer records are entered correctly and updated consistently.',
      badge: 'Data Accuracy',
    },
    {
      icon: Database,
      title: 'CRM Management Services',
      description:
        'Managing a CRM takes ongoing attention. Our CRM management services include contact management, pipeline updates, workflow monitoring, lead tracking, reporting, and system maintenance to keep everything organized.',
      badge: 'Full Maintenance',
    },
    {
      icon: Workflow,
      title: 'CRM Automation Services',
      description:
        'Automation saves time—but only when it works properly. Our CRM automation services help build, monitor, troubleshoot, and improve workflows that automate repetitive tasks, customer follow-ups, and internal processes.',
      badge: 'Automated Efficiency',
    },
    {
      icon: Sparkles,
      title: 'CRM Cleanup Services',
      description:
        'Over time, CRM systems collect outdated contacts, duplicate records, and incomplete information. Our CRM cleanup services help organize your database, remove unnecessary records, and improve overall data quality.',
      badge: 'Database Hygiene',
    },
    {
      icon: Layers,
      title: 'GoHighLevel CRM Setup',
      description:
        'Using GoHighLevel? Our GoHighLevel CRM setup service helps configure your CRM, pipelines, workflows, automations, and contact management so your business starts with a solid foundation.',
      badge: 'GHL Foundation',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Save Time Every Week',
      description:
        'Stop spending hours updating contacts, managing pipelines, and checking automations. Focus on growing your business while we handle your CRM.',
    },
    {
      icon: Database,
      title: 'Stay Organized',
      description:
        'A clean CRM makes it easier to manage leads, customers, and sales opportunities.',
    },
    {
      icon: Send,
      title: 'Improve Customer Follow-Ups',
      description:
        'Automated reminders and organized records help ensure no opportunity gets missed.',
    },
    {
      icon: CheckCircle2,
      title: 'Reduce Errors',
      description:
        'Accurate customer information improves reporting, communication, and decision-making.',
    },
    {
      icon: TrendingUp,
      title: 'Get More Value From Your CRM',
      description:
        'Many businesses only use a small portion of their CRM\'s capabilities. Our team helps you get more from the software you\'re already paying for.',
    },
    {
      icon: Zap,
      title: 'Flexible Support',
      description:
        'Whether you need occasional assistance or ongoing outsourced CRM support, we provide services that fit your business needs.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, your CRM platform, and your current processes.',
    },
    {
      step: '02',
      title: 'CRM Review',
      description: 'Our team reviews your contact database, automations, workflows, and sales pipeline.',
    },
    {
      step: '03',
      title: 'Identify Improvements',
      description:
        'We look for outdated records, broken automations, duplicate contacts, and opportunities to improve efficiency.',
    },
    {
      step: '04',
      title: 'CRM Management',
      description:
        'Your dedicated CRM virtual assistant begins managing, updating, organizing, and maintaining your CRM.',
    },
    {
      step: '05',
      title: 'Ongoing Optimization',
      description:
        'As your business grows, we continue improving your CRM and automation processes to keep everything running smoothly.',
    },
  ]

  const faqs = [
    {
      q: 'What does a CRM virtual assistant do?',
      a: 'A CRM virtual assistant helps manage customer records, update contact information, organize pipelines, maintain workflows, and support day-to-day CRM operations.',
    },
    {
      q: 'What are CRM management services?',
      a: 'CRM management services include maintaining customer data, updating records, managing sales pipelines, monitoring workflows, creating reports, and keeping your CRM organized.',
    },
    {
      q: 'Do you provide CRM data entry?',
      a: 'Yes. Our CRM data entry services ensure customer information, notes, opportunities, and contact records are entered accurately and updated regularly.',
    },
    {
      q: 'Can you help automate my CRM?',
      a: 'Absolutely. Our CRM automation services help create, monitor, and improve workflows that automate customer communication and repetitive business processes.',
    },
    {
      q: 'Do you work with GoHighLevel?',
      a: 'Yes. We provide GoHighLevel CRM setup, workflow configuration, pipeline management, and ongoing CRM support for businesses using the platform.',
    },
    {
      q: 'Can you clean up an existing CRM?',
      a: 'Yes. Our CRM cleanup services remove duplicate contacts, update outdated records, organize customer data, and improve the overall quality of your CRM.',
    },
    {
      q: 'Can I hire someone to manage my CRM?',
      a: 'Absolutely. If you\'re looking for a CRM administrator for hire or a CRM specialist for hire, our experienced virtual assistants can provide ongoing CRM management and support without the cost of hiring a full-time employee.',
    },
    {
      q: 'What is outsourced CRM support?',
      a: 'Outsourced CRM support gives businesses access to experienced CRM professionals who manage customer data, automations, workflows, and system maintenance remotely, helping teams stay organized and productive.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CRM and Automation Virtual Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional CRM and Automation Virtual Assistant Services to organize customer data, manage automations, clean up databases, and optimize sales pipelines.',
    areaServed: 'Worldwide',
    serviceType: 'CRM & Automation Virtual Assistant Services',
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
            eyebrow="CRM & AUTOMATION VIRTUAL ASSISTANTS"
            title={
              <>
                CRM and Automation <span className="flux-word">Virtual Assistant Services</span>
              </>
            }
            description="Keep Your CRM Organized. Keep Your Business Moving."
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
                  Your CRM is one of the most important tools in your business. It's where your leads, customers, sales pipeline, and follow-ups all come together. But if your CRM isn't updated, organized, and working properly, it can quickly become a source of missed opportunities instead of business growth.
                </p>
                <p>
                  The reality is that many businesses invest in CRM software but don't have the time to manage it consistently. Contact records become outdated, automations stop working, duplicate contacts pile up, and important follow-ups get missed.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That's where our CRM and Automation Virtual Assistant Services come in.
                </p>
                <p>
                  At VA Hub Pro, we provide experienced CRM virtual assistant support to help businesses organize customer data, manage automations, maintain CRM systems, and keep sales processes running smoothly. Whether you need daily CRM updates, workflow management, or ongoing automation support, we're here to help.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR CRM VIRTUAL ASSISTANTS CAN HELP WITH (12 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our CRM Virtual Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Database data entry, contact tracking, workflow automation, CRM cleanup, and GoHighLevel configuration."
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
                eyebrow="Optimize Your CRM"
                title="Ready to Get More From Your CRM?"
                description="Talk to our team and discover how a dedicated CRM virtual assistant can save you time and keep your CRM working the way it should."
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
                eyebrow="System Friction"
                title={
                  <>
                    Your CRM Should Help You Grow Your Business. <span className="flux-word">Not Create More Work.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Most businesses don't struggle with choosing a CRM. They struggle with keeping it updated. New leads aren't entered on time. Customer information becomes outdated. Automations stop working. Pipelines aren't updated. Duplicate records make reporting inaccurate. Small issues like these grow into bigger problems over time.
                </p>
                <p>
                  Many businesses end up in one of two situations. The first is asking someone on the team to manage the CRM alongside their regular responsibilities. The second is hiring an expensive full-time CRM administrator. Neither option is ideal.
                </p>
                <p>
                  What businesses really need is someone who understands CRM systems, keeps everything organized, and makes sure automations continue working behind the scenes. That's exactly what our CRM management services are designed to do.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) DEDICATED VA SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Dedicated Support"
                title={
                  <>
                    A Dedicated CRM Virtual Assistant <span className="flux-word">for Your Business</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Think of your CRM virtual assistant as the person responsible for keeping your CRM clean, organized, and up to date. Instead of spending hours updating records, fixing workflows, and checking automations, you have an experienced professional handling those tasks for you.
                </p>
                <p>
                  Our team supports agencies, consultants, service businesses, sales teams, and growing companies that rely on CRM systems every day. We help ensure your CRM becomes a valuable business asset instead of another task on your to-do list.
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
                    Specialized <span className="flux-word">CRM &amp; Automation Capabilities</span>
                  </>
                }
                description="Targeted services for data entry, CRM administration, workflow automation, database cleanup, and GoHighLevel setup."
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
                description="The biggest benefit isn't simply keeping your CRM updated. It's having confidence that your customer data and automations are working for your business."
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
                    Focus on Growing Your Business. <span className="flux-word">We&apos;ll Manage Your CRM.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                Your CRM should support your business—not slow it down. Our CRM and Automation Virtual Assistant Services help businesses organize customer data, maintain workflows, and automate repetitive tasks so teams can spend more time serving customers and closing sales. Whether you need CRM management services, CRM automation services, GoHighLevel CRM setup, or reliable outsourced CRM support, our team is here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Take Action"
                title="Let's Build a Better CRM Together"
                description="Schedule a free consultation and discover how a dedicated CRM virtual assistant can simplify your processes, improve data accuracy, and support long-term business growth."
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
                  description="Everything you need to know about CRM and Automation Virtual Assistant Services."
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
