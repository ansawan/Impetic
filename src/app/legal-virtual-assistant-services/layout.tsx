import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services — Law Firm Administrative Support | Impetic',
  description:
    'Dedicated Legal Virtual Assistant Services for law firms, solo attorneys, and legal departments. Client intake, calendar management, legal document formatting, and case file organization.',
  openGraph: {
    title: 'Legal Virtual Assistant Services — Law Firm Administrative Support | Impetic',
    description:
      'Dedicated Legal Virtual Assistant Services for law firms, solo attorneys, and legal departments. Client intake, calendar management, legal document formatting, and case file organization.',
    type: 'website',
  },
}

export default function LegalVirtualAssistantServicesRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
