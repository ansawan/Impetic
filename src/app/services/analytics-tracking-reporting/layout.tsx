import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/analytics-tracking-reporting/' },
  title: "GA4 Tracking, Analytics & Reporting Services | Impetic",
  description:
    "GA4 tracking, server-side tracking and attribution dashboards that give you clean, accurate data to guide your marketing spend. Request a tracking audit.",
  openGraph: {
    title: "GA4 Tracking, Analytics & Reporting Services | Impetic",
    description:
      "GA4 tracking, server-side tracking and attribution dashboards that give you clean, accurate data to guide your marketing spend. Request a tracking audit.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
