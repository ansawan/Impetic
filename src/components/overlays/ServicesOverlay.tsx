'use client'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    num: '01',
    title: 'Virtual Assistant Services',
    desc: 'Dedicated remote administrative, executive, CRM, sales lead gen, and legal assistants for scaling operations.',
    accent: 'border-[#4DE8DC]/30 text-[#4DE8DC]',
    href: '/virtual-assistant',
  },
  {
    num: '02',
    title: 'AI & Automation Integration',
    desc: 'Autonomous AI agents, LLM integrations, RAG vector pipelines, and end-to-end workflow process automation.',
    accent: 'border-[#2FBFB0]/30 text-[#4DE8DC]',
    href: '/services/ai-services',
  },
  {
    num: '03',
    title: 'Digital Marketing Services',
    desc: 'Technical SEO audits, data-driven PPC advertising, social media growth, CRO, and email marketing automation.',
    accent: 'border-[#4DE8DC]/30 text-[#4DE8DC]',
    href: '/services/digital-marketing',
  },
  {
    num: '04',
    title: 'Software & Web App Development',
    desc: 'High-performance WebGL platforms, custom Next.js web applications, SaaS platforms, and mobile engineering.',
    accent: 'border-[#2FBFB0]/30 text-[#4DE8DC]',
    href: '/services',
  },
]

export function ServicesOverlay() {
  return (
    <section id="services" className="relative min-h-screen w-full flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading with SectionHeading & Get a Quote CTA */}
        <div className="lg:col-span-5 space-y-8">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Architecting <br />
                Next Generation Digital <span className="flux-word">Flux</span>
              </>
            }
            description="We merge cutting-edge WebGL aesthetics with bulletproof full-stack engineering to build software products that lead industries."
          />
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4DE8DC] text-[#0A1012] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#3bc4b9] transition-colors shadow-lg shadow-[#4DE8DC]/20"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Service Cards */}
        <div className="lg:col-span-7 space-y-3.5">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] hover:border-[#4DE8DC]/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className={`font-mono text-lg sm:text-xl font-bold ${item.accent}`}>
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#EAF6F5] mb-1 group-hover:text-[#4DE8DC] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pt-1">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#4DE8DC] group-hover:translate-x-0.5 transition-transform">
                    Get a Quote <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ServicesOverlay
