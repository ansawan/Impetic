import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/analytics-tracking-reporting/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
