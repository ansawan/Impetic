'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { SERVICES, RELATED } from '@/lib/servicesCatalog'

// "Related services" links for the current /services/<slug>/ page. Rendered from the
// shared services layout; pages without an entry in RELATED render nothing.
export function RelatedServices() {
  const pathname = usePathname() || ''
  const slug = pathname.replace(/^\/services\/?/, '').replace(/\/$/, '')
  const related = (RELATED[slug] || []).filter((s) => SERVICES[s])
  if (related.length === 0) return null

  return (
    <section aria-labelledby="related-services-heading" className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-20">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 sm:p-10">
        <span className="font-mono text-xs font-bold text-[#4DE8DC] uppercase tracking-wider">Keep exploring</span>
        <h2 id="related-services-heading" className="text-2xl sm:text-3xl font-bold text-[#EAF6F5] mt-2">
          Related <span className="flux-word">Services</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {related.map((s) => (
            <li key={s}>
              <Link
                href={`/services/${s}`}
                className="group h-full flex items-start justify-between gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#4DE8DC]/60 hover:bg-white/[0.05] transition-colors"
              >
                <span>
                  <span className="block font-semibold text-[#EAF6F5] group-hover:text-[#4DE8DC] transition-colors">{SERVICES[s].name}</span>
                  <span className="block text-sm text-white/70 mt-1">{SERVICES[s].blurb}</span>
                </span>
                <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-[#4DE8DC] group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/services" className="inline-flex items-center gap-1.5 mt-6 font-mono text-xs font-bold text-[#4DE8DC] hover:underline">
          View all services <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )
}

export default RelatedServices
