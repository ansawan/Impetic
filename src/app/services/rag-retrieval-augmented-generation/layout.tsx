import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/rag-retrieval-augmented-generation/' },
  title: "Retrieval-Augmented Generation (RAG) Services | Impetic",
  description:
    "Retrieval-augmented generation grounds AI answers in your documents and knowledge base. Impetic builds RAG systems with vector search. Get a quote.",
  openGraph: {
    title: "Retrieval-Augmented Generation (RAG) Services | Impetic",
    description:
      "Retrieval-augmented generation grounds AI answers in your documents and knowledge base. Impetic builds RAG systems with vector search. Get a quote.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
