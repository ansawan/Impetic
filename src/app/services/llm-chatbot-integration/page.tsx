'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { MessageSquareCode, Bot, Database, Workflow, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), { ssr: false })
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), { ssr: false })

export default function LLMChatbotIntegrationPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: MessageSquareCode, title: 'OpenAI, Anthropic & Llama API integrations' },
    { icon: Bot, title: 'Custom conversational UI & widget builds' },
    { icon: Database, title: 'Real-time database & CRM context fetching' },
    { icon: Workflow, title: 'Tool-calling & multi-step function execution' },
    { icon: ShieldCheck, title: 'Prompt injection defense & guardrails' },
  ]

  const featureBlocks = [
    { icon: MessageSquareCode, title: 'Production-Grade Conversational AI', description: 'Wire large language models directly into your business database and workflows with sub-second response times.', badge: 'LLM Engineering' },
  ]

  const processSteps = [
    { step: '01', title: 'Context Audit', description: 'Map product data and user query paths.' },
    { step: '02', title: 'API Integration', description: 'Connect LLM APIs with tool-calling capabilities.' },
    { step: '03', title: 'Eval & Guardrails', description: 'Test edge cases and deploy production guardrails.' },
  ]

  const faqs = [{ q: 'Which LLMs do you support?', a: 'We support OpenAI GPT-4o, Anthropic Claude 3.5, Meta Llama 3, Mistral, and custom open-weight models.' }]

  return (
    <>
      <ScrollScene keyframes={[{ t: 0, pos: [0, 0, 8.5], look: [0, 0, 0] }, { t: 1, pos: [0, 0, 6.5], look: [0, 0, -1] }]}><NeuralGraphScene /></ScrollScene>
      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero eyebrow="LLM &amp; CHATBOT INTEGRATION" title={<>LLM &amp; Chatbot <span className="flux-word">Integration</span></>} description="Production-Grade Conversational AI Wired Into Your Product." />
          <div className="text-center -mt-6 mb-16"><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase">Book Consultation <ArrowRight className="w-4 h-4" /></Link></div>
          <section className="py-12"><ContentPanel className="max-w-4xl mx-auto"><p className="text-base sm:text-lg text-white">Embed intelligent conversational interfaces wired into your real business data, databases, and APIs.</p></ContentPanel></section>
          <section className="py-12"><ContentPanel className="max-w-5xl mx-auto"><SectionHeading align="center" eyebrow="Capabilities" title={<>What We <span className="flux-word">Wire</span></>} /><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{capabilities.map((c, i) => (<div key={i} className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] flex items-center gap-4"><c.icon className="w-5 h-5 text-[#4DE8DC]" /><span className="text-sm font-semibold">{c.title}</span></div>))}</div></ContentPanel></section>
          <section className="py-12"><div className="max-w-5xl mx-auto space-y-8">{featureBlocks.map((b, i) => (<ContentPanel key={i}><h3 className="text-xl font-bold">{b.title}</h3><p className="text-base text-white mt-2">{b.description}</p></ContentPanel>))}</div></section>
          <section className="py-12"><ContentPanel className="max-w-5xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">{processSteps.map((s, i) => (<TimelineNode key={i} index={i} year={s.step} title={s.title} description={s.description} isLast={i === processSteps.length - 1} />))}</div></ContentPanel></section>
          <section className="my-16 max-w-4xl mx-auto"><ContentPanel className="text-center"><SectionHeading align="center" eyebrow="Take Action" title="Deploy Production LLMs Today" description="Schedule a technical consultation with our AI architects." /><div className="mt-8"><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase">Get Started <ArrowRight className="w-4 h-4" /></Link></div></ContentPanel></section>
          <section className="py-12"><ContentPanel className="max-w-4xl mx-auto">{faqs.map((f, i) => (<div key={i} className="p-6 border border-white/8 bg-white/[0.02] rounded-2xl mb-4"><h4 className="font-semibold">{f.q}</h4><p className="text-sm text-white mt-2">{f.a}</p></div>))}</ContentPanel></section>
        </main>
      </div>
    </>
  )
}
