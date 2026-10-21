'use client'

import { Code2, Database, Gauge, LayoutDashboard, Lock, Plug } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "CUSTOM WEB APPLICATIONS",
  titleLead: "Custom Web",
  titleAccent: "Applications",
  tagline: "High-Performance React/Next.js Platforms Built for Scale.",
  intro: [
    "Off-the-shelf software rarely fits the way your business actually works. Teams end up juggling spreadsheets, workarounds and disconnected tools to fill the gaps.",
    "Impetic designs and builds custom web applications — portals, dashboards, internal tools and customer-facing platforms — with modern React and Next.js, built to be fast, secure and easy to extend as you grow.",
  ],
  capabilitiesTitle: "Web Application Capabilities",
  capabilities: [
    { icon: Code2, title: "React & Next.js development" },
    { icon: LayoutDashboard, title: "Dashboards, portals & internal tools" },
    { icon: Database, title: "Databases & backend APIs" },
    { icon: Lock, title: "Authentication, roles & permissions" },
    { icon: Plug, title: "Third-party & payment integrations" },
    { icon: Gauge, title: "Performance, testing & accessibility" },
  ],
  featureBlocks: [
    { icon: LayoutDashboard, title: "Built Around Your Workflow", description: "We start with how your users work, then design screens and flows that remove manual steps — so the application saves time from day one." },
    { icon: Code2, title: "Modern, Maintainable Code", description: "We use proven frameworks, typed code, automated tests and clear documentation, so the application is reliable today and easy for any team to extend tomorrow." },
    { icon: Gauge, title: "Fast and Secure by Default", description: "Performance budgets, secure authentication, role-based access and regular dependency updates are part of every build, not an afterthought." },
  ],
  examples: [
    { title: "Customer portal", description: "Clients log in to view orders, invoices, documents and project status instead of emailing for updates." },
    { title: "Internal operations dashboard", description: "A team replaces several spreadsheets with one application for tracking jobs, inventory or approvals." },
    { title: "Booking and scheduling platform", description: "A service business lets customers book, reschedule and pay online, synced with staff calendars." },
    { title: "Data reporting tool", description: "Managers get live dashboards built on data from several existing systems." },
  ],
  benefits: [
    "Software that fits your process exactly",
    "Less manual work and fewer spreadsheets",
    "A scalable foundation for future features",
    "Full ownership of your code",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "Requirements, user journeys and technical planning." },
    { step: "02", title: "Design", description: "Wireframes, UI design and clickable prototypes." },
    { step: "03", title: "Development", description: "Iterative builds with regular demos." },
    { step: "04", title: "Launch & Support", description: "Deployment, training and ongoing improvements." },
  ],
  ctaTitle: "Build the Application Your Business Needs",
  ctaDescription: "Tell us about your idea or process.",
  faqs: [
    { q: "What technologies do you use for web applications?", a: "We primarily build with React and Next.js on the frontend, with Node.js or other proven backends, relational databases and cloud hosting chosen to fit the project." },
    { q: "How long does it take to build a custom web app?", a: "A focused first version often takes several weeks to a few months depending on features and integrations. We usually start with an MVP and grow from there." },
    { q: "Will we own the code?", a: "Yes. You own the code and the application we build for you." },
    { q: "Can you integrate with our existing systems?", a: "Yes. We integrate with CRMs, payment providers, accounting software and other tools through their APIs." },
    { q: "Do you provide support after launch?", a: "Yes. We offer maintenance, monitoring and ongoing development after launch." },
  ],
}

export default function CustomWebApplicationsPage() {
  return <ServiceDetailPage content={content} />
}
