import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/ai-search-recommendations/' },
  title: "AI-Powered Search & Recommendation Engines | Impetic",
  description:
    "AI-powered search and recommendation engines that use semantic vector search to match user intent and personalize results. Talk to Impetic.",
  openGraph: {
    title: "AI-Powered Search & Recommendation Engines | Impetic",
    description:
      "AI-powered search and recommendation engines that use semantic vector search to match user intent and personalize results. Talk to Impetic.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
