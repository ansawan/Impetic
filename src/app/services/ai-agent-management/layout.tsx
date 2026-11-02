import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/ai-agent-management/' },
  title: "AI Agent Management & Deployment Services | Impetic",
  description:
    "AI agent management with human oversight: we deploy, monitor and optimize your autonomous AI agents and data workflows. Talk to Impetic today.",
  openGraph: {
    title: "AI Agent Management & Deployment Services | Impetic",
    description:
      "AI agent management with human oversight: we deploy, monitor and optimize your autonomous AI agents and data workflows. Talk to Impetic today.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/ai-agent-management/', fallbackMetadata)
}

export default function AIAgentManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
