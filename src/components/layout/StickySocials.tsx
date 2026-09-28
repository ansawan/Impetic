'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { SOCIAL_ITEMS } from '@/components/ui/SocialIcons'

export function StickySocials() {
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      aria-label="Social links"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5 items-center p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
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
            className="group relative w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 hover:text-[#4DE8DC] hover:bg-[#4DE8DC]/10 hover:border-[#4DE8DC]/50 hover:shadow-[0_0_15px_rgba(77,232,220,0.4)] hover:scale-110 transition-all duration-300"
          >
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />

            {/* Tooltip on left hover */}
            <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#0D1417] border border-white/15 text-[11px] font-mono font-medium text-white whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg">
              {item.name}
            </span>
          </a>
        )
      })}
    </motion.aside>
  )
}

export default StickySocials
