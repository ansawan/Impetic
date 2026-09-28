'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  UserPlus,
  Target,
  Database,
  Mail,
  Share2,
  Filter,
  Calendar,
  PhoneCall,
  FileSpreadsheet,
  Kanban,
  Send,
  Users,
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

export default function LeadGenerationServicesPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Target, title: 'Prospect research and list building' },
    { icon: UserPlus, title: 'B2B lead generation' },
    { icon: Database, title: 'CRM management and lead tracking' },
    { icon: Mail, title: 'Email outreach support' },
    { icon: Share2, title: 'LinkedIn prospecting' },
    { icon: Filter, title: 'Lead qualification' },
    { icon: Calendar, title: 'Appointment scheduling' },
    { icon: PhoneCall, title: 'Sales follow-ups' },
    { icon: FileSpreadsheet, title: 'Data entry and reporting' },
    { icon: Kanban, title: 'Pipeline management' },
    { icon: Send, title: 'Cold outreach support' },
    { icon: Users, title: 'Contact database management' },
  ]

  const featureBlocks = [
    {
      icon: UserPlus,
      title: 'B2B Lead Generation Services',
      description:
        'Research and consistency are necessary to find the right business contacts. Our B2B lead generation services can be used to sift through the contacts to find potential customers and provide quality contact data that they can use to organize potential customer information for outreach.',
      badge: 'Targeted Prospecting',
    },
    {
      icon: Target,
      title: 'Prospect Research and List Building',
      description:
        'Every successful sales process starts with quality data. We research businesses, identify decision-makers and build targeted prospect lists based on your ideal customer profile.',
      badge: 'Verified Data',
    },
    {
      icon: Database,
      title: 'CRM Management',
      description:
        'You have an organized sales process with a well organized CRM. We keep contact information updated, monitor conversations and keep your pipeline up to date.',
      badge: 'Pipeline Health',
    },
    {
      icon: Calendar,
      title: 'Appointment Setting Services',
      description:
        'It is important to book appropriate meetings that do not take up a good portion of your day. Appointment setting services can assist you in coordinating meetings with qualified prospects, in managing your calendar and keeping the sales team on track to help close deals.',
      badge: 'Calendar Booking',
    },
    {
      icon: PhoneCall,
      title: 'Sales Appointment Setting',
      description:
        'Regularly contacting leads will improve your conversion rates. Our sales appointment setting services can help nurture prospects and arrange consultations with potential clients.',
      badge: 'Lead Nurturing',
    },
    {
      icon: Send,
      title: 'Cold Calling Services',
      description:
        'Phone outreach remains an effective way to connect with potential clients. Our cold calling services help introduce your business, qualify prospects and schedule appointments for your sales team using your approved scripts and process.',
      badge: 'Direct Outreach',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Save Time Every Week',
      description:
        'Avoid wasting hours researching prospects and making calls. Put the focus on building relationships and closing sales.',
    },
    {
      icon: TrendingUp,
      title: 'Keep Your Sales Pipeline Full',
      description:
        'Regular lead generation efforts can ultimately help you generate more opportunities and minimize your sales leakage.',
    },
    {
      icon: Database,
      title: 'Stay Organized',
      description:
        'We help manage your CRM, update prospect information and keep your sales data organized.',
    },
    {
      icon: CheckCircle2,
      title: 'Improve Follow-Ups',
      description:
        'Many opportunities are lost because no one follows up. We help ensure leads stay active and receive timely communication.',
    },
    {
      icon: Zap,
      title: 'Flexible Support',
      description:
        'You can receive a few hours of help each week or daily support depending on your business\'s needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Cost-Effective Growth',
      description:
        'Our outsourced lead generation services offer a lead generation solution with experienced professionals without the need for a full sales team.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your company, your audience and your objectives.',
    },
    {
      step: '02',
      title: 'Build Your Lead Generation Plan',
      description: 'We target your desired audiences, communication plan and the actions you want us to take.',
    },
    {
      step: '03',
      title: 'Set Up Your Process',
      description: 'We organize your CRM, prospect lists, communication methods and reporting process.',
    },
    {
      step: '04',
      title: 'Start Lead Generation',
      description:
        'Your dedicated assistant starts searching for qualified leads, reaches out to prospects, sets up meetings and supports your sales process.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description:
        'As your business expands, we continue to optimize your lead generation process and continue supporting you.',
    },
  ]

  const faqs = [
    {
      q: 'What are lead generation services?',
      a: 'Lead generation services help businesses identify potential customers, build prospect lists, manage outreach, qualify leads and support the sales process.',
    },
    {
      q: 'Do you provide B2B lead generation?',
      a: 'Yes. Our b2b lead generation services focus on finding qualified business prospects based on your target market and ideal customer profile.',
    },
    {
      q: 'What does a virtual assistant for lead generation do?',
      a: 'A virtual assistant for lead generation helps with prospect research, CRM updates, email outreach, appointment scheduling, follow-ups, reporting, and other lead generation tasks.',
    },
    {
      q: 'Do you offer an appointment setting?',
      a: 'Yes. Our appointment setting services help qualify leads, coordinate schedules and book meetings for your sales team.',
    },
    {
      q: 'Can you help with the sales appointment setting?',
      a: 'Absolutely. Our sales appointment setting service ensures qualified prospects are scheduled for conversations with your team.',
    },
    {
      q: 'Do you provide cold calling?',
      a: 'Yes. Our cold calling services help reach out to prospects, introduce your business, qualify leads and schedule appointments using your preferred messaging.',
    },
    {
      q: 'Why choose outsourced lead generation?',
      a: 'Outsourced lead generation gives your business access to experienced professionals without the expense of hiring and training an in-house team.',
    },
    {
      q: 'Are you a lead generation agency?',
      a: 'Yes. As a trusted lead generation agency and lead generation company, VA Hub Pro provides professional lead generation support tailored to your business goals.',
    },
    {
      q: 'Can I hire an appointment setter virtual assistant?',
      a: 'Absolutely. We can match you with an experienced appointment setter virtual assistant who manages scheduling, follow-ups, CRM updates and prospect communication to help keep your sales pipeline moving.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lead Generation Virtual Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional Lead Generation Virtual Assistant Services for B2B prospect research, list building, appointment setting, cold calling, and pipeline management.',
    areaServed: 'Worldwide',
    serviceType: 'Lead Generation & Appointment Setting Services',
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
            eyebrow="LEAD GENERATION VIRTUAL ASSISTANTS"
            title={
              <>
                Lead Generation Virtual <span className="flux-word">Assistant Services</span>
              </>
            }
            description="Stop Spending Hours Looking for Leads. Let Us Help You Fill Your Sales Pipeline."
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
                  It takes time to find new buyers. Creating prospect lists, researching businesses, follow ups, calling, updating your CRM and making appointments can consume a whole day of work. If you are spending more time looking for prospects, you are spending less time closing deals and building your business. The truth is, there are lots of companies with brilliant products or services that do not have a constant flow of high quality leads. We lose sales, delay follow ups and miss opportunities. That is where our lead generation services come in.
                </p>
                <p>
                  At VA Hub Pro, our Lead Generation Virtual Assistant Services help businesses find new prospects, organize lead information in a meaningful format and schedule lead meetings or appointments. If you are searching for B2B lead generation services, dialing services with a virtual assistant for lead generation or want assistance with your sales process throughout the year, we can help you.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR LEAD GENERATION VAS CAN HELP WITH (12 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our Lead Generation Virtual Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="B2B prospect research, list enrichment, appointment setting, cold calling, and sales pipeline management."
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
                eyebrow="Fill Your Pipeline"
                title="Ready to Grow Your Sales Pipeline?"
                description="Speak to our team and find out about how our Lead Generation Virtual Assistant Services can save you time while helping you get more qualified leads."
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
                eyebrow="Sales Challenge"
                title={
                  <>
                    Finding New Customers Takes Time. <span className="flux-word">Growing Your Business Shouldn&apos;t.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Most business owners do not struggle with selling. They are finding it hard to identify qualified prospects who will buy their products. Prospecting is time-consuming. Follow-ups often get delayed. Lead lists become outdated. CRM records are not updated. Sales opportunities fall through the cracks.
                </p>
                <p>
                  Many businesses end up in one of two situations. The first is trying to handle lead generation themselves while managing everything else. The second is hiring expensive sales staff before the business is ready. Neither is the best choice.
                </p>
                <p>
                  In fact, what businesses truly need are consistent sales funnel activities carried out by professionals who can continually support and maintain effective lead generation and keep the sales pipeline flowing. That is exactly what our lead generation services are designed to do.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) DEDICATED VA SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Dedicated Sales Support"
                title={
                  <>
                    A Dedicated Virtual Assistant <span className="flux-word">for Lead Generation</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  View your virtual assistant for lead generation as a member of your sales team. You don't need to spend hours looking for prospects, organizing contact lists, or setting up appointments—someone else has taken care of it for you.
                </p>
                <p>
                  We support agencies, consultancies, service businesses and startups and growing businesses that require trustworthy lead generation support. From continuous prospecting to assistance with managing your outreach process, we have various support options available to you, depending on your needs.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 7) FEATURE BLOCKS (6 sub-services) */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionHeading
                align="center"
                eyebrow="Core Services"
                title={
                  <>
                    Specialized <span className="flux-word">Lead Generation Solutions</span>
                  </>
                }
                description="B2B prospecting, list enrichment, CRM tracking, appointment setting, and direct cold outreach."
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
                description="The biggest benefit is not simply finding more leads. It is creating a consistent process that supports business growth."
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
                eyebrow="Close More Deals"
                title={
                  <>
                    Focus on Closing Deals. <span className="flux-word">We&apos;ll Help You Find the Right Prospects.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                Growing your business starts with a healthy sales pipeline. Our Lead Generation Virtual Assistant Services help you spend less time searching for leads and more time building relationships with potential customers. You can hire our company for your lead generation needs, whether you need appointment setting services, cold calling services, outsourced lead generation or a virtual assistant for lead generation, our team is here to help your business achieve its goals.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Build Your Pipeline"
                title="Let's Build a Stronger Sales Pipeline Together"
                description="Book a complimentary call and see how our lead generation services can generate even more leads, book more appointments and help your business grow over time."
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
                  description="Everything you need to know about Lead Generation Virtual Assistant Services."
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
