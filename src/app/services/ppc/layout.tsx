import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function PPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
