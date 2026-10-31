import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/virtual-assistant-marketing-agencies/' },
  title: "Virtual Assistant for Marketing Agencies | White-Label",
  description:
    "A virtual assistant for marketing agencies: white-label support for client accounts, reporting and campaign execution. Scale without extra hires.",
  openGraph: {
    title: "Virtual Assistant for Marketing Agencies | White-Label",
    description:
      "A virtual assistant for marketing agencies: white-label support for client accounts, reporting and campaign execution. Scale without extra hires.",
    type: 'website',
  },
}

export default function VirtualAssistantMarketingAgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
