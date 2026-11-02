import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/saas-application-development/' },
  title: "SaaS Application Development Company | Impetic",
  description:
    "SaaS application development covering multi-tenant architecture, Stripe billing and tenant isolation, built to scale. Talk to Impetic today.",
  openGraph: {
    title: "SaaS Application Development Company | Impetic",
    description:
      "SaaS application development covering multi-tenant architecture, Stripe billing and tenant isolation, built to scale. Talk to Impetic today.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/saas-application-development/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
