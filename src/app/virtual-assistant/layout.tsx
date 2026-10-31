import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/virtual-assistant/' },
  title: "Virtual Assistant Services for Business | Impetic",
  description:
    "Hire dedicated virtual assistant services for admin, email, CRM, lead generation and customer support. Save time and cut costs. Book a free consultation.",
  openGraph: {
    title: "Virtual Assistant Services for Business | Impetic",
    description:
      "Hire dedicated virtual assistant services for admin, email, CRM, lead generation and customer support. Save time and cut costs. Book a free consultation.",
    type: 'website',
  },
}

export default function VirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
