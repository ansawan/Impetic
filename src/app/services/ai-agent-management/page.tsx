'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Bot,
  Activity,
  LineChart,
  Workflow,
  BookOpen,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Headphones,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  ChevronDown,
  Clock,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
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

export default function AIAgentManagementPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: Bot, title: 'AI agent deployment and setup' },
    { icon: Activity, title: 'AI agent monitoring and maintenance' },
    { icon: LineChart, title: 'Performance tracking and optimization' },
    { icon: Workflow, title: 'Workflow integration and management' },
    { icon: BookOpen, title: 'Knowledge base updates' },
    { icon: Sparkles, title: 'Prompt and response improvements' },
    { icon: ShieldCheck, title: 'AI automation oversight' },
    { icon: UserCheck, title: 'Lead qualification agents' },
    { icon: Headphones, title: 'Customer support agents' },
    { icon: Database, title: 'CRM and business system integrations' },
    { icon: Cpu, title: 'Multi-agent workflow management' },
    { icon: Layers, title: 'Ongoing AI system support' },
  ]

  const featureBlocks = [
    {
      icon: Bot,
      title: 'AI Agent Deployment',
      description:
        'Getting an AI agent live is only the first step. We ensure we deploy agents the right way, link them to your business systems and ensure they are ready to support your business from day one.',
      badge: 'Seamless Deployment',
    },
    {
      icon: Activity,
      title: 'AI Agent Monitoring',
      description:
        'Performance may vary from time to time. We monitor your agents, identify issues early, and make adjustments before they impact customers or business operations.',
      badge: 'Proactive Telemetry',
    },
    {
      icon: Workflow,
      title: 'Workflow Integration',
      description:
        'AI agents are not just tools to be implemented on their own but are best utilized when integrated with existing systems. We integrate agents with CRM platforms and communication tools, databases and other business applications for smooth workflows.',
      badge: 'Deep Integration',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base Management',
      description:
        'An AI agent is only as good as the information it has access to. We help maintain and update knowledge sources so your agents continue providing accurate and relevant responses.',
      badge: 'Knowledge Engine',
    },
    {
      icon: LineChart,
      title: 'Performance Optimization',
      description:
        'AI systems require ongoing improvement. We review conversations, identify opportunities, refine prompts, and optimize workflows to improve outcomes over time.',
      badge: 'Continuous Tuning',
    },
  ]

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: 'Keep Your AI Agents Performing',
      description:
        'Regular monitoring and maintenance help ensure your agents remain accurate and effective.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description:
        'Instead of managing AI systems yourself, you can focus on growing your business while we handle the technical details.',
    },
    {
      icon: Headphones,
      title: 'Improve Customer Experience',
      description:
        'Well-managed AI agents provide faster, more accurate responses and create better customer interactions.',
    },
    {
      icon: AlertTriangle,
      title: 'Reduce Errors',
      description:
        'Proactive monitoring helps identify problems before they affect customers, leads, or internal operations.',
    },
    {
      icon: TrendingUp,
      title: 'Get More Value From Your AI Investment',
      description:
        'Many businesses underutilize their AI tools. We help maximize the performance and value of the systems you\'ve already invested in.',
    },
    {
      icon: Cpu,
      title: 'Scale More Efficiently',
      description:
        'As your business grows, your AI systems can grow with it. Our management services help support long-term scalability without creating additional workload.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: "We learn about your business, goals, and how you're currently using AI agents.",
    },
    {
      step: '02',
      title: 'System Review',
      description: 'Our team evaluates your existing AI agents, workflows, automations, and integrations.',
    },
    {
      step: '03',
      title: 'Identify Opportunities',
      description: 'We look for performance issues, workflow gaps, and areas where improvements can be made.',
    },
    {
      step: '04',
      title: 'Deployment & Management',
      description: 'We deploy, manage, monitor, and maintain your AI agents based on your business needs.',
    },
    {
      step: '05',
      title: 'Continuous Optimization',
      description:
        'Technology changes quickly. We continuously review performance and make improvements to keep your AI systems running efficiently.',
    },
  ]

  const faqs = [
    {
      q: 'What is an AI agent?',
      a: 'An AI agent is a software system that can perform tasks, answer questions, automate processes, and interact with users based on instructions and business data.',
    },
    {
      q: 'What does an AI agent management service do?',
      a: 'An AI agent management service helps deploy, monitor, maintain, and optimize AI agents to ensure they continue performing effectively over time.',
    },
    {
      q: 'Do AI agents require ongoing management?',
      a: 'Yes. AI agents often need updates, monitoring, workflow adjustments, and performance improvements to remain accurate and useful.',
    },
    {
      q: 'Can you manage AI agents we already have?',
      a: 'Absolutely. Many clients hire us to improve and maintain AI agents that are already deployed.',
    },
    {
      q: 'What types of AI agents do you support?',
      a: 'We support customer service agents, lead qualification agents, appointment booking agents, internal business assistants, workflow automation agents, and custom AI solutions.',
    },
    {
      q: 'Can you connect AI agents to our CRM and software tools?',
      a: 'Yes. We help integrate AI agents with CRM systems, communication platforms, databases, and other business applications.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'After an initial consultation and system review, onboarding can typically begin within a few days.',
    },
    {
      q: 'Why outsource AI agent management?',
      a: 'Outsourcing gives you access to experienced AI support without the cost and commitment of hiring a full-time specialist. It also ensures your AI systems continue performing at their best while your team focuses on core business activities.',
    },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Agent Management & Deployment Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Professional AI Agent Management and Deployment services to deploy, monitor, update, and optimize autonomous AI agents and workflows.',
    areaServed: 'Worldwide',
    serviceType: 'AI & Machine Learning Management Services',
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
            eyebrow="AI AGENT MANAGEMENT & DEPLOYMENT"
            title={
              <>
                AI Agent Management <span className="flux-word">&amp; Deployment</span>
              </>
            }
            description="Stop Setting Up AI Agents and Hoping They Keep Working. Let Us Manage Them for You."
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
                  AI agents can save your business precious hours by dealing with your clients, scheduling tasks, screening leads and assisting with day-to-day operations.
                </p>
                <p>
                  Creating an AI agent is just the initial step.
                </p>
                <p>
                  Truth is, AI agents require continuous monitoring, updates, testing, and optimization to maintain high performance. But if it's not managed correctly, answers become erratic, processes fall apart, and productivity begins to drop.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That's where our AI agent management service comes in.
                </p>
                <p>
                  Our aim at VA Hub Pro is to empower companies to seamlessly deploy, manage, monitor, and optimize their AI agents, ensuring they remain effective well after the initial setup. No matter which use cases you are implementing with AI, we ensure your agents remain effective, accurate and contributing to your business objectives.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 3) WHAT OUR AI AGENT MANAGEMENT SERVICES CAN HELP WITH (12 icon grid) */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Full Capability Overview"
                title={
                  <>
                    What Our AI Agent Management Services <span className="flux-word">Can Help With</span>
                  </>
                }
                description="End-to-end AI agent deployment, monitoring, prompt tuning, RAG knowledge maintenance, and system integrations."
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
                eyebrow="Maximize AI ROI"
                title="Ready to Get More From Your AI Agents?"
                description="Talk to our team and discover how professional AI agent management can help improve performance, reduce errors, and save valuable time."
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
                eyebrow="Operational Reality"
                title={
                  <>
                    AI Agents Don&apos;t <span className="flux-word">Manage Themselves.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Many businesses invest in AI agents expecting them to run smoothly on their own. Unfortunately, that's rarely the case. Customer questions change. Business processes evolve. New products and services are introduced. AI agents need regular updates to stay accurate and useful. Without proper management, businesses often face problems such as: Incorrect responses, Broken workflows, Poor customer experiences, Missed leads, Outdated information, Inconsistent performance.
                </p>
                <p>
                  Many companies end up in one of two situations. The first is to do everything in-house. Team members are spending hours on troubleshooting and maintenance of the AI system. The second one is employing costly experts when things go wrong. There isn't an optimal answer.
                </p>
                <p>
                  Businesses need continuous assistance from AI experts, who recognize how to maintain these systems in peak condition. That's exactly what our AI agent management service provides.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* 6) DEDICATED TEAM SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Dedicated Operations"
                title={
                  <>
                    A Dedicated Team for <span className="flux-word">Your AI Agents</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Consider us to be your whole AI operations team. You no longer have to check performance, update prompts, fix workflows, or keep an eye on outputs all the time, as the experienced pros are on top of things.
                </p>
                <p>
                  Our team provides support to businesses that are leveraging AI agents to serve their customers (CSC), generate leads, schedule appointments, streamline workflows, and automate operations. We help you ensure that the AI systems you integrate will keep assisting your business, rather than adding to the burden.
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
                    Specialized <span className="flux-word">AI Management Capabilities</span>
                  </>
                }
                description="Targeted solutions for deployment, real-time monitoring, CRM workflow integration, and knowledge updates."
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
                description="The biggest benefit isn't simply having AI agents. It's making sure they continue delivering results."
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
                eyebrow="Focus On Core Business"
                title={
                  <>
                    Focus on Growing Your Business. <span className="flux-word">We&apos;ll Handle Your AI Agents.</span>
                  </>
                }
              />
              <p className="mt-6 text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                You invested in AI to improve efficiency, automate processes, and create better customer experiences. But AI agents still need ongoing management. Our AI agent management service helps businesses maintain reliable, effective AI systems that continue supporting growth day after day. Whether you need AI deployment, workflow integration, monitoring, optimization, or long-term support, we're here to help.
              </p>
            </ContentPanel>
          </section>

          {/* 11) FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Start Today"
                title="Let's Build Smarter AI Systems Together"
                description="Schedule a free consultation and discover how professional AI agent management can help improve performance, reduce operational workload, and support long-term business growth."
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
                  description="Everything you need to know about AI Agent Management & Deployment Services."
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
