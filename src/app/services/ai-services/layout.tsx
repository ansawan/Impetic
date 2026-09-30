import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/ai-services/' },
  title: 'AI & Automation Services — Agents, RAG & ML | Impetic',
  description:
    'Production-grade AI for your business: custom AI agents, LLM chatbots, RAG pipelines, workflow automation, predictive analytics and MLOps from Impetic.',
  openGraph: {
    title: 'AI & Automation Services — Agents, RAG & ML | Impetic',
    description:
      'Production-grade AI for your business: custom AI agents, LLM chatbots, RAG pipelines, workflow automation, predictive analytics and MLOps from Impetic.',
    type: 'website',
  },
}

export default function AIServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
