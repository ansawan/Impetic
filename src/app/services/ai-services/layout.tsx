import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/ai-services/' },
  title: "AI Automation Services for Business | Impetic",
  description:
    "Custom AI automation services: LLM chatbots, RAG, AI agents and workflow automation built on your data. Book a free AI consultation with Impetic.",
  openGraph: {
    title: "AI Automation Services for Business | Impetic",
    description:
      "Custom AI automation services: LLM chatbots, RAG, AI agents and workflow automation built on your data. Book a free AI consultation with Impetic.",
    type: 'website',
  },
}

export default function AIServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
