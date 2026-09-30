import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/' },
  title: 'Services — AI, Software, Virtual Assistants & Marketing | Impetic',
  description:
    'Explore Impetic services: AI agents and automation, custom software and web development, virtual assistant operations, and data-driven digital marketing.',
  openGraph: {
    title: 'Services — AI, Software, Virtual Assistants & Marketing | Impetic',
    description:
      'Explore Impetic services: AI agents and automation, custom software and web development, virtual assistant operations, and data-driven digital marketing.',
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
