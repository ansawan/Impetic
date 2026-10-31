import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/custom-ai-agents/' },
  title: "Custom AI Agents That Take Action | Impetic",
  description:
    "Custom AI agents that run multi-step tasks, call tools and make decisions for you. Built, tested and deployed by Impetic. Book a free AI consultation.",
  openGraph: {
    title: "Custom AI Agents That Take Action | Impetic",
    description:
      "Custom AI agents that run multi-step tasks, call tools and make decisions for you. Built, tested and deployed by Impetic. Book a free AI consultation.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
