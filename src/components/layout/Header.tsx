'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react'
import { ImpeticLogo } from '@/components/3d/ImpeticLogo'
import { AuditModal } from '@/components/overlays/AuditModal'

const MEGA_MENU_COLUMNS = [
  {
    category: 'Virtual Assistant Services',
    titleLine1: 'Virtual Assistant',
    titleLine2: 'Services',
    href: '/virtual-assistant',
    links: [
      { label: 'Virtual Assistant Hub', href: '/virtual-assistant' },
      { label: 'AI Virtual Assistant Services', href: '/services/ai-virtual-assistant-services' },
      { label: 'Executive Assistants', href: '/services/executive-assistants' },
      { label: 'Lead Generation Services', href: '/services/lead-generation-services' },
      { label: 'CRM & Automation Services', href: '/services/crm-automation-services' },
      { label: 'Legal Virtual Assistants', href: '/services/legal-virtual-assistant-services' },
      { label: 'GoHighLevel Experts', href: '/services/gohighlevel-experts' },
    ],
  },
  {
    category: 'AI & Automation Services',
    titleLine1: 'AI & Automation',
    titleLine2: 'Services',
    href: '/services/ai-services',
    links: [
      { label: 'AI Agent Management & Deployment', href: '/services/ai-agent-management' },
      { label: 'LLM & Chatbot Integration', href: '/services/llm-chatbot-integration' },
      { label: 'Retrieval-Augmented Generation (RAG)', href: '/services/rag-retrieval-augmented-generation' },
      { label: 'Custom AI Agents', href: '/services/custom-ai-agents' },
      { label: 'Workflow Process Automation', href: '/services/workflow-process-automation' },
      { label: 'Predictive Analytics & ML', href: '/services/predictive-analytics-ml' },
      { label: 'AI Search & Recommendations', href: '/services/ai-search-recommendations' },
      { label: 'Model Fine-Tuning & Eval', href: '/services/model-fine-tuning-evaluation' },
      { label: 'MLOps & Model Deployment', href: '/services/mlops-model-deployment' },
    ],
  },
  {
    category: 'Software Development',
    titleLine1: 'Software',
    titleLine2: 'Development',
    href: '/services',
    links: [
      { label: 'Website Development Company', href: '/services/web-development' },
      { label: 'Custom Web Design & Development', href: '/services/custom-web-design' },
      { label: 'Custom Web Applications', href: '/services/custom-web-applications' },
      { label: 'SaaS Application Development', href: '/services/saas-application-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'Product Engineering & Architecture', href: '/services/product-engineering-architecture' },
      { label: 'API Development & Integration', href: '/services/api-development-integration' },
      { label: 'Legacy System Modernization', href: '/services/legacy-system-modernization' },
    ],
  },
  {
    category: 'Digital Marketing — Paid & Search',
    titleLine1: 'Digital Marketing —',
    titleLine2: 'Paid & Search',
    href: '/services/digital-marketing',
    links: [
      { label: 'AI-Powered SEO & Technical SEO', href: '/services/seo' },
      { label: 'Google Ads & PPC Management', href: '/services/google-ads' },
      { label: 'Pay-Per-Click (PPC) Advertising', href: '/services/ppc' },
      { label: 'SEM (Search Engine Marketing)', href: '/services/sem' },
      { label: 'YouTube Ads Agency', href: '/services/youtube-ads' },
      { label: 'Bing Ads Agency', href: '/services/bing-ads' },
      { label: 'Social Media Marketing Agency', href: '/services/social-media-marketing' },
    ],
  },
  {
    category: 'Digital Marketing — Content & Growth',
    titleLine1: 'Digital Marketing —',
    titleLine2: 'Content & Growth',
    href: '/services/digital-marketing',
    links: [
      { label: 'TikTok Advertising Agency', href: '/services/tiktok-ads' },
      { label: 'LinkedIn Advertising Agency', href: '/services/linkedin-advertising' },
      { label: 'Content Marketing & Copywriting', href: '/services/content-marketing-copywriting' },
      { label: 'Email Marketing Agency', href: '/services/email-marketing' },
      { label: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization' },
      { label: 'Analytics, Tracking & Reporting', href: '/services/analytics-tracking-reporting' },
      { label: 'Brand & Growth Strategy', href: '/services/brand-growth-strategy' },
    ],
  },
]

interface NavLinkItem {
  label: string
  href: string
  isMegaMenu?: boolean
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    isMegaMenu: true,
  },
  { label: 'Virtual Assistant', href: '/virtual-assistant' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [isAuditOpen, setIsAuditOpen] = useState(false)
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2 select-none shrink-0">
            <ImpeticLogo />
            <span className="text-xl font-bold tracking-tight text-[#EAF6F5]">
              IMPETIC
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname === link.href

              if (link.isMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-xs font-mono tracking-wide transition-colors ${
                        pathname.startsWith('/services')
                          ? 'text-white font-bold underline decoration-[#4DE8DC] underline-offset-4'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#4DE8DC]' : ''}`} />
                    </Link>

                    {/* 5-Column Clean Aligned Mega Menu Dropdown */}
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-[320px] w-[1100px] p-8 rounded-3xl bg-[#0D1417]/98 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] grid grid-cols-5 gap-6 z-50"
                        >
                          {MEGA_MENU_COLUMNS.map((col) => (
                            <div key={col.titleLine1} className="space-y-3 flex flex-col justify-start">
                              <div className="pb-2 border-b border-white/10">
                                <Link
                                  href={col.href}
                                  onClick={() => setServicesDropdown(false)}
                                  className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4DE8DC] hover:underline block leading-snug"
                                >
                                  <span className="block">{col.titleLine1}</span>
                                  <span className="block">{col.titleLine2}</span>
                                </Link>
                              </div>
                              <ul className="space-y-2">
                                {col.links.map((subLink) => {
                                  const isSubActive = pathname === subLink.href
                                  return (
                                    <li key={subLink.href}>
                                      <Link
                                        href={subLink.href}
                                        onClick={() => setServicesDropdown(false)}
                                        className={`text-xs font-mono transition-all block leading-snug ${
                                          isSubActive
                                            ? 'text-[#4DE8DC] font-bold underline'
                                            : 'text-white/80 hover:text-white hover:translate-x-1 transition-transform'
                                        }`}
                                      >
                                        {subLink.label}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono tracking-wide transition-colors ${
                    active
                      ? 'text-white font-bold underline decoration-[#4DE8DC] underline-offset-4'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA & Get Audit Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAuditOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4.5 py-2 text-sm text-[#EAF6F5] hover:bg-white/10 hover:border-[#4DE8DC]/60 hover:text-[#4DE8DC] transition-all duration-300 font-mono text-xs uppercase tracking-wider cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4DE8DC]" />
              Get Audit
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#4DE8DC]/40 px-5 py-2 text-sm text-[#4DE8DC] hover:bg-[#4DE8DC]/10 hover:border-[#4DE8DC] transition-all duration-300 font-mono text-xs uppercase tracking-wider"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#EAF6F5] hover:text-[#4DE8DC] focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-y-auto max-h-[85vh] bg-black/95 border-b border-white/10 px-6 py-6"
            >
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const active = link.href === '/' ? pathname === '/' : pathname === link.href

                  if (link.isMegaMenu) {
                    return (
                      <div key={link.label} className="space-y-2">
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block font-mono text-base tracking-wide px-3 py-2 rounded-lg transition-all ${
                            active
                              ? 'bg-[#4DE8DC]/10 text-white font-bold border border-[#4DE8DC]/30'
                              : 'text-white hover:bg-white/5'
                          }`}
                        >
                          {link.label}
                        </Link>
                        <div className="pl-4 space-y-3">
                          {MEGA_MENU_COLUMNS.map((col) => (
                            <div key={col.category} className="space-y-1">
                              <span className="block font-mono text-xs font-bold text-[#4DE8DC] uppercase tracking-wider">
                                {col.category}
                              </span>
                              {col.links.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block font-mono text-xs text-white/80 hover:text-white py-1 pl-2"
                                >
                                  ↳ {sub.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-mono text-base tracking-wide px-3 py-2 rounded-lg transition-all ${
                        active
                          ? 'bg-[#4DE8DC]/10 text-white font-bold border border-[#4DE8DC]/30'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="mt-3 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false)
                      setIsAuditOpen(true)
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-[#EAF6F5] font-bold text-sm uppercase tracking-wider text-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#4DE8DC]" />
                    Get Audit
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider text-center"
                  >
                    Start a Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Audit Modal */}
      <AuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />
    </>
  )
}
export default Header
