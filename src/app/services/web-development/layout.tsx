import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/web-development/' },
  title: "Website Development Company for Shopify & WordPress",
  description:
    "Website development company building CMS, Shopify, WooCommerce and B2B sites that convert on desktop and mobile. Get a free project quote.",
  openGraph: {
    title: "Website Development Company for Shopify & WordPress",
    description:
      "Website development company building CMS, Shopify, WooCommerce and B2B sites that convert on desktop and mobile. Get a free project quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/web-development/', fallbackMetadata)
}

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
