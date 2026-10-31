import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
