'use client'

import { Boxes, Cloud, CreditCard, LayoutDashboard, Lock, Rocket } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "SAAS APPLICATION DEVELOPMENT",
  titleLead: "SaaS Application",
  titleAccent: "Development",
  tagline: "Multi-Tenant SaaS Architecture Built for Scale and Recurring Revenue.",
  intro: [
    "Building a SaaS product means more than building features. You need secure multi-tenant data, subscriptions and billing, onboarding, admin tools and an architecture that keeps working as customers grow from ten to ten thousand.",
    "Impetic takes SaaS products from idea to launch and beyond — designing the architecture, building the product and putting the operational foundations in place for recurring revenue.",
  ],
  capabilitiesTitle: "SaaS Capabilities",
  capabilities: [
    { icon: Boxes, title: "Multi-tenant architecture" },
    { icon: CreditCard, title: "Subscriptions & billing integration" },
    { icon: Lock, title: "Authentication, SSO & roles" },
    { icon: Rocket, title: "MVP design & rapid launch" },
    { icon: LayoutDashboard, title: "Admin panels & analytics" },
    { icon: Cloud, title: "Scalable cloud infrastructure" },
  ],
  featureBlocks: [
    { icon: Boxes, title: "Architecture That Scales With Customers", description: "We design tenant isolation, data models and infrastructure so each customer’s data stays secure and the platform performs well as usage grows." },
    { icon: CreditCard, title: "Billing and Subscriptions Built In", description: "Plans, trials, upgrades, invoices and usage-based billing are integrated with leading payment providers, so revenue flows from day one." },
    { icon: Rocket, title: "Launch Fast, Then Iterate", description: "We help you define a focused MVP, launch it quickly to real users, and use feedback and analytics to prioritize what to build next." },
  ],
  examples: [
    { title: "Industry-specific SaaS", description: "A founder with deep industry knowledge launches a scheduling and management platform for businesses in that niche." },
    { title: "Turning a service into software", description: "An agency productizes its internal tools into a subscription product for other businesses." },
    { title: "B2B platform with team accounts", description: "A product supports organizations with multiple users, roles, permissions and single sign-on." },
    { title: "Scaling an existing MVP", description: "An early-stage SaaS rebuilds parts of its prototype to handle more customers and add billing and admin tools." },
  ],
  benefits: [
    "A secure, scalable product foundation",
    "Recurring revenue infrastructure from launch",
    "Faster time to market with a focused MVP",
    "A technical partner beyond version one",
  ],
  processSteps: [
    { step: "01", title: "Product Discovery", description: "Define users, core features and business model." },
    { step: "02", title: "Architecture & Design", description: "Plan tenancy, data, billing and UI." },
    { step: "03", title: "MVP Build", description: "Develop, test and launch the first version." },
    { step: "04", title: "Scale & Grow", description: "Iterate on feedback and scale infrastructure." },
  ],
  ctaTitle: "Launch Your SaaS Product",
  ctaDescription: "Share your product idea and we will map the path to launch.",
  faqs: [
    { q: "What is multi-tenant architecture?", a: "It is a design where one application serves many customer organizations while keeping each one’s data separate and secure." },
    { q: "How long does it take to build a SaaS MVP?", a: "A focused MVP commonly takes a few months, depending on features, integrations and design requirements." },
    { q: "Which payment providers do you integrate?", a: "We integrate with leading subscription billing providers, including Stripe, and can work with others based on your markets." },
    { q: "Can you take over an existing SaaS codebase?", a: "Yes. We review the code and infrastructure, fix critical issues and continue development." },
    { q: "Do you help with hosting and DevOps?", a: "Yes. We set up cloud hosting, CI/CD, monitoring and backups as part of the build." },
  ],
}

export default function SaaSApplicationDevelopmentPage() {
  return <ServiceDetailPage content={content} />
}
