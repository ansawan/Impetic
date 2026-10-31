import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function GoHighLevelExpertsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
