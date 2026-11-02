import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/gohighlevel-experts/' },
  title: "GoHighLevel Experts for CRM & Funnel Management | Impetic",
  description:
    "Hire GoHighLevel experts to build, manage and optimize your CRM, workflows and funnels. Dedicated support keeps your pipeline moving. Get a quote.",
  openGraph: {
    title: "GoHighLevel Experts for CRM & Funnel Management | Impetic",
    description:
      "Hire GoHighLevel experts to build, manage and optimize your CRM, workflows and funnels. Dedicated support keeps your pipeline moving. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/gohighlevel-experts/', fallbackMetadata)
}

export default function GoHighLevelExpertsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
