import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'
import { RelatedServices } from '@/components/sections/RelatedServices'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/' },
  title: "Digital Agency Services: Marketing, AI & Software | Impetic",
  description:
    "Explore our digital agency services: digital marketing, AI automation, virtual assistants and software development, all under one roof. Request a quote.",
  openGraph: {
    title: "Digital Agency Services: Marketing, AI & Software | Impetic",
    description:
      "Explore our digital agency services: digital marketing, AI automation, virtual assistants and software development, all under one roof. Request a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/', fallbackMetadata)
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedServices />
    </>
  )
}
