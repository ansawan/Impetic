'use client'

import { BarChart3, CalendarCheck, FolderOpen, Rocket, Sliders, Target, Workflow } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "MARKETING OPERATIONS SERVICES",
  titleLead: "Marketing",
  titleAccent: "Operations",
  tagline: "The Operational Backbone That Gets Your Campaigns Out the Door.",
  intro: [
    "Great marketing strategy fails when execution stalls — campaigns launch late, assets get lost, tracking breaks and reports are pieced together at the last minute.",
    "Impetic marketing operations assistants handle the execution layer of your marketing: building and scheduling campaigns, organizing assets, setting up tracking, and keeping your automation and reporting running smoothly.",
  ],
  capabilitiesTitle: "Marketing Operations Support",
  capabilities: [
    { icon: Rocket, title: "Campaign build, QA & deployment" },
    { icon: FolderOpen, title: "Asset library organization & version control" },
    { icon: Target, title: "UTM, pixel & conversion tracking setup" },
    { icon: BarChart3, title: "Weekly performance reporting & dashboards" },
  ],
  featureBlocks: [
    { icon: CalendarCheck, title: "Campaign Execution", description: "We build emails, landing pages and social posts from your briefs, QA every link and audience, and schedule them against your marketing calendar." },
    { icon: Workflow, title: "Automation & CRM Hygiene", description: "Your assistant maintains lists, segments and automation workflows in your marketing platform, and keeps CRM data clean so campaigns reach the right people." },
    { icon: Sliders, title: "Tracking & Reporting", description: "We set up UTMs and conversion tracking, pull campaign results from each channel, and deliver clear reports your team can act on." },
  ],
  benefits: [
    "Campaigns launched on time, every time",
    "Reliable tracking and cleaner data",
    "Hours of manual reporting taken off your team",
    "Strategists free to focus on strategy and creative",
  ],
  processSteps: [
    { step: "01", title: "Audit", description: "We review your marketing stack, calendar and current workflows." },
    { step: "02", title: "Systemize", description: "We create checklists, naming conventions and reporting templates." },
    { step: "03", title: "Execute", description: "Your assistant runs day-to-day marketing operations with regular updates." },
  ],
  ctaTitle: "Scale Your Marketing Operations",
  ctaDescription: "Launch more campaigns with less operational drag.",
  faqs: [
    { q: "What is marketing operations support?", a: "It covers the execution and systems side of marketing: campaign setup and deployment, asset management, tracking, automation maintenance and reporting." },
    { q: "Which marketing tools do your assistants use?", a: "Our assistants work across common email marketing, marketing automation, CRM, social scheduling and analytics platforms." },
    { q: "Do you replace our marketing strategist?", a: "No. We support your marketing team by handling execution and operations, so strategists and creatives can spend more time on high-value work." },
  ],
}

export default function MarketingOperationsServicesPage() {
  return <ServiceDetailPage content={content} />
}
