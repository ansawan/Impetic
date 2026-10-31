import type { Metadata } from 'next'
import { RelatedServices } from '@/components/sections/RelatedServices'

export const metadata: Metadata = {
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

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedServices />
    </>
  )
}
