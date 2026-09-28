import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Design & Development Services | Impetic',
  description:
    'Impetic builds custom websites and ecommerce stores — including Magento — designed around your business, not a recycled template. Affordable custom design done right.',
  openGraph: {
    title: 'Custom Web Design & Development Services | Impetic',
    description:
      'Impetic builds custom websites and ecommerce stores — including Magento — designed around your business, not a recycled template. Affordable custom design done right.',
    type: 'website',
  },
}

export default function CustomWebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
