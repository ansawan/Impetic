'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import {
  Mail,
  Calendar,
  Headphones,
  Database,
  FileSpreadsheet,
  Clock,
  UserPlus,
  Share2,
  Search,
  Workflow,
  Sparkles,
  Zap,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sliders,
  DollarSign,
  Award,
  Users,
  CheckCircle2,
  Bot,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), {
  ssr: false,
})

const VA_KEYFRAMES = [
  { t: 0.00, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.70, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.00, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function AIVirtualAssistantServicesPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Mail, title: 'Email and calendar management' },
    { icon: Workflow, title: 'Administrative support' },
    { icon: Headphones, title: 'Customer service assistance' },
    { icon: Database, title: 'CRM management and updates' },
    { icon: FileSpreadsheet, title: 'Data entry and reporting' },
    { icon: Clock, title: 'Appointment scheduling' },
    { icon: UserPlus, title: 'Lead generation support' },
    { icon: Share2, title: 'Social media assistance' },
    { icon: Search, title: 'Research and documentation' },
    { icon: Sliders, title: 'Process management and organization' },
    { icon: Sparkles, title: 'AI-powered content support' },
    { icon: Zap, title: 'Workflow and automation assistance' },
  ]

  const featureBlocks = [
    {
      icon: Workflow,
      title: 'Administrative Support',
      description:
        'There is still some administrative work to be done, but it does not occupy your entire day. With our Virtual Assistant Services, your everyday tasks are optimized and completed seamlessly, keeping your business well-organized and productive.',
      badge: 'Operational Efficiency',
    },
    {
      icon: Mail,
      title: 'Email and Calendar Management',
      description:
        'Communication and organisation can easily become complex very quickly. Our Remote Virtual Assistant experts help manage inboxes, plan meetings, manage schedules and make sure nothing gets overlooked.',
      badge: 'Inbox & Schedule Zero',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description:
        'Fast and professional communication builds stronger customer relationships. Our assistants respond to customer inquiries, manage support requests and provide reliable assistance while using AI tools to improve response times.',
      badge: 'Rapid Response',
    },
    {
      icon: Database,
      title: 'CRM and Lead Management',
      description:
        "You should always make sure your customers' information is organized and up to date. We take care of your CRM, keep contact records up to date, monitor leads, organize pipelines, and follow up with leads, all to keep your sales team productive.",
      badge: 'Pipeline Optimization',
    },
    {
      icon: Search,
      title: 'Research and AI-Assisted Tasks',
      description:
        'Need information quickly? Our assistant helps us conduct research faster, compile documents, create summaries of information and assist with business projects more efficiency by using AI.',
      badge: 'AI-Powered Research',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Save Time Every Week',
      description: 'Delegate repetitive work and focus on growing your business.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Productivity',
      description:
        'Using experienced assistants combined with AI tools, tasks are completed more quickly and with high quality and accuracy.',
    },
    {
      icon: ShieldCheck,
      title: 'Stay Organized',
      description: 'Your emails, calendar, CRM, documents and projects remain organised and up-to-date.',
    },
    {
      icon: Sliders,
      title: 'Flexible Support',
      description: 'Services scale with your business, from a few hours a week to support you to full time help.',
    },
    {
      icon: DollarSign,
      title: 'Reduce Hiring Costs',
      description:
        'When you use an offshore virtual assistant you get experienced help without the need to hire another in-house employee.',
    },
    {
      icon: Award,
      title: 'Get More Value',
      description:
        'We are the preferred choice of businesses due to our combination of best virtual assistant services and AI-driven workflows that streamline business processes.',
    },
  ]

  const processSteps = [
    {
      year: 'Step 01',
      title: 'Discovery Call',
      description: 'You tell us about your business, what you want to accomplish and how we can help you.',
    },
    {
      year: 'Step 02',
      title: 'Identify Your Requirements',
      description: 'We review your existing tasks and identify opportunities to save time by using an AI Virtual Assistant.',
    },
    {
      year: 'Step 03',
      title: 'Match You With the Right Assistant',
      description:
        'We introduce a dedicated virtual assistant who can help and uses AI technology to maximize your productivity and has the skills you are looking for.',
    },
    {
      year: 'Step 04',
      title: 'Onboarding',
      description: 'For a seamless transition, we learn about your processes, communication method and business goals.',
    },
    {
      year: 'Step 05',
      title: 'Ongoing Support',
      description:
        'You get an assistant who performs well for your business and continues to support your business, while also adapting to changing needs, as your needs evolve making your business more efficient over time with the help of AI.',
    },
  ]

  const faqs = [
    {
      q: 'What is an AI Virtual Assistant?',
      a: 'An AI Virtual Assistant is a professional virtual assistant that leverages AI tools to assist businesses and complete tasks more quickly, accurately and efficiently.',
    },
    {
      q: 'Why should I hire a virtual assistant?',
      a: 'Companies hire a virtual assistant to save time, increase their productivity and get consistent assistance at a fraction of the cost of hiring an additional employee.',
    },
    {
      q: 'Are your assistants real people?',
      a: 'Yes. Every assistant at VA Hub Pro is a trained professional who uses AI tools to improve productivity. You get the advantages of human expertise and AI technology.',
    },
    {
      q: 'What tasks can an AI Virtual Assistant handle?',
      a: 'Our assistants are available for email management, calendar scheduling, CRM updates, customer support, research, lead generation and reporting as well as for data entry, documentation and other business tasks.',
    },
    {
      q: 'Is this service suitable for small businesses?',
      a: 'Absolutely. Many of our clients choose to use a virtual assistant for small business operations since it offers professional support without putting in the effort to build a large in-house team.',
    },
    {
      q: 'Are your assistants remote?',
      a: 'Yes. Our remote virtual assistants are highly knowledgeable and can support you remotely from overseas without adding significant costs to your business.',
    },
    {
      q: 'Can I hire a dedicated virtual assistant?',
      a: 'Yes. A dedicated virtual assistant who has mastered your processes, understands your business and collaborates with your team supports your business.',
    },
    {
      q: 'Why choose VA Hub Pro?',
      a: 'As a trusted Virtual Assistant Agency and Virtual Assistant Company, we are able to merge skilled individuals with AI assisted tools to provide businesses with efficient, scalable and dependable support, allowing them to save time and grow faster.',
    },
  ]

  const faqJsonLd = {
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

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Virtual Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://impetic.com',
    },
    description: 'Work Smarter, Not Harder. Let Our AI Virtual Assistants Handle the Tasks That Slow You Down.',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ScrollScene keyframes={VA_KEYFRAMES}>
        <NeuralGraphScene />
      </ScrollScene>

      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">

          {/* 1) HERO SECTION */}
          <PageHero
            eyebrow="ai virtual assistant services"
            title="AI Virtual Assistant Services"
            description="Work Smarter, Not Harder. Let Our AI Virtual Assistants Handle the Tasks That Slow You Down."
          />

          <div className="text-center -mt-8 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2) INTRO SECTION */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="space-y-6">
              <p className="text-base sm:text-lg text-white leading-relaxed">
                While running a business, you need to perform dozens of tasks every day. Email management, CRM updates, scheduling appointments and replying to customer queries, data archiving and administrative tasks consume valuable time. All these tasks are vital, but they can take you away from growing your business. What you will find is that numerous business owners are drowning in repetitive work. They have to work longer hours, hire employees before they can afford to support them or attempt to do it all themselves. That is where our AI Virtual Assistant Services come in.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Virtual Assistant Services Experts offer virtual assistant services with professional and experienced human virtual assistants equipped with AI technology that helps them work faster, handle tasks better and deliver better results. From administrative assistance and customer service to CRM management and remote virtual assistants for handling ongoing projects, we help you save time and boost productivity.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                We are a reliable virtual assistant agency that harnesses the power of modern AI technology and a talented team to provide businesses with trusted virtual assistant services without the expense of hiring additional full-time personnel.
              </p>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR AI VIRTUAL ASSISTANTS CAN HELP WITH */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="Capabilities & Delegation"
                title={
                  <>
                    What Our AI Virtual Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Delegating these essential day-to-day operations enables you to focus on strategy and revenue growth."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {capabilities.map((cap, i) => {
                  const CapIcon = cap.icon
                  return (
                    <motion.div
                      key={cap.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group rounded-2xl bg-white/[0.03] border border-white/8 p-6 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col items-start"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] group-hover:scale-110 group-hover:bg-[#4DE8DC]/20 transition-all duration-300 mb-4">
                        <CapIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors leading-snug">
                        {cap.title}
                      </h3>
                    </motion.div>
                  )
                })}
              </div>

              {/* Sub CTA Block */}
              <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-[#4DE8DC]/20 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-[#EAF6F5] mb-3">
                  Ready to hire a virtual assistant?
                </h3>
                <p className="text-sm sm:text-base text-white mb-6 leading-relaxed">
                  Speak with a member of our team and find out how many hours of work you could save each week with a dedicated virtual assistant that utilizes AI-powered tools.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(77,232,220,0.5)] transition-all"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ContentPanel>
          </section>

          {/* 4) RUNNING A BUSINESS IS HARD ENOUGH */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <SectionHeading
                eyebrow="The Challenge"
                title={
                  <>
                    Running a Business Is Hard Enough. <span className="flux-word">Managing Every Task Yourself Makes It Harder.</span>
                  </>
                }
              />
              <div className="mt-6">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Most business owners do not struggle with finding work. They struggle with finding enough time to get everything done. Emails pile up. Customer inquiries wait for replies. Administrative work keeps growing. CRM records become outdated. Appointments need scheduling, and important follow-ups often get missed. Many businesses end up in one of two situations. The first is trying to handle everything internally. The business owner or someone on the team spends hours every day managing repetitive tasks. The second is hiring full-time employees for work that does not always require a permanent position. But that is not everyone&apos;s idea of the best approach. Reliable support from professionals with the ability to handle day-to-day business operations and who leverage AI tools for improved efficiency is what businesses truly desire. That is exactly what our virtual assistant services provide.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 5) A DEDICATED AI VIRTUAL ASSISTANT FOR YOUR BUSINESS */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <SectionHeading
                eyebrow="The Solution"
                title={
                  <>
                    A Dedicated AI Virtual Assistant <span className="flux-word">for Your Business</span>
                  </>
                }
              />
              <div className="mt-6">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Imagine your AI Virtual Assistant is a part of your staff! You are no longer dealing with repetitive CRM management tasks, calendars and emails all day long. You have someone on your team handling those tasks and AI helps them work with greater speed, accuracy and efficiency. Unlike AI software, our support staff comes with a combination of expertise and powerful AI capabilities to provide accurate business support. In addition to working with large and established companies, we can also be your preferred support partner for smaller service firms, startups and growing companies looking for flexible assistance without hiring an additional full-time employee.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) FEATURE BLOCKS */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="Specialized Operations"
                title={
                  <>
                    Tailored Virtual Support <span className="flux-word">Modules</span>
                  </>
                }
                description="Comprehensive assistance engineered to streamline your specific operational workflows."
              />

              <div className="space-y-6 mt-10 max-w-5xl mx-auto">
                {featureBlocks.map((block, i) => {
                  const BlockIcon = block.icon
                  return (
                    <motion.div
                      key={block.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group rounded-2xl bg-white/[0.03] border border-white/8 p-8 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
                    >
                      <div className="flex items-start gap-5 grow">
                        <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0 group-hover:scale-110 group-hover:bg-[#4DE8DC]/20 transition-all duration-300 mt-1">
                          <BlockIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="inline-block text-[11px] font-mono tracking-widest text-[#4DE8DC] uppercase mb-1">
                            {block.badge}
                          </div>
                          <h3 className="text-xl font-bold text-[#EAF6F5] mb-2 group-hover:text-[#4DE8DC] transition-colors">
                            {block.title}
                          </h3>
                          <p className="text-sm sm:text-base text-white leading-relaxed">
                            {block.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>

          {/* 7) WHY BUSINESSES CHOOSE OUR AI VIRTUAL ASSISTANTS */}
          <section className="py-12">
            <ContentPanel>
              <SectionHeading
                align="center"
                eyebrow="Proven Value"
                title={
                  <>
                    Why Businesses Choose <span className="flux-word">Our AI Virtual Assistants</span>
                  </>
                }
                description="The biggest benefit isn't simply getting help with tasks. It is getting your time back while working smarter."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {whyChooseUs.map((item, i) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group rounded-2xl bg-white/[0.03] border border-white/8 p-8 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] group-hover:scale-110 group-hover:bg-[#4DE8DC]/20 transition-all duration-300 mb-6">
                          <ItemIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#EAF6F5] mb-3 group-hover:text-[#4DE8DC] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>

          {/* 8) HOW OUR PROCESS WORKS */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Seamless Onboarding"
                  title={
                    <>
                      How Our <span className="flux-word">Process Works</span>
                    </>
                  }
                  description="We keep things simple."
                />
              </div>

              <div className="pl-4 sm:pl-0">
                {processSteps.map((step, i) => (
                  <TimelineNode
                    key={step.title}
                    year={step.year}
                    title={step.title}
                    description={step.description}
                    index={i}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* 9) CLOSING SECTION 1 */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Focus On What Matters"
                title={
                  <>
                    Focus on Growing Your Business. <span className="flux-word">We&apos;ll Handle the Rest.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                You thought about starting a business where your ideas and products could succeed and create something valuable. It should not feel or look like you are spending every day managing your inbox, bookkeeping, organizing meetings, scheduling or just handling routine tasks like daily administrative work. Our Virtual Assistant Company offers AI business support to help you save time, boost productivity and run your company more efficiently. If you need a virtual assistant for small business or a remote virtual assistant for your small business, or a dedicated virtual assistant for your small business, come to us for support.
              </p>
            </ContentPanel>
          </section>

          {/* 10) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Take The Next Step"
                title="Let's Build a More Efficient Business Together"
                description="Want to hire a Virtual Assistant? Request a consultation and find out how AI Virtual Assistant Services can streamline your business operations, save you time and help you grow your business for years to come."
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

          {/* 11) FAQ SECTION */}
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
                  description="Everything you need to know about our AI Virtual Assistant Services."
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
