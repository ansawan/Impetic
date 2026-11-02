import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/conversion-rate-optimization/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
