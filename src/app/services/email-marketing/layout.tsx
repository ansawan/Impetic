import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Agency | Full-Service, B2B & White Label — Impetic',
  description:
    'Impetic is a full-service email marketing agency that builds campaigns people actually open. B2B, SaaS, white label, and targeted email done right.',
  openGraph: {
    title: 'Email Marketing Agency | Full-Service, B2B & White Label — Impetic',
    description:
      'Impetic is a full-service email marketing agency that builds campaigns people actually open. B2B, SaaS, white label, and targeted email done right.',
    type: 'website',
  },
}

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
