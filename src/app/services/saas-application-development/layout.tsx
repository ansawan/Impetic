import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Application Development Services | Impetic',
  description: 'Multi-tenant SaaS architecture, Stripe subscription billing, tenant isolation, and scalable cloud platforms.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
