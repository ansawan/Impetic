import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/workflow-process-automation/' },
  title: "Workflow Automation Services for Business | Impetic",
  description:
    "Workflow automation that replaces manual, repetitive tasks with reliable automated pipelines backed by SLAs. Request a free automation audit today.",
  openGraph: {
    title: "Workflow Automation Services for Business | Impetic",
    description:
      "Workflow automation that replaces manual, repetitive tasks with reliable automated pipelines backed by SLAs. Request a free automation audit today.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
