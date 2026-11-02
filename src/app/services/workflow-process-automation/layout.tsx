import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/workflow-process-automation/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
