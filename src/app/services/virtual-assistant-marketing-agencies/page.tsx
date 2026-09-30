'use client'

import { BarChart3, CalendarCheck, ClipboardList, Layers, MessageSquare, ShieldCheck, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "VIRTUAL ASSISTANTS FOR AGENCIES",
  titleLead: "Virtual Assistant for",
  titleAccent: "Marketing Agencies",
  tagline: "Scalable, White-Label Support for Your Client Accounts.",
  intro: [
    "Agencies grow in bursts. New clients arrive before you can hire, and your account managers end up buried in reporting, scheduling and routine execution.",
    "Impetic provides trained virtual assistants who work as an extension of your agency — supporting client accounts, running campaign tasks and producing reports under your brand.",
  ],
  capabilitiesTitle: "Agency Support",
  capabilities: [
    { icon: Layers, title: "White-label campaign execution" },
    { icon: BarChart3, title: "Client reporting & dashboard updates" },
    { icon: ClipboardList, title: "Project coordination & task management" },
    { icon: MessageSquare, title: "Client communication & meeting notes" },
  ],
  featureBlocks: [
    { icon: ShieldCheck, title: "White-Label by Default", description: "Our assistants work under your agency brand, inside your tools and communication channels. Your clients see a seamless extension of your team." },
    { icon: Users, title: "Account Management Support", description: "We prepare client reports, take meeting notes, track deliverables and follow up on approvals, so account managers can handle more clients." },
    { icon: CalendarCheck, title: "Flexible Capacity", description: "Add assistant hours as you win new accounts and scale down in quieter months, without the cost and delay of full-time hiring." },
  ],
  benefits: [
    "Take on new clients without immediate new hires",
    "Higher margins on existing retainers",
    "Consistent reporting and on-time deliverables",
    "Account managers focused on strategy and relationships",
  ],
  processSteps: [
    { step: "01", title: "Agency Onboarding", description: "We learn your services, tools, SOPs and brand standards." },
    { step: "02", title: "Assistant Matching", description: "We assign assistants trained for your channels and clients." },
    { step: "03", title: "Scale Together", description: "Support grows with your client roster, with regular performance reviews." },
  ],
  ctaTitle: "Add White-Label Support to Your Agency",
  ctaDescription: "Grow your client roster without growing your overhead.",
  faqs: [
    { q: "Is the support fully white-label?", a: "Yes. Assistants work under your agency name and inside your tools, and never market Impetic to your clients." },
    { q: "What kinds of agencies do you support?", a: "We support digital marketing, SEO, PPC, social media, web and creative agencies of different sizes." },
    { q: "Can we scale hours up and down?", a: "Yes. Assistant capacity can be adjusted as your client workload changes." },
  ],
}

export default function VirtualAssistantMarketingAgenciesPage() {
  return <ServiceDetailPage content={content} />
}
