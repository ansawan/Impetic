import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function AIAgentManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
