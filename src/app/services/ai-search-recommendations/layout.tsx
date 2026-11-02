import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/ai-search-recommendations/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
