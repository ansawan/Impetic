'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Video,
  Play,
  CheckCircle2,
  XCircle,
  ChevronDown,
  BarChart3,
  Globe2,
  Sparkles,
  Zap,
  Film,
  Layers,
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

export default function YouTubeAdsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Reuse existing video assets as-is',
      good: "Build or adapt creative for YouTube's actual viewing behavior",
    },
    {
      bad: 'Target broadly and hope for reach',
      good: 'Precise audience targeting based on intent, not just demographics',
    },
    {
      bad: 'Optimize for views',
      good: 'Optimize for the actions that matter — leads, sales, sign-ups',
    },
    {
      bad: 'One-size-fits-all ad formats',
      good: 'Match the format (skippable, non-skippable, Shorts, in-feed) to your actual goal',
    },
    {
      bad: 'Set it and check back monthly',
      good: 'Active monitoring and creative testing throughout the campaign',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Strategy',
      description: 'Define the goal, the audience, and what the ad actually needs to accomplish in the first few seconds.',
    },
    {
      step: '02',
      title: 'Creative Direction',
      description: 'Build or adapt video assets specifically for skippable attention spans, not repurposed TV spots.',
    },
    {
      step: '03',
      title: 'Launch & Target',
      description: 'Set up precise audience targeting matched to intent, not just broad reach.',
    },
    {
      step: '04',
      title: 'Test & Optimize',
      description: 'Ongoing creative and targeting adjustments based on real watch-through and conversion data.',
    },
  ]

  const faqs = [
    {
      q: 'What makes a YouTube ad "high-impact"?',
      a: 'Generally, it\'s an ad built to hold attention in the first few seconds, with a clear message and a format matched to how people actually watch — skippable, in-feed, or Shorts — rather than a repurposed TV commercial dropped into YouTube.',
    },
    {
      q: 'Do I need a video already made, or can you help create one?',
      a: 'Both are options. If you have existing video assets, we can rework them for YouTube\'s format and viewing behavior. If not, we can guide creative direction from scratch based on what your campaign needs to accomplish.',
    },
    {
      q: 'How is a YouTube ads agency different from a general PPC agency?',
      a: 'YouTube ads require different creative thinking (video, attention spans, skip behavior) and a different targeting approach than search or display ads. A dedicated YouTube ads agency focuses specifically on those dynamics rather than treating video as an afterthought to search campaigns.',
    },
    {
      q: 'Do you run YouTube ad campaigns outside English-speaking markets?',
      a: 'Yes — we run campaigns for French-speaking audiences and other international markets, with creative and targeting built for that specific audience rather than a direct translation of an English campaign.',
    },
  ]

  const socialProofItems = [
    { label: '+125% increase in view-through rate', detail: 'CoursePro Learning / Online Education' },
    { label: '37% lower cost-per-lead from retargeting', detail: 'Kinetix Software / B2B Tech' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'YouTube Ads Agency Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Impetic is a YouTube ads agency that builds video campaigns people actually watch — not skip. Strategy, production, and targeting done right.',
    areaServed: 'Worldwide',
    serviceType: 'YouTube Video Advertising & Growth Marketing',
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
              eyebrow="YouTube Ads · Built To Be Watched, Not Skipped"
              title={
                <>
                  If Your YouTube Ad Gets Skipped At Second 3, <span className="flux-word">The Budget&apos;s Already Gone.</span>
                </>
              }
              description="Impetic is a YouTube ads agency that builds video campaigns designed to actually hold attention — and turn views into customers, not just impressions."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free YouTube Ads Strategy Call →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                Most YouTube ad budgets are lost in the first five seconds. We build ours to survive past that.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  YouTube ads get treated like an afterthought a lot of the time — take a TV commercial or an old promo video, slap it on YouTube, and hope for the best. Then the campaign underperforms, and the conclusion is &quot;YouTube ads don&apos;t work for us,&quot; when really, nobody ever built the ad for the platform it was running on.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  YouTube isn&apos;t TV. People can skip in five seconds. They&apos;re scrolling, half-distracted, and deciding in an instant whether to keep watching. A high-impact YouTube video ad has to earn attention immediately, not build up to a big reveal at the end.
                </p>
                <p>
                  That&apos;s the gap Impetic fills — we don&apos;t just place your existing video and hope. We build (or rework) creative and targeting specifically for how people actually behave on YouTube.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. Your ad has to earn attention, and so do we.
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
                    Not Just Another <span className="flux-word">YouTube Ads Marketing Agency</span>
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
                  As a YouTube ads agency, we&apos;ve learned that the difference between a campaign that gets skipped and one that gets remembered usually comes down to the first few seconds and who it&apos;s actually shown to — not the production budget behind it.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Build YouTube Campaigns →
                  </Link>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 4: WHAT WE OFFER */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <SectionHeading
                align="center"
                eyebrow="What We Offer"
                title={
                  <>
                    Specialized YouTube <span className="flux-word">Ad Services</span>
                  </>
                }
              />

              {/* Module 1 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Film className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 01
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        High-Impact Video Ad Strategy &amp; Creative
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    We help you figure out what your ad actually needs to say in the first few seconds to stop the skip, then build (or guide the reworking of) creative around that hook. As a YouTube video ad agency, we treat the first five seconds as the most important five seconds of the entire campaign.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 2 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 02
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Full YouTube Ads Management
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    From campaign setup to audience targeting to ongoing optimization, our YouTube ads services cover the whole process — choosing the right ad format for your goal, setting up precise audience targeting, and adjusting based on real performance data instead of letting a campaign run untouched for weeks.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 3 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 03
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        YouTube Ads For Growth Marketing
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    If YouTube is one piece of a bigger growth strategy rather than a standalone campaign, we plug it into your existing marketing — tying video ad audiences and messaging back to your search and social efforts so it&apos;s not running in its own silo.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 4 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 04
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        International &amp; French-Language Campaigns
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    We also run YouTube ad campaigns for French-speaking markets — as an agence YouTube ads, we handle targeting, ad copy, and creative direction for French-language audiences, not just a translated version of an English campaign.
                  </p>
                </div>
              </ContentPanel>
            </div>
          </section>

          {/* SECTION 5: OUR PROCESS */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Our Process"
                title={
                  <>
                    How We Build <span className="flux-word">Your YouTube Campaigns</span>
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

          {/* SECTION 6: SOCIAL PROOF SECTION */}
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
                description="Proven video ad impact across high-converting retargeting and cold video funnels."
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

          {/* SECTION 7: FAQ (Also Doubles as On-Page SEO Content) */}
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

          {/* SECTION 8: FINAL CTA SECTION */}
          <section className="my-16 max-w-4xl mx-auto">
            <ContentPanel className="text-center">
              <SectionHeading
                align="center"
                eyebrow="Get Started"
                title="Stop Paying For Views That Never Turn Into Customers."
                description="Get a YouTube ads strategy built around what actually stops the skip — and what happens after someone watches."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free YouTube Ads Strategy Call →
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
