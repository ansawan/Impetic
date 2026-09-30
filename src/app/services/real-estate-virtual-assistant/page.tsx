'use client'

import { Building, CalendarCheck, ClipboardList, FileText, Megaphone, PhoneCall, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "REAL ESTATE VIRTUAL ASSISTANT",
  titleLead: "Real Estate",
  titleAccent: "Virtual Assistant",
  tagline: "Spend Your Time Closing Deals, Not Chasing Paperwork.",
  intro: [
    "Real estate agents juggle listings, showings, paperwork, follow-ups and marketing — often all in the same afternoon. The admin work piles up and leads go cold.",
    "Impetic real estate virtual assistants take over the back-office tasks that keep deals moving, from MLS updates and transaction coordination to lead follow-up and listing marketing.",
  ],
  capabilitiesTitle: "Real Estate Support",
  capabilities: [
    { icon: Building, title: "MLS listing entry, updates & photo management" },
    { icon: FileText, title: "Transaction coordination & deadline tracking" },
    { icon: PhoneCall, title: "Lead follow-up & CRM updates" },
    { icon: Megaphone, title: "Listing marketing, flyers & social posts" },
  ],
  featureBlocks: [
    { icon: ClipboardList, title: "Transaction Coordination", description: "We track contract dates, contingencies and closing deadlines, collect signatures and documents, and keep buyers, sellers, lenders and title companies informed." },
    { icon: Users, title: "Lead & Client Follow-Up", description: "Your assistant responds to new inquiries, logs every contact in your CRM, runs nurture follow-ups and books appointments so no lead slips through the cracks." },
    { icon: CalendarCheck, title: "Showing & Calendar Management", description: "We schedule showings and open houses, confirm appointments with clients, and keep your calendar organized around your day in the field." },
  ],
  benefits: [
    "More time for showings, negotiations and closings",
    "Faster response to new buyer and seller leads",
    "Fewer missed deadlines during transactions",
    "Consistent listing marketing without extra effort",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "We learn your market, tools, CRM and how you run transactions." },
    { step: "02", title: "Onboarding", description: "Your assistant is trained on your templates, workflows and checklists." },
    { step: "03", title: "Ongoing Support", description: "Daily task handling with regular updates and reporting." },
  ],
  ctaTitle: "Get a Real Estate Virtual Assistant",
  ctaDescription: "Hand off the admin and focus on growing your business.",
  faqs: [
    { q: "What tasks can a real estate virtual assistant handle?", a: "Common tasks include MLS listing management, transaction coordination, CRM updates, lead follow-up, showing scheduling, email management and creating listing marketing materials." },
    { q: "Do your assistants work with real estate CRMs?", a: "Yes. Our assistants work with widely used real estate CRMs and transaction management platforms, and follow your existing processes." },
    { q: "Is this suitable for teams and brokerages?", a: "Yes. We support individual agents as well as teams and brokerages that need shared admin and transaction support." },
  ],
}

export default function RealEstateVirtualAssistantPage() {
  return <ServiceDetailPage content={content} />
}
