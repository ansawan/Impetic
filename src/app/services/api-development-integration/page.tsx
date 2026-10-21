'use client'

import { Activity, Code2, FileText, Lock, Plug, Webhook } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "API DEVELOPMENT & INTEGRATION",
  titleLead: "API Development",
  titleAccent: "& Integration",
  tagline: "Type-Safe REST, GraphQL, and gRPC Microservice APIs.",
  intro: [
    "When your systems cannot talk to each other, people end up copying data by hand and decisions are made on outdated information. APIs are what let software share data and trigger actions reliably.",
    "Impetic designs and builds secure, well-documented APIs and integrations — connecting your website, apps, CRM, payment, accounting and partner systems so data flows automatically.",
  ],
  capabilitiesTitle: "API Capabilities",
  capabilities: [
    { icon: Code2, title: "REST & GraphQL API development" },
    { icon: Plug, title: "Third-party system integrations" },
    { icon: Webhook, title: "Webhooks & event-driven workflows" },
    { icon: Lock, title: "Authentication & API security" },
    { icon: FileText, title: "Documentation & developer portals" },
    { icon: Activity, title: "Monitoring, rate limiting & versioning" },
  ],
  featureBlocks: [
    { icon: Code2, title: "APIs Designed to Last", description: "We design clear, consistent APIs with typed contracts, versioning and validation, so frontends, partners and future developers can rely on them." },
    { icon: Plug, title: "Integrations Without the Headaches", description: "We connect the tools you rely on — CRMs, payment gateways, ERPs, marketing platforms — handling authentication, data mapping, retries and error cases." },
    { icon: Lock, title: "Secure and Observable", description: "Every API includes proper authentication, authorization, rate limiting and logging, with monitoring that alerts you to failures or unusual traffic." },
  ],
  examples: [
    { title: "CRM and website integration", description: "Website forms and bookings create and update CRM records automatically, with no manual entry." },
    { title: "Payment and accounting sync", description: "Online payments are recorded in accounting software with the correct customer and invoice details." },
    { title: "Public API for partners", description: "A platform exposes a documented API so partners can integrate their own systems." },
    { title: "Mobile app backend", description: "A mobile app gets a secure, scalable API for accounts, content and transactions." },
  ],
  benefits: [
    "Systems that share data automatically",
    "Less manual data entry and fewer errors",
    "A foundation for apps and partners",
    "Secure, documented and maintainable code",
  ],
  processSteps: [
    { step: "01", title: "Requirements", description: "Map systems, data and integration needs." },
    { step: "02", title: "API Design", description: "Define endpoints, data contracts and security." },
    { step: "03", title: "Build & Test", description: "Implement, test and document." },
    { step: "04", title: "Deploy & Monitor", description: "Launch with monitoring and support." },
  ],
  ctaTitle: "Connect Your Systems",
  ctaDescription: "Tell us which tools you need to integrate.",
  faqs: [
    { q: "What is an API?", a: "An API (application programming interface) is a defined way for software systems to exchange data and trigger actions with each other." },
    { q: "REST or GraphQL — which should we use?", a: "REST is simple and widely supported; GraphQL is useful when clients need flexible data queries. We recommend based on your use case." },
    { q: "Can you integrate with systems that have limited APIs?", a: "Often, yes. We work with available APIs, webhooks, file exports or other methods to connect systems reliably." },
    { q: "How do you keep APIs secure?", a: "We use secure authentication, role-based access, input validation, rate limiting, encryption in transit and logging." },
    { q: "Do you document the APIs you build?", a: "Yes. We provide clear documentation so your team and partners can use and maintain the API." },
  ],
}

export default function APIDevelopmentIntegrationPage() {
  return <ServiceDetailPage content={content} />
}
