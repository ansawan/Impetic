'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  FileText,
  CheckCircle2,
  XCircle,
  ChevronDown,
  PenTool,
  Search,
  Wrench,
  Sparkles,
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

export default function ContentMarketingCopywritingPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Keyword-stuffed copy that reads awkwardly',
      good: 'Natural writing that still hits the keywords that matter',
    },
    {
      bad: 'Generic articles with no real research',
      good: 'Content built on actual research and search intent',
    },
    {
      bad: 'One writer, one voice, every client',
      good: "Content matched to your brand's actual voice",
    },
    {
      bad: 'Delivered and forgotten',
      good: 'Performance tracked and content updated as needed',
    },
    {
      bad: 'Word count as the main success metric',
      good: 'Rankings, engagement, and conversions as the real metrics',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Research',
      description: "Understand your audience, search intent, and what's actually ranking (and why).",
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Build a content plan around real business goals, not just a keyword list.',
    },
    {
      step: '03',
      title: 'Write',
      description: 'Draft content in your brand voice, structured for both readers and search engines.',
    },
    {
      step: '04',
      title: 'Review & Optimize',
      description: 'Track performance and update content as rankings and search behavior shift.',
    },
  ]

  const faqs = [
    {
      q: 'What makes content "SEO-friendly" versus just well-written?',
      a: 'SEO-friendly content combines good writing with structural elements search engines rely on — proper headings, natural keyword placement, internal linking, and content organized around actual search intent, not just topic coverage.',
    },
    {
      q: 'Do you write content for every industry?',
      a: "We take on projects where we can genuinely research and understand the subject matter well enough to write credible, useful content — reach out with your industry and we'll give you an honest answer on fit.",
    },
    {
      q: 'How is an SEO content writing agency different from a general copywriting service?',
      a: 'General copywriting focuses on persuasive writing without necessarily accounting for search visibility. SEO content writing builds in keyword research, search intent, and on-page structure alongside the writing itself, so the content is positioned to actually be found.',
    },
    {
      q: 'Can you recommend content tools, or just write the content?',
      a: "Both. If it's helpful, we can advise on content writing software and SEO tools that fit your team's workflow and volume — though our core focus is the strategy and writing itself.",
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollScene keyframes={SCENE_KEYFRAMES}>
        <NeuralGraphScene />
      </ScrollScene>

      <div className="relative z-10 space-y-24 pb-20">
        {/* 1. HERO SECTION */}
        <div>
          <PageHero
            eyebrow="Content Marketing & Copywriting · Written For Humans, Structured For Search"
            title="Content That Ranks But Nobody Wants To Read Isn't A Win. It's A Wasted Page."
            description="Impetic is an SEO content writing company that writes content people actually want to read — and structures it so search engines understand it too. Not the other way around."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free Content Audit →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              If your content reads like it was written for a keyword density checker, your readers can tell. So can Google, eventually.
            </div>
          </div>
        </div>

        {/* Cross-link Banner for Technical & On-Page SEO */}
        <section className="container max-w-5xl mx-auto px-4">
          <div className="p-4 rounded-2xl bg-surface-900/40 border border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-surface-300">
              <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0" />
              <span>Looking for full technical SEO, Core Web Vitals, and AI search visibility?</span>
            </div>
            <Link
              href="/services/seo"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4DE8DC] hover:underline shrink-0"
            >
              Explore AI-Powered SEO Services →
            </Link>
          </div>
        </section>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <FileText className="w-3.5 h-3.5" />
                The Keyword Density Fallacy
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                Why Unreadable SEO Content Fails To Convert
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  A lot of "SEO content" reads exactly like what it is — a keyword stuffed in every other sentence, no real voice, no reason for a person to keep reading past the first paragraph. It might have technically hit the target keyword count. It still doesn't convert anyone into a customer, because nobody wanted to finish reading it.
                </p>
                <p>
                  The other extreme is just as common: genuinely good writing that never ranks, because nobody thought about structure, search intent, or what a reader is actually looking for when they land on the page.
                </p>
                <p>
                  Good SEO content writing isn't a tradeoff between the two. It's writing that respects the reader first — clear, useful, actually worth reading — built on a structure that also happens to be exactly what search engines are looking for.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. If the content doesn't hold a reader's attention, the keyword targeting doesn't matter.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Impetic Difference"
            title="What Sets Us Apart From Other SEO Content Writing Companies"
            description="We treat readability and rankings as two halves of the exact same equation."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-800">
                  <th className="py-4 px-6 text-sm font-semibold text-surface-400 w-1/2">
                    What most agencies deliver
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#4DE8DC] w-1/2">
                    What Impetic delivers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-900/40 transition-colors">
                    <td className="py-4 px-6 text-surface-400 text-sm flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.bad}</span>
                    </td>
                    <td className="py-4 px-6 text-surface-100 text-sm font-medium">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>{row.good}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-surface-900/60 border border-surface-800 space-y-6 text-center">
            <p className="text-surface-300 max-w-3xl mx-auto leading-relaxed">
              We're not interested in being the SEO content writing agency that hands you technically-correct copy nobody enjoys reading. Content that ranks but doesn't convert isn't actually doing its job — and we treat both halves of that equation as equally important.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See Our Content Process →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE OFFER */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Services & Scope"
            title="What We Offer"
            description="Strategic SEO writing, on-page optimization, and content operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* SEO Content Writing Services */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  SEO Content Writing Services
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  Our core SEO content writing services cover blog posts, service pages, landing pages, and long-form guides — written around real search intent and structured for how both readers and search engines actually process a page. Whether you need ongoing content writing services SEO work or a one-time content overhaul, we build it around your actual goals, not a generic content mill process.
                </p>
              </div>
            </ContentPanel>

            {/* SEO-Friendly Content Writing */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  SEO-Friendly Content Writing
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  There's a difference between content that happens to rank and content that's genuinely SEO-friendly by design — proper heading structure, natural keyword placement, internal linking, and readability that holds attention instead of losing readers halfway through. That structure is built into every piece from the first draft, not bolted on after the fact.
                </p>
              </div>
            </ContentPanel>

            {/* Content Strategy & Tools */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  Content Strategy & Tools
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  Beyond writing, we help structure the process behind your content — including which content writing software tools for SEO actually make sense for your team, whether that's research and optimization tools, workflow platforms, or a simpler process depending on your content volume and team size.
                </p>
              </div>
            </ContentPanel>
          </div>
        </section>

        {/* 5. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your Content"
            description="A rigorous 4-step content engineering workflow designed for long-term organic authority."
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {processSteps.map((step, idx) => (
              <TimelineNode
                key={step.step}
                year={step.step}
                title={step.title}
                description={step.description}
                index={idx}
                isLast={idx === processSteps.length - 1}
              />
            ))}
          </div>
        </section>

        {/* 6. SOCIAL PROOF SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Social Proof"
            title="Real Organic Content Growth"
            description="Measurable improvements in rankings, dwell time, and organic conversions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +215% increase in organic traffic
              </div>
              <p className="text-surface-300 text-sm">
                from content overhaul — B2B SaaS Platform
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +160% increase in average time on page
              </div>
              <p className="text-surface-300 text-sm">
                after blog &amp; copy overhaul — FinTech Insights Portal
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="SEO Content Writing FAQ"
            description="Clear answers on SEO structure, industry fit, copywriting differences, and software recommendations."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-surface-800 bg-surface-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-surface-100 hover:text-[#4DE8DC] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#4DE8DC]' : 'text-surface-400'
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-surface-300 text-sm leading-relaxed border-t border-surface-800/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* 8. FINAL CTA SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-10 md:p-14 text-center space-y-8 border-[#4DE8DC]/40 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#4DE8DC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-surface-100 tracking-tight">
                Stop Choosing Between Content That Ranks And Content People Actually Read.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Get content built to do both — written for real readers, structured for real search visibility.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free Content Audit →
              </Link>
            </div>

            <div className="text-xs text-surface-400 italic">
              Your business will be our business — that's not a slogan, it's how we approach every piece of content.
            </div>
          </ContentPanel>
        </section>
      </div>
    </>
  )
}
