import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoHighLevel Experts — Setup, Automation & Funnel Services | Impetic',
  description:
    'Professional GoHighLevel expert services to manage, optimize, and maintain your GoHighLevel account. CRM management, automations, sales funnels, and onboarding support.',
  openGraph: {
    title: 'GoHighLevel Experts — Setup, Automation & Funnel Services | Impetic',
    description:
      'Professional GoHighLevel expert services to manage, optimize, and maintain your GoHighLevel account. CRM management, automations, sales funnels, and onboarding support.',
    type: 'website',
  },
}

export default function GoHighLevelExpertsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
