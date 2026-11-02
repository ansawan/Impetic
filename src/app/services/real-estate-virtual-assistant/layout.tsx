import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/real-estate-virtual-assistant/' },
  title: "Real Estate Virtual Assistant | Listings & Follow-Ups",
  description:
    "Hire a real estate virtual assistant for MLS listings, transaction coordination, client follow-ups and property marketing. Get a free quote.",
  openGraph: {
    title: "Real Estate Virtual Assistant | Listings & Follow-Ups",
    description:
      "Hire a real estate virtual assistant for MLS listings, transaction coordination, client follow-ups and property marketing. Get a free quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/real-estate-virtual-assistant/', fallbackMetadata)
}

export default function RealEstateVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
