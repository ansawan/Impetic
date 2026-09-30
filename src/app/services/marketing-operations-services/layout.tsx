import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/marketing-operations-services/' },
  title: 'Marketing Operations Virtual Assistant Services | Impetic',
  description:
    'Marketing operations virtual assistants for campaign deployment, asset organization, tracking and UTM setup, marketing automation support and performance reporting.',
  openGraph: {
    title: 'Marketing Operations Virtual Assistant Services | Impetic',
    description:
      'Marketing operations virtual assistants for campaign deployment, asset organization, tracking and UTM setup, marketing automation support and performance reporting.',
    type: 'website',
  },
}

export default function MarketingOperationsServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
