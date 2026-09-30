import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/contact/' },
  title: 'Contact Impetic — Start a Project',
  description:
    'Talk to Impetic about AI automation, software development, virtual assistants or digital marketing. Our team responds within 24 hours.',
  openGraph: {
    title: 'Contact Impetic — Start a Project',
    description:
      'Talk to Impetic about AI automation, software development, virtual assistants or digital marketing. Our team responds within 24 hours.',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
