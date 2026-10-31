import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function RealEstateVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
