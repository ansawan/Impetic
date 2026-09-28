import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Services | Top B2B & LSA PPC Agency — Impetic',
  description:
    'Impetic runs Google Ads and Local Service Ads that actually convert — not just click. B2B lead gen, white label, and international campaigns done right.',
  openGraph: {
    title: 'Google Ads Management Services | Top B2B & LSA PPC Agency — Impetic',
    description:
      'Impetic runs Google Ads and Local Service Ads that actually convert — not just click. B2B lead gen, white label, and international campaigns done right.',
    type: 'website',
  },
}

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
