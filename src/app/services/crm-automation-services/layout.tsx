import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/crm-automation-services/' },
  title: "CRM Automation Services & Virtual Assistants | Impetic",
  description:
    "CRM automation services to organize customer data, build follow-up workflows and clean your database. Get dedicated assistant support. Request a quote.",
  openGraph: {
    title: "CRM Automation Services & Virtual Assistants | Impetic",
    description:
      "CRM automation services to organize customer data, build follow-up workflows and clean your database. Get dedicated assistant support. Request a quote.",
    type: 'website',
  },
}

export default function CRMAutomationServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
