'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Search,
  Code,
  Zap,
  Globe,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Target,
  Sparkles,
  MapPin,
  XCircle,
  BarChart3,
  Bot,
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

export default function SEOPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  const comparisonRows = [
    {
      bad: 'Outsource execution to junior freelancers',
      good: 'Dedicated in-house team on every account',
    },
    {
      bad: 'Chase keyword rankings only',
      good: 'Optimize for Google and AI/LLM search visibility',
    },
    {
      bad: 'Generic monthly checklist',
      good: "Custom roadmap based on your site's actual architecture",
    },
    {
      bad: 'Vague reporting, vanity metrics',
      good: 'Transparent dashboards tied to revenue, not just traffic',
    },
    {
      bad: 'One-size-fits-all local SEO',
      good: 'Industry-specific playbooks (home services, healthcare, finance, and more)',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Full technical, content, and AI-visibility audit of your current site.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Custom roadmap prioritized by revenue impact, not busywork.',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Our team executes — fixes, content, structure, schema.',
    },
    {
      step: '04',
      title: 'Scale & Monitor',
      description: 'Continuous optimization as algorithms (and AI search) evolve.',
    },
  ]

  const faqs = [
    {
      q: 'How much does local SEO cost?',
      a: "Cost depends on your market's competitiveness, your current site health, and how many locations/services you need covered. Most engagements are structured as monthly retainers rather than one-off projects, since SEO compounds over time. Get a free audit for an exact quote.",
    },
    {
      q: "What's the difference between local SEO and organic SEO?",
      a: 'Local SEO targets geographically-intent searches ("near me," city + service) and focuses on map pack rankings, Google Business Profile, and local citations. Organic SEO targets broader, non-location-specific rankings. Most businesses need both, weighted differently depending on whether customers come from a local area or nationally.',
    },
    {
      q: 'How do I choose the right technical SEO agency?',
      a: 'Look for a team that can show you actual technical audits, not just ranking screenshots. Ask what tools they use, whether they can read your site\'s code and server logs, and whether they\'ve ever built software themselves — not just marketed it.',
    },
    {
      q: 'Do you optimize for AI search, not just Google?',
      a: 'Yes. As an AI-powered SEO agency, we treat AI Overviews and LLM-driven search as a core ranking surface, not an afterthought — because that\'s where search is heading in 2026 and beyond.',
    },
  ]

  const localPlaybooks = [
    { title: 'Local SEO for dentists', detail: 'patient-intent keywords, review generation, local schema' },
    { title: 'Local SEO for restaurants', detail: 'Google Business Profile optimization, local content, review velocity' },
    { title: 'Local SEO for financial advisors', detail: 'trust signals, compliance-safe content, local authority building' },
    { title: 'Local SEO for HVAC companies', detail: 'service-area pages, emergency-intent keywords' },
    { title: 'Local SEO for pest control', detail: 'seasonal content strategy, map pack domination' },
    { title: 'Local SEO for plumbers', detail: '24/7 intent capture, local citations, fast-load service pages' },
    { title: 'Local SEO marketing for remodeling contractors', detail: 'portfolio SEO, high-intent lead capture' },
  ]

  const socialProofItems = [
    { label: '+185% organic traffic growth', detail: 'Apex Law Group / Legal Services' },
    { label: '+240% local map-pack reach', detail: 'Precision HVAC & Plumbing / Home Services' },
    { label: 'Ranked in AI Overviews for 45+ target terms', detail: 'CloudScale Tech / Enterprise B2B SaaS' },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-Powered SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'Impetic',
      url: 'https://impetic.com',
    },
    description:
      "Impetic combines generative AI, technical SEO, and local search expertise to get you found first. See why we're rated among the top AI-driven SEO agencies in the US.",
    areaServed: 'Worldwide',
    serviceType: 'Search Engine Optimization, Technical SEO & Local SEO',
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
              eyebrow="AI-Powered SEO · Built For Real Results"
              title={
                <>
                  We Don&apos;t Just Optimize Your SEO. <span className="flux-word">We Grow Your Business.</span>
                </>
              }
              description="Impetic is the AI-powered SEO agency built different — one team, one goal: put your business in front of the customers already searching for you."
            />

            <div className="text-center -mt-6 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Start a Free SEO Audit →
              </Link>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3] max-w-2xl mx-auto">
                Ranked among the top AI SEO agencies in the US for a reason — we build the systems other agencies just talk about.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE PROBLEM (Intro / Hook) */}
          <section className="py-12">
            <ContentPanel className="max-w-4xl mx-auto">
              <div className="space-y-6 text-base sm:text-lg text-white leading-relaxed">
                <p>
                  Most SEO agencies sell you a monthly report and call it &quot;strategy.&quot; They run the same recycled checklist on every client, hope Google notices, and bill you either way.
                </p>
                <p>
                  Here&apos;s the truth: search itself has changed. AI Overviews, generative answers, and LLM-driven discovery now decide who gets seen — and who gets skipped. If your agency is still optimizing like it&apos;s 2019, you&apos;re already behind.
                </p>
                <p>
                  That&apos;s the gap Impetic was built to close. We&apos;re not a traditional SEO shop bolting &quot;AI&quot; onto an old playbook — we build the technical, content, and AI-visibility systems modern search actually rewards.
                </p>
                <p className="font-semibold text-[#4DE8DC] text-xl text-center pt-2">
                  Your business becomes our business. Your rankings are our reputation.
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
                    The Best Generative AI SEO Services, <span className="flux-word">Built By People Who Build Software</span>
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
                  We call ourselves an ai-powered SEO agency because that&apos;s not a buzzword here — it&apos;s our infrastructure. The same team that builds AI systems for enterprise clients is the team auditing your site&apos;s crawlability and structuring your content for how generative engines actually read the web.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                  >
                    See How We&apos;re Different →
                  </Link>
                </div>
              </div>
            </ContentPanel>
          </section>

          {/* SECTION 4: CORE SEO SERVICES (3-Pillar Breakdown) */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <SectionHeading
                align="center"
                eyebrow="Core SEO Services"
                title={
                  <>
                    Our 3-Pillar <span className="flux-word">SEO Methodology</span>
                  </>
                }
              />

              {/* Pillar 1 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 1
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Generative AI &amp; LLM SEO
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    Search is no longer just ten blue links. It&apos;s AI Overviews, ChatGPT, Perplexity, and Gemini deciding what gets surfaced. As a top AI SEO agency, Impetic structures your content, schema, and entity signals so your brand shows up inside AI-generated answers — not just page two of Google.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-base font-bold text-[#4DE8DC] uppercase tracking-wider">
                      What&apos;s included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>LLM visibility audits (are AI engines citing you or your competitor?)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Structured data &amp; entity optimization</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>AI-Overview-ready content architecture</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Sparkles className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Ongoing monitoring as AI search algorithms evolve</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ContentPanel>

              {/* Pillar 2 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 2
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Technical SEO
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-base sm:text-lg text-white leading-relaxed">
                    <p>
                      Rankings collapse when the foundation is broken. Before we write a single sentence of content, our team runs a full technical SEO audit — site speed, crawl budget, indexation, Core Web Vitals, structured data, and architecture.
                    </p>
                    <p>
                      This is where being technical SEO specialists — not just marketers — actually matters. We know exactly what&apos;s slowing your site down and how to fix it at the source. This makes us a natural fit for SaaS technical SEO, where clean architecture and fast load times are non-negotiable.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-base font-bold text-[#4DE8DC] uppercase tracking-wider">
                      What&apos;s included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Zap className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Full technical SEO audit and prioritized fix list</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Zap className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Site speed &amp; Core Web Vitals optimization</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Zap className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Crawlability, indexation, and log file analysis</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Zap className="w-5 h-5 text-[#4DE8DC] shrink-0 mt-0.5" />
                        <span>Structured data implementation</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 italic pt-2">
                    If you&apos;re comparing technical SEO agencies, here&apos;s the short version of{' '}
                    <a href="#faq" className="text-[#4DE8DC] underline hover:text-[#2FBFB0] transition-colors">
                      how to choose the right technical SEO agency
                    </a>
                    : ask what they actually build, not just what they audit.
                  </p>
                </div>
              </ContentPanel>

              {/* Pillar 3 */}
              <ContentPanel>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4DE8DC]/10 border border-[#4DE8DC]/30 flex items-center justify-center text-[#4DE8DC] shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#4DE8DC]/10 text-[#4DE8DC] border border-[#4DE8DC]/30 uppercase">
                        Pillar 3
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-1">
                        Local SEO
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-white leading-relaxed">
                    Ranking locally isn&apos;t the same game as ranking nationally — local SEO vs. organic SEO means different signals, different intent, and different competitors. If someone searches for services &quot;near me,&quot; they&apos;re ready to buy today. Impetic builds local SEO systems that get you into the map pack and keep you there.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-base font-bold text-[#4DE8DC] uppercase tracking-wider">
                      We run dedicated playbooks for:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {localPlaybooks.map((pb, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                          <span className="font-bold text-[#EAF6F5] block text-sm sm:text-base">
                            {pb.title}
                          </span>
                          <span className="text-xs sm:text-sm text-[#8FA6A3] block mt-0.5">
                            — {pb.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 pt-2">
                    Wondering how much local SEO costs? Pricing depends on market competitiveness and scope — get a free quote below instead of guessing from a blog post.
                  </p>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                      Get Your Custom Local SEO Quote →
                    </Link>
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
                    How We Build <span className="flux-word">Your Rankings</span>
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
                This is the same disciplined process behind every account — because SEO, done right, is a system, not a guessing game.
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
                description="Measured performance & ranking impact from our SEO & AI optimization campaigns."
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
                title="Your Competitors Are Already Talking to an AI SEO Agency. Are You?"
                description="Stop hiring agencies that treat SEO like a checklist. Work with the team that builds the systems other agencies just describe."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(77,232,220,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  Start Your Free SEO Audit →
                </Link>
              </div>
              <p className="mt-4 text-sm sm:text-base text-[#8FA6A3]">
                Your business will be our business — that&apos;s not a slogan, it&apos;s how we structure every account.
              </p>
            </ContentPanel>
          </section>
        </main>
      </div>
    </>
  )
}
