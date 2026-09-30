import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/' },
  title: 'Impetic Blog — AI, Engineering & Digital Growth Insights',
  description:
    'Technical deep-dives on production AI systems, WebGL and Next.js engineering, technical SEO and digital growth from the Impetic team.',
  openGraph: {
    title: 'Impetic Blog — AI, Engineering & Digital Growth Insights',
    description:
      'Technical deep-dives on production AI systems, WebGL and Next.js engineering, technical SEO and digital growth from the Impetic team.',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
