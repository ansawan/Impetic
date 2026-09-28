'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Code2,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Globe2,
  Smartphone,
  ShoppingBag,
  Store,
  Building2,
  MapPin,
  Laptop,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const CircuitTubeScene = dynamic(
  () => import('@/components/3d/scenes/CircuitTubeScene').then((m) => m.CircuitTubeScene),
  { ssr: false }
)

const SCENE_KEYFRAMES = [
  { t: 0.0, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.7, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.0, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function WebDevelopmentPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Hand off the site and disappear',
      good: 'Ongoing support and updates after launch',
    },
    {
      bad: 'Design-first, function-second',
      good: 'Built around conversion and usability from the start',
    },
    {
      bad: 'One platform regardless of fit',
      good: 'Match the platform (CMS, Shopify, WooCommerce, custom) to your actual needs',
    },
    {
      bad: '"Responsive" means it technically doesn\'t break',
      good: 'Genuinely tested across devices, not just resized',
    },
    {
      bad: 'Slow-loading sites nobody flags until it\'s a problem',
      good: 'Performance built in from the start, not bolted on later',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand your goals, audience, and what the site actually needs to accomplish.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Build around usability and conversion, not just visual style.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Build on the right platform for your needs — CMS, Shopify, WooCommerce, or custom.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Test thoroughly across devices, launch, and stay available for ongoing updates.',
    },
  ]

  const faqs = [
    {
      q: "What's the difference between Shopify and WooCommerce?",
      a: 'Shopify is a hosted ecommerce platform — simpler to manage, with built-in hosting and support. WooCommerce is a plugin built on WordPress, offering more flexibility and control but requiring more hands-on management. The right choice depends on how much control you want versus how much you\'d rather have handled for you.',
    },
    {
      q: 'Do I need a custom CMS or is a standard one enough?',
      a: 'For most businesses, a standard CMS (like WordPress) customized to your needs is more cost-effective and easier to maintain than a fully custom-built system. Custom builds make sense when your business has very specific functionality that standard platforms can\'t handle.',
    },
    {
      q: 'How important is responsive design, really?',
      a: 'Very. For most businesses, a significant share of traffic comes from mobile devices, and a site that doesn\'t work well on phones is actively losing visitors and potential customers.',
    },
    {
      q: 'Do you work with businesses outside your immediate area?',
      a: 'Yes — most web development work happens remotely and collaboratively regardless of location, so where you\'re based matters far less than finding a team that understands your goals and communicates well.',
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
        <CircuitTubeScene stage={0} />
      </ScrollScene>

      <div className="relative z-10 space-y-24 pb-20">
        {/* 1. HERO SECTION */}
        <div>
          <PageHero
            eyebrow="Website Development · Built To Convert, Not Just Look Nice"
            title="A Beautiful Website That Doesn't Convert Is Just An Expensive Business Card."
            description="Impetic is a website development company that builds sites people can actually use — fast, responsive, and structured around getting visitors to become customers, not just win a design award."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free Website Audit →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              If your site looks great on a laptop and falls apart on a phone, most of your visitors are already gone.
            </div>
          </div>
        </div>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <Code2 className="w-3.5 h-3.5" />
                The Silent Cost Of A Broken Site
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                Why Standard Websites Fail To Convert
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  A lot of businesses have a website that technically exists, but doesn't actually do anything for them. It loads slowly. It looks fine on a desktop and breaks on mobile. It was built once, years ago, and nobody's touched it since — meanwhile the platform it's built on has been quietly falling behind on security and functionality.
                </p>
                <p>
                  The real cost isn't how the site looks. It's what it's silently costing you — visitors who bounce because a page took too long to load, forms that don't work right on mobile, or a checkout process nobody bothered to test properly.
                </p>
                <p>
                  Impetic builds websites the way they should be built from the start: fast, responsive, easy to manage, and structured around what your visitors actually need to do next.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. A site that doesn't convert isn't a finished project to us — it's an unfinished one.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Impetic Difference"
            title="What Sets Us Apart From Other Website Development Companies"
            description="We don't hand you a finished-looking site and walk away. A website is a working part of your business, and we treat it that way."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-800">
                  <th className="py-4 px-6 text-sm font-semibold text-surface-400 w-1/2">
                    What most website development companies do
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
              We're regularly mentioned among the top website development companies for one straightforward reason — we don't hand you a finished-looking site and walk away. A website is a working part of your business, and we treat it that way.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See Our Web Development Process →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE BUILD */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Build"
            description="Tailored web platforms built around your business goals, platform requirements, and growth strategy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* CMS Websites */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    CMS Websites
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    If you need to update content regularly without calling a developer every time, our CMS website development services give you a site built on a content management system you can actually manage yourself — without sacrificing design or performance to get there.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Responsive Websites */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Responsive Websites
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    More traffic comes from phones than desktops for most businesses now, so responsive website development isn't optional — it's the baseline. As a responsive website development company, we test across real devices, not just a browser resize, so your site actually works the way it's supposed to everywhere it's viewed.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Shopify Stores */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Shopify Stores
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    For ecommerce businesses that want a proven, flexible platform, we build and customize stores as a Shopify website development company — theme customization, app integration, and checkout optimization built around your specific products, not a generic template.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* WooCommerce Stores */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    WooCommerce Stores
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    If you want ecommerce built directly on WordPress for more control and flexibility, our WooCommerce website development services cover setup, customization, and ongoing management — a solid option for businesses that want ecommerce integrated with existing WordPress content.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* B2B Websites */}
            <ContentPanel className="p-6 md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    B2B Websites
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    B2B sites have different jobs to do than consumer storefronts — longer sales cycles, more complex service or product explanations, and often a need to integrate with a CRM or lead-gen system. As a B2B website development company, we build sites structured around how business buyers actually research and decide, not a repurposed ecommerce template.
                  </p>
                </div>
              </div>
            </ContentPanel>
          </div>
        </section>

        {/* 5. WHERE WE WORK */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-10 border-surface-800">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC] shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-surface-100">
                  Where We Work
                </h3>
                <p className="text-surface-300 leading-relaxed text-sm">
                  If you've been searching for a website development company near me, here's the honest take: location matters less than it used to for web development, since most of the work happens remotely and collaboratively either way. What actually matters is whether the team understands your industry, communicates clearly, and is available when you need them — not just how close their office is.
                </p>
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your Website"
            description="A structured, conversion-driven development process from discovery to post-launch support."
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
            title="Real Web Engineering Outcomes"
            description="Measurable improvements when performance, responsiveness, and conversion UX unite."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +55% increase in mobile conversion rate
              </div>
              <p className="text-surface-300 text-sm">
                after Next.js mobile rebuild — Swift Logistics
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                65% reduction in page load time
              </div>
              <p className="text-surface-300 text-sm">
                performance optimization — CloudMarket Marketplace
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Web Development FAQ"
            description="Answers regarding platforms, custom CMS requirements, responsive testing, and remote work."
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
                Stop Paying For A Website That Just Sits There.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Get a site built to actually do something — load fast, work on every device, and turn visitors into customers.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free Website Audit →
              </Link>
            </div>

            <div className="text-xs text-surface-400 italic">
              Your business will be our business — that's not a slogan, it's how we run every project.
            </div>
          </ContentPanel>
        </section>
      </div>
    </>
  )
}
