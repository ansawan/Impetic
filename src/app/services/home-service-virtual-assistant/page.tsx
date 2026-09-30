'use client'

import { CalendarCheck, FileText, MessageSquare, PhoneCall, Star, Truck, Wrench } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "HOME SERVICE VIRTUAL ASSISTANT",
  titleLead: "Home Service",
  titleAccent: "Virtual Assistant",
  tagline: "Keep Your Crews Busy and Your Customers Informed.",
  intro: [
    "For plumbers, HVAC, electrical, cleaning, landscaping and other home service companies, every missed call or slow estimate follow-up is lost revenue.",
    "Impetic home service virtual assistants handle customer inquiries, scheduling, dispatch coordination and estimate follow-ups, so your technicians stay on jobs and your office stays organized.",
  ],
  capabilitiesTitle: "Home Service Support",
  capabilities: [
    { icon: PhoneCall, title: "Customer inquiries, calls & web leads" },
    { icon: CalendarCheck, title: "Job scheduling & appointment confirmations" },
    { icon: Truck, title: "Dispatch coordination with field crews" },
    { icon: FileText, title: "Estimate follow-ups & invoicing support" },
  ],
  featureBlocks: [
    { icon: MessageSquare, title: "Fast Response to Every Inquiry", description: "We respond to calls, form fills and messages quickly, qualify the job, and book it into your schedule before the customer calls a competitor." },
    { icon: Wrench, title: "Scheduling & Dispatch", description: "Your assistant manages the job calendar in your field service software, confirms appointments, and keeps technicians updated on changes." },
    { icon: Star, title: "Follow-Ups & Reviews", description: "We follow up on open estimates, send invoices and payment reminders, and request reviews from happy customers to build your reputation." },
  ],
  benefits: [
    "Fewer missed calls and lost jobs",
    "More estimates converted into booked work",
    "A tidy schedule with fewer no-shows",
    "More customer reviews and repeat business",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "We learn your services, service area, pricing rules and software." },
    { step: "02", title: "Setup", description: "We create call scripts, booking rules and follow-up templates." },
    { step: "03", title: "Daily Operations", description: "Your assistant runs inquiries, scheduling and follow-ups every day." },
  ],
  ctaTitle: "Get a Home Service Virtual Assistant",
  ctaDescription: "Book more jobs without hiring more office staff.",
  faqs: [
    { q: "What home service businesses do you support?", a: "We support trades and service companies such as HVAC, plumbing, electrical, roofing, cleaning, landscaping, pest control and similar businesses." },
    { q: "Can the assistant use our field service software?", a: "Yes. Our assistants work inside common field service and scheduling platforms and follow your booking rules." },
    { q: "Can you help with estimate follow-ups?", a: "Yes. Following up on open estimates is one of the most valuable tasks we handle, and it directly increases booked jobs." },
  ],
}

export default function HomeServiceVirtualAssistantPage() {
  return <ServiceDetailPage content={content} />
}
