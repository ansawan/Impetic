import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function HomeServiceVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
