import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/virtual-assistant-marketing-agencies/' },
  title: 'Virtual Assistant for Marketing Agencies — White-Label Support | Impetic',
  description:
    'White-label virtual assistants for marketing agencies: client account support, campaign execution, reporting, project coordination and scalable capacity as you grow.',
  openGraph: {
    title: 'Virtual Assistant for Marketing Agencies — White-Label Support | Impetic',
    description:
      'White-label virtual assistants for marketing agencies: client account support, campaign execution, reporting, project coordination and scalable capacity as you grow.',
    type: 'website',
  },
}

export default function VirtualAssistantMarketingAgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
