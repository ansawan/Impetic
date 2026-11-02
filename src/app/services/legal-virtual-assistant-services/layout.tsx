import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/legal-virtual-assistant-services/', fallbackMetadata)
}

export default function LegalVirtualAssistantServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
