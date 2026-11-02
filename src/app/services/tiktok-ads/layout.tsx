import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/tiktok-ads/' },
  title: "TikTok Ads Agency | Native TikTok Ad Campaigns",
  description:
    "TikTok ads agency creating native-feeling campaigns built for how people scroll, watch and buy. Reach new audiences and convert them. Get a quote.",
  openGraph: {
    title: "TikTok Ads Agency | Native TikTok Ad Campaigns",
    description:
      "TikTok ads agency creating native-feeling campaigns built for how people scroll, watch and buy. Reach new audiences and convert them. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/tiktok-ads/', fallbackMetadata)
}

export default function TikTokAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
