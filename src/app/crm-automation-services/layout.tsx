import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM and Automation Virtual Assistant Services | Impetic',
  description:
    'Dedicated CRM virtual assistant support to organize customer data, manage automations, clean up databases, and keep sales pipelines running smoothly.',
  openGraph: {
    title: 'CRM and Automation Virtual Assistant Services | Impetic',
    description:
      'Dedicated CRM virtual assistant support to organize customer data, manage automations, clean up databases, and keep sales pipelines running smoothly.',
    type: 'website',
  },
}

export default function CRMAutomationServicesRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
