import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/mobile-app-development/' },
  title: "Mobile App Development for iOS & Android | Impetic",
  description:
    "Mobile app development for iOS and Android with native-level performance and fluid UX from one cross-platform codebase. Get a free quote.",
  openGraph: {
    title: "Mobile App Development for iOS & Android | Impetic",
    description:
      "Mobile app development for iOS and Android with native-level performance and fluid UX from one cross-platform codebase. Get a free quote.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
