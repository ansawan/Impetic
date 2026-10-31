import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function ClientOnboardingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
