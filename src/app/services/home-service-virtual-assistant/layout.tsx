import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/home-service-virtual-assistant/' },
  title: "Home Service Virtual Assistant | Dispatch & Scheduling",
  description:
    "A home service virtual assistant handles dispatching, estimate follow-ups, customer inquiries and scheduling so your crews stay busy. Get a quote.",
  openGraph: {
    title: "Home Service Virtual Assistant | Dispatch & Scheduling",
    description:
      "A home service virtual assistant handles dispatching, estimate follow-ups, customer inquiries and scheduling so your crews stay busy. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/home-service-virtual-assistant/', fallbackMetadata)
}

export default function HomeServiceVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
