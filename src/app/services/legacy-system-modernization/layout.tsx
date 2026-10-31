import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
