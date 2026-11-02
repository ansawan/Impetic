import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/digital-marketing/', fallbackMetadata)
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
