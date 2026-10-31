import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/contact/' },
  title: "Contact Impetic | Get a Free Quote or Audit",
  description:
    "Contact Impetic to discuss your marketing, AI or software project. Share your goals and budget and get a reply within 24 business hours.",
  openGraph: {
    title: "Contact Impetic | Get a Free Quote or Audit",
    description:
      "Contact Impetic to discuss your marketing, AI or software project. Share your goals and budget and get a reply within 24 business hours.",
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
