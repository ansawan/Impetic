import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing & Copywriting Services | Impetic',
  description: 'Technical whitepapers, SEO copywriting, and editorial content strategies built to convert.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
