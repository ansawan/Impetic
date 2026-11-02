import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/property-management-virtual-assistant/', fallbackMetadata)
}

export default function PropertyManagementVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
