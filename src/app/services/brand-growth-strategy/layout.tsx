import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/brand-growth-strategy/' },
  title: "Brand Growth Strategy Services | Impetic",
  description:
    "Brand growth strategy covering market positioning, go-to-market execution and channel plans tied directly to revenue goals. Book a free consultation.",
  openGraph: {
    title: "Brand Growth Strategy Services | Impetic",
    description:
      "Brand growth strategy covering market positioning, go-to-market execution and channel plans tied directly to revenue goals. Book a free consultation.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
