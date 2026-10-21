'use client'

import { BarChart3, Database, Filter, Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "AI-POWERED SEARCH & RECOMMENDATIONS",
  titleLead: "AI-Powered Search",
  titleAccent: "& Recommendations",
  tagline: "Semantic Vector Search and Personalization Engines That Understand Intent.",
  intro: [
    "Traditional keyword search fails when customers describe what they want in their own words. If they cannot find it, they leave — even when you have exactly the right product or answer.",
    "Impetic builds AI-powered search and recommendation systems that understand meaning and intent, rank results by relevance and personalize what each user sees, helping people find what they need faster.",
  ],
  capabilitiesTitle: "Search & Personalization Capabilities",
  capabilities: [
    { icon: Search, title: "Semantic & hybrid search" },
    { icon: Sparkles, title: "Personalized recommendations" },
    { icon: SlidersHorizontal, title: "Relevance tuning & ranking" },
    { icon: Filter, title: "Faceted filters & autocomplete" },
    { icon: Database, title: "Vector database architecture" },
    { icon: BarChart3, title: "Search analytics & A/B testing" },
  ],
  featureBlocks: [
    { icon: Search, title: "Search That Understands Meaning", description: "Semantic search uses embeddings to match the intent behind a query, so “waterproof shoes for hiking” finds the right products even if those exact words never appear." },
    { icon: Sparkles, title: "Recommendations That Feel Personal", description: "We combine behaviour, item similarity and context to recommend relevant products, content or listings — on product pages, in carts, emails or home pages." },
    { icon: BarChart3, title: "Measured and Continuously Tuned", description: "We track searches with no results, click-through and conversions, and test ranking changes so search quality improves over time." },
  ],
  examples: [
    { title: "Ecommerce product search", description: "An online store returns relevant products for natural-language searches and reduces “no results” pages." },
    { title: "Content recommendations", description: "A publisher or learning platform recommends related articles or courses based on what each user reads." },
    { title: "Marketplace listings", description: "A marketplace ranks listings by relevance, location and user preferences." },
    { title: "Internal document search", description: "Employees find documents by describing what they need instead of guessing file names." },
  ],
  benefits: [
    "Customers find what they want faster",
    "Higher engagement and conversion",
    "Fewer empty search results",
    "Insights into what users are looking for",
  ],
  processSteps: [
    { step: "01", title: "Audit", description: "Analyze current search behaviour and gaps." },
    { step: "02", title: "Design", description: "Choose models, index structure and ranking strategy." },
    { step: "03", title: "Build & Integrate", description: "Implement search and recommendations in your product." },
    { step: "04", title: "Test & Tune", description: "Measure relevance and optimize continuously." },
  ],
  ctaTitle: "Upgrade Your Search Experience",
  ctaDescription: "Let us show you how AI search can work for your catalog or content.",
  faqs: [
    { q: "What is semantic search?", a: "Semantic search finds results based on meaning rather than exact keywords, using AI embeddings to match the intent of a query with relevant items." },
    { q: "Can AI search work alongside keyword search?", a: "Yes. Hybrid search combines semantic and keyword matching, which usually gives the best results for product codes, names and natural-language queries." },
    { q: "How do recommendations work?", a: "They use signals such as browsing and purchase behaviour, item similarity and context to suggest items each user is likely to find relevant." },
    { q: "Will this work with our existing platform?", a: "We integrate with custom applications and common ecommerce and CMS platforms through APIs." },
    { q: "How do you measure search quality?", a: "We track metrics like click-through rate, conversion from search, zero-result searches and relevance judgements, and test improvements over time." },
  ],
}

export default function AISearchRecommendationsPage() {
  return <ServiceDetailPage content={content} />
}
