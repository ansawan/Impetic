'use client'

import { Building, ClipboardList, FileText, MessageSquare, Users, Wallet, Wrench } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "PROPERTY MANAGEMENT VIRTUAL ASSISTANT",
  titleLead: "Property Management",
  titleAccent: "Virtual Assistant",
  tagline: "Responsive Tenant Care and Organized Operations, Without the Overhead.",
  intro: [
    "Property managers balance tenants, owners, vendors and paperwork across every unit in the portfolio. As the portfolio grows, the admin grows faster.",
    "Impetic property management virtual assistants handle the day-to-day work — tenant communication, maintenance requests, lease paperwork and rent follow-up — so you can manage more doors without burning out.",
  ],
  capabilitiesTitle: "Property Management Support",
  capabilities: [
    { icon: Users, title: "Tenant screening & application processing" },
    { icon: Wrench, title: "Maintenance request intake & vendor coordination" },
    { icon: FileText, title: "Lease administration & renewals" },
    { icon: Wallet, title: "Rent collection reminders & ledger updates" },
  ],
  featureBlocks: [
    { icon: MessageSquare, title: "Tenant Communication", description: "We answer tenant questions, log requests, send notices and keep a clear record of every conversation in your property management software." },
    { icon: Building, title: "Maintenance Coordination", description: "Your assistant takes in maintenance requests, dispatches approved vendors, schedules access with tenants, and follows each ticket through to completion." },
    { icon: ClipboardList, title: "Leasing & Owner Reporting", description: "We process applications, prepare lease documents and renewals, track move-ins and move-outs, and help compile regular owner reports." },
  ],
  benefits: [
    "Faster responses to tenants and fewer complaints",
    "Maintenance tickets tracked from request to resolution",
    "Lease and renewal deadlines never missed",
    "Capacity to manage more units with the same team",
  ],
  processSteps: [
    { step: "01", title: "Portfolio Review", description: "We learn your properties, software, vendors and policies." },
    { step: "02", title: "Workflow Setup", description: "We build templates, notice schedules and escalation rules." },
    { step: "03", title: "Ongoing Management", description: "Your assistant handles daily tasks and reports on open items." },
  ],
  ctaTitle: "Get a Property Management Virtual Assistant",
  ctaDescription: "Scale your portfolio without scaling your admin workload.",
  faqs: [
    { q: "What does a property management virtual assistant do?", a: "They handle tenant communication, maintenance request intake and vendor coordination, application processing, lease renewals, rent reminders and reporting support." },
    { q: "Do your assistants work with property management software?", a: "Yes. Our assistants work inside widely used property management platforms and follow your existing policies." },
    { q: "Can you support both residential and commercial portfolios?", a: "Yes. We tailor the workflows to your property types, portfolio size and owner reporting needs." },
  ],
}

export default function PropertyManagementVirtualAssistantPage() {
  return <ServiceDetailPage content={content} />
}
