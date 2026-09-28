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
  Zap,
  Clock,
  SlidersHorizontal,
  Layers,
  MapPin,
  HelpCircle,
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

export default function PPCPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Launch a campaign and check in monthly',
      good: 'Active weekly management and adjustments',
    },
    {
      bad: 'Optimize for clicks',
      good: 'Optimize for actual leads and sales',
    },
    {
      bad: 'One PPC strategy for every client',
      good: 'Custom approach based on your goals and market',
    },
    {
      bad: "Hard to reach once you've signed",
      good: 'A real person who answers when you call',
    },
    {
      bad: 'Big agency, small attention per client',
      good: 'Intentionally manageable client list',
    },
  ]

  const ppcBenefits = [
    {
      title: 'You show up immediately.',
      description: 'Unlike SEO, which builds over months, PPC can put you in front of customers today.',
      icon: Clock,
    },
    {
      title: 'You only pay for real interest.',
      description: "You're charged when someone clicks, not for passive impressions.",
      icon: MousePointerClick,
    },
    {
      title: 'You control the budget.',
      description: 'Scale up during busy seasons, pull back when things are slow — no long-term commitment required.',
      icon: SlidersHorizontal,
    },
    {
      title: 'You get real data, fast.',
      description: "PPC tells you what's working within days, not months, so decisions aren't based on guesswork.",
      icon: Zap,
    },
    {
      title: 'You can target with precision.',
      description: "Location, device, time of day, audience interests — you're not just hoping the right person sees your ad.",
      icon: Target,
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consult & Audit',
      description: "Understand your goals and review what's currently happening (or not happening).",
    },
    {
      step: '02',
      title: 'Build',
      description: 'Set up or restructure campaigns around real conversion goals, not vanity metrics.',
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Hands-on weekly management, testing, and bid adjustments.',
    },
    {
      step: '04',
      title: 'Report Honestly',
      description: "Clear updates on what's working, what's changing, and why.",
    },
  ]

  const faqs = [
    {
      q: 'What are the main advantages of pay-per-click advertising?',
      a: 'Speed, control, and measurability. You get visibility right away, you only pay when someone actually clicks, and you can see exactly what\'s working within days rather than waiting months like you would with organic strategies.',
    },
    {
      q: 'How is PPC consulting different from full PPC management?',
      a: 'Consulting is a one-time or periodic strategy session — we audit your account and tell you what to fix. Full management means we handle the day-to-day execution ourselves: setup, copy, bidding, and ongoing optimization.',
    },
    {
      q: 'Do you work with local businesses on smaller budgets?',
      a: 'Yes. As a local pay-per-click agency option for businesses that don\'t need a massive national campaign, we build geo-targeted PPC strategies sized to what actually makes sense for your market and budget.',
    },
    {
      q: 'Is PPC or SEO a better place to start?',
      a: 'Honestly, it depends on your timeline. If you need customers now, PPC gets you visibility immediately. If you\'re building for the long term, SEO compounds over time. Most businesses end up doing both — PPC for immediate results while SEO builds in the background.',
    },
  ]

  const socialProofItems = [
    { label: '41% lower cost-per-lead after rebuild', detail: 'Dental Care Associates / Healthcare' },
    { label: '95+ new leads/month from local PPC', detail: 'Pro Auto Repair / Automotive Services' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pay-Per-Click Advertising Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      "Impetic is a pay-per-click advertising company that treats your budget like it's ours. Local or national, we build PPC campaigns that actually convert.",
    areaServed: 'Worldwide',
    serviceType: 'Pay-Per-Click (PPC) Advertising & Consulting',
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
              eyebrow="Pay-Per-Click Advertising · Built Around Your Actual Goals"
              title={
                <>
                  Pay-Per-Click Should Mean Pay-For-Customers. <span className="flux-word">Not Pay-And-Hope.</span>
                </>
              }
              description="Impetic is a pay-per-click advertising company that builds campaigns around real outcomes — leads, calls, and sales — not just clicks that look good in a screenshot."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free PPC Consultation →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                If you&apos;ve ever asked your agency &quot;so what did we actually get for this?&quot; and gotten a shrug, we should talk.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Pay-per-click advertising sounds simple: you pay, people click, you get customers. In reality, most businesses have been burned by it at least once — money spent on the wrong keywords, ads shown to the wrong audience, or a &quot;specialist&quot; who set up a campaign once and never touched it again.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  That&apos;s not a PPC problem. That&apos;s a management problem.
                </p>
                <p>
                  Done right, PPC is one of the fastest ways to get in front of people who are already looking for what you sell. Done wrong, it&apos;s just an expensive way to find out your landing page needs work. Impetic exists to make sure you&apos;re in the first group.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. We manage your budget the way we&apos;d manage our own.
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
                    What Sets Us Apart From <span className="flux-word">Other Pay-Per-Click Advertising Companies</span>
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
                  We&apos;re regularly named among the top pay-per-click agencies clients switch to after a bad experience elsewhere — usually because the last agency treated their account like one of a hundred, instead of the only one that mattered.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Manage PPC Accounts →
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
                    Comprehensive <span className="flux-word">PPC Solutions</span>
                  </>
                }
              />

              {/* Module 1 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Service 01
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Pay-Per-Click Consulting
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    Not ready to hand over full management yet? Our pay-per-click consulting service gives you a real audit and strategy session with a pay-per-click advertising specialist — someone who&apos;ll tell you honestly whether your current setup is working, and exactly what to fix if it&apos;s not.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 2 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Service 02
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Full PPC Management
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    As a full-service pay-per-click advertising company, we handle everything — strategy, setup, copywriting, bidding, and ongoing optimization — across Google Ads, Microsoft Ads, and social platforms where it makes sense for your business. If you&apos;ve been searching for &quot;pay-per-click services near me,&quot; here&apos;s the honest answer: the best fit isn&apos;t always the closest office, it&apos;s the team that actually picks up the phone and knows your industry.
                  </p>
                </div>
              </ContentPanel>

              {/* Module 3 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Service 03
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Local PPC Campaigns
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    For businesses relying on nearby customers, we run PPC the way a local pay-per-click agency should — geo-targeted campaigns, location-specific ad copy, and budgets that aren&apos;t wasted on clicks from three states away.
                  </p>
                </div>
              </ContentPanel>
            </div>
          </section>

          {/* SECTION 5: WHY PPC IS WORTH IT */}
          <section className="py-12">
            <ContentPanel className="max-w-5xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Key Benefits"
                title={
                  <>
                    The Real Advantages of <span className="flux-word">Pay-Per-Click Advertising</span>
                  </>
                }
                description="If you're weighing PPC against other marketing channels, here's what actually matters:"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {ppcBenefits.map((item, idx) => {
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

              <p className="mt-8 text-center text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                These pay-per-click benefits are exactly why it works so well alongside SEO instead of instead of it — PPC gets you visibility now while your organic presence builds for the long run.
              </p>
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
                    How We Run <span className="flux-word">Your PPC Campaigns</span>
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
                description="Real growth figures achieved through targeted pay-per-click management."
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
                title="Your Next Customer Is Already Searching. Let's Make Sure They Find You."
                description="Stop paying for clicks that go nowhere. Work with a pay-per-click advertising company that treats your budget like it actually matters."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free PPC Consultation →
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
