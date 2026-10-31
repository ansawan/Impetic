import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function LeadGenerationServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
