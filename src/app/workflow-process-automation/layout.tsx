import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow & Process Automation Services | Impetic',
  description: 'Enterprise workflow automation, ETL pipelines, and API integration with SLA guarantees.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) { return <>{children}</> }
