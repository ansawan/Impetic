import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/content-marketing-copywriting/' },
  title: "Content Marketing Services & SEO Copywriting | Impetic",
  description:
    "Content marketing services with SEO copywriting that speaks to readers first and is built for search visibility and conversions. Get a free quote.",
  openGraph: {
    title: "Content Marketing Services & SEO Copywriting | Impetic",
    description:
      "Content marketing services with SEO copywriting that speaks to readers first and is built for search visibility and conversions. Get a free quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/content-marketing-copywriting/', fallbackMetadata)
}

export default function ContentMarketingCopywritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
