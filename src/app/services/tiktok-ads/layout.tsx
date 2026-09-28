import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Advertising Agency & Cost Guide | Impetic',
  description:
    'Impetic runs TikTok ad campaigns built for how people actually watch — not skip. Straight answers on TikTok advertising cost, and a strategy to match.',
  openGraph: {
    title: 'TikTok Advertising Agency & Cost Guide | Impetic',
    description:
      'Impetic runs TikTok ad campaigns built for how people actually watch — not skip. Straight answers on TikTok advertising cost, and a strategy to match.',
    type: 'website',
  },
}

export default function TikTokAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
