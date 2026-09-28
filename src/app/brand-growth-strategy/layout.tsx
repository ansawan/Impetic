import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand & Growth Strategy Services | Impetic',
  description: 'Market positioning, go-to-market execution, and channel strategies tied directly to business goals.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) { return <>{children}</> }
