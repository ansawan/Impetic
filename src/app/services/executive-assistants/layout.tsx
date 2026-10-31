import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/executive-assistants/' },
  title: "Remote Executive Assistants for Busy Leaders | Impetic",
  description:
    "Hire remote executive assistants to manage your calendar, inbox, projects and admin work. Free up your day to focus on growth. Get a free quote.",
  openGraph: {
    title: "Remote Executive Assistants for Busy Leaders | Impetic",
    description:
      "Hire remote executive assistants to manage your calendar, inbox, projects and admin work. Free up your day to focus on growth. Get a free quote.",
    type: 'website',
  },
}

export default function ExecutiveAssistantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
