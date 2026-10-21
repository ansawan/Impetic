'use client'

import { Cloud, Database, Plug, RefreshCw, Search, ShieldCheck } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "LEGACY SYSTEM MODERNIZATION",
  titleLead: "Legacy System",
  titleAccent: "Modernization",
  tagline: "Refactoring Monoliths into Cloud-Native Architectures with Zero Downtime.",
  intro: [
    "Legacy systems often still run critical parts of a business, but they become slower to change, harder to secure and more expensive to maintain every year — and the people who understand them keep getting harder to find.",
    "Impetic modernizes legacy software step by step: moving it to modern technology and cloud infrastructure while the business keeps running, so you reduce risk instead of betting everything on one big rewrite.",
  ],
  capabilitiesTitle: "Modernization Capabilities",
  capabilities: [
    { icon: Search, title: "Legacy system assessment" },
    { icon: RefreshCw, title: "Incremental refactoring & rewrites" },
    { icon: Cloud, title: "Cloud migration" },
    { icon: Database, title: "Data migration & database upgrades" },
    { icon: Plug, title: "APIs around legacy systems" },
    { icon: ShieldCheck, title: "Security & compliance updates" },
  ],
  featureBlocks: [
    { icon: Search, title: "Understand Before You Change", description: "We map the existing system, its dependencies, data and business rules, and identify which parts carry the most risk and the most value to modernize." },
    { icon: RefreshCw, title: "Modernize Without Stopping the Business", description: "Using incremental approaches, new components replace old ones piece by piece behind stable interfaces, so users keep working throughout the migration." },
    { icon: Cloud, title: "A Platform Ready for the Future", description: "The result is maintainable code on modern infrastructure, with automated testing, deployment and monitoring that make future changes faster and safer." },
  ],
  examples: [
    { title: "Desktop software to web", description: "An internal desktop application is rebuilt as a secure web application accessible from anywhere." },
    { title: "On-premise to cloud", description: "Servers in an office are migrated to cloud hosting with backups, monitoring and better uptime." },
    { title: "Breaking up a monolith", description: "A large, tightly coupled application is gradually split into services that can be updated independently." },
    { title: "Database upgrade", description: "An outdated database is migrated to a supported version with data validated end to end." },
  ],
  benefits: [
    "Lower maintenance and hosting costs",
    "Improved security and reliability",
    "Faster delivery of new features",
    "Reduced risk compared with a big-bang rewrite",
  ],
  processSteps: [
    { step: "01", title: "Assessment", description: "Analyze code, data, infrastructure and risks." },
    { step: "02", title: "Roadmap", description: "Plan phased modernization with clear milestones." },
    { step: "03", title: "Incremental Migration", description: "Replace components and migrate data safely." },
    { step: "04", title: "Optimize", description: "Retire old systems and improve the new platform." },
  ],
  ctaTitle: "Modernize Your Legacy Systems",
  ctaDescription: "Start with an assessment of your current system.",
  faqs: [
    { q: "What is legacy system modernization?", a: "It is the process of updating old software and infrastructure to modern technologies so they are easier to maintain, more secure and able to support new business needs." },
    { q: "Should we rewrite from scratch or modernize gradually?", a: "Gradual modernization is usually lower risk because the business keeps running and value is delivered in stages. A full rewrite can make sense for small or very outdated systems." },
    { q: "Will there be downtime during migration?", a: "We plan migrations to minimize or avoid downtime, using parallel running, phased cutovers and tested rollback plans." },
    { q: "Can you work with old or uncommon technologies?", a: "Yes. We assess the existing technology, document how it works and plan the safest path forward." },
    { q: "How long does modernization take?", a: "It depends on the size and complexity of the system. We break the work into phases so improvements arrive throughout the project." },
  ],
}

export default function LegacySystemModernizationPage() {
  return <ServiceDetailPage content={content} />
}
