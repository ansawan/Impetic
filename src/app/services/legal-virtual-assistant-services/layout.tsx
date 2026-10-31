import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/legal-virtual-assistant-services/' },
  title: "Legal Virtual Assistant Services for Law Firms | Impetic",
  description:
    "Legal virtual assistant support for client intake, court calendar tracking, document formatting and admin tasks, so your firm can focus on clients.",
  openGraph: {
    title: "Legal Virtual Assistant Services for Law Firms | Impetic",
    description:
      "Legal virtual assistant support for client intake, court calendar tracking, document formatting and admin tasks, so your firm can focus on clients.",
    type: 'website',
  },
}

export default function LegalVirtualAssistantServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
