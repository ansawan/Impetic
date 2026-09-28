import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics, Tracking & Reporting Services | Impetic',
  description: 'GA4, server-side Google Tag Manager tracking, and Looker Studio dashboard setups.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
