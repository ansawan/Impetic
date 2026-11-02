import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/email-marketing/' },
  title: "Email Marketing Agency for B2B & SaaS | Impetic",
  description:
    "Email marketing agency for B2B, SaaS and white-label campaigns built for high open rates, retention and revenue. Request a free email audit.",
  openGraph: {
    title: "Email Marketing Agency for B2B & SaaS | Impetic",
    description:
      "Email marketing agency for B2B, SaaS and white-label campaigns built for high open rates, retention and revenue. Request a free email audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/email-marketing/', fallbackMetadata)
}

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
