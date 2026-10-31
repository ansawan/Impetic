import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/' },
  title: "Impetic Blog | SEO, AI & Web Development Insights",
  description:
    "The Impetic Blog shares practical insights on SEO, digital marketing, AI systems and web development to help your business grow online.",
  openGraph: {
    title: "Impetic Blog | SEO, AI & Web Development Insights",
    description:
      "The Impetic Blog shares practical insights on SEO, digital marketing, AI systems and web development to help your business grow online.",
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
