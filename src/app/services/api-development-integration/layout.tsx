import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Development & Integration Services | Impetic',
  description: 'Type-safe GraphQL and REST APIs, gRPC microservices, and third-party webhook integration systems.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
