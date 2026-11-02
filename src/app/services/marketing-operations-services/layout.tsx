import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/marketing-operations-services/' },
  title: "Marketing Operations Services | Campaign & Tracking Support",
  description:
    "Marketing operations services covering campaign deployment, asset organization, tracking setup and marketing automation. Request a free quote.",
  openGraph: {
    title: "Marketing Operations Services | Campaign & Tracking Support",
    description:
      "Marketing operations services covering campaign deployment, asset organization, tracking setup and marketing automation. Request a free quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/marketing-operations-services/', fallbackMetadata)
}

export default function MarketingOperationsServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
