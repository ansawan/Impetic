import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retrieval-Augmented Generation (RAG) Services | Impetic',
  description: 'Production vector search, document embedding pipelines, and RAG architectures grounding AI outputs in your data.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) { return <>{children}</> }
