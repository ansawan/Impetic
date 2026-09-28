import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bing Ads Management & Agency Services | Impetic',
  description:
    'Impetic is a Bing Ads agency that helps you reach the audience Google Ads misses. Management, PPC, and Shopping campaigns built to convert.',
  openGraph: {
    title: 'Bing Ads Management & Agency Services | Impetic',
    description:
      'Impetic is a Bing Ads agency that helps you reach the audience Google Ads misses. Management, PPC, and Shopping campaigns built to convert.',
    type: 'website',
  },
}

export default function BingAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
