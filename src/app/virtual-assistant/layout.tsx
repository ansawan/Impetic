import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/virtual-assistant/', fallbackMetadata)
}

export default function VirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
