import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/conversion-rate-optimization/' },
  title: "Conversion Rate Optimization (CRO) Services | Impetic",
  description:
    "Conversion rate optimization with data-driven A/B testing, landing page improvements and funnel analysis that turn visitors into customers. Get an audit.",
  openGraph: {
    title: "Conversion Rate Optimization (CRO) Services | Impetic",
    description:
      "Conversion rate optimization with data-driven A/B testing, landing page improvements and funnel analysis that turn visitors into customers. Get an audit.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
