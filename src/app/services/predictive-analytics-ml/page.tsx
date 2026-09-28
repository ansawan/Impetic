'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { LineChart, BarChart, Cpu, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), { ssr: false })
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), { ssr: false })

export default function PredictiveAnalyticsMLPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const capabilities = [
    { icon: LineChart, title: 'Customer churn & lifetime value forecasting' },
    { icon: BarChart, title: 'Lead scoring & conversion likelihood models' },
    { icon: Cpu, title: 'Custom classification & regression pipelines' },
  ]

  const featureBlocks = [
    { icon: LineChart, title: 'Custom Machine Learning Models', description: 'Train machine learning models on your proprietary data to uncover actionable revenue intelligence.', badge: 'Predictive ML' },
  ]

  const processSteps = [
    { step: '01', title: 'Data Cleaning', description: 'Aggregate and clean historical dataset features.' },
    { step: '02', title: 'Model Training', description: 'Train and validate predictive models against real-world test sets.' },
    { step: '03', title: 'API Deployment', description: 'Deploy low-latency scoring API endpoints.' },
  ]

  const faqs = [{ q: 'What data is required for predictive modeling?', a: 'Predictive models require historical behavioral, transactional, or operational data points with target outcome labels.' }]

  return (
    <>
      <ScrollScene keyframes={[{ t: 0, pos: [0, 0, 8.5], look: [0, 0, 0] }, { t: 1, pos: [0, 0, 6.5], look: [0, 0, -1] }]}><NeuralGraphScene /></ScrollScene>
      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero eyebrow="PREDICTIVE ANALYTICS &amp; ML MODELS" title={<>Predictive Analytics <span className="flux-word">&amp; ML Models</span></>} description="Turn Historical Data into Accurate Revenue &amp; Churn Forecasts." />
          <div className="text-center -mt-6 mb-16"><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase">Book Consultation <ArrowRight className="w-4 h-4" /></Link></div>
          <section className="py-12"><ContentPanel className="max-w-4xl mx-auto"><p className="text-base sm:text-lg text-white">Custom machine learning models trained specifically on your company's proprietary data.</p></ContentPanel></section>
          <section className="py-12"><ContentPanel className="max-w-5xl mx-auto"><SectionHeading align="center" eyebrow="Capabilities" title={<>Predictive <span className="flux-word">Models</span></>} /><div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">{capabilities.map((c, i) => (<div key={i} className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] flex items-center gap-4"><c.icon className="w-5 h-5 text-[#4DE8DC]" /><span className="text-sm font-semibold">{c.title}</span></div>))}</div></ContentPanel></section>
          <section className="py-12"><div className="max-w-5xl mx-auto space-y-8">{featureBlocks.map((b, i) => (<ContentPanel key={i}><h3 className="text-xl font-bold">{b.title}</h3><p className="text-base text-white mt-2">{b.description}</p></ContentPanel>))}</div></section>
          <section className="py-12"><ContentPanel className="max-w-5xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">{processSteps.map((s, i) => (<TimelineNode key={i} index={i} year={s.step} title={s.title} description={s.description} isLast={i === processSteps.length - 1} />))}</div></ContentPanel></section>
          <section className="my-16 max-w-4xl mx-auto"><ContentPanel className="text-center"><SectionHeading align="center" eyebrow="Take Action" title="Deploy Predictive ML Models" description="Contact our data science team." /><div className="mt-8"><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase">Get Started <ArrowRight className="w-4 h-4" /></Link></div></ContentPanel></section>
          <section className="py-12"><ContentPanel className="max-w-4xl mx-auto">{faqs.map((f, i) => (<div key={i} className="p-6 border border-white/8 bg-white/[0.02] rounded-2xl mb-4"><h4 className="font-semibold">{f.q}</h4><p className="text-sm text-white mt-2">{f.a}</p></div>))}</ContentPanel></section>
        </main>
      </div>
    </>
  )
}
