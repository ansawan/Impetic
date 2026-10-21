'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, ChevronDown, type LucideIcon } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), { ssr: false })
const NeuralGraphScene = dynamic(() => import('@/components/3d/scenes/NeuralGraphScene').then((m) => m.NeuralGraphScene), { ssr: false })

export interface ServiceDetailContent {
  eyebrow: string
  titleLead: string
  titleAccent: string
  tagline: string
  intro: string[]
  capabilitiesTitle: string
  capabilities: { icon: LucideIcon; title: string }[]
  featureBlocks: { icon: LucideIcon; title: string; description: string }[]
  examples?: { title: string; description: string }[]
  benefits: string[]
  processSteps: { step: string; title: string; description: string }[]
  ctaTitle: string
  ctaDescription: string
  faqs: { q: string; a: string }[]
}

const ctaClass =
  'inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase'

export function ServiceDetailPage({ content }: { content: ServiceDetailContent }) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  return (
    <>
      <ScrollScene keyframes={[{ t: 0, pos: [0, 0, 8.5], look: [0, 0, 0] }, { t: 1, pos: [0, 0, 6.5], look: [0, 0, -1] }]}><NeuralGraphScene /></ScrollScene>
      <div className="relative min-h-screen w-full text-[#EAF6F5] flex flex-col justify-between">
        <main className="grow w-full max-w-7xl mx-auto px-6 sm:px-12">
          <PageHero
            eyebrow={content.eyebrow}
            title={<>{content.titleLead} <span className="flux-word">{content.titleAccent}</span></>}
            description={content.tagline}
          />
          <div className="text-center -mt-6 mb-16"><Link href="/contact" className={ctaClass}>Book Consultation <ArrowRight className="w-4 h-4" /></Link></div>

          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto space-y-4">
              {content.intro.map((p, i) => (<p key={i} className="text-base sm:text-lg text-white">{p}</p>))}
            </ContentPanel>
          </section>

          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading align="center" eyebrow="What We Handle" title={<>{content.capabilitiesTitle}</>} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {content.capabilities.map((c, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] flex items-center gap-4"><c.icon className="w-5 h-5 text-[#4DE8DC] shrink-0" /><span className="text-sm font-semibold">{c.title}</span></div>
                ))}
              </div>
            </ContentPanel>
          </section>

          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-8">
              {content.featureBlocks.map((b, i) => (
                <ContentPanel key={i}>
                  <div className="flex items-center gap-3"><b.icon className="w-6 h-6 text-[#4DE8DC]" /><h2 className="text-xl font-bold">{b.title}</h2></div>
                  <p className="text-base text-white mt-3">{b.description}</p>
                </ContentPanel>
              ))}
            </div>
          </section>

          {content.examples && content.examples.length > 0 && (
            <section className="py-12">
              <ContentPanel className="max-w-5xl mx-auto">
                <SectionHeading align="center" eyebrow="Examples" title={<>Example <span className="flux-word">Use Cases</span></>} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                  {content.examples.map((ex, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02]">
                      <h3 className="font-semibold text-[#EAF6F5]">{ex.title}</h3>
                      <p className="text-sm text-white/80 mt-2 leading-relaxed">{ex.description}</p>
                    </div>
                  ))}
                </div>
              </ContentPanel>
            </section>
          )}

          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading align="center" eyebrow="Why Impetic" title={<>Results You Can <span className="flux-word">Expect</span></>} />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {content.benefits.map((b, i) => (<li key={i} className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] text-sm">{b}</li>))}
              </ul>
            </ContentPanel>
          </section>

          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading align="center" eyebrow="How It Works" title={<>Our <span className="flux-word">Process</span></>} />
              <div className={`grid grid-cols-1 gap-4 mt-10 ${content.processSteps.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                {content.processSteps.map((s, i) => (<TimelineNode key={i} index={i} year={s.step} title={s.title} description={s.description} isLast={i === content.processSteps.length - 1} />))}
              </div>
            </ContentPanel>
          </section>

          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading align="center" eyebrow="Take Action" title={content.ctaTitle} description={content.ctaDescription} />
              <div className="mt-8"><Link href="/contact" className={ctaClass}>Get Started <ArrowRight className="w-4 h-4" /></Link></div>
            </ContentPanel>
          </section>

          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading align="center" eyebrow="FAQ" title={<>Frequently Asked <span className="flux-word">Questions</span></>} />
              <div className="mt-10">
                {content.faqs.map((f, i) => (
                  <div key={i} className="border border-white/8 bg-white/[0.02] rounded-2xl mb-4">
                    <button type="button" onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)} className="w-full p-6 flex items-center justify-between gap-4 text-left" aria-expanded={openFaqIdx === i}>
                      <h3 className="font-semibold">{f.q}</h3>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-[#4DE8DC] transition-transform ${openFaqIdx === i ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Answer stays in the DOM so crawlers can read it */}
                    <p className={`px-6 pb-6 text-sm text-white ${openFaqIdx === i ? '' : 'hidden'}`}>{f.a}</p>
                  </div>
                ))}
              </div>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
