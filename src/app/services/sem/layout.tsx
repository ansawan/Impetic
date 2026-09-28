import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEM Marketing Services | SEO, SEM & PPC Under One Roof — Impetic',
  description:
    'Impetic runs SEO, SEM, and PPC as one connected strategy — not three separate invoices. See how full-funnel search marketing actually grows your business.',
  openGraph: {
    title: 'SEM Marketing Services | SEO, SEM & PPC Under One Roof — Impetic',
    description:
      'Impetic runs SEO, SEM, and PPC as one connected strategy — not three separate invoices. See how full-funnel search marketing actually grows your business.',
    type: 'website',
  },
}

export default function SEMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
