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
  Briefcase,
  Building,
  Home,
  Scale,
  Megaphone,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { ServiceCard } from '@/components/cards/ServiceCard'
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

export default function VirtualAssistantHubPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Mail, title: 'Email and calendar management' },
    { icon: Workflow, title: 'Administrative support' },
    { icon: Headphones, title: 'Customer service assistance' },
    { icon: Database, title: 'CRM management' },
    { icon: FileSpreadsheet, title: 'Data entry and reporting' },
    { icon: Clock, title: 'Appointment scheduling' },
    { icon: UserPlus, title: 'Lead generation and follow-up' },
    { icon: Share2, title: 'Social media support' },
    { icon: Search, title: 'Research and documentation' },
    { icon: Sliders, title: 'Process management and organization' },
  ]

  const exploreServices = [
    {
      icon: Sparkles,
      title: 'AI Virtual Assistant Services',
      description: 'Combining experienced human virtual assistants with AI technology to save time and boost productivity.',
      tags: ['AI Assistants', 'Automation', '24/7 Support'],
      href: '/ai-virtual-assistant-services',
    },
    {
      icon: Briefcase,
      title: 'Executive Assistants',
      description: 'Dedicated remote executive assistants for calendar, inbox, project management, and administrative support.',
      tags: ['Inbox Zero', 'Scheduling', 'Admin'],
      href: '/executive-assistants',
    },
    {
      icon: UserPlus,
      title: 'Lead Generation Virtual Assistant Services',
      description: 'Find new prospects, build verified contact lists, and schedule lead meetings to fill your sales pipeline.',
      tags: ['Prospecting', 'Outreach', 'Pipeline'],
      href: '/lead-generation-services',
    },
    {
      icon: Database,
      title: 'CRM and Automation Virtual Assistant Services',
      description: 'Organize customer data, build follow-up workflows, clean databases, and optimize CRM operations.',
      tags: ['CRM', 'Workflows', 'Database'],
      href: '/crm-automation-services',
    },
    {
      icon: Users,
      title: 'Client Onboarding Virtual Assistant Services',
      description: 'Streamline client intake, document collection, account setup, and onboarding workflows.',
      tags: ['Onboarding', 'Intake', 'SLA'],
      href: '/client-onboarding-services',
    },
    {
      icon: Building,
      title: 'Real Estate Virtual Assistant Services',
      description: 'MLS listing management, transaction coordination, client follow-ups, and property marketing.',
      tags: ['Real Estate', 'MLS', 'Transactions'],
      href: '/real-estate-virtual-assistant',
    },
    {
      icon: Home,
      title: 'Home Service Virtual Assistant Services',
      description: 'Dispatching, estimate follow-ups, customer inquiries, and schedule management for home services.',
      tags: ['Dispatching', 'Scheduling', 'Field Services'],
      href: '/home-service-virtual-assistant',
    },
    {
      icon: Building,
      title: 'Property Management Virtual Assistant Services',
      description: 'Tenant screening, maintenance request tracking, lease administration, and rent collection support.',
      tags: ['Property Mgmt', 'Leasing', 'Tenant Care'],
      href: '/property-management-virtual-assistant',
    },
    {
      icon: Scale,
      title: 'Legal Virtual Assistant Services',
      description: 'Client intake, court calendar tracking, legal document formatting, and administrative support for law firms.',
      tags: ['Legal Intake', 'Formatting', 'Docketing'],
      href: '/legal-virtual-assistant',
    },
    {
      icon: Sliders,
      title: 'Marketing Operations Virtual Assistant Services',
      description: 'Campaign deployment, asset organization, tracking setup, and marketing automation support.',
      tags: ['Marketing Ops', 'Campaigns', 'Assets'],
      href: '/marketing-operations-services',
    },
    {
      icon: Megaphone,
      title: 'Virtual Assistant for Marketing Agencies',
      description: 'Scalable white-label assistant support for client accounts, reporting, and campaign execution.',
      tags: ['Agencies', 'White-Label', 'Scaling'],
      href: '/virtual-assistant-marketing-agencies',
    },
  ]

  const featureBlocks = [
    {
      icon: Workflow,
      title: 'Administrative Support',
      description:
        'Administrative work is necessary, but it often takes valuable time away from high-impact activities. We have virtual assistant services available for all your daily needs to keep the business organised and efficient.',
      badge: 'Ops Efficiency',
    },
    {
      icon: Mail,
      title: 'Email and Calendar Management',
      description:
        'Managing communication and schedules can quickly become overwhelming. We help organize inboxes, coordinate meetings, schedule appointments, and ensure important tasks don\'t get missed.',
      badge: 'Inbox & Schedule Zero',
    },
    {
      icon: Headphones,
      title: 'Customer Support Assistance',
      description:
        'Providing a great customer experience requires consistent communication. Our remote virtual assistant professionals help manage customer inquiries, respond to requests, and provide ongoing support to your clients.',
      badge: 'Customer Care',
    },
    {
      icon: Database,
      title: 'CRM and Lead Management',
      description:
        'Leads and customer information need to be properly organized and maintained. We help manage your CRM, update records, track opportunities, and support follow-up processes.',
      badge: 'Pipeline Control',
    },
    {
      icon: Search,
      title: 'Research and Project Support',
      description:
        'Business decisions often require research and preparation. Our assistants help gather information, organize documents, and support projects that keep your business moving forward.',
      badge: 'Strategic Support',
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Spend Less Time on Administrative Work',
      description:
        'Repetitive tasks consume valuable hours every week. Delegating those responsibilities allows you to focus on growing your business.',
    },
    {
      icon: TrendingUp,
      title: 'Improve Productivity',
      description:
        'Having dedicated support means important tasks get completed consistently and efficiently.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Operational Stress',
      description:
        'You no longer need to manage every small detail yourself. Our virtual assistants help create more structure and organization in your daily operations.',
    },
    {
      icon: Sliders,
      title: 'Get Flexible Support',
      description:
        'Whether you need part-time assistance or full-time support, our services can scale alongside your business.',
    },
    {
      icon: DollarSign,
      title: 'Save Money Compared to Hiring In-House',
      description:
        'Hiring a full-time employee comes with significant costs. Working with an offshore virtual assistant gives you access to professional support without the expense of additional overhead.',
    },
    {
      icon: Award,
      title: 'Get the Most From Your Support Team',
      description:
        'Businesses choose our team because we provide some of the best virtual assistant services available for companies that need reliable, long-term support.',
    },
    {
      icon: CheckCircle2,
      title: 'Focus on Growth',
      description:
        'The more time you spend on high-value activities, the more opportunities you create for your business. Delegating operational tasks allows you to spend more time leading and less time managing day-to-day work.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, your goals, and the type of support you need.',
    },
    {
      step: '02',
      title: 'Identify Your Requirements',
      description: 'Our team determines which tasks and responsibilities can be delegated to a virtual assistant.',
    },
    {
      step: '03',
      title: 'Match You With the Right Assistant',
      description: 'We pair you with a dedicated virtual assistant who fits your business needs and working style.',
    },
    {
      step: '04',
      title: 'Onboarding and Training',
      description: 'We establish processes, communication methods, and priorities to ensure a smooth transition.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'Your virtual assistant continues supporting your business while adapting to your changing needs.',
    },
  ]

  const faqs = [
    {
      q: 'What is a Virtual Assistant?',
      a: 'A Virtual Assistant is a remote professional who provides administrative, operational, and business support services to help companies save time and improve efficiency.',
    },
    {
      q: 'Why should I hire a virtual assistant?',
      a: 'Businesses hire a virtual assistant to reduce administrative workload, improve efficiency, and gain professional support without the cost of hiring additional full-time employees.',
    },
    {
      q: 'What types of businesses do you work with?',
      a: 'We work with agencies, consultants, service businesses, online businesses, and growing companies across a wide range of industries.',
    },
    {
      q: 'Can I hire a dedicated virtual assistant?',
      a: 'Yes. We provide a dedicated virtual assistant who works closely with your business and becomes an extension of your team.',
    },
    {
      q: 'Are your assistants remote?',
      a: 'Yes. Our team consists of experienced remote virtual assistant professionals who provide support from offshore locations.',
    },
    {
      q: 'What tasks can a virtual assistant handle?',
      a: 'Our assistants can help with administrative work, customer support, CRM management, scheduling, research, lead management, reporting, and many other business tasks.',
    },
    {
      q: 'Is this service suitable for small businesses?',
      a: 'Absolutely. Many of our clients are looking for a virtual assistant for small business operations without the cost of hiring full-time employees.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'After an initial consultation and understanding your requirements, onboarding can typically begin within a few days.',
    },
    {
      q: 'Do I need to provide training?',
      a: 'We handle onboarding and work with you to understand your processes, making the transition as smooth as possible.',
    },
    {
      q: 'Why choose VA Hub Pro?',
      a: 'As a leading virtual assistant agency and virtual assistant company, we provide reliable, scalable support designed to help businesses save time, improve productivity, and focus on growth.',
    },
  ]

  const hubSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Virtual Assistant Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Stop Doing Everything Yourself. Let Us Handle the Tasks That Slow You Down. Dedicated virtual assistant solutions for administration, customer service, CRM, and business operations.',
    areaServed: 'Worldwide',
    serviceType: 'Virtual Assistant Services Hub',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
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
            eyebrow="VIRTUAL ASSISTANT SOLUTIONS"
            title={
              <>
                Virtual <span className="flux-word">Assistant</span>
              </>
            }
            description="Stop Doing Everything Yourself. Let Us Handle the Tasks That Slow You Down."
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
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
              <p>Running a business means wearing too many hats.</p>
              <p>
                Emailing, data upkeep, customer inquiries, calendar management, data organization, and appointment booking, not to mention administrative duties, are labor-intensive and time-consuming. Time that might be invested in building your company.
              </p>
              <p>
                The truth is, repetitive tasks overpower most business owners. They recruit employees before the time is right, work excessively long hours or attempt to do it all themselves.
              </p>
              <p className="font-semibold text-[#4DE8DC] text-xl">
                This is where our Virtual Assistant solutions come in.
              </p>
              <p>
                VA Hub Pro offers virtual assistant services that assist businesses in managing their everyday operations, automating time-consuming tasks, and enhancing productivity. You can have a virtual assistant provide administration, customer service, or general assistance, or even help with projects you need done on an ongoing basis, and our remote virtual assistants make it effortless to get it all done and stay dedicated to what matters most.
              </p>
              <p>
                We think support can be great if it is easy, reliable, and inexpensive. That is why we are one of the best business virtual assistant services providers, saving your valuable time with a cost-effective approach and effective results.
              </p>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR VIRTUAL ASSISTANTS CAN HELP WITH (10 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Capabilities & Delegation"
                title={
                  <>
                    What Our Virtual Assistants <span className="flux-word">Can Help With</span>
                  </>
                }
                description="Delegating essential day-to-day administrative and operational responsibilities to keep your business running smoothly."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-10">
                {capabilities.map((cap, idx) => {
                  const IconComp = cap.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group rounded-2xl bg-white/[0.03] border border-white/8 p-5 backdrop-blur-xl hover:border-[#4DE8DC]/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col items-start"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] group-hover:scale-110 group-hover:bg-[#4DE8DC]/20 transition-all duration-300 mb-3">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors leading-snug">
                        {cap.title}
                      </h3>
                    </motion.div>
                  )
                })}
              </div>
            </ContentPanel>
          </section>

          {/* 4) NEW SECTION — "Explore Our Virtual Assistant Services" (11 Card Grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-6xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Specialized VA Services"
                title={
                  <>
                    Explore Our <span className="flux-word">Virtual Assistant Services</span>
                  </>
                }
                description="Discover our full suite of tailored virtual assistant solutions built for specific business models and operational needs."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {exploreServices.map((service, idx) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    index={idx}
                    href={service.href}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* 5) MID CTA */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Take The First Step"
                title="Ready to hire a virtual assistant?"
                description="Talk to our team and discover how a dedicated virtual assistant can save hours of work every week."
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

          {/* 6) PROBLEM SECTION */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <SectionHeading
                eyebrow="The Operational Bottleneck"
                title={
                  <>
                    Running a Business Is Hard Enough. <span className="flux-word">Managing Every Task Yourself Makes It Harder.</span>
                  </>
                }
              />
              <div className="mt-6">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Most business owners don't struggle with finding things to do. They struggle with finding enough time to do everything. Administrative work piles up. Emails go unanswered. Customer requests get delayed. Follow-ups are forgotten. Important tasks continue to compete for attention. Many companies end up in one of two situations. The first is trying to manage everything internally. The business owner or someone in his team takes care of several dozen repetitive tasks every day. The second is the employment of full-time workers for work that would not need another full-time position in the company. Both are less than perfect. Reliable business support is needed from someone who is able to take ownership of critical daily tasks and ensure smooth operations. Our virtual assistant services are just that.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 7) DEDICATED VA SECTION */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <SectionHeading
                eyebrow="Extension Of Your Team"
                title={
                  <>
                    A Dedicated Virtual Assistant <span className="flux-word">for Your Business</span>
                  </>
                }
              />
              <div className="mt-6">
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  Think of a dedicated virtual assistant as an extension of your team. You no longer have to do administrative work, answer requests or work in a repetitive manner during the day, but someone else does that work for you. We're a trusted Virtual Assistant agency offering services for Agencies, service businesses, consultants and businesses in growth mode seeking reliable working help without engaging more employees. We assist businesses in saving time, maintaining organization, and enhancing productivity to focus on business growth.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 8) FEATURE BLOCKS (5 blocks) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Core Services"
                title={
                  <>
                    Core Virtual Assistant <span className="flux-word">Capabilities</span>
                  </>
                }
                description="Tailored support modules designed to keep your business organized, responsive, and efficient."
              />

              <div className="space-y-6 mt-10">
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

          {/* 9) WHY BUSINESSES CHOOSE OUR VIRTUAL ASSISTANTS (7 Grid Items) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Key Benefits"
                title={
                  <>
                    Why Businesses Choose <span className="flux-word">Our Virtual Assistants</span>
                  </>
                }
                description="The biggest benefit isn't simply getting help with tasks. It's getting your time back."
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

          {/* 10) HOW OUR PROCESS WORKS (5 steps) */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel>
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="Onboarding Framework"
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
                    year={step.step}
                    title={step.title}
                    description={step.description}
                    index={i}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* 11) CLOSING SECTION */}
          <section className="py-12 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Focus On Growth"
                title={
                  <>
                    Focus on Growing Your Business. <span className="flux-word">We&apos;ll Handle the Tasks.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                You started your business to build something meaningful. But spending your days buried in emails, scheduling, data entry, and administrative work makes it difficult to focus on growth. Our virtual assistant company helps businesses reclaim time, improve productivity, and create more efficient operations. Whether you need a virtual assistant for small business operations, ongoing support from a remote virtual assistant, or a fully dedicated virtual assistant to become part of your team, we're here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 12) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Get Started"
                title="Let's Build a More Efficient Business Together"
                description="Ready to hire a virtual assistant? Schedule a free consultation and discover how our virtual assistant services can simplify your operations and support long-term growth."
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

          {/* 13) FAQ SECTION */}
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
                  description="Everything you need to know about our Virtual Assistant Services."
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
