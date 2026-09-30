import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/real-estate-virtual-assistant/' },
  title: 'Real Estate Virtual Assistant Services | Impetic',
  description:
    'Real estate virtual assistants for agents and brokerages: MLS listing management, transaction coordination, lead follow-up, showing scheduling and property marketing.',
  openGraph: {
    title: 'Real Estate Virtual Assistant Services | Impetic',
    description:
      'Real estate virtual assistants for agents and brokerages: MLS listing management, transaction coordination, lead follow-up, showing scheduling and property marketing.',
    type: 'website',
  },
}

export default function RealEstateVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
