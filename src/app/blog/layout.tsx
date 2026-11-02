import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/blog/' },
  title: "Impetic Blog | SEO, AI & Web Development Insights",
  description:
    "The Impetic Blog shares practical insights on SEO, digital marketing, AI systems and web development to help your business grow online.",
  openGraph: {
    title: "Impetic Blog | SEO, AI & Web Development Insights",
    description:
      "The Impetic Blog shares practical insights on SEO, digital marketing, AI systems and web development to help your business grow online.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/blog/', fallbackMetadata)
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
