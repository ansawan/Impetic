'use client'

import { ClipboardList, Clock, FileCheck, MailCheck, Settings, UserPlus, Workflow } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "CLIENT ONBOARDING SERVICES",
  titleLead: "Client",
  titleAccent: "Onboarding",
  tagline: "A Smooth, Consistent First Experience for Every New Client.",
  intro: [
    "The first weeks of a client relationship decide how long it lasts. Yet onboarding is often a scramble of chasing forms, missing documents and half-finished account setups.",
    "Impetic client onboarding virtual assistants run your intake process end to end — collecting information, setting up accounts, sending welcome sequences and keeping every step on schedule — so your team can focus on delivering the work.",
  ],
  capabilitiesTitle: "Client Onboarding Support",
  capabilities: [
    { icon: UserPlus, title: "Client intake forms & discovery questionnaires" },
    { icon: FileCheck, title: "Document collection, contracts & e-signature follow-up" },
    { icon: Settings, title: "Account, portal & CRM record setup" },
    { icon: MailCheck, title: "Welcome emails, kickoff scheduling & reminders" },
  ],
  featureBlocks: [
    { icon: ClipboardList, title: "Structured Intake & Document Collection", description: "Your assistant sends intake forms, tracks what has been received, and follows up politely until every contract, payment detail and required document is in place." },
    { icon: Workflow, title: "Account Setup & System Handoffs", description: "We create client records in your CRM, set up project boards and shared folders, grant tool access, and hand the client over to your delivery team with a complete brief." },
    { icon: Clock, title: "Onboarding SLAs You Can Rely On", description: "Every new client moves through a documented checklist with clear timelines, so onboarding is consistent no matter how many clients you sign in a month." },
  ],
  benefits: [
    "Faster time from signed contract to kickoff",
    "Fewer missing documents and back-and-forth emails",
    "A professional, consistent first impression for every client",
    "Your team freed from repetitive admin during busy periods",
  ],
  processSteps: [
    { step: "01", title: "Map Your Process", description: "We document your current onboarding steps, tools and required information." },
    { step: "02", title: "Build the Checklist", description: "We turn it into templates, email sequences and a repeatable checklist." },
    { step: "03", title: "Run & Report", description: "Your assistant onboards each client and reports status until handoff." },
  ],
  ctaTitle: "Streamline Your Client Onboarding",
  ctaDescription: "Give every new client a smooth start without adding to your workload.",
  faqs: [
    { q: "What does a client onboarding virtual assistant do?", a: "They manage the steps between a signed deal and project kickoff: sending intake forms, collecting documents and signatures, setting up accounts and records, and scheduling kickoff calls." },
    { q: "Can the assistant work inside our existing tools?", a: "Yes. Our assistants work in common CRMs, project management tools, e-signature platforms and shared drives, following your existing process." },
    { q: "How quickly can onboarding support start?", a: "Most teams are up and running within one to two weeks, once we have documented your onboarding checklist and set up tool access." },
  ],
}

export default function ClientOnboardingServicesPage() {
  return <ServiceDetailPage content={content} />
}
