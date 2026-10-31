import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function ContentMarketingCopywritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
