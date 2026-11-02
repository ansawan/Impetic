import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/custom-ai-agents/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
