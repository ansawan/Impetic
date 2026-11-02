import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/client-onboarding-services/' },
  title: "Client Onboarding Services | Faster Setup, Happy Clients",
  description:
    "Client onboarding services that streamline intake, document collection and account setup so new clients get started faster. Request a quote today.",
  openGraph: {
    title: "Client Onboarding Services | Faster Setup, Happy Clients",
    description:
      "Client onboarding services that streamline intake, document collection and account setup so new clients get started faster. Request a quote today.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/client-onboarding-services/', fallbackMetadata)
}

export default function ClientOnboardingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
