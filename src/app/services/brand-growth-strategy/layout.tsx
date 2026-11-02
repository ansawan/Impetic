import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/brand-growth-strategy/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
