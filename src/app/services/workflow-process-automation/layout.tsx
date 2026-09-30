import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/workflow-process-automation/' },
  title: 'Workflow & Process Automation Services | Impetic',
  description: 'Enterprise workflow automation, ETL pipelines, and API integration with SLA guarantees.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
