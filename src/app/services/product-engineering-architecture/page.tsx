'use client'

import { Cloud, Database, Layers, Search, ShieldCheck, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "PRODUCT ENGINEERING & ARCHITECTURE",
  titleLead: "Product Engineering",
  titleAccent: "& Architecture",
  tagline: "Strategic Technical Architecture and Scalable System Blueprints.",
  intro: [
    "Early technical decisions shape how fast a product can grow. The wrong architecture leads to slow releases, rising cloud bills and painful rewrites; the right one lets small teams move quickly with confidence.",
    "Impetic helps you design, review and evolve the architecture behind your product — from choosing the stack and data model to planning for scale, security and a smooth path from prototype to platform.",
  ],
  capabilitiesTitle: "Architecture Capabilities",
  capabilities: [
    { icon: Layers, title: "System & solution architecture" },
    { icon: Search, title: "Architecture & code reviews" },
    { icon: Database, title: "Data modeling & storage strategy" },
    { icon: Cloud, title: "Cloud architecture & cost planning" },
    { icon: ShieldCheck, title: "Security & reliability design" },
    { icon: Users, title: "Technical leadership & team guidance" },
  ],
  featureBlocks: [
    { icon: Layers, title: "Blueprints Before Building", description: "We translate product goals into a clear technical design: components, data flows, integrations and the trade-offs behind each decision, documented for your team." },
    { icon: Search, title: "Independent Technical Reviews", description: "We review existing systems and code to identify bottlenecks, risks and quick wins, with a prioritized plan to fix what matters most." },
    { icon: Users, title: "Engineering Leadership on Demand", description: "For teams without a senior architect, we provide fractional technical leadership to guide decisions, mentor developers and keep delivery on track." },
  ],
  examples: [
    { title: "Pre-build architecture plan", description: "A startup gets a documented architecture, stack choice and roadmap before hiring developers." },
    { title: "Scaling review", description: "A growing product identifies database and infrastructure bottlenecks before they cause outages." },
    { title: "Cloud cost reduction", description: "A team reduces its monthly cloud spend by redesigning over-provisioned services." },
    { title: "Due diligence", description: "Investors or acquirers receive an independent assessment of a product’s technology and risks." },
  ],
  benefits: [
    "Fewer costly rewrites later",
    "Faster, safer releases",
    "Predictable infrastructure costs",
    "Confidence in technical decisions",
  ],
  processSteps: [
    { step: "01", title: "Context", description: "Understand product goals, constraints and current systems." },
    { step: "02", title: "Analysis", description: "Review architecture, code and infrastructure." },
    { step: "03", title: "Design", description: "Produce target architecture and roadmap." },
    { step: "04", title: "Guidance", description: "Support the team through implementation." },
  ],
  ctaTitle: "Get Your Architecture Right",
  ctaDescription: "Book an architecture review or planning session.",
  faqs: [
    { q: "What does a software architect do?", a: "A software architect designs how a system is structured — its components, data, integrations and infrastructure — so it meets requirements for performance, security and growth." },
    { q: "When should we invest in architecture?", a: "Before building a new product, before scaling significantly, or when releases slow down and problems keep recurring." },
    { q: "Do you only give advice or also build?", a: "Both. We can deliver architecture and reviews only, or our engineering team can implement the plan." },
    { q: "What do we receive from an architecture review?", a: "A report covering findings, risks and recommendations, with a prioritized roadmap and diagrams of the current and target architecture." },
    { q: "Can you work with our in-house developers?", a: "Yes. We often work alongside internal teams, providing guidance, reviews and hands-on support." },
  ],
}

export default function ProductEngineeringArchitecturePage() {
  return <ServiceDetailPage content={content} />
}
