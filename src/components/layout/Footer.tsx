'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ImpeticLogo } from '@/components/3d/ImpeticLogo'
import { SOCIAL_ITEMS } from '@/components/ui/SocialIcons'

const FOOTER_LINKS = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Virtual Assistant Services', href: '/virtual-assistant' },
    { label: 'AI & Automation Services', href: '/services/ai-services' },
    { label: 'Digital Marketing Services', href: '/services/digital-marketing' },
    { label: 'Software Development', href: '/services' },
  ],
}

export function Footer() {
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <footer className="relative border-t border-white/8 bg-black z-10">
      {/* Thin circuit-style top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4DE8DC]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 select-none group">
            <ImpeticLogo className="w-7 h-7" />
            <span className="text-xl font-bold tracking-tight text-[#EAF6F5]">
              IMPETIC
            </span>
          </Link>
          <p className="mt-3 text-sm text-white max-w-xs leading-relaxed">
            Empowering modern businesses through strategic Digital Marketing, AI-driven Automation, and Scalable Software Solutions.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-[#4DE8DC] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider">
            Connect
          </h4>
          <a href="mailto:info@impetic.com" className="text-sm text-white/80 hover:text-[#4DE8DC] transition-colors">
            info@impetic.com
          </a>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {SOCIAL_ITEMS.map((item) => {
              const IconComponent = item.Icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  aria-label={item.name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#4DE8DC] hover:bg-[#4DE8DC]/10 hover:border-[#4DE8DC]/50 hover:shadow-[0_0_12px_rgba(77,232,220,0.4)] transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6 text-center text-xs text-[#47585A] font-mono">
        © {new Date().getFullYear()} Impetic. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer
