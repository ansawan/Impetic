import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/about/' },
  title: "About Impetic | AI, Marketing & Software Agency",
  description:
    "About Impetic: a team that combines engineering, AI and marketing under one roof to build and grow digital products since 2022. Meet who we are.",
  openGraph: {
    title: "About Impetic | AI, Marketing & Software Agency",
    description:
      "About Impetic: a team that combines engineering, AI and marketing under one roof to build and grow digital products since 2022. Meet who we are.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/about/', fallbackMetadata)
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
