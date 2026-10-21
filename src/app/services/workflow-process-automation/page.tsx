'use client'

import { Activity, Brain, FileText, Plug, Workflow, Zap } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "WORKFLOW & PROCESS AUTOMATION",
  titleLead: "Workflow & Process",
  titleAccent: "Automation",
  tagline: "Eliminate Operational Bottlenecks with Automated Data Pipelines.",
  intro: [
    "Copying data between tools, chasing approvals and sending the same updates every day wastes hours and creates errors. Most of this work follows clear rules — which means it can be automated.",
    "Impetic designs and builds reliable automations that connect your apps, move data, trigger actions and add AI where judgement is needed, with monitoring and error handling so they keep running.",
  ],
  capabilitiesTitle: "Automation Capabilities",
  capabilities: [
    { icon: Workflow, title: "Process mapping & automation design" },
    { icon: Plug, title: "App integrations & data sync" },
    { icon: Zap, title: "Trigger-based workflows & notifications" },
    { icon: Brain, title: "AI steps for classification & extraction" },
    { icon: FileText, title: "Document & form processing" },
    { icon: Activity, title: "Monitoring, alerts & error handling" },
  ],
  featureBlocks: [
    { icon: Workflow, title: "Map the Process Before Automating It", description: "We document how work flows today, remove unnecessary steps, and design an automation that fits how your team actually works." },
    { icon: Plug, title: "Connect the Tools You Already Use", description: "We connect CRMs, forms, spreadsheets, accounting, email and internal systems using automation platforms or custom code, depending on what is most reliable for you." },
    { icon: Activity, title: "Automations That Do Not Break Silently", description: "Every workflow includes logging, retries and alerts, so when something changes in a connected tool, your team knows immediately instead of discovering missing data weeks later." },
  ],
  examples: [
    { title: "Lead routing", description: "New website leads are enriched, scored and assigned to the right salesperson with an instant notification." },
    { title: "Invoice processing", description: "Invoices received by email are read, matched to orders and entered into accounting, with exceptions sent for review." },
    { title: "Client onboarding", description: "A signed contract automatically creates the client record, project workspace, folders and welcome email." },
    { title: "Reporting automation", description: "Weekly reports are compiled from several tools and delivered to managers without manual copying." },
  ],
  benefits: [
    "Hours saved every week",
    "Fewer manual data-entry errors",
    "Faster response times for customers",
    "Processes that scale without extra headcount",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "Identify repetitive processes and their cost." },
    { step: "02", title: "Design", description: "Map the automated workflow and exceptions." },
    { step: "03", title: "Build & Test", description: "Implement integrations and test with real data." },
    { step: "04", title: "Monitor & Improve", description: "Run with alerts and refine over time." },
  ],
  ctaTitle: "Automate Your Repetitive Work",
  ctaDescription: "Show us one process and we will show you how to automate it.",
  faqs: [
    { q: "What kinds of processes can be automated?", a: "Any process with clear rules and digital inputs: data entry, lead routing, approvals, notifications, reporting, document handling and syncing data between tools." },
    { q: "Do you use no-code tools or custom code?", a: "Both. We use automation platforms where they are reliable and cost-effective, and custom code for complex, high-volume or sensitive workflows." },
    { q: "Where does AI fit into automation?", a: "AI handles steps that need judgement, such as reading documents, categorizing requests or drafting replies, while rule-based steps handle the rest." },
    { q: "What happens if an automation fails?", a: "We build in retries, logging and alerts so failures are visible and can be fixed quickly, and important steps can fall back to a person." },
    { q: "How quickly can we see time savings?", a: "A single well-chosen workflow can often be live within a few weeks and start saving time immediately." },
  ],
}

export default function WorkflowProcessAutomationPage() {
  return <ServiceDetailPage content={content} />
}
