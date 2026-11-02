import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/mobile-app-development/' },
  title: "Mobile App Development for iOS & Android | Impetic",
  description:
    "Mobile app development for iOS and Android with native-level performance and fluid UX from one cross-platform codebase. Get a free quote.",
  openGraph: {
    title: "Mobile App Development for iOS & Android | Impetic",
    description:
      "Mobile app development for iOS and Android with native-level performance and fluid UX from one cross-platform codebase. Get a free quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/mobile-app-development/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
