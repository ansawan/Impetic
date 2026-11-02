import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/google-ads/' },
  title: "Google Ads Management Services | Impetic",
  description:
    "Google Ads management for local service ads, B2B lead generation and high-ROI campaigns, with clear reporting and white-label options. Get a free audit.",
  openGraph: {
    title: "Google Ads Management Services | Impetic",
    description:
      "Google Ads management for local service ads, B2B lead generation and high-ROI campaigns, with clear reporting and white-label options. Get a free audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/google-ads/', fallbackMetadata)
}

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
