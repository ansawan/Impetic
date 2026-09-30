import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/digital-marketing/' },
  title: 'Digital Marketing Services — SEO, PPC & Social | Impetic',
  description:
    'Data-driven digital marketing from Impetic: SEO, Google Ads and PPC, social media, content, email marketing, CRO and analytics built to scale revenue.',
  openGraph: {
    title: 'Digital Marketing Services — SEO, PPC & Social | Impetic',
    description:
      'Data-driven digital marketing from Impetic: SEO, Google Ads and PPC, social media, content, email marketing, CRO and analytics built to scale revenue.',
    type: 'website',
  },
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
