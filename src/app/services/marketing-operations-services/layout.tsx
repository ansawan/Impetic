import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function MarketingOperationsServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
