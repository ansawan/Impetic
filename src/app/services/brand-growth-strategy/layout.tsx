import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/brand-growth-strategy/' },
  title: 'Brand & Growth Strategy Services | Impetic',
  description: 'Market positioning, go-to-market execution, and channel strategies tied directly to business goals.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
