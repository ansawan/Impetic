'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Search,
  Zap,
  CheckCircle2,
  XCircle,
  ChevronDown,
  BarChart3,
  Layers,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Link as LinkIcon,
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

export default function SEMPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'SEO and PPC run as separate services',
      good: 'One strategy, one team, shared data',
    },
    {
      bad: 'Paid ads bid against your own organic rankings',
      good: 'Coordinated keyword strategy across both',
    },
    {
      bad: 'Messaging tested in isolation',
      good: 'Ad copy insights inform SEO content, and vice versa',
    },
    {
      bad: 'Two invoices, two account managers, two stories',
      good: 'One point of contact, one clear roadmap',
    },
    {
      bad: 'Reports show channels separately, with no big picture',
      good: 'Reporting shows how SEO and paid work together',
    },
  ]

  const businessHelps = [
    {
      title: 'Faster results without abandoning the long game.',
      description: 'PPC gets you visibility now while SEO builds toward sustainable, lower-cost traffic over time.',
      icon: Zap,
    },
    {
      title: 'Smarter budget decisions.',
      description: "If you're already ranking organically for a keyword, we don't waste ad spend competing with yourself — that budget goes toward terms you actually need paid visibility for.",
      icon: Target,
    },
    {
      title: 'Better messaging, faster.',
      description: 'Paid ads generate quick data on what headlines and offers convert — we feed that straight into your SEO content instead of starting from scratch.',
      icon: Sparkles,
    },
    {
      title: 'One roadmap, not three.',
      description: 'You get a single strategy and a single point of contact, instead of managing multiple vendors who don\'t talk to each other.',
      icon: Layers,
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Review your current SEO, PPC, and overall search presence together, not separately.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Build one roadmap that allocates organic and paid effort based on what each does best.',
    },
    {
      step: '03',
      title: 'Execute',
      description: 'Run SEO and PPC in parallel, sharing data and messaging between them.',
    },
    {
      step: '04',
      title: 'Report & Refine',
      description: 'One clear report showing how both channels are performing together.',
    },
  ]

  const faqs = [
    {
      q: "What's the difference between SEO, SEM, and PPC?",
      a: 'SEO is organic search optimization — unpaid rankings built through content, technical health, and authority. PPC is paid advertising where you pay per click. SEM is the umbrella term for both — the overall effort to gain visibility in search results, whether paid or organic.',
    },
    {
      q: 'Do I need SEO and PPC, or just one?',
      a: 'Most businesses benefit from both, especially early on — PPC gets you visibility while SEO is still building, and over time SEO reduces your dependence on paid budget. Whether you need one now and the other later depends on your timeline and goals.',
    },
    {
      q: 'Why should SEO and PPC be managed by the same team?',
      a: 'When they\'re separate, you often end up with paid ads bidding against your own organic rankings, or messaging that isn\'t shared between channels. One team means shared data, no wasted overlap, and a strategy that actually connects.',
    },
    {
      q: 'What does an SEM strategy actually look like month to month?',
      a: 'It typically includes ongoing SEO work (content, technical fixes, authority building) running alongside actively managed PPC campaigns, with regular check-ins on how budget should shift between the two based on performance.',
    },
  ]

  const socialProofItems = [
    { label: '+210% increase in total search visibility', detail: 'Vanguard Realty / Real Estate' },
    { label: '34% reduction in wasted ad spend', detail: 'BrightMind Academy / EdTech' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEM Marketing Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Impetic runs SEO, SEM, and PPC as one connected strategy — not three separate invoices. See how full-funnel search marketing actually grows your business.',
    areaServed: 'Worldwide',
    serviceType: 'Search Engine Marketing (SEM), SEO & PPC',
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
          {/* SECTION 1: HERO SECTION */}
          <section className="pt-8 pb-12">
            <PageHero
              eyebrow="SEM Marketing · SEO + PPC, Working Together Instead Of Competing For Budget"
              title={
                <>
                  Search Marketing Shouldn&apos;t Be Three Separate Agencies <span className="flux-word">Pointing Fingers At Each Other.</span>
                </>
              }
              description="Impetic runs SEO, SEM, and PPC as one connected strategy — so your organic and paid efforts actually support each other instead of competing for the same budget conversation."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free Search Marketing Review →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                If your SEO team and your PPC team have never actually talked to each other, that&apos;s probably costing you.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Here&apos;s something that happens more than it should: a business hires one agency for SEO and a different one for PPC. Neither team talks to the other. The PPC agency bids on keywords the SEO team is already ranking for organically. The SEO team has no idea what messaging is actually converting in paid ads. Everyone bills separately, and nobody&apos;s looking at the full picture.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  SEM — search engine marketing — is supposed to be the umbrella that covers both. In practice, most agencies just pick one and call it their specialty.
                </p>
                <p>
                  Impetic doesn&apos;t split the two. We treat SEO, SEM, and PPC as one strategy with two levers — organic for the long game, paid for immediate visibility — pulled by the same team, working from the same data.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. Your search strategy is one conversation, not three.
                </p>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 3: WHY IMPETIC IS DIFFERENT */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Why Impetic Is Different"
                title={
                  <>
                    Digital Marketing, SEO, SEM, and PPC — <span className="flux-word">Actually Connected</span>
                  </>
                }
              />

              <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[#8FA6A3] uppercase tracking-wider w-1/2">
                        What most agencies do
                      </th>
                      <th className="p-4 sm:p-5 text-sm sm:text-base font-bold text-[#4DE8DC] uppercase tracking-wider w-1/2">
                        What Impetic does
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 sm:p-5 text-sm sm:text-base text-gray-400 flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.bad}</span>
                        </td>
                        <td className="p-4 sm:p-5 text-sm sm:text-base text-[#EAF6F5] font-medium flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                          <span>{row.good}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-6 text-base sm:text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  Search marketing works best when it&apos;s not fragmented. That&apos;s the whole idea behind combining digital marketing, SEO, SEM, and PPC under one team instead of stitching together a patchwork of vendors.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Combine Channels →
                  </Link>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 4: WHAT SEM ACTUALLY INCLUDES */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionHeading
                align="center"
                eyebrow="Core Scope"
                title={
                  <>
                    What SEM <span className="flux-word">Actually Includes</span>
                  </>
                }
              />

              <ContentPanel>
                <p className="text-base sm:text-lg text-white leading-relaxed mb-6">
                  SEM is often used loosely to mean &quot;PPC,&quot; but the real definition is broader — it&apos;s the full effort to get your business found through search, whether that&apos;s a paid ad or an organic result. At Impetic, our SEO SEM PPC marketing approach covers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#EAF6F5] text-lg">SEO — the long-term foundation</span>
                        <Search className="w-5 h-5 text-[#4DE8DC]" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        technical health, content, and authority that compounds over time.
                      </p>
                    </div>
                    <Link
                      href="/services/seo"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4DE8DC] hover:underline uppercase tracking-wider"
                    >
                      Explore SEO Services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#EAF6F5] text-lg">PPC — the immediate lever</span>
                        <Zap className="w-5 h-5 text-[#4DE8DC]" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        paid visibility while your organic presence is still building.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2">
                      <Link
                        href="/services/ppc"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4DE8DC] hover:underline uppercase tracking-wider"
                      >
                        Explore PPC Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/services/google-ads"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4DE8DC]/80 hover:underline uppercase tracking-wider"
                      >
                        Explore Google Ads Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#EAF6F5] text-lg">SEM strategy — the unifying layer</span>
                        <Layers className="w-5 h-5 text-[#4DE8DC]" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        the layer that ties both together, making sure your keyword targeting, messaging, and budget decisions are informed by data from both channels instead of guesswork.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4DE8DC] hover:underline uppercase tracking-wider"
                    >
                      Book SEM Review <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-white leading-relaxed mt-6 pt-4 border-t border-white/5 text-center">
                  Think of it less like two separate services and more like one digital marketing SEO SEM PPC engine, where each part makes the other more effective.
                </p>
              </ContentPanel>
            </div>
          </section>

          {/* SECTION 5: HOW THIS ACTUALLY HELPS YOUR BUSINESS */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Business Impact"
                title={
                  <>
                    How This Actually <span className="flux-word">Helps Your Business</span>
                  </>
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {businessHelps.map((item, idx) => {
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

          {/* SECTION 6: OUR PROCESS */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Our Process"
                title={
                  <>
                    How We Run <span className="flux-word">Your Search Marketing</span>
                  </>
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
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

          {/* SECTION 7: SOCIAL PROOF SECTION */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Social Proof"
                title={
                  <>
                    Client Impact &amp; <span className="flux-word">Proven Results</span>
                  </>
                }
                description="Combined SEO and Paid Search results for comprehensive search dominance."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
                {socialProofItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 flex items-center justify-center text-[#4DE8DC] mx-auto">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#EAF6F5]">{item.label}</h4>
                    <p className="text-sm text-[#8FA6A3]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 8: FAQ (Also Doubles as On-Page SEO Content) */}
          <section id="faq" className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <SectionHeading
                  align="center"
                  eyebrow="FAQ & On-Page Knowledge"
                  title={
                    <>
                      Frequently Asked <span className="flux-word">Questions</span>
                    </>
                  }
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

          {/* SECTION 9: FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Get Started"
                title="Stop Running SEO and PPC Like They're Competing For The Same Budget."
                description="Get a search marketing strategy where organic and paid actually work together — not two separate invoices telling two separate stories."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free Search Marketing Review →
                </Link>
              </div>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3]">
                Your business will be our business — that&apos;s not a slogan, it&apos;s how we run every account.
              </p>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
