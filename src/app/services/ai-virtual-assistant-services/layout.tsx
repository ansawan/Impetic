import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Virtual Assistant Services — Work Smarter, Not Harder | Impetic',
  description: 'Professional AI Virtual Assistant Services combining experienced human virtual assistants with AI technology to save time, boost productivity, and grow your business.',
  openGraph: {
    title: 'AI Virtual Assistant Services — Work Smarter, Not Harder | Impetic',
    description: 'Professional AI Virtual Assistant Services combining experienced human virtual assistants with AI technology to save time, boost productivity, and grow your business.',
    type: 'website',
  },
}

export default function AIVirtualAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
