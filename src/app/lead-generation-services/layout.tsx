import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Generation Virtual Assistant Services | Impetic',
  description:
    'Dedicated B2B lead generation virtual assistants for prospect research, list building, CRM management, appointment setting, and cold outreach.',
  openGraph: {
    title: 'Lead Generation Virtual Assistant Services | Impetic',
    description:
      'Dedicated B2B lead generation virtual assistants for prospect research, list building, CRM management, appointment setting, and cold outreach.',
    type: 'website',
  },
}

export default function LeadGenerationServicesRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
