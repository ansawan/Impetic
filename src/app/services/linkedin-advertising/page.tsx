'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Briefcase,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Globe2,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Layers,
  UserCheck,
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

export default function LinkedInAdvertisingPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Copy a Facebook/Instagram strategy onto LinkedIn',
      good: "Build campaigns specifically for LinkedIn's professional context",
    },
    {
      bad: 'Broad targeting to keep costs "low"',
      good: 'Precise targeting by role, industry, and company size',
    },
    {
      bad: 'Generic messaging across platforms',
      good: 'B2B-specific messaging that speaks to decision-makers',
    },
    {
      bad: 'Vague cost expectations upfront',
      good: 'Real numbers and honest fit assessment',
    },
    {
      bad: 'Treat LinkedIn as one-size-fits-all',
      good: "Same disciplined strategy whether you're a small business or an established brand",
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Strategy',
      description: 'Define your actual target audience by role, industry, and company size — not just broad demographics.',
    },
    {
      step: '02',
      title: 'Messaging & Creative',
      description: 'Build ad copy and creative that speaks to decision-makers, not consumer shoppers.',
    },
    {
      step: '03',
      title: 'Launch & Target',
      description: 'Set up precise targeting, retargeting, and lead gen forms matched to your funnel.',
    },
    {
      step: '04',
      title: 'Optimize',
      description: 'Ongoing adjustments based on cost-per-lead and actual pipeline impact, not just clicks.',
    },
  ]

  const faqs = [
    {
      q: 'How much does advertising on LinkedIn cost?',
      a: "LinkedIn's cost-per-click generally runs higher than other platforms, and exact rates vary by industry, targeting specificity, and competition for your audience. We provide real numbers based on your actual market during a free strategy call rather than a generic estimate.",
    },
    {
      q: 'Is LinkedIn advertising worth it for B2B companies?',
      a: 'Often, yes — the ability to target by job title, industry, and company size makes it one of the more precise platforms for reaching business decision-makers, even though the cost-per-click is higher than consumer platforms.',
    },
    {
      q: "What's the difference between hiring an agency and a LinkedIn advertising consultant?",
      a: 'A consultant typically provides strategy and audit work — reviewing what you have and telling you what to fix. Full agency management means we handle execution ourselves: targeting, creative, launch, and ongoing optimization.',
    },
    {
      q: 'Do you work with small businesses on LinkedIn, or just larger B2B companies?',
      a: "Both. LinkedIn can work for smaller B2B businesses too, as long as the targeting and budget are set up realistically for a higher cost-per-click platform — we'll give you an honest read on fit during a free strategy call.",
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
            eyebrow="LinkedIn Advertising · Built For B2B, Not Repurposed From Consumer Ads"
            title="LinkedIn Ads Are Expensive When They're Wasted On The Wrong Audience. That's The Part We Fix."
            description="Impetic builds LinkedIn ad campaigns around precise B2B targeting and messaging that actually speaks to decision-makers — because on a platform where clicks cost more, wasted spend costs more too."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free LinkedIn Ads Strategy Call →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              LinkedIn isn't the platform to "test and see." Every click matters more here.
            </div>
          </div>
        </div>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <Briefcase className="w-3.5 h-3.5" />
                The High-Cost LinkedIn Trap
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                Why LinkedIn Ad Budgets Get Burned Fast
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  LinkedIn advertising has a reputation — it's expensive, and a lot of businesses have tried it once, spent more than expected, and walked away without a real read on whether it worked. Usually, that's not a platform problem. It's a targeting and messaging problem.
                </p>
                <p>
                  Because LinkedIn's cost-per-click tends to run higher than other platforms, there's less room for guesswork. An ad aimed at the wrong job title, or messaging that reads like a consumer ad dropped into a professional feed, burns budget fast without much to show for it.
                </p>
                <p>
                  Done right, LinkedIn is one of the sharpest tools available for reaching actual decision-makers — people who don't spend much time on other ad platforms during work hours. Impetic builds campaigns specifically around that reality instead of treating LinkedIn like an extra line item copied from a Facebook campaign.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. On a platform this precise, we don't have room to guess either.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY ADVERTISE ON LINKEDIN */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="B2B Precision"
            title="Why Advertise On LinkedIn"
            description="If you're weighing whether LinkedIn belongs in your ad budget, here's what actually matters:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    You reach real job titles and industries
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    LinkedIn's targeting lets you narrow in on specific roles, company sizes, and industries — precision that's hard to match elsewhere for B2B.
                  </p>
                </div>
              </div>
            </ContentPanel>

            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    The audience is in a professional mindset
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    People aren't scrolling LinkedIn the way they scroll other platforms, which tends to mean higher-intent engagement for business offers.
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
                    It's built for longer sales cycles
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Lead gen forms, retargeting, and account-based targeting make LinkedIn a natural fit for B2B LinkedIn advertising where the buying decision isn't made in one click.
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
                    It complements your other channels
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    LinkedIn works well alongside search and email for nurturing B2B leads across a longer funnel, rather than as a standalone impulse-purchase channel.
                  </p>
                </div>
              </div>
            </ContentPanel>
          </div>

          <div className="mt-8 text-center max-w-3xl mx-auto text-surface-300">
            These benefits of LinkedIn advertising are exactly why it's worth the higher cost-per-click for the right business — you're paying for precision, not just reach.
          </div>
        </section>

        {/* 4. WHAT LINKEDIN ADVERTISING ACTUALLY COSTS */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 border-[#4DE8DC]/30">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <DollarSign className="w-3.5 h-3.5" />
                Rates & CPC Benchmarks
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                What LinkedIn Advertising Actually Costs
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed text-left md:text-center">
                <p>
                  LinkedIn advertising rates run higher than most other ad platforms, and that's usually the first thing people ask about. LinkedIn CPC advertising costs vary significantly by industry, targeting specificity, and competition for that audience — a broad consumer campaign and a narrow enterprise-software campaign will look completely different in cost.
                </p>
                <p>
                  If you're wondering how much advertising on LinkedIn costs for your business specifically, the honest answer is that a generic number won't be useful — your industry and target audience affect it too much. We'll walk through your goals and give you real numbers during a free strategy call, along with a clear picture of whether LinkedIn is the right fit for your budget in the first place.
                </p>
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 5. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Impetic Difference"
            title="Not Just Another LinkedIn Advertising Agency"
            description="How our approach compares to traditional social media agencies."
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
              Among LinkedIn advertising agencies, the ones that actually deliver results tend to treat LinkedIn as its own discipline — not a repurposed version of a consumer social strategy. That's the approach we take on every account.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See How We Build LinkedIn Campaigns →
              </Link>
            </div>
          </div>
        </section>

        {/* 6. LINKEDIN ADVERTISING CONSULTING */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-10 border-surface-800">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-surface-100">
                  LinkedIn Advertising Consulting
                </h3>
                <p className="text-surface-300 leading-relaxed text-sm">
                  Not ready to hand over full management? Our LinkedIn advertising consultant service gives you a real audit and strategy session — an honest read on whether your current targeting and messaging are working, and what to fix if they're not. Businesses that end up ranked among the top LinkedIn advertising performers in their space usually got there by fixing the fundamentals first, not by simply spending more.
                </p>
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 7. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your LinkedIn Campaigns"
            description="A disciplined, data-driven approach engineered for qualified B2B leads."
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
            title="Proven B2B Performance Drivers"
            description="Measurable pipeline outcomes when targeting matches real decision-maker profiles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                32% lower cost-per-lead
              </div>
              <p className="text-surface-300 text-sm">
                after ABM audience refinement — Enterprise Security SaaS
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                85+ qualified SQLs/month
              </div>
              <p className="text-surface-300 text-sm">
                from account-based LinkedIn campaigns — Fintech Consulting
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="LinkedIn Advertising & Cost FAQ"
            description="Clear answers on cost-per-click, B2B suitability, consulting, and business size."
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
                Stop Paying LinkedIn's Premium Prices For The Wrong Audience.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Get a strategy built around precise B2B targeting and messaging that actually speaks to decision-makers — not a repurposed consumer ad campaign.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free LinkedIn Ads Strategy Call →
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
