import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/lead-generation-services/' },
  title: "Lead Generation Services | Verified Leads & Meetings",
  description:
    "Lead generation services that find prospects, build verified contact lists and book qualified sales meetings. Fill your pipeline with Impetic.",
  openGraph: {
    title: "Lead Generation Services | Verified Leads & Meetings",
    description:
      "Lead generation services that find prospects, build verified contact lists and book qualified sales meetings. Fill your pipeline with Impetic.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/lead-generation-services/', fallbackMetadata)
}

export default function LeadGenerationServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
