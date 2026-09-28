'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Video,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Globe2,
  TrendingUp,
  Target,
  Users,
  DollarSign,
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

export default function TikTokAdsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Repurpose existing video ads as-is',
      good: "Build creative specifically for TikTok's native feel",
    },
    {
      bad: 'Guess at audience targeting',
      good: "Use TikTok's detailed targeting and retargeting tools properly",
    },
    {
      bad: 'Treat TikTok as an afterthought',
      good: 'Treat it as its own platform with its own strategy',
    },
    {
      bad: 'Vague cost estimates upfront',
      good: 'Real numbers based on your actual goals',
    },
    {
      bad: 'One-size-fits-all approach regardless of business size',
      good: "Same disciplined strategy whether you're a small business or an established brand",
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Strategy',
      description: 'Define the goal, audience, and what actually needs to happen in the first second of the ad.',
    },
    {
      step: '02',
      title: 'Creative Direction',
      description: 'Build native-feeling content, not repurposed ads from another platform.',
    },
    {
      step: '03',
      title: 'Launch & Target',
      description: 'Set up precise targeting and retargeting based on real audience data.',
    },
    {
      step: '04',
      title: 'Test & Optimize',
      description: 'Ongoing creative and budget adjustments based on performance, not guesswork.',
    },
  ]

  const faqs = [
    {
      q: 'How much does it cost to advertise on TikTok?',
      a: 'It depends on your objective, audience competitiveness, and ad format. Costs have generally been competitive compared to more saturated ad platforms, but exact numbers depend on your specific market — we provide real figures during a free strategy call rather than a generic estimate.',
    },
    {
      q: 'Why should I advertise on TikTok instead of just Instagram or Facebook?',
      a: "It's less about \"instead of\" and more about \"in addition to\" for most businesses. TikTok reaches an audience that's often still discoverable organically, with ad formats that blend naturally into the feed rather than interrupting it.",
    },
    {
      q: 'Do you work with businesses in the UK?',
      a: 'Yes — we run TikTok campaigns for UK-based businesses, accounting for regional audience behavior and trends rather than applying a US-built strategy as-is.',
    },
    {
      q: 'Do I need to already have TikTok content to run ads?',
      a: "No. We can guide creative direction from scratch, built specifically for how TikTok's audience engages with content, rather than requiring you to have an existing organic presence first.",
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
            eyebrow="TikTok Ads · Built For The Platform People Actually Open Every Day"
            title="Your Audience Is Already On TikTok. The Question Is Whether Your Ad Is Any Good."
            description="Impetic builds TikTok ad campaigns that fit how people actually use the platform — fast, native, and easy to scroll past if it doesn't earn attention in the first second."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free TikTok Ads Strategy Call →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              A TikTok ad that looks like a TV commercial gets scrolled past. One that looks like content doesn't.
            </div>
          </div>
        </div>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <Video className="w-3.5 h-3.5" />
                The TikTok Challenge
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                Why Repurposed Ads Fail On TikTok
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  A lot of businesses hesitate on TikTok for two reasons: they don't know what it actually costs, and they assume it's only for a certain kind of brand. Neither is really true anymore. TikTok's ad platform has matured, the targeting has gotten more precise, and the audience isn't just teenagers — it spans a much wider range than most people assume.
                </p>
                <p>
                  The bigger issue is usually creative. TikTok users can spot a repurposed Instagram or TV ad instantly, and they scroll past it just as fast. Ads that work on TikTok are built to feel native to the platform — like content, not like a commercial interrupting content.
                </p>
                <p>
                  That's where we come in — strategy, targeting, and creative direction built specifically for how TikTok actually works, not a copy-paste from another platform.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. If the ad doesn't feel native to the platform, it doesn't go out.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY ADVERTISE ON TIKTOK */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Growth Potential"
            title="Why Advertise On TikTok"
            description="If you're still deciding whether TikTok belongs in your ad budget, here's the honest case:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    The audience is bigger than the stereotype
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    TikTok's user base spans a much wider age range than most people expect, including a large and growing segment of adults with real purchasing power.
                  </p>
                </div>
              </div>
            </ContentPanel>

            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Organic reach still means something
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Unlike some platforms where organic content barely gets seen, TikTok's algorithm can still put content in front of people who've never followed you.
                  </p>
                </div>
              </div>
            </ContentPanel>

            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    The ad formats blend in
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Because ads can look and feel like regular content, they tend to get less "ad fatigue" pushback than more obviously promotional formats elsewhere.
                  </p>
                </div>
              </div>
            </ContentPanel>

            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Targeting has caught up
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    TikTok's ad platform now offers detailed audience targeting, retargeting, and lookalike options comparable to more established platforms.
                  </p>
                </div>
              </div>
            </ContentPanel>
          </div>

          <div className="mt-8 text-center max-w-3xl mx-auto text-surface-300">
            In short — why advertise on TikTok comes down to reaching an engaged, scrolling audience before your competitors figure out the platform isn't just for dance videos.
          </div>
        </section>

        {/* 4. WHAT TIKTOK ADVERTISING ACTUALLY COSTS */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 border-[#4DE8DC]/30">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <DollarSign className="w-3.5 h-3.5" />
                Pricing Transparency
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                What TikTok Advertising Actually Costs
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed text-left md:text-center">
                <p>
                  TikTok advertising cost depends on your objective, audience competitiveness, and ad format — the same variables that affect cost on any platform. In general, TikTok's cost-per-click and cost-per-thousand-impressions have tended to run competitively compared to more saturated platforms, though this shifts as more advertisers move onto the platform.
                </p>
                <p>
                  If you're asking how much it costs to advertise on TikTok for your specific business, the honest answer is: it depends enough on your industry and goals that a generic number won't be useful to you. We'll walk through your budget and objectives during a free strategy call and give you real numbers based on your actual market — not an average that may not apply.
                </p>
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 5. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Impetic Difference"
            title="Not Just Another TikTok Advertising Agency"
            description="How our approach compares to traditional video ad agencies."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-800">
                  <th className="py-4 px-6 text-sm font-semibold text-surface-400 w-1/2">
                    What most agencies do
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#4DE8DC] w-1/2">
                    What Impetic does
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
              Among the best TikTok advertising agencies, the ones that actually perform tend to share one thing: they don't treat TikTok like a smaller version of Instagram. It has its own culture, pacing, and creative rules — and campaigns built with that in mind consistently outperform the ones that aren't.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See How We Build TikTok Campaigns →
              </Link>
            </div>
          </div>
        </section>

        {/* 6. INTERNATIONAL & UK CAMPAIGNS */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-10 border-surface-800">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] shrink-0">
                <Globe2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-surface-100">
                  International & UK Campaigns
                </h3>
                <p className="text-surface-300 leading-relaxed text-sm">
                  We also run TikTok ad campaigns for businesses in the UK — audience behavior, trends, and even slang shift by region, so a strategy built purely on US data won't necessarily land the same way. Being considered among the best TikTok advertising agencies in the UK isn't about a different platform — it's about actually understanding a different audience.
                </p>
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 7. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your TikTok Campaigns"
            description="A disciplined, creative-first process engineered for maximum engagement."
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

        {/* 8. SOCIAL PROOF SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Social Proof"
            title="Real TikTok Performance Drivers"
            description="Measurable improvements when creative and targeting align with platform behavior."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                45% lower cost-per-click
              </div>
              <p className="text-surface-300 text-sm">
                after creative rework for TikTok native format — Glow Beauty Co.
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +190% increase in CTR
              </div>
              <p className="text-surface-300 text-sm">
                from redesigned targeting — NextGen Audio / Consumer Electronics
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="TikTok Advertising & Cost FAQ"
            description="Straight answers on pricing, platform comparisons, and creative requirements."
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

        {/* 10. FINAL CTA SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-10 md:p-14 text-center space-y-8 border-[#4DE8DC]/40 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#4DE8DC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-surface-100 tracking-tight">
                Stop Guessing What TikTok Ads Cost. Get Real Numbers And A Real Strategy.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Whether you're testing TikTok for the first time or scaling up a campaign that's already working, we'll build it around your actual goals and budget.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free TikTok Ads Strategy Call →
              </Link>
            </div>

            <div className="text-xs text-surface-400 italic">
              Your business will be our business — that's not a slogan, it's how we run every account.
            </div>
          </ContentPanel>
        </section>
      </div>
    </>
  )
}
