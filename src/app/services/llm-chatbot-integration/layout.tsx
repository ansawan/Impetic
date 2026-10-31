import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/llm-chatbot-integration/' },
  title: "LLM Chatbot Integration for Business | Impetic",
  description:
    "LLM chatbot integration that connects conversational AI to your real data and workflows. Production-grade, secure and scalable. Book a consultation.",
  openGraph: {
    title: "LLM Chatbot Integration for Business | Impetic",
    description:
      "LLM chatbot integration that connects conversational AI to your real data and workflows. Production-grade, secure and scalable. Book a consultation.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
