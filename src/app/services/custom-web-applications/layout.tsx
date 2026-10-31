import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/custom-web-applications/' },
  title: "Custom Web Applications Built with React & Next.js",
  description:
    "Custom web applications built on React and Next.js for real-time responsiveness and scale. Impetic engineers fast, reliable platforms. Get a quote.",
  openGraph: {
    title: "Custom Web Applications Built with React & Next.js",
    description:
      "Custom web applications built on React and Next.js for real-time responsiveness and scale. Impetic engineers fast, reliable platforms. Get a quote.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
