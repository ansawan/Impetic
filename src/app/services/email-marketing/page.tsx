'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Mail,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Building2,
  Zap,
  Briefcase,
  Target,
  ShieldCheck,
  UserCheck,
  HelpCircle,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const DataRibbonScene = dynamic(
  () => import('@/components/3d/scenes/DataRibbonScene').then((m) => m.DataRibbonScene),
  { ssr: false }
)

const SCENE_KEYFRAMES = [
  { t: 0.0, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.7, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.0, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function EmailMarketingPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'One generic email to the whole list',
      good: 'Segmented campaigns based on real behavior and intent',
    },
    {
      bad: 'Send and hope, minimal testing',
      good: 'Ongoing subject line, content, and timing testing',
    },
    {
      bad: 'Report on opens and nothing else',
      good: 'Report on opens, clicks, and actual revenue impact',
    },
    {
      bad: 'Deliverability issues go unnoticed',
      good: 'Active monitoring of sender reputation and deliverability',
    },
    {
      bad: 'One-size-fits-all approach',
      good: 'Strategy built around your industry, whether B2B, SaaS, or agency needs',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Review your current list health, deliverability, and campaign performance.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Build segmentation and campaign flows around your actual customer journey.',
    },
    {
      step: '03',
      title: 'Build & Send',
      description: 'Write, design, and automate campaigns tailored to each segment.',
    },
    {
      step: '04',
      title: 'Test & Optimize',
      description: 'Ongoing testing on subject lines, timing, and content based on real performance data.',
    },
  ]

  const faqs = [
    {
      q: 'What makes an email marketing agency "full-service"?',
      a: 'It means one team handles the entire program — strategy, copywriting, design, segmentation, automation, and reporting — rather than you coordinating separate freelancers or tools for each piece.',
    },
    {
      q: 'Do you offer white label email marketing for other agencies?',
      a: 'Yes. We can run campaigns entirely under your brand, with you as the client-facing point of contact while we handle strategy and execution behind the scenes.',
    },
    {
      q: 'Is email marketing still effective, or has it been replaced by other channels?',
      a: "It's still one of the highest-return channels available for most businesses, largely because you already own that audience relationship rather than renting attention through ad platforms. The channel isn't the problem when it underperforms — usually the strategy behind it is.",
    },
    {
      q: 'Do you work with SaaS companies specifically?',
      a: 'Yes — SaaS email marketing has its own considerations, like onboarding sequences and churn-reduction campaigns, and we build programs around that specific customer lifecycle rather than a generic ecommerce template.',
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
        <DataRibbonScene />
      </ScrollScene>

      <div className="relative z-10 space-y-24 pb-20">
        {/* 1. HERO SECTION */}
        <div>
          <PageHero
            eyebrow="Email Marketing · Built To Get Opened, Not Just Sent"
            title="A Newsletter Nobody Opens Isn't Marketing. It's Just Noise In An Inbox."
            description="Impetic is a full-service email marketing agency that builds campaigns around what actually gets opened, read, and acted on — not just a list of contacts getting the same generic blast every week."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free Email Strategy Audit →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              If your open rates have been declining for months and nobody's asked why, that's the actual problem to fix first.
            </div>
          </div>
        </div>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <Mail className="w-3.5 h-3.5" />
                The Ignored Inbox Trap
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                Why Most Email Campaigns Stop Working
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  Email marketing has a bad reputation in some circles, mostly because so much of it deserves it — generic newsletters, no real segmentation, and subject lines that read like everyone else's. People stop opening. Deliverability quietly gets worse. Eventually, "email doesn't work for us" becomes the conclusion, when really, the strategy never gave it a fair shot.
                </p>
                <p>
                  Done properly, email remains one of the highest-return channels available — because you already own that audience, you're not paying per click, and the right message to the right segment at the right time still gets read.
                </p>
                <p>
                  That's the difference between an inbox full of ignored blasts and an email program that's actually part of how customers move through your funnel.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. If your list stops opening, that's on us to fix, not just report on.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Impetic Difference"
            title="What Sets Us Apart From Other Email Marketing Agencies"
            description="We treat declining open rates as a signal to fix, not a metric to quietly stop reporting on."
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
              We're regularly listed among the best email marketing agencies for a straightforward reason — we treat declining open rates and stalled campaigns as a signal to fix, not a metric to quietly stop reporting on.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See How We Build Email Campaigns →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHO WE WORK WITH */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Target Audiences"
            title="Who We Work With"
            description="Specialized email strategies for complex sales cycles and business models."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* B2B Companies */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  B2B Companies
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  As a B2B email marketing agency, we understand that business buyers move through a longer, more considered decision process — our campaigns are built around nurturing that journey with the right information at the right stage, not a single hard sell.
                </p>
              </div>
            </ContentPanel>

            {/* SaaS Companies */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  SaaS Companies
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  Email marketing for SaaS companies has its own rhythm — onboarding sequences, trial-to-paid nurture flows, and retention campaigns that reduce churn matter as much as acquisition emails. We build around your actual customer lifecycle, not a generic ecommerce-style calendar.
                </p>
              </div>
            </ContentPanel>

            {/* Other Agencies */}
            <ContentPanel className="p-6">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] w-fit">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">
                  Other Agencies
                </h3>
                <p className="text-surface-300 text-sm leading-relaxed">
                  If you're an agency yourself, our email marketing for agencies offering gives you a specialized partner to handle campaigns for your own clients — either under our name as a referral partner, or fully white labeled under yours.
                </p>
              </div>
            </ContentPanel>
          </div>
        </section>

        {/* 5. WHAT WE OFFER */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Offer"
            description="Targeted campaigns, full-service execution, white label, and consulting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Targeted Email Marketing */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Targeted Email Marketing
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Blasting the same message to your entire list is the fastest way to tank engagement. Our targeted email marketing services segment your audience by behavior, lifecycle stage, and intent — so each email actually feels relevant to the person opening it.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Full-Service Email Marketing */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Full-Service Email Marketing
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    As a full-service email marketing agency, we handle everything — strategy, copywriting, design, segmentation, automation, and ongoing optimization — so you're not stitching together a freelance writer, a designer, and a platform expert separately. Full service email marketing means one team accountable for the whole program, not just pieces of it.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* White Label Email Marketing */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    White Label Email Marketing
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    If you're an agency or consultant who doesn't want to build an internal email team, our white label email marketing services run entirely behind the scenes under your brand — your client sees your name, we handle the strategy and execution.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Email Marketing Consulting */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Email Marketing Consulting
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Not ready for full management? Our email marketing consultant services give you an honest audit of your current program — deliverability, segmentation, and content — plus a clear plan for what to fix first.
                  </p>
                </div>
              </div>
            </ContentPanel>
          </div>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your Email Program"
            description="A disciplined 4-stage lifecycle framework engineered for open rates and revenue."
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

        {/* 7. SOCIAL PROOF SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Social Proof"
            title="Real Email Performance Growth"
            description="Measurable improvements in engagement, deliverability, and SaaS trial conversion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +68% increase in open rate
              </div>
              <p className="text-surface-300 text-sm">
                after behavioral segmentation rebuild — Health &amp; Wellness Brand
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                28% reduction in trial churn
              </div>
              <p className="text-surface-300 text-sm">
                from automated onboarding email sequence — SaaS App
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Email Marketing FAQ"
            description="Clear answers on full-service scope, white-label services, ROI, and SaaS lifecycle campaigns."
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

        {/* 9. FINAL CTA SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-10 md:p-14 text-center space-y-8 border-[#4DE8DC]/40 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#4DE8DC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-surface-100 tracking-tight">
                Stop Sending Emails Into A Void. Start Building A Program People Actually Open.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Get an email strategy built around real segmentation, real testing, and real accountability for results.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free Email Strategy Audit →
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
