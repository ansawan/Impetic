import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function YouTubeAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
