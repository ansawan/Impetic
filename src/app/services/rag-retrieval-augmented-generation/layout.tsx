import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/rag-retrieval-augmented-generation/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
