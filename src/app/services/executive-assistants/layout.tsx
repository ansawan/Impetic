import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/executive-assistants/', fallbackMetadata)
}

export default function ExecutiveAssistantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
