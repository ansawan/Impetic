import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/ai-virtual-assistant-services/' },
  title: "AI Virtual Assistant Services: Human + AI | Impetic",
  description:
    "Our AI virtual assistant services pair experienced remote assistants with AI tools to save you time, cut costs and boost productivity. Get a free quote.",
  openGraph: {
    title: "AI Virtual Assistant Services: Human + AI | Impetic",
    description:
      "Our AI virtual assistant services pair experienced remote assistants with AI tools to save you time, cut costs and boost productivity. Get a free quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/ai-virtual-assistant-services/', fallbackMetadata)
}

export default function AIVirtualAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
