import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/property-management-virtual-assistant/' },
  title: 'Property Management Virtual Assistant Services | Impetic',
  description:
    'Property management virtual assistants for tenant screening, maintenance request tracking, lease administration, rent collection support and owner reporting.',
  openGraph: {
    title: 'Property Management Virtual Assistant Services | Impetic',
    description:
      'Property management virtual assistants for tenant screening, maintenance request tracking, lease administration, rent collection support and owner reporting.',
    type: 'website',
  },
}

export default function PropertyManagementVirtualAssistantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
