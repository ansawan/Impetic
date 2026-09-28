import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Assistant Services — Strategic Delegation | Impetic',
  description:
    'Dedicated remote Executive Assistant services for founders, CEOs, and business leaders. Calendar management, inbox organization, travel planning, and administrative support.',
  openGraph: {
    title: 'Executive Assistant Services — Strategic Delegation | Impetic',
    description:
      'Dedicated remote Executive Assistant services for founders, CEOs, and business leaders. Calendar management, inbox organization, travel planning, and administrative support.',
    type: 'website',
  },
}

export default function ExecutiveAssistantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
