'use client'

import { Eye, FlaskConical, Gauge, LayoutTemplate, MousePointerClick, Search } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "CONVERSION RATE OPTIMIZATION",
  titleLead: "Conversion Rate",
  titleAccent: "Optimization (CRO)",
  tagline: "Turn More Existing Visitors into Paying Customers.",
  intro: [
    "Most businesses try to grow by buying more traffic. But if your landing pages, forms and checkout leak visitors, every extra click costs more than it should. Conversion rate optimization fixes the leaks first, so the traffic you already pay for produces more leads and sales.",
    "Impetic combines analytics, user research and controlled A/B testing to find out why visitors leave — and then designs, builds and measures the changes that make them stay. Every test has a hypothesis, a success metric and a clear decision at the end.",
  ],
  capabilitiesTitle: "CRO Capabilities",
  capabilities: [
    { icon: Search, title: "Conversion audits & funnel drop-off analysis" },
    { icon: Eye, title: "Heatmaps, session recordings & user research" },
    { icon: FlaskConical, title: "A/B and multivariate testing" },
    { icon: LayoutTemplate, title: "Landing page design & rebuilds" },
    { icon: MousePointerClick, title: "Form, checkout & CTA optimization" },
    { icon: Gauge, title: "Page speed & Core Web Vitals fixes" },
  ],
  featureBlocks: [
    { icon: Search, title: "Find Where the Funnel Leaks", description: "We map every step from first visit to conversion, measure drop-off at each stage, and combine the numbers with heatmaps and session recordings to see exactly where — and why — visitors give up." },
    { icon: FlaskConical, title: "Test Changes Before You Commit", description: "Instead of redesigning on opinion, we run statistically sound A/B tests on headlines, layouts, offers and forms. Winning variants are rolled out; losing ones teach us something without hurting revenue." },
    { icon: Gauge, title: "Speed and UX as Conversion Levers", description: "Slow pages and confusing layouts quietly kill conversions. We fix load times, mobile usability and accessibility issues that stop people from completing a purchase or enquiry." },
  ],
  examples: [
    { title: "Lead-gen landing page", description: "A services business running paid ads gets more enquiries from the same ad spend by simplifying a long form, adding trust signals near the call to action and testing two headline angles." },
    { title: "Ecommerce checkout", description: "An online store reduces cart abandonment by removing forced account creation, showing delivery costs earlier and fixing a slow mobile payment step." },
    { title: "SaaS free-trial signup", description: "A software company improves trial-to-paid conversion by testing pricing page layouts and adding a short onboarding checklist after signup." },
    { title: "Local service booking", description: "A home service company turns more website visits into booked jobs by adding click-to-call, instant quote forms and clearer service-area information." },
  ],
  benefits: [
    "More leads and sales from the traffic you already have",
    "Lower cost per acquisition on paid campaigns",
    "Decisions backed by test data, not opinions",
    "A faster, easier experience for every visitor",
  ],
  processSteps: [
    { step: "01", title: "Audit & Research", description: "Analytics review, heatmaps, recordings and a prioritized list of conversion issues." },
    { step: "02", title: "Hypothesis & Design", description: "Clear test hypotheses with designs and copy for each variant." },
    { step: "03", title: "Test & Measure", description: "A/B tests run to statistical confidence with clean tracking." },
    { step: "04", title: "Roll Out & Repeat", description: "Winners are shipped and the next round of tests begins." },
  ],
  ctaTitle: "Get More From Your Existing Traffic",
  ctaDescription: "Book a conversion audit and see where your funnel is leaking.",
  faqs: [
    { q: "What is conversion rate optimization?", a: "CRO is the process of increasing the percentage of visitors who take a desired action — such as buying, booking or filling in a form — by improving pages and user journeys based on data and testing." },
    { q: "How much traffic do I need for A/B testing?", a: "Reliable A/B tests need enough conversions to reach statistical confidence. For lower-traffic sites we focus on research-led improvements and larger, bolder changes rather than small split tests." },
    { q: "How long until we see results?", a: "Quick fixes such as speed and form issues can show results within weeks. A structured testing program usually delivers meaningful gains over two to three months." },
    { q: "Will CRO affect my SEO?", a: "Done properly, CRO supports SEO. Faster pages, clearer content and better user engagement are positive signals, and we run tests in a way that search engines handle correctly." },
    { q: "Do you build the changes or just recommend them?", a: "Both. We deliver the research and test plan, and our design and development team builds the variants and rolls out the winners." },
  ],
}

export default function ConversionRateOptimizationPage() {
  return <ServiceDetailPage content={content} />
}
