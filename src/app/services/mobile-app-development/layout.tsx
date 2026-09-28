import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Impetic',
  description: 'Cross-platform iOS and Android mobile app development with native-level performance.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
