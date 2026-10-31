import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/seo/' },
  title: "AI SEO Services & Technical SEO Agency | Impetic",
  description:
    "AI SEO services that combine technical SEO, generative AI visibility and local search to get you found first. Start with a free SEO audit.",
  openGraph: {
    title: "AI SEO Services & Technical SEO Agency | Impetic",
    description:
      "AI SEO services that combine technical SEO, generative AI visibility and local search to get you found first. Start with a free SEO audit.",
    type: 'website',
  },
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
