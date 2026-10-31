import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function AIVirtualAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
