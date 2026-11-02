import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/api-development-integration/' },
  title: "API Development & Integration Services | Impetic",
  description:
    "API development and integration with type-safe GraphQL and REST APIs, gRPC microservices and webhook systems. Get a free technical consultation.",
  openGraph: {
    title: "API Development & Integration Services | Impetic",
    description:
      "API development and integration with type-safe GraphQL and REST APIs, gRPC microservices and webhook systems. Get a free technical consultation.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/api-development-integration/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
