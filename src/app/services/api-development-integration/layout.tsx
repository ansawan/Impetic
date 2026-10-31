import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
