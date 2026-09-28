'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Scale,
  UserCheck,
  Calendar,
  FileText,
  FolderArchive,
  Search,
  Database,
  Mail,
  Clock,
  DollarSign,
  PhoneCall,
  Workflow,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
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

export default function LegalVirtualAssistantServicesPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: UserCheck, title: 'Client intake and onboarding' },
    { icon: Calendar, title: 'Calendar and court date management' },
    { icon: FileText, title: 'Legal document formatting' },
    { icon: FolderArchive, title: 'Case file organization' },
    { icon: Search, title: 'Legal research support' },
    { icon: Database, title: 'CRM and case management updates' },
    { icon: Mail, title: 'Email and inbox management' },
    { icon: Clock, title: 'Appointment scheduling' },
    { icon: DollarSign, title: 'Billing and invoice support' },
    { icon: PhoneCall, title: 'Client follow-ups' },
    { icon: Workflow, title: 'Administrative assistance' },
    { icon: Scale, title: 'Document management' },
  ]

  const featureBlocks = [
    {
      icon: UserCheck,
      title: 'Client Intake',
      description:
        'First impressions matter. We assist with client onboarding, intake forms, appointment scheduling, and collecting important client information before consultations.',
      badge: 'Client Onboarding',
    },
    {
      icon: Calendar,
      title: 'Calendar and Case Management',
      description:
        'Legal deadlines cannot be missed. Our legal virtual assistants help organize calendars, schedule meetings, track important dates, and maintain accurate case records.',
      badge: 'Deadline & Case Control',
    },
    {
      icon: FileText,
      title: 'Legal Document Support',
      description:
        'Preparing and organizing legal documents takes time. We assist with document formatting, file organization, templates, correspondence, and administrative document management.',
      badge: 'Doc Formatting & Prep',
    },
    {
      icon: Database,
      title: 'CRM and Case File Management',
      description:
        'Keeping client records organized is essential. Our assistants update CRM systems, organize digital files, maintain case information, and help ensure your records stay accurate and accessible.',
      badge: 'Case File Hygiene',
    },
    {
      icon: Workflow,
      title: 'Administrative Support',
      description:
        'Administrative work should never prevent you from serving clients. Our virtual assistant legal services include email management, scheduling, reporting, billing support, document organization, and other daily operational tasks.',
      badge: 'Operational Efficiency',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Save Valuable Time',
      description:
        'Delegate repetitive administrative work while you focus on clients, case preparation, and billable hours.',
    },
    {
      icon: FolderArchive,
      title: 'Improve Organization',
      description:
        'Keep case files, legal documents, calendars, and client information organized and easy to access.',
    },
    {
      icon: Users,
      title: 'Enhance Client Service',
      description:
        'Fast responses and organized communication help create a better client experience.',
    },
    {
      icon: CheckCircle2,
      title: 'Reduce Administrative Workload',
      description:
        'Free your legal team from routine office tasks that slow down productivity.',
    },
    {
      icon: Zap,
      title: 'Flexible Support',
      description:
        'Whether you need part-time or full-time assistance, our services scale with your firm\'s needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Cost-Effective Solution',
      description:
        'Instead of hiring another in-house employee, work with experienced virtual legal assistants who provide professional support without additional overhead.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your law firm, practice areas, and daily operational needs.',
    },
    {
      step: '02',
      title: 'Review Your Workflow',
      description:
        'Our team identifies administrative tasks, case management processes, and operational responsibilities that can be delegated.',
    },
    {
      step: '03',
      title: 'Match You With the Right Assistant',
      description:
        'We pair you with a virtual legal assistant who understands legal administration and your firm\'s workflow.',
    },
    {
      step: '04',
      title: 'Onboarding',
      description: 'We learn your systems, communication preferences, software, and internal procedures.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description:
        'Your assistant becomes part of your team, providing reliable support while adapting to your firm\'s changing needs.',
    },
  ]

  const faqs = [
    {
      q: 'What is a virtual legal assistant?',
      a: 'A virtual legal assistant is a remote professional who provides administrative and operational support to lawyers and law firms. They help with scheduling, client communication, document organization, legal research support, and case management.',
    },
    {
      q: 'What do legal virtual assistant services include?',
      a: 'Our legal virtual assistant services include client intake, calendar management, document formatting, CRM updates, case file organization, billing support, scheduling, and administrative assistance.',
    },
    {
      q: 'Can your assistants help with legal documents?',
      a: 'Yes. Our assistants help organize, format, and manage legal documents while supporting your existing processes. They do not provide legal advice or represent clients.',
    },
    {
      q: 'Do you work with solo attorneys and law firms?',
      a: 'Absolutely. We support solo practitioners, boutique firms, growing law firms, and corporate legal departments.',
    },
    {
      q: 'Can I hire a dedicated legal virtual assistant?',
      a: 'Yes. You can hire virtual legal assistant support on a part-time or full-time basis, depending on your firm\'s workload.',
    },
    {
      q: 'Are your assistants familiar with legal software?',
      a: 'Yes. Our assistants can work with many popular CRM and legal practice management platforms while adapting to your firm\'s preferred systems.',
    },
    {
      q: 'Why choose VA Hub Pro?',
      a: 'Unlike many virtual legal assistant companies, we provide reliable, trained professionals who become an extension of your team. Our goal is to help your firm save time, improve organization, and operate more efficiently while delivering excellent client service.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Legal Virtual Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional Legal Virtual Assistant Services for law firms and attorneys. Client intake, calendar management, legal document formatting, CRM updates, and administrative support.',
    areaServed: 'Worldwide',
    serviceType: 'Legal Administration & Virtual Assistant Services',
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
            eyebrow="LEGAL VIRTUAL ASSISTANT SERVICES"
            title={
              <>
                Legal Virtual <span className="flux-word">Assistant Services</span>
              </>
            }
            description="Spend More Time Practicing Law. We'll Handle the Administrative Work."
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
                  Running a law firm requires more than legal expertise. Every day brings client inquiries, case management, document preparation, scheduling, legal research, billing, and countless administrative tasks. While these responsibilities are essential, they often take valuable time away from serving clients and growing your practice.
                </p>
                <p>
                  The reality is that many lawyers and law firms spend too much time on administrative work instead of billable legal work.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That's where our Legal Virtual Assistant Services come in.
                </p>
                <p>
                  At VA Hub Pro, we provide experienced virtual legal assistants who support law firms, attorneys, legal consultants, and legal departments with reliable administrative and operational assistance. Whether you need a virtual legal assistant for ongoing support or project-based help, our team helps you stay organized, improve efficiency, and focus on your clients. Law firms commonly use virtual legal assistants for scheduling, case management, legal document preparation, client intake, and other administrative responsibilities that improve productivity.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR LEGAL VIRTUAL ASSISTANTS CAN HELP WITH (12 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our Legal Virtual Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Client intake, calendar and court date tracking, legal document formatting, research support, and CRM updates."
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
                eyebrow="Optimize Practice Operations"
                title="Ready to hire virtual legal assistant support?"
                description="Talk to our team and discover how a dedicated assistant can help your law firm save time and improve productivity."
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
                eyebrow="Firm Challenges"
                title={
                  <>
                    Running a Law Firm Is Demanding. <span className="flux-word">Managing Every Task Makes It Harder.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Every legal matter comes with paperwork, deadlines, communication, and organization. Client files must stay updated. Court dates need tracking. Documents require preparation. Emails need responses. Intake forms must be completed. Follow-ups can't be missed.
                </p>
                <p>
                  As your practice grows, administrative work grows with it. Many attorneys try to manage everything themselves or hire full-time administrative staff before they're ready. Neither option is ideal.
                </p>
                <p>
                  What law firms really need is dependable support from professionals who understand legal workflows and can handle daily administrative responsibilities efficiently. That's exactly what our legal virtual assistant services provide.
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
                    A Dedicated Legal Virtual Assistant <span className="flux-word">for Your Firm</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Think of your legal virtual assistant as an extension of your legal team. Instead of spending hours organizing case files, scheduling appointments, managing documents, and responding to administrative requests, you have an experienced professional handling those responsibilities.
                </p>
                <p>
                  We support solo attorneys, law firms, legal consultants, corporate legal departments, and growing legal practices looking for dependable operational support.
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
                    Specialized <span className="flux-word">Legal Support Capabilities</span>
                  </>
                }
                description="Client intake, court calendar management, legal document support, case file updates, and administrative services."
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
                    Why Law Firms <span className="flux-word">Choose Our Legal Virtual Assistants</span>
                  </>
                }
                description="The biggest benefit isn't simply getting administrative help. It's having more time to focus on practicing law."
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
                eyebrow="Focus On Clients"
                title={
                  <>
                    Focus on Your Clients. <span className="flux-word">We&apos;ll Handle the Administrative Work.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                Your expertise belongs in serving clients and building successful cases—not managing calendars, organizing paperwork, or updating databases. Our virtual legal assistant services help law firms improve efficiency, stay organized, and create smoother day-to-day operations. Whether you're looking to hire virtual legal assistant support, need experienced legal virtual assistants, or want dependable virtual assistant legal services, we're here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Elevate Firm Efficiency"
                title="Let's Build a More Efficient Law Firm Together"
                description="Schedule a free consultation and discover how our Legal Virtual Assistant Services can simplify your daily operations, save valuable time, and support the growth of your legal practice."
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
                  description="Everything you need to know about Legal Virtual Assistant Services."
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
