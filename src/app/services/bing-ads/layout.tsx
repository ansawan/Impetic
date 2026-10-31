import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/bing-ads/' },
  title: "Bing Ads Agency | Lower CPC Microsoft Advertising",
  description:
    "Bing Ads agency reaching high-value Microsoft search users with lower CPCs and optimized Bing Shopping campaigns. Request a free account audit.",
  openGraph: {
    title: "Bing Ads Agency | Lower CPC Microsoft Advertising",
    description:
      "Bing Ads agency reaching high-value Microsoft search users with lower CPCs and optimized Bing Shopping campaigns. Request a free account audit.",
    type: 'website',
  },
}

export default function BingAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
