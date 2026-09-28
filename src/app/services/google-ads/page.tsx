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
  Globe2,
  ShieldCheck,
  MousePointerClick,
  Sparkles,
  Building2,
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

export default function GoogleAdsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Set it and forget it after month one',
      good: 'Weekly hands-on optimization, every account',
    },
    {
      bad: 'Vague reports full of jargon',
      good: 'Plain-English reporting tied to leads and revenue',
    },
    {
      bad: 'One generic strategy for every client',
      good: 'Custom approach for B2B, local, or international goals',
    },
    {
      bad: 'Disappear when you have questions',
      good: 'An actual human who picks up the phone',
    },
    {
      bad: 'Charge agency prices, deliver junior-level work',
      good: 'Senior strategists on your account from day one',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: "We look at what's actually happening in your account, good and bad, no sugarcoating.",
    },
    {
      step: '02',
      title: 'Rebuild',
      description: 'Restructure campaigns, tracking, and targeting around what actually drives leads.',
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Weekly hands-on management, not a "set it and check back next quarter" approach.',
    },
    {
      step: '04',
      title: 'Report & Adjust',
      description: "Plain-English updates on what's working, what's not, and what we're changing next.",
    },
  ]

  const faqs = [
    {
      q: 'Should I run Google Ads or Local Service Ads?',
      a: "It depends on your business. LSAs work well for local service businesses (home services, legal, some healthcare) where you're allowed to run them and want pay-per-lead pricing. Google Ads/PPC gives you more control and works for pretty much any industry, including B2B and ecommerce. Many local businesses actually benefit from running both at the same time.",
    },
    {
      q: "What's the best time to run Google Ads?",
      a: 'There\'s no single universal answer — it depends on your industry, your audience\'s behavior, and your sales cycle. What we can tell you is that "always on" isn\'t always right either; part of our job is figuring out when your budget works hardest and adjusting bidding around it.',
    },
    {
      q: 'Do you offer white label Google Ads management?',
      a: "Yes. If you're an agency or consultant, we can manage campaigns fully under your brand — you stay the point of contact, we handle execution behind the scenes.",
    },
    {
      q: 'Do you work with B2B companies and businesses outside the US?',
      a: 'Yes, on both counts. We manage B2B lead generation campaigns and have run international accounts across different markets and time zones, including work for clients based in Sydney.',
    },
  ]

  const socialProofItems = [
    { label: '44% reduction in cost-per-lead', detail: 'SolarTech Solutions / Clean Energy' },
    { label: '120+ qualified leads/month from Local Service Ads', detail: 'Metro Roofing & Solar / Contracting' },
    { label: 'Expanded to 4 international markets', detail: 'Global Logistics Hub / Commercial Freight' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Google Ads Management Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Impetic runs Google Ads and Local Service Ads that actually convert — not just click. B2B lead gen, white label, and international campaigns done right.',
    areaServed: 'Worldwide',
    serviceType: 'Google Ads, Local Service Ads & PPC Management',
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
              eyebrow="Google Ads &amp; PPC · Managed By People Who've Actually Burned Their Own Budget"
              title={
                <>
                  We Spend Your Ad Budget Like It&apos;s Ours. <span className="flux-word">Because Honestly, It Feels Like It Is.</span>
                </>
              }
              description="Impetic manages Google Ads, PPC, and Local Service Ads for businesses who are tired of watching their budget disappear into clicks that never turn into customers."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free Ads Audit →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                If your current agency can&apos;t explain where your money went last month, that&apos;s your answer right there.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Let&apos;s be honest — most people&apos;s experience with Google Ads agencies goes one of two ways. Either the reporting is so vague you can&apos;t tell if anything&apos;s actually working, or the campaigns are &quot;optimized&quot; once and then left on autopilot for three months while you keep paying the bill.
                </p>
                <p>
                  We&apos;ve seen both. We&apos;ve also seen how much a genuinely well-run campaign can change a business — the kind where every dollar has a job, and someone&apos;s actually watching it do that job every single week.
                </p>
                <p>
                  That&apos;s what Impetic does. Whether it&apos;s Google Ads, PPC management, or Local Service Ads, we treat your account the way we&apos;d treat our own money — because at the end of the day, your growth is our track record.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. Your ad spend is our responsibility, not just our invoice.
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
                    Not Just &quot;Best Google Ads Agency&quot; — <span className="flux-word">The One That Answers Your Emails</span>
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
                  We&apos;re often mentioned among the best Google Ads management services for one simple reason — we treat every account like it&apos;s the only one we have. That mindset doesn&apos;t scale the &quot;lazy&quot; way, so we keep our client list intentionally manageable instead of stretching thin.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Manage Accounts →
                  </Link>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 4: CORE GOOGLE ADS SERVICES (Pillar Breakdown) */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <SectionHeading
                align="center"
                eyebrow="Core Google Ads Services"
                title={
                  <>
                    Our Specialized <span className="flux-word">PPC Solutions</span>
                  </>
                }
              />

              {/* Pillar 1 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 1
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Local Service Ads (LSA)
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    If you&apos;re a home services, legal, or local trade business, Local Service Ads are often the fastest path to the phone ringing — you show up at the very top, pay per lead instead of per click, and get that trusted &quot;Google Guaranteed&quot; badge. The catch? LSA accounts get disapproved, budgets get wasted on bad leads, and most agencies don&apos;t actually specialize in this format.
                  </p>
                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    As a Google Local Service Ads agency, we handle the setup, dispute bad leads on your behalf, and keep your profile in good standing so you&apos;re not the one on hold with Google support.
                  </p>
                </div>
              </ContentPanel>

              {/* Pillar 2 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <MousePointerClick className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 2
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Google Ads &amp; PPC Management
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-base sm:text-lg text-white leading-relaxed">
                    <p>
                      Search, Display, Shopping, Performance Max — we manage the full mix based on what actually fits your business, not what&apos;s easiest for us to set and forget. A common question we get is Google Ads vs. Local Service Ads — honestly, for a lot of local businesses, the answer is both, running together, each doing a different job in your funnel.
                    </p>
                    <p>
                      We also pay attention to things people underestimate, like the best time to run Google Ads for your specific industry — seasonality, day-of-week bidding patterns, and audience behavior all factor into how we structure your campaigns, not just your budget.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-base font-bold text-[#4DE8DC] uppercase tracking-wider">
                      What&apos;s included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Full account audit and restructure</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Ongoing bid, budget, and keyword management</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Landing page and conversion tracking review</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Weekly performance check-ins, not just monthly PDFs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ContentPanel>

              {/* Pillar 3 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 3
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        White Label Google Ads Management
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    If you&apos;re an agency, consultant, or freelancer who doesn&apos;t want to build out a full paid media team, we run white label Google Ads management behind the scenes under your brand. Your client sees your name on the report. We do the actual work. No awkward introductions, no &quot;here&apos;s our partner agency&quot; conversation you have to have.
                  </p>
                </div>
              </ContentPanel>

              {/* Pillar 4 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 4
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        B2B &amp; International Google Ads
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-base sm:text-lg text-white leading-relaxed">
                    <p>
                      B2B lead gen is a different animal — longer sales cycles, smaller and more specific audiences, and a much higher cost of a wasted click. Among B2B Google Ads agencies, what usually separates the ones that work from the ones that don&apos;t is whether they understand your actual buyer, not just your keywords.
                    </p>
                    <p>
                      We also run campaigns for clients outside the US — as an international Google Ads agency, we&apos;ve managed accounts across multiple time zones and markets, including client work out of Sydney, so we understand that &quot;best practices&quot; shift depending on where your customers actually are.
                    </p>
                  </div>
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
                    How We Run <span className="flux-word">Your Campaigns</span>
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

              <p className="mt-8 text-center text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                No black box. If you ask us why we made a change, we&apos;ll actually be able to tell you.
              </p>
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
                description="Proven PPC & search ad performance across competitive industries."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
                title="Your Ad Budget Deserves Someone Who Actually Watches It"
                description="You don't need another agency that disappears after the kickoff call. You need one that treats your ad spend like it matters — because to us, it does."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free Ads Audit →
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
