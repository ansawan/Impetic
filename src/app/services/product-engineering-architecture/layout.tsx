import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Engineering & Architecture Services | Impetic',
  description: 'Strategic technical architecture, domain-driven design, and scalable system blueprints for software products.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
