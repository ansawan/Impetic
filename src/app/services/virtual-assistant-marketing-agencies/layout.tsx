import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/virtual-assistant-marketing-agencies/', fallbackMetadata)
}

export default function VirtualAssistantMarketingAgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
