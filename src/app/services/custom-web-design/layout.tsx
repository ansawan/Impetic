import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/custom-web-design/' },
  title: "Custom Web Design & Development Services | Impetic",
  description:
    "Custom web design and development for bespoke sites, custom ecommerce and Magento builds with complex workflows. Request a free quote.",
  openGraph: {
    title: "Custom Web Design & Development Services | Impetic",
    description:
      "Custom web design and development for bespoke sites, custom ecommerce and Magento builds with complex workflows. Request a free quote.",
    type: 'website',
  },
}

export default function CustomWebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
