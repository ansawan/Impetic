import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Application Development Services | Impetic',
  description: 'High-performance React/Next.js web application development built for speed, real-time responsiveness, and scale.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
