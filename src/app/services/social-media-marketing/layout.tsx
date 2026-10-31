import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/social-media-marketing/' },
  title: "Social Media Marketing Agency for Brand Growth | Impetic",
  description:
    "Social media marketing agency for local, B2B and enterprise brands. Organic growth, paid social and strategy that drives leads. Get a free quote.",
  openGraph: {
    title: "Social Media Marketing Agency for Brand Growth | Impetic",
    description:
      "Social media marketing agency for local, B2B and enterprise brands. Organic growth, paid social and strategy that drives leads. Get a free quote.",
    type: 'website',
  },
}

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
