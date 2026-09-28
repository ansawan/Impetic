import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Ads Agency | High-Impact Video Ad Services — Impetic',
  description:
    'Impetic is a YouTube ads agency that builds video campaigns people actually watch — not skip. Strategy, production, and targeting done right.',
  openGraph: {
    title: 'YouTube Ads Agency | High-Impact Video Ad Services — Impetic',
    description:
      'Impetic is a YouTube ads agency that builds video campaigns people actually watch — not skip. Strategy, production, and targeting done right.',
    type: 'website',
  },
}

export default function YouTubeAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
