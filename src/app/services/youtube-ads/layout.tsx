import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/youtube-ads/' },
  title: "YouTube Ads Agency for Video Ad Campaigns | Impetic",
  description:
    "YouTube ads agency building high-impact video creative, skippable ad strategy and intent targeting that turns viewers into customers. Get a quote.",
  openGraph: {
    title: "YouTube Ads Agency for Video Ad Campaigns | Impetic",
    description:
      "YouTube ads agency building high-impact video creative, skippable ad strategy and intent targeting that turns viewers into customers. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/youtube-ads/', fallbackMetadata)
}

export default function YouTubeAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
