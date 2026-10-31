import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/property-management-virtual-assistant/' },
  title: "Property Management Virtual Assistant | Impetic",
  description:
    "Property management virtual assistant for tenant screening, maintenance request tracking, lease admin and rent collection support. Request a free quote.",
  openGraph: {
    title: "Property Management Virtual Assistant | Impetic",
    description:
      "Property management virtual assistant for tenant screening, maintenance request tracking, lease admin and rent collection support. Request a free quote.",
    type: 'website',
  },
}

export default function PropertyManagementVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
