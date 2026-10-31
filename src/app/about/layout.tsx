import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/about/' },
  title: "About Impetic | AI, Marketing & Software Agency",
  description:
    "About Impetic: a team that combines engineering, AI and marketing under one roof to build and grow digital products since 2022. Meet who we are.",
  openGraph: {
    title: "About Impetic | AI, Marketing & Software Agency",
    description:
      "About Impetic: a team that combines engineering, AI and marketing under one roof to build and grow digital products since 2022. Meet who we are.",
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
