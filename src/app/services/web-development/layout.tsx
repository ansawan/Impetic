import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Development Company | CMS, Shopify & WooCommerce — Impetic',
  description:
    'Impetic builds fast, responsive websites on the platform that actually fits your business — CMS, Shopify, or WooCommerce. Built to convert, not just look nice.',
  openGraph: {
    title: 'Website Development Company | CMS, Shopify & WooCommerce — Impetic',
    description:
      'Impetic builds fast, responsive websites on the platform that actually fits your business — CMS, Shopify, or WooCommerce. Built to convert, not just look nice.',
    type: 'website',
  },
}

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
