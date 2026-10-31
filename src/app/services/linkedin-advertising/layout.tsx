import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/linkedin-advertising/' },
  title: "LinkedIn Advertising Agency for B2B Lead Gen | Impetic",
  description:
    "LinkedIn advertising agency focused on decision-maker targeting, pipeline impact and lower cost per lead. Grow your B2B pipeline. Get a free audit.",
  openGraph: {
    title: "LinkedIn Advertising Agency for B2B Lead Gen | Impetic",
    description:
      "LinkedIn advertising agency focused on decision-maker targeting, pipeline impact and lower cost per lead. Grow your B2B pipeline. Get a free audit.",
    type: 'website',
  },
}

export default function LinkedInAdvertisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
