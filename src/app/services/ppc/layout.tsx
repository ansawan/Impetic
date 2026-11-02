import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/ppc/' },
  title: "PPC Advertising Services | Multi-Channel Management",
  description:
    "PPC advertising services with multi-channel strategy, local landing page optimization and high-converting ad management. Get a free PPC audit.",
  openGraph: {
    title: "PPC Advertising Services | Multi-Channel Management",
    description:
      "PPC advertising services with multi-channel strategy, local landing page optimization and high-converting ad management. Get a free PPC audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/ppc/', fallbackMetadata)
}

export default function PPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
