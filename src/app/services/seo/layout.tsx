import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/seo/' },
  title: "AI SEO Services & Technical SEO Agency | Impetic",
  description:
    "AI SEO services that combine technical SEO, generative AI visibility and local search to get you found first. Start with a free SEO audit.",
  openGraph: {
    title: "AI SEO Services & Technical SEO Agency | Impetic",
    description:
      "AI SEO services that combine technical SEO, generative AI visibility and local search to get you found first. Start with a free SEO audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/seo/', fallbackMetadata)
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
