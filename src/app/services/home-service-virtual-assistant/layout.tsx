import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/home-service-virtual-assistant/' },
  title: 'Home Service Virtual Assistant Services | Impetic',
  description:
    'Virtual assistants for home service businesses: call and inquiry handling, job scheduling and dispatch, estimate follow-ups, invoicing support and review requests.',
  openGraph: {
    title: 'Home Service Virtual Assistant Services | Impetic',
    description:
      'Virtual assistants for home service businesses: call and inquiry handling, job scheduling and dispatch, estimate follow-ups, invoicing support and review requests.',
    type: 'website',
  },
}

export default function HomeServiceVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
