import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
