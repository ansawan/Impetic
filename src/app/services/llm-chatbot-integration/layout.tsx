import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/llm-chatbot-integration/' },
  title: 'LLM & Chatbot Integration Services | Impetic',
  description: 'Production-grade conversational interfaces and LLM API integrations wired into your data and business workflows.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
