import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Management & Deployment Services | Impetic',
  description:
    'Deploy, manage, monitor, and optimize your autonomous AI agents with professional oversight. Ensure high accuracy, continuous integration, and long-term performance.',
  openGraph: {
    title: 'AI Agent Management & Deployment Services | Impetic',
    description:
      'Deploy, manage, monitor, and optimize your autonomous AI agents with professional oversight. Ensure high accuracy, continuous integration, and long-term performance.',
    type: 'website',
  },
}

export default function AIAgentManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
