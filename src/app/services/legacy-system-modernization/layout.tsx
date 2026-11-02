import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/legacy-system-modernization/' },
  title: "Legacy System Modernization Services | Impetic",
  description:
    "Legacy system modernization that refactors monoliths into cloud-native architecture with zero downtime. Reduce risk and cost. Get a free roadmap.",
  openGraph: {
    title: "Legacy System Modernization Services | Impetic",
    description:
      "Legacy system modernization that refactors monoliths into cloud-native architecture with zero downtime. Reduce risk and cost. Get a free roadmap.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/legacy-system-modernization/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
