'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Share2,
  Users,
  CheckCircle2,
  XCircle,
  ChevronDown,
  BarChart3,
  Building,
  MapPin,
  Landmark,
  Building2,
  DollarSign,
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

export default function SocialMediaMarketingPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Post on a schedule regardless of quality',
      good: 'Content built around what your audience actually engages with',
    },
    {
      bad: 'Report on likes and follower counts',
      good: 'Report on leads, traffic, and real business impact',
    },
    {
      bad: 'One generic strategy for every client',
      good: 'Custom approach based on your industry and audience',
    },
    {
      bad: 'Slow to respond or adjust',
      good: 'Active management and ongoing optimization',
    },
    {
      bad: 'Unclear or hidden pricing',
      good: 'Transparent, straightforward pricing',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: "Review your current presence, audience, and what's actually working (or not).",
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Build a content and platform plan based on your goals, not a generic template.',
    },
    {
      step: '03',
      title: 'Create & Manage',
      description: 'Ongoing content creation, posting, and community management.',
    },
    {
      step: '04',
      title: 'Report & Adjust',
      description: 'Clear reporting tied to real outcomes, with strategy adjustments based on what\'s actually performing.',
    },
  ]

  const faqs = [
    {
      q: 'How much does social media marketing cost?',
      a: 'It depends on the number of platforms, content volume, and whether paid social is included. Rather than a generic range, we provide a specific quote after understanding your actual goals during a free audit.',
    },
    {
      q: 'Do you only work with small businesses, or bigger companies too?',
      a: 'Both. Business size doesn\'t change our approach — it changes the scope. Whether you\'re a small local business or an established brand, we build the strategy around your actual goals and budget rather than offering a generic package based on your size.',
    },
    {
      q: 'What makes a social media marketing agency "best" for small businesses?',
      a: 'Usually, it comes down to whether the strategy is actually built for your budget and goals, or whether you\'re getting a scaled-down version of a template built for bigger clients. Look for transparent pricing and reporting tied to real results, not just post frequency.',
    },
    {
      q: 'Do you offer social media marketing for financial services or other regulated industries?',
      a: 'Yes — we build strategies that account for compliance and trust-building needs specific to financial services, while still creating content that actually engages an audience.',
    },
    {
      q: 'Is local social media marketing different from a general social strategy?',
      a: 'Yes. Local strategy focuses on your specific service area — content, targeting, and messaging built around the community you actually serve, rather than a broad, one-size-fits-all approach.',
    },
  ]

  const socialProofItems = [
    { label: '+310% increase in social engagement', detail: 'Urban Fitness Studio / Consumer & Fitness' },
    { label: '140+ qualified leads/month from social', detail: 'Aesthetics Clinic / Medical Spa' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Marketing Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      'Impetic is a social media marketing company that builds strategy around real business results, not just post count. Small business, enterprise, local, and financial services experience.',
    areaServed: 'Worldwide',
    serviceType: 'Social Media Marketing & Strategy Management',
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
              eyebrow="Social Media Marketing · Built Around Results, Not Just Post Count"
              title={
                <>
                  Posting More Isn&apos;t A Strategy. <span className="flux-word">It&apos;s Just Noise With Extra Steps.</span>
                </>
              }
              description="Impetic is a social media marketing company that builds a real strategy behind every post — one tied to leads, brand trust, and actual business goals, not just a content calendar for the sake of staying &quot;active.&quot;"
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Get a Free Social Media Audit →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                If your current agency&apos;s biggest metric is &quot;we posted 3x a week,&quot; you&apos;re paying for activity, not results.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  A lot of businesses have been burned by social media marketing before — not because social media doesn&apos;t work, but because &quot;management&quot; often means someone scheduling generic posts, throwing in a few hashtags, and calling it a strategy. Engagement stays flat, followers don&apos;t turn into customers, and nobody can explain why.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl">
                  Social media works when it&apos;s tied to something real: a consistent brand voice, content that actually resonates with your specific audience, and a plan for turning followers into leads — not just likes.
                </p>
                <p>
                  That&apos;s the difference between hiring social media marketing companies that fill a calendar and hiring one that builds a strategy around your business goals from day one.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. If it doesn&apos;t move the needle for you, we don&apos;t consider it a win either.
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
                    What Sets Us Apart From <span className="flux-word">Other Social Media Marketing Companies</span>
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
                  We&apos;re often listed among the top social media marketing agencies because we don&apos;t try to run every account the same way — a solo local business and an established enterprise brand need completely different approaches, and we build accordingly, whether you&apos;re just starting out or already scaling.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We Build Social Strategy →
                  </Link>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 4: WHO WE WORK WITH */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-8">
              <SectionHeading
                align="center"
                eyebrow="Target Audiences"
                title={
                  <>
                    Who We <span className="flux-word">Work With</span>
                  </>
                }
                description="Whether you're a five-person local business or an established brand with a marketing team already in place, the approach doesn't change — the strategy just scales to fit. We don't have a &quot;small business version&quot; and a &quot;real client version&quot; of our service."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Module 1 */}
                <ContentPanel>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <Building className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#EAF6F5]">
                        Small Businesses
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      As one of the social media marketing companies for small business owners actually trust, we understand that you don&apos;t have unlimited budget or time to babysit an agency. We build lean, effective strategies focused on what actually drives customers through your door — not vanity content that looks nice but goes nowhere.
                    </p>
                  </div>
                </ContentPanel>

                {/* Module 2 */}
                <ContentPanel>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#EAF6F5]">
                        Growing &amp; Established Brands
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Bigger doesn&apos;t mean the strategy gets generic — it means more moving parts: multiple platforms, more content volume, tighter brand guidelines, sometimes a marketing team on your side we coordinate with directly. We scale the same disciplined approach up, rather than switching to a different playbook once a business gets past a certain size.
                    </p>
                  </div>
                </ContentPanel>

                {/* Module 3 */}
                <ContentPanel>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#EAF6F5]">
                        Local Businesses
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      If your customers are in your community, your social strategy should reflect that. As a local social media marketing agency, we build content and targeting around your actual service area — because &quot;near me&quot; searches convert differently than a national brand&apos;s social presence needs to.
                    </p>
                  </div>
                </ContentPanel>

                {/* Module 4 */}
                <ContentPanel>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                        <Landmark className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#EAF6F5]">
                        Financial Services
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Social media marketing for financial services comes with its own rules — compliance considerations, trust-building content, and a tone that needs to feel credible, not gimmicky. We build strategies that respect those constraints while still creating content people actually engage with.
                    </p>
                  </div>
                </ContentPanel>
              </div>
            </div>
          </section>

          {/* SECTION 5: WHAT IT ACTUALLY COSTS */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <SectionHeading
                align="center"
                eyebrow="Pricing Structure"
                title={
                  <>
                    What It <span className="flux-word">Actually Costs</span>
                  </>
                }
              />

              <div className="mt-6 space-y-4 text-base sm:text-lg text-white leading-relaxed text-center max-w-3xl mx-auto">
                <p>
                  Social media marketing pricing varies based on how many platforms you need covered, how much content is produced monthly, and whether paid social is included alongside organic management.
                </p>
                <p>
                  Rather than publishing a generic price range that may not reflect your actual needs, we&apos;ll walk through your goals during a free audit and give you a clear, honest quote — no vague &quot;starting at&quot; numbers that balloon once you sign.
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
                    How We Build <span className="flux-word">Your Social Media Strategy</span>
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
                description="Measurable engagement and lead volume improvements driven by strategic social campaigns."
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
                title="Stop Paying For A Content Calendar. Start Getting A Strategy."
                description="Get a social media plan built around real business outcomes — not just a posting schedule that looks busy."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Get Your Free Social Media Audit →
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
