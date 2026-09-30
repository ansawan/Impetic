import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/client-onboarding-services/' },
  title: 'Client Onboarding Virtual Assistant Services | Impetic',
  description:
    'Client onboarding virtual assistants who handle intake forms, document collection, account setup and welcome sequences so every new client starts fast and nothing slips.',
  openGraph: {
    title: 'Client Onboarding Virtual Assistant Services | Impetic',
    description:
      'Client onboarding virtual assistants who handle intake forms, document collection, account setup and welcome sequences so every new client starts fast and nothing slips.',
    type: 'website',
  },
}

export default function ClientOnboardingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
