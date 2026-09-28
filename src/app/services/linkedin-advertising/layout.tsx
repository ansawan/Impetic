import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Advertising Agency & Cost Guide | Impetic',
  description:
    'Impetic runs LinkedIn ad campaigns built for B2B results, not just impressions. Straight answers on LinkedIn advertising cost, CPC, and what actually works.',
  openGraph: {
    title: 'LinkedIn Advertising Agency & Cost Guide | Impetic',
    description:
      'Impetic runs LinkedIn ad campaigns built for B2B results, not just impressions. Straight answers on LinkedIn advertising cost, CPC, and what actually works.',
    type: 'website',
  },
}

export default function LinkedInAdvertisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
