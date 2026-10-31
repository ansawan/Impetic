import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/product-engineering-architecture/' },
  title: "Product Engineering & Software Architecture | Impetic",
  description:
    "Product engineering with strategic architecture, domain-driven design and scalable system blueprints that keep your product fast. Book a consultation.",
  openGraph: {
    title: "Product Engineering & Software Architecture | Impetic",
    description:
      "Product engineering with strategic architecture, domain-driven design and scalable system blueprints that keep your product fast. Book a consultation.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
