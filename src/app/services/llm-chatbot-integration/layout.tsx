import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/llm-chatbot-integration/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
