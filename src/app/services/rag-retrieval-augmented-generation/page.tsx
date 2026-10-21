'use client'

import { Activity, Database, FileSearch, Layers, Lock, Quote } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "RETRIEVAL-AUGMENTED GENERATION (RAG)",
  titleLead: "Retrieval-Augmented",
  titleAccent: "Generation (RAG)",
  tagline: "Ground Your AI Outputs in Verifiable Proprietary Knowledge.",
  intro: [
    "Large language models are powerful, but on their own they do not know your contracts, manuals, tickets or internal documents — and they can answer confidently even when they are wrong.",
    "Retrieval-augmented generation (RAG) fixes this by finding the most relevant passages from your own data and giving them to the model at answer time. Impetic designs and builds RAG systems that return accurate, cited answers from your knowledge.",
  ],
  capabilitiesTitle: "RAG Capabilities",
  capabilities: [
    { icon: FileSearch, title: "Document ingestion & smart chunking" },
    { icon: Database, title: "Vector databases & hybrid search" },
    { icon: Layers, title: "Re-ranking for more relevant results" },
    { icon: Quote, title: "Cited answers with source links" },
    { icon: Lock, title: "Permission-aware retrieval" },
    { icon: Activity, title: "Answer quality evaluation & monitoring" },
  ],
  featureBlocks: [
    { icon: FileSearch, title: "Turn Scattered Documents into Searchable Knowledge", description: "We ingest PDFs, wikis, help centers, tickets and databases, clean and structure them, and keep the index updated as your content changes." },
    { icon: Layers, title: "Retrieval That Finds the Right Passage", description: "Combining semantic vector search, keyword search and re-ranking means the model sees the passages that actually answer the question, not just similar-sounding text." },
    { icon: Quote, title: "Answers You Can Verify", description: "Every answer can include citations to the source documents, so users can check the facts — essential for legal, financial, technical and support use cases." },
  ],
  examples: [
    { title: "Support knowledge base", description: "Support agents get instant, cited answers from product manuals and past tickets, reducing time spent searching." },
    { title: "Internal policy assistant", description: "Employees ask HR, IT or compliance questions and receive answers that link to the exact policy section." },
    { title: "Contract and document Q&A", description: "A legal or operations team queries large sets of contracts and documents in plain language." },
    { title: "Technical documentation search", description: "Developers or customers search technical docs by meaning rather than exact keywords." },
  ],
  benefits: [
    "Accurate answers based on your own data",
    "Citations that build trust",
    "Knowledge that stays current as documents change",
    "Access controls that respect permissions",
  ],
  processSteps: [
    { step: "01", title: "Data Review", description: "Identify sources, formats, permissions and update frequency." },
    { step: "02", title: "Pipeline Build", description: "Ingestion, chunking, embeddings and indexing." },
    { step: "03", title: "Retrieval & Answering", description: "Search, re-ranking, prompting and citations." },
    { step: "04", title: "Evaluate & Monitor", description: "Measure answer quality and improve over time." },
  ],
  ctaTitle: "Put Your Knowledge to Work with RAG",
  ctaDescription: "Show us your documents and use case, and we will design the right RAG system.",
  faqs: [
    { q: "What is retrieval-augmented generation?", a: "RAG is a technique where an AI system first searches your own documents for relevant information and then uses that information to write its answer, making responses more accurate and specific." },
    { q: "Is RAG better than fine-tuning?", a: "They solve different problems. RAG is best for answering questions from changing knowledge; fine-tuning is better for changing a model’s style or behaviour. Many systems use both." },
    { q: "What types of documents can you use?", a: "Common sources include PDFs, Word documents, web pages, wikis, help centers, tickets, spreadsheets and databases." },
    { q: "Can users only see documents they have access to?", a: "Yes. We can apply permission filters at retrieval time so users only get answers from content they are allowed to see." },
    { q: "How do you measure answer quality?", a: "We build test sets of real questions and score retrieval relevance and answer accuracy, then track quality over time in production." },
  ],
}

export default function RAGPage() {
  return <ServiceDetailPage content={content} />
}
