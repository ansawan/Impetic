import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legacy System Modernization Services | Impetic',
  description: 'Refactoring monolithic systems into modern cloud-native architectures with zero downtime.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) { return <>{children}</> }
