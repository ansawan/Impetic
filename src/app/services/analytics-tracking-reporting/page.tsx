'use client'

import { BarChart3, GitBranch, LayoutDashboard, ListChecks, Server, ShieldCheck, Tags } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "ANALYTICS, TRACKING & REPORTING",
  titleLead: "Analytics, Tracking",
  titleAccent: "& Reporting",
  tagline: "Clean Analytics Telemetry and Multi-Touch Attribution Instrumentation.",
  intro: [
    "You cannot improve what you cannot measure — and most analytics setups measure the wrong things, double-count conversions or miss them entirely. Broken tracking leads to wasted ad spend and decisions based on guesswork.",
    "Impetic designs and implements tracking you can trust: GA4, tag management, server-side tracking, conversion APIs and dashboards that show which channels, campaigns and pages actually drive revenue.",
  ],
  capabilitiesTitle: "Analytics Capabilities",
  capabilities: [
    { icon: BarChart3, title: "GA4 setup, audits & migration" },
    { icon: Tags, title: "Google Tag Manager implementation" },
    { icon: Server, title: "Server-side tracking & conversion APIs" },
    { icon: GitBranch, title: "Multi-touch attribution modeling" },
    { icon: LayoutDashboard, title: "Looker Studio & custom dashboards" },
    { icon: ShieldCheck, title: "Consent mode & privacy-compliant tracking" },
  ],
  featureBlocks: [
    { icon: ListChecks, title: "A Measurement Plan Before Any Tags", description: "We start by defining the business questions, key events and conversions that matter, then build a tracking plan so every tag has a purpose and every report answers a real question." },
    { icon: Server, title: "Accurate Data in a Privacy-First World", description: "Ad blockers, browser restrictions and consent rules break traditional tracking. Server-side tagging and conversion APIs recover lost signal while respecting user consent." },
    { icon: LayoutDashboard, title: "Reports People Actually Use", description: "We build dashboards that show spend, leads, revenue and return by channel in one place, so marketing and leadership teams make decisions from the same numbers." },
  ],
  examples: [
    { title: "Fixing double-counted conversions", description: "A business sees ad platforms reporting more leads than its CRM. We audit the tags, remove duplicates and align conversion definitions across GA4, Google Ads and Meta." },
    { title: "Ecommerce revenue tracking", description: "An online store gets complete purchase, refund and product-level data in GA4, connected to ad platforms for value-based bidding." },
    { title: "Lead-to-revenue attribution", description: "A B2B company connects form submissions to CRM deal stages so it can see which campaigns create closed revenue, not just form fills." },
    { title: "Executive dashboard", description: "Leadership gets a single weekly dashboard combining ad spend, website conversions and sales pipeline from several tools." },
  ],
  benefits: [
    "Trustworthy numbers across every tool",
    "Better ad performance from cleaner conversion signals",
    "Clear visibility into what drives revenue",
    "Less time spent building reports by hand",
  ],
  processSteps: [
    { step: "01", title: "Audit", description: "Review current tags, events, conversions and data quality." },
    { step: "02", title: "Measurement Plan", description: "Define events, conversions and reporting needs." },
    { step: "03", title: "Implementation", description: "Build GA4, GTM, server-side and platform integrations." },
    { step: "04", title: "Dashboards & QA", description: "Validate data and deliver reporting your team can use." },
  ],
  ctaTitle: "Measure What Actually Matters",
  ctaDescription: "Get a tracking audit and a clear plan to fix your data.",
  faqs: [
    { q: "Do I really need GA4 set up professionally?", a: "A default GA4 install misses most business-specific events and conversions. A proper setup tracks leads, purchases and key interactions accurately and connects them to your ad platforms." },
    { q: "What is server-side tracking?", a: "Server-side tracking sends data from your own server rather than only from the visitor’s browser. It is more reliable against ad blockers and browser limits, and gives you more control over what is shared." },
    { q: "Can you connect analytics to our CRM?", a: "Yes. We connect website and campaign data to CRMs so you can follow a lead from first visit to closed deal." },
    { q: "Is your tracking privacy compliant?", a: "We implement consent management and Google Consent Mode, and only collect what your privacy policy allows. Final legal requirements should be confirmed with your own advisor." },
    { q: "Which dashboard tools do you use?", a: "We commonly use Looker Studio and can also build reports in other BI tools your team already uses." },
  ],
}

export default function AnalyticsTrackingReportingPage() {
  return <ServiceDetailPage content={content} />
}
