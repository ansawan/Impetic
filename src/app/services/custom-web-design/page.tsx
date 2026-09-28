'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Palette,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ShoppingBag,
  Database,
  DollarSign,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContentPanel } from '@/components/ui/ContentPanel'
import { TimelineNode } from '@/components/cards/TimelineNode'

const ScrollScene = dynamic(() => import('@/components/3d/ScrollScene').then((m) => m.ScrollScene), {
  ssr: false,
})
const GlassClusterScene = dynamic(
  () => import('@/components/3d/scenes/GlassClusterScene').then((m) => m.GlassClusterScene),
  { ssr: false }
)

const SCENE_KEYFRAMES = [
  { t: 0.0, pos: [0, 0, 8.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.35, pos: [3.0, 1.5, 5.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 0.7, pos: [-3.0, -1.0, 4.5] as [number, number, number], look: [0, 0, 0] as [number, number, number] },
  { t: 1.0, pos: [0, 0, 6.5] as [number, number, number], look: [0, 0, -1] as [number, number, number] },
]

export default function CustomWebDesignPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'A template with swapped colors and images',
      good: 'Design and functionality built around your specific needs',
    },
    {
      bad: 'Same layout structure as every other client',
      good: 'Structure built around your actual user journey',
    },
    {
      bad: 'Custom quote, template-level execution',
      good: 'Pricing that reflects the real scope of custom work',
    },
    {
      bad: 'One development approach for every project',
      good: 'Platform and build method matched to what you\'re actually building',
    },
    {
      bad: 'No real say in how it\'s built',
      good: 'Transparent process where you understand every decision',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand your actual workflow, catalog, or user journey — not just your visual preferences.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Build a structure and design around what your business specifically needs.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Build on the right platform (custom, Magento, or otherwise) matched to your requirements.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Test thoroughly, launch, and stay available for ongoing updates as your business evolves.',
    },
  ]

  const faqs = [
    {
      q: 'When do I actually need a custom website instead of a template?',
      a: "Generally, once your workflow, product catalog, or user journey has requirements a standard theme can't handle well — complex filtering, custom integrations, or a checkout process that doesn't fit a standard flow are common signs it's time for custom work.",
    },
    {
      q: 'Is custom web design always more expensive?',
      a: 'It\'s typically a bigger investment upfront than a template, since it\'s built from scratch around your specific needs. That said, "affordable custom design" means being strategic about where custom work is actually necessary versus where proven components can be used to manage cost.',
    },
    {
      q: 'Why choose Magento over a simpler ecommerce platform?',
      a: 'Magento tends to make sense for larger or more complex ecommerce operations — advanced catalog management, more complex integrations, or scale that simpler platforms weren\'t built to handle.',
    },
    {
      q: 'What\'s the difference between "customized" and truly custom?',
      a: 'Customized often means a template with colors, fonts, or images changed. Truly custom means the structure, functionality, and design are built specifically around your business\'s actual needs, not adapted from someone else\'s template.',
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
        <GlassClusterScene stage={3} />
      </ScrollScene>

      <div className="relative z-10 space-y-24 pb-20">
        {/* 1. HERO SECTION */}
        <div>
          <PageHero
            eyebrow="Custom Web Design & Development · Built Around Your Business, Not A Template"
            title="Your Business Isn't Generic. Your Website Shouldn't Be Either."
            description="Impetic provides custom website development services built specifically around how your business actually works — not a stock theme with your logo dropped on top."
          />
          <div className="text-center -mt-8 space-y-4 px-4">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-base shadow-lg shadow-[#4DE8DC]/20"
              >
                Get a Free Custom Design Consultation →
              </Link>
            </div>
            <div className="text-sm text-surface-400 italic max-w-xl mx-auto">
              If your website looks like ten other sites in your industry, that's because it probably is one of them.
            </div>
          </div>
        </div>

        {/* Cross-link Banner for Standard Platform Builds */}
        <section className="container max-w-5xl mx-auto px-4">
          <div className="p-4 rounded-2xl bg-surface-900/40 border border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-surface-300">
              <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0" />
              <span>Looking for standard CMS, Shopify, or WooCommerce platform builds?</span>
            </div>
            <Link
              href="/services/web-development"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4DE8DC] hover:underline shrink-0"
            >
              Explore General Web Development →
            </Link>
          </div>
        </section>

        {/* 2. THE PROBLEM (Intro / Hook) */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4DE8DC] bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 px-3 py-1 rounded-full">
                <Palette className="w-3.5 h-3.5" />
                The Template Limitation Trap
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-surface-100 tracking-tight">
                The Difference Between "Customized" And Truly Custom
              </h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  There's a real difference between a website that's "customized" — a template with your colors and a swapped-out photo — and one that's actually custom, built around what your business specifically needs to do. Templates are fine for a lot of businesses. But once your workflow, product catalog, or customer journey gets even a little complex, a stock template starts fighting you instead of helping you.
                </p>
                <p>
                  That's usually when businesses come to us — after hitting a wall with a theme that can't do what they need, or after realizing "customized" just meant a few color changes on someone else's design.
                </p>
                <p>
                  Custom web design and development means building around your actual requirements from the ground up, not working within the limits of a template and hoping it's close enough.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/20 text-[#4DE8DC] font-medium">
                Your business becomes our business. If a template genuinely fits your needs, we'll tell you — we're not here to oversell custom work you don't need.
              </div>
            </div>
          </ContentPanel>
        </section>

        {/* 3. WHY IMPETIC IS DIFFERENT */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Genuine Custom Engineering"
            title='What "Custom" Actually Means At Impetic'
            description="We don't slap the word 'custom' on template work to justify a higher price."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-800">
                  <th className="py-4 px-6 text-sm font-semibold text-surface-400 w-1/2">
                    What most agencies call "custom"
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#4DE8DC] w-1/2">
                    What Impetic actually delivers
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
              We don't slap the word "custom" on template work to justify a higher price. When we say custom web design and development, we mean the site is actually built around your business — not assembled from someone else's design decisions.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors"
              >
                See Our Custom Design Process →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE BUILD */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Custom Capabilities"
            title="What We Build"
            description="Custom architecture and ecommerce solutions built for complex requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Custom Website Development */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Custom Website Development
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    For businesses that need more than a template can offer, our custom website development services cover everything from information architecture to custom functionality — built to match how your business actually operates, not forced into a pre-built structure.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Custom Ecommerce Development */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Custom Ecommerce Development
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Off-the-shelf ecommerce themes work fine until your product catalog, checkout flow, or customer experience needs something they weren't built for. Our custom ecommerce website development services are built around your actual catalog and customer journey — not the limitations of a theme you're trying to bend into shape. From custom ecommerce web design through to full build-out, we handle the whole process as one connected project instead of separate design and development phases that don't quite line up.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Custom Magento Development */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Custom Magento Development
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    For larger or more complex ecommerce operations, Magento offers a level of flexibility and scalability that simpler platforms don't. Our custom Magento website development services cover custom builds and extensions suited to businesses with more advanced catalog, inventory, or integration needs than a standard ecommerce platform can handle.
                  </p>
                </div>
              </div>
            </ContentPanel>

            {/* Affordable Custom Design */}
            <ContentPanel className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 text-[#4DE8DC]">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-surface-100 mb-2">
                    Affordable Custom Design
                  </h3>
                  <p className="text-surface-300 text-sm leading-relaxed">
                    Custom doesn't have to mean starting from a blank page at maximum cost. Affordable custom web design means being honest about what actually needs to be built custom versus where established, well-built components can be used to keep cost and timeline reasonable — without cutting corners on the parts that matter most to your business.
                  </p>
                </div>
              </div>
            </ContentPanel>
          </div>
        </section>

        {/* 5. OUR PROCESS */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Methodology"
            title="How We Build Your Custom Site"
            description="A disciplined custom engineering framework matched to your exact business specifications."
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

        {/* 6. SOCIAL PROOF SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <SectionHeading
            eyebrow="Social Proof"
            title="Real Custom Engineering Results"
            description="Measurable improvements when checkout flows and catalog architectures are built custom."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                +42% increase in checkout completion
              </div>
              <p className="text-surface-300 text-sm">
                after custom ecommerce rebuild — Modern Fashion Co.
              </p>
            </ContentPanel>

            <ContentPanel className="p-6 text-center space-y-3">
              <div className="text-3xl font-extrabold text-[#4DE8DC]">
                35% reduction in cart abandonment
              </div>
              <p className="text-surface-300 text-sm">
                on custom high-converting build — Elite Gear Direct
              </p>
            </ContentPanel>
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Custom Web Design & Magento FAQ"
            description="Clear answers on template boundaries, pricing strategy, Magento scalability, and true custom builds."
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

        {/* 8. FINAL CTA SECTION */}
        <section className="container max-w-5xl mx-auto px-4">
          <ContentPanel className="p-10 md:p-14 text-center space-y-8 border-[#4DE8DC]/40 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#4DE8DC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-surface-100 tracking-tight">
                Stop Working Around A Template That Wasn't Built For You.
              </h2>
              <p className="text-surface-300 text-base md:text-lg leading-relaxed">
                Get a website built specifically around how your business actually works — not adapted from someone else's design decisions.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-[#4DE8DC] text-[#0A1012] hover:bg-[#3bc4b9] transition-colors text-lg shadow-lg shadow-[#4DE8DC]/20"
              >
                Get Your Free Custom Design Consultation →
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
