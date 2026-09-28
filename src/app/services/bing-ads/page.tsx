'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  TrendingUp,
  Target,
  CheckCircle2,
  XCircle,
  ChevronDown,
  BarChart3,
  MousePointerClick,
  Sparkles,
  ShoppingBag,
  DollarSign,
  Search,
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

export default function BingAdsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Skip Bing entirely, or treat it as an afterthought',
      good: 'Build a dedicated Bing strategy, not a Google copy-paste',
    },
    {
      bad: 'Import Google campaigns with no adjustments',
      good: "Adjust targeting, bidding, and copy for Bing's actual audience",
    },
    {
      bad: 'No real Bing specialist on staff',
      good: 'Dedicated Bing Ads specialist managing your account',
    },
    {
      bad: 'Vague reporting mixed in with other channels',
      good: "Clear reporting showing Bing's performance on its own",
    },
    {
      bad: 'Set up once, rarely revisited',
      good: 'Ongoing management and optimization',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Review your current setup (or lack of one) and identify the real opportunity on Bing.',
    },
    {
      step: '02',
      title: 'Build',
      description: "Set up or restructure campaigns specifically for Bing's audience and bidding environment.",
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Ongoing management, testing, and bid adjustments.',
    },
    {
      step: '04',
      title: 'Report Clearly',
      description: 'Performance shown on its own, so you can see exactly what Bing is contributing.',
    },
  ]

  const faqs = [
    {
      q: 'Is Bing Ads worth it for a small business?',
      a: 'Often, yes — especially because competition and cost-per-click tend to be lower than Google. It usually works best as a complement to Google Ads rather than a replacement, capturing an audience segment you might otherwise miss.',
    },
    {
      q: 'How much do Bing Ads cost?',
      a: 'It depends on your industry and keyword competition, similar to Google Ads, but generally runs lower on a cost-per-click basis. We can give you specific numbers for your market during a free audit.',
    },
    {
      q: 'Can you just copy my Google Ads campaign into Bing?',
      a: 'You could, but it\'s usually a mistake. Bing\'s audience behavior, bidding dynamics, and even device usage patterns differ from Google\'s, so a direct copy-paste often underperforms compared to a campaign actually built for the platform.',
    },
    {
      q: 'Do you manage Bing Shopping Ads for ecommerce?',
      a: 'Yes — feed setup, optimization, and ongoing management for Bing Shopping Ads are part of our full Bing Ads services.',
    },
  ]

  const socialProofItems = [
    { label: '38% lower cost-per-click vs Google Ads', detail: 'Northwest Financial / Financial Services' },
    { label: '+145% Bing Shopping ad conversions', detail: 'LuxeHome Goods / Ecommerce & Retail' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bing Ads Management Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Impetic is a Bing Ads agency that helps you reach the audience Google Ads misses. Management, PPC, and Shopping campaigns built to convert.',
    areaServed: 'Worldwide',
    serviceType: 'Bing Ads & Microsoft Advertising Management',
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
              eyebrow="Bing Ads · The Audience Your Competitors Are Ignoring"
              title={
                <>
                  Everyone&apos;s Fighting Over Google. <span className="flux-word">Bing Is Where The Competition Forgot To Show Up.</span>
                </>
              }
              description="Impetic is a Bing Ads agency that helps you reach a real, often-underestimated audience — usually at a lower cost-per-click than Google, because most of your competitors aren't even bidding there."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free Bing Ads Audit →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                If your entire paid strategy is Google-only, you&apos;re leaving a chunk of your market — and cheaper clicks — untouched.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Bing gets dismissed constantly — &quot;nobody uses Bing&quot; is one of the most repeated lines in digital marketing, right up until someone actually checks the data. In reality, Bing (and its network across Microsoft Edge, Yahoo, and partner sites) reaches a meaningful, often higher-income audience that most competitors have written off entirely.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That&apos;s actually the opportunity. Less competition usually means lower cost-per-click, and an audience that isn&apos;t being bombarded by every other advertiser in your space.
                </p>
                <p>
                  The catch is that Bing Ads isn&apos;t identical to Google Ads — different audience behavior, different targeting options, different quirks in how campaigns perform. Treating it like a copy-paste of your Google account is exactly why a lot of businesses give up on it too early.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. We don&apos;t ignore an audience just because it&apos;s smaller — we go where the opportunity actually is.
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
                    What Sets Us Apart As A <span className="flux-word">Bing Ads Agency</span>
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
                  Most agencies treat Bing as a &quot;nice to have&quot; they get to eventually. As a dedicated Bing Ads agency, we treat it as a real channel worth managing properly — because for a lot of businesses, it quietly outperforms expectations once it&apos;s actually managed instead of ignored.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Manage Bing Campaigns →
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
                    Specialized Bing Ads <span className="flux-word">Services</span>
                  </>
                }
              />

              {/* Module 1 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 01
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Bing Ads Management
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    Our Bing Ads management covers everything from account setup to ongoing optimization — a dedicated Bing Ads manager on your account who understands how Bing&apos;s audience and platform actually differ from Google, not someone applying Google logic and hoping it translates.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 2 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <MousePointerClick className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 02
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Bing PPC &amp; Pay-Per-Click Campaigns
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    Bing PPC ads work on the same pay-per-click model as Google — you pay when someone clicks — but with different bidding dynamics and usually lower competition. Our Bing Ads specialist builds campaigns around what actually performs on this platform, from keyword strategy to ad copy tailored for a different search behavior.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 3 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Module 03
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Bing Shopping Ads
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    For ecommerce businesses, Bing Shopping Ads put your products in front of shoppers who aren&apos;t seeing the same saturated Google Shopping results everyone else is fighting over. We handle feed setup, optimization, and ongoing management so your products actually show up for the right searches.
                  </p>
                </div>
              </ContentPanel>
            </div>
          </section>

          {/* SECTION 5: WHAT BING ADS ACTUALLY COST */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Cost Breakdown"
                title={
                  <>
                    What Bing Ads <span className="flux-word">Actually Cost</span>
                  </>
                }
              />

              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Bing Ads cost varies by industry and competition, same as any pay-per-click platform — but generally, cost-per-click on Bing tends to run lower than Google for comparable keywords, simply because fewer advertisers are bidding there.
                </p>
                <p>
                  Exact numbers depend on your market, so we&apos;ll give you real figures based on your specific keywords during a free audit rather than a generic industry average that may not apply to you.
                </p>
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
                    How We Run <span className="flux-word">Your Bing Campaigns</span>
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
                description="Verified campaign outcomes delivered through targeted Microsoft & Bing advertising."
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
                title="Stop Fighting Everyone Else For The Same Google Clicks."
                description="There's an audience actively searching on Bing right now, with less competition and often lower costs. Let's go get them."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free Bing Ads Audit →
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
