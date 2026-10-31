import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/digital-marketing/' },
  title: "Digital Marketing Services That Drive Growth | Impetic",
  description:
    "Data-driven digital marketing services including SEO, PPC, social media, email and CRO. Get a free marketing and tracking audit from Impetic.",
  openGraph: {
    title: "Digital Marketing Services That Drive Growth | Impetic",
    description:
      "Data-driven digital marketing services including SEO, PPC, social media, email and CRO. Get a free marketing and tracking audit from Impetic.",
    type: 'website',
  },
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
