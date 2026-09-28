'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Calendar,
  Mail,
  Users,
  Globe,
  Kanban,
  Database,
  Search,
  MessageSquare,
  FileText,
  Workflow,
  ArrowRight,
  ChevronDown,
  Clock,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Briefcase,
  Award,
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

export default function ExecutiveAssistantsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Calendar, title: 'Calendar and schedule management' },
    { icon: Mail, title: 'Email and inbox management' },
    { icon: Users, title: 'Meeting coordination and follow-ups' },
    { icon: Globe, title: 'Travel planning and itinerary management' },
    { icon: Kanban, title: 'Project and task management' },
    { icon: Database, title: 'CRM and data management' },
    { icon: Search, title: 'Research and reporting' },
    { icon: MessageSquare, title: 'Client and stakeholder communication' },
    { icon: FileText, title: 'Document preparation and organization' },
    { icon: Workflow, title: 'Administrative and operational support' },
  ]

  const featureBlocks = [
    {
      icon: Calendar,
      title: 'Calendar and Schedule Management',
      description:
        'A busy calendar can quickly become overwhelming. Our assistants help organize appointments, coordinate meetings, manage scheduling conflicts, and keep your day running smoothly.',
      badge: 'Calendar Command',
    },
    {
      icon: Mail,
      title: 'Email and Communication Management',
      description:
        'Inbox management takes time and attention. A virtual executive assistant can help organize communication, prioritize important messages, and ensure nothing gets overlooked.',
      badge: 'Inbox Zero',
    },
    {
      icon: Kanban,
      title: 'Project and Task Management',
      description:
        'Managing projects requires organization and follow-through. Our assistants help coordinate tasks, track deadlines, and keep important initiatives moving forward.',
      badge: 'Project Velocity',
    },
    {
      icon: Workflow,
      title: 'Administrative and Operational Support',
      description:
        'Administrative work often pulls executives away from strategic priorities. Our executive virtual assistant services provide reliable support for day-to-day responsibilities so you can focus on growth and decision-making.',
      badge: 'Ops Excellence',
    },
    {
      icon: Search,
      title: 'Research and Reporting',
      description:
        'Business leaders need accurate information to make informed decisions. Our assistants help gather information, prepare reports, and organize documentation that supports your business objectives.',
      badge: 'Strategic Intel',
    },
  ]

  const whyChooseUs = [
    {
      icon: Briefcase,
      title: 'Spend More Time on Strategic Work',
      description:
        'Delegate administrative responsibilities and focus on leadership, growth, and high-value activities.',
    },
    {
      icon: TrendingUp,
      title: 'Improve Productivity',
      description:
        'Having professional support allows you to accomplish more without becoming overwhelmed by daily tasks.',
    },
    {
      icon: CheckCircle2,
      title: 'Stay Organized',
      description:
        'Our assistants help keep schedules, projects, and communication organized and running efficiently.',
    },
    {
      icon: Zap,
      title: 'Get Flexible Support',
      description:
        'Whether you need part-time or full-time assistance, our services can scale alongside your business.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Hiring Costs',
      description:
        'Working with an outsourced executive assistant gives you access to professional support without the expense of hiring an additional full-time employee.',
    },
    {
      icon: Award,
      title: 'Gain Reliable Executive Support',
      description:
        'Businesses trust our executive assistant services because we provide dependable assistance that helps leaders stay focused and productive.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, responsibilities, and support requirements.',
    },
    {
      step: '02',
      title: 'Understand Your Needs',
      description: 'Our team identifies the administrative tasks and responsibilities that can be delegated.',
    },
    {
      step: '03',
      title: 'Match You With the Right Assistant',
      description:
        'We pair you with a dedicated executive assistant who aligns with your business needs and working style.',
    },
    {
      step: '04',
      title: 'Onboarding and Setup',
      description:
        'We establish communication processes, priorities, and workflows to ensure a smooth transition.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description:
        'Your executive assistant continues supporting your business while adapting to your evolving needs.',
    },
  ]

  const faqs = [
    {
      q: 'What does an Executive Assistant do?',
      a: 'An Executive Assistant provides administrative, organizational, and operational support to help business leaders manage their time more effectively and stay focused on strategic priorities.',
    },
    {
      q: 'Why should I hire an executive assistant?',
      a: 'Businesses hire an executive assistant to improve productivity, reduce administrative burdens, and gain professional support without becoming overwhelmed by day-to-day responsibilities.',
    },
    {
      q: 'What types of businesses do you work with?',
      a: 'We work with entrepreneurs, executives, agencies, consultants, service businesses, and growing companies across a wide range of industries.',
    },
    {
      q: 'Can I hire a dedicated executive assistant?',
      a: 'Yes. We provide a dedicated executive assistant who works closely with you and becomes an extension of your team.',
    },
    {
      q: 'Are your assistants remote?',
      a: 'Yes. Our team consists of experienced remote executive assistant professionals who provide support from offshore locations.',
    },
    {
      q: 'What tasks can an executive assistant handle?',
      a: 'Our assistants can help with calendar management, email management, meeting coordination, research, reporting, project management, travel arrangements, and administrative support.',
    },
    {
      q: 'Is this service suitable for small businesses?',
      a: 'Absolutely. Many of our clients need an executive assistant for small business operations but do not require a full-time in-house employee.',
    },
    {
      q: 'Do you provide support for CEOs and founders?',
      a: 'Yes. We regularly provide an executive assistant for CEO support, helping founders and executives manage their schedules and responsibilities more efficiently.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'After an initial consultation and understanding your requirements, onboarding can typically begin within a few days.',
    },
    {
      q: 'Why choose VA Hub Pro?',
      a: 'As a trusted executive assistant agency, we provide professional, scalable, and reliable support designed to help business leaders save time, improve productivity, and focus on growth.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Executive Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional Executive Assistant services for founders, CEOs, and business leaders. Calendar management, inbox organization, project tracking, and operations support.',
    areaServed: 'Worldwide',
    serviceType: 'Executive Assistant & Administrative Services',
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
            eyebrow="EXECUTIVE ASSISTANT SERVICES"
            title={
              <>
                Executive <span className="flux-word">Assistants</span>
              </>
            }
            description="Stop Managing Every Detail Yourself. Let Us Handle the Tasks That Keep You Busy."
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
                  As your business grows, so do your responsibilities. Meetings, emails, follow-up, planning trips, reporting, and administrative work can fill up your day. The more you spend and invest in these, the less time you'll have for leading, planning and growing your business.
                </p>
                <p>
                  In reality, many business owners, founders and executives end up distracted from high-value work by the many different tasks involved in the upkeep of their business.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That's where our Executive Assistants come in.
                </p>
                <p>
                  Professional Executive Assistant services offered by us at VA Hub Pro will help you to remain organised, be more productive and gain control of your future. From managing calendars and coordinating projects to managing communications and dealing with a virtual Executive Assistant, we can help you get things done efficiently.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR EXECUTIVE ASSISTANTS CAN HELP WITH (10 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our Executive Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Calendar management, inbox triage, meeting coordination, travel arrangements, research, and executive operations."
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
                eyebrow="Reclaim Your Time"
                title="Ready to hire an executive assistant?"
                description="Talk to our team and discover how a dedicated executive assistant can help you save time and focus on what matters most."
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
                eyebrow="Executive Overhead"
                title={
                  <>
                    Leadership Is Demanding Enough. <span className="flux-word">Administrative Work Shouldn&apos;t Slow You Down.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Most executives don't struggle with a lack of ideas. They struggle with a lack of time. Emails continue to pile up. Meetings consume the calendar. Important follow-ups get delayed. Administrative work keeps growing. Small tasks begin taking attention away from strategic priorities.
                </p>
                <p>
                  Many business leaders end up in one of two situations. The first is trying to manage everything themselves. The executive becomes responsible for every email, meeting, and administrative task. The second is to have a full-time employee before the business is ready. Both choices are troublesome.
                </p>
                <p>
                  All executives require is some professional help to provide someone who can keep things organized and to take care of the details. Our executive assistant services are meant to do just that.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) DEDICATED EA SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Right-Hand Support"
                title={
                  <>
                    A Dedicated Executive Assistant <span className="flux-word">for Your Business</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Think of a dedicated executive assistant as your right hand. Instead of spending your day organizing schedules, managing communication, and handling administrative tasks, you have a professional who takes ownership of those responsibilities for you.
                </p>
                <p>
                  We are an expert executive assistant agency, able to partner with businesses, business owners, founders and leadership teams who require reliable service without the hassle and expense of hiring your own EAs. We want to make your life easier: we aim to get you to delegate more time and effort to your business, and less to its management.
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
                    Specialized <span className="flux-word">Executive Assistant Capabilities</span>
                  </>
                }
                description="Calendar management, inbox triage, project tracking, administrative operations, and executive research."
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
                description="The biggest benefit isn't simply having administrative support. It's getting your time back."
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
                eyebrow="Lead With Clarity"
                title={
                  <>
                    Focus on Leading Your Business. <span className="flux-word">We&apos;ll Handle the Details.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                Your business is not created to waste your time throughout the day with emails, scheduling clashes and paperwork. Our executive virtual assistant services allow the business leaders to preserve their time, enhance productivity and run the business more efficiently. Whether you need an executive assistant for CEO responsibilities, an executive assistant for small business operations, or ongoing support from a remote executive assistant, we're here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Elevate Productivity"
                title="Let's Build a More Productive Business Together"
                description="Ready to hire an executive assistant? Schedule a free consultation and discover how our executive assistant services can help simplify your day and support long-term growth."
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
                  description="Everything you need to know about Executive Assistant Services."
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
