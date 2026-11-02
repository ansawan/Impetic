import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/custom-web-design/', fallbackMetadata)
}

export default function CustomWebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
