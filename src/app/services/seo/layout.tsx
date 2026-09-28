import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered SEO Services | Best AI SEO Agency 2026 — Impetic',
  description:
    "Impetic combines generative AI, technical SEO, and local search expertise to get you found first. See why we're rated among the top AI-driven SEO agencies in the US.",
  openGraph: {
    title: 'AI-Powered SEO Services | Best AI SEO Agency 2026 — Impetic',
    description:
      "Impetic combines generative AI, technical SEO, and local search expertise to get you found first. See why we're rated among the top AI-driven SEO agencies in the US.",
    type: 'website',
  },
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
