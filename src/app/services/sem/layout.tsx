import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/sem/' },
  title: "Search Engine Marketing (SEM) Services | Impetic",
  description:
    "Search engine marketing that unites SEO, SEM and PPC in one roadmap, so every channel works together to grow leads. Request a free SEM audit.",
  openGraph: {
    title: "Search Engine Marketing (SEM) Services | Impetic",
    description:
      "Search engine marketing that unites SEO, SEM and PPC in one roadmap, so every channel works together to grow leads. Request a free SEM audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/sem/', fallbackMetadata)
}

export default function SEMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
