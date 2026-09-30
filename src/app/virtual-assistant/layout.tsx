import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/virtual-assistant/' },
  title: 'Virtual Assistant Services for Growing Businesses | Impetic',
  description:
    'Delegate admin, CRM, lead generation, onboarding and marketing operations to trained Impetic virtual assistants backed by AI tooling. Stop doing everything yourself.',
  openGraph: {
    title: 'Virtual Assistant Services for Growing Businesses | Impetic',
    description:
      'Delegate admin, CRM, lead generation, onboarding and marketing operations to trained Impetic virtual assistants backed by AI tooling. Stop doing everything yourself.',
    type: 'website',
  },
}

export default function VirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
