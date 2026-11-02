import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/custom-web-applications/' },
  title: "Custom Web Applications Built with React & Next.js",
  description:
    "Custom web applications built on React and Next.js for real-time responsiveness and scale. Impetic engineers fast, reliable platforms. Get a quote.",
  openGraph: {
    title: "Custom Web Applications Built with React & Next.js",
    description:
      "Custom web applications built on React and Next.js for real-time responsiveness and scale. Impetic engineers fast, reliable platforms. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/custom-web-applications/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
