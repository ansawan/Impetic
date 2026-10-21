'use client'

import { Activity, Database, MessageSquare, Plug, ShieldCheck, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "LLM & CHATBOT INTEGRATION",
  titleLead: "LLM & Chatbot",
  titleAccent: "Integration",
  tagline: "Production-Grade Conversational AI Wired Into Your Product.",
  intro: [
    "A chatbot that only answers generic questions frustrates customers. A useful AI assistant knows your products, policies and data — and can take real actions like booking, tracking an order or creating a support ticket.",
    "Impetic builds and integrates large language model (LLM) assistants into websites, apps and internal tools, connected to your systems with the guardrails, monitoring and human handoff a business needs.",
  ],
  capabilitiesTitle: "Chatbot Capabilities",
  capabilities: [
    { icon: MessageSquare, title: "Website & in-app AI chat assistants" },
    { icon: Database, title: "Answers grounded in your own knowledge base" },
    { icon: Plug, title: "CRM, helpdesk & booking integrations" },
    { icon: ShieldCheck, title: "Guardrails, moderation & safe responses" },
    { icon: Users, title: "Human handoff to live agents" },
    { icon: Activity, title: "Conversation analytics & monitoring" },
  ],
  featureBlocks: [
    { icon: Database, title: "Assistants That Know Your Business", description: "We connect the model to your documentation, FAQs, product catalog and policies so answers are accurate, current and specific to you — not generic internet knowledge." },
    { icon: Plug, title: "From Answers to Actions", description: "Through tool calling and API integrations, assistants can check order status, qualify leads, book appointments or open tickets directly in your existing systems." },
    { icon: ShieldCheck, title: "Safe, Monitored and Improving", description: "We add content guardrails, fallbacks when the AI is unsure, escalation to humans, and dashboards to review conversations and improve the assistant over time." },
  ],
  examples: [
    { title: "Customer support assistant", description: "An ecommerce store answers shipping, returns and order-status questions instantly and escalates complex cases to its support team." },
    { title: "Lead qualification chatbot", description: "A service business qualifies website visitors, collects contact details and books calls directly into the sales calendar." },
    { title: "Internal knowledge assistant", description: "Staff ask questions about policies, procedures and documentation in plain language instead of searching shared drives." },
    { title: "Product guidance", description: "A software company helps users find features and troubleshoot problems inside the app, reducing support tickets." },
  ],
  benefits: [
    "Instant answers around the clock",
    "Fewer repetitive support tickets",
    "More leads captured and qualified",
    "Consistent, on-brand responses",
  ],
  processSteps: [
    { step: "01", title: "Use-Case Design", description: "Define goals, conversations and success metrics." },
    { step: "02", title: "Knowledge & Integrations", description: "Connect data sources and business systems." },
    { step: "03", title: "Build & Test", description: "Prompting, guardrails and evaluation against real questions." },
    { step: "04", title: "Launch & Improve", description: "Deploy, monitor conversations and refine." },
  ],
  ctaTitle: "Launch an AI Assistant That Actually Helps",
  ctaDescription: "Tell us your use case and we will map out the right assistant.",
  faqs: [
    { q: "Which AI models do you use?", a: "We work with leading commercial and open-weight LLMs and choose the model based on quality, speed, cost and data requirements for your use case." },
    { q: "Will the chatbot make things up?", a: "We reduce this risk by grounding answers in your own content, limiting the assistant to approved topics, and adding fallbacks and human handoff when it is not confident." },
    { q: "Can it integrate with our CRM or helpdesk?", a: "Yes. We integrate with common CRMs, helpdesks, booking tools and custom APIs so the assistant can read and update information." },
    { q: "Is our data kept private?", a: "We design integrations so your data is only used to answer your users, choose providers and settings that fit your privacy needs, and avoid sending more data than required." },
    { q: "How long does a chatbot project take?", a: "A focused assistant can launch in a few weeks; deeper integrations and multi-channel assistants take longer depending on scope." },
  ],
}

export default function LLMChatbotIntegrationPage() {
  return <ServiceDetailPage content={content} />
}
