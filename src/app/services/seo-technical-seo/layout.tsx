import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO & Technical SEO Services — Organic Growth | Impetic',
  description:
    'Engineering-grade Technical SEO and organic optimization services to boost search rankings, eliminate crawl errors, and optimize Core Web Vitals.',
  openGraph: {
    title: 'SEO & Technical SEO Services — Organic Growth | Impetic',
    description:
      'Engineering-grade Technical SEO and organic optimization services to boost search rankings, eliminate crawl errors, and optimize Core Web Vitals.',
    type: 'website',
  },
}

export default function SEOTechnicalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
