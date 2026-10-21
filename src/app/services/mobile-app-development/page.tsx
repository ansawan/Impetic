'use client'

import { Bell, LayoutTemplate, Lock, Rocket, Server, Smartphone } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "MOBILE APP DEVELOPMENT",
  titleLead: "Mobile App",
  titleAccent: "Development",
  tagline: "Cross-Platform iOS & Android Apps with Native-Level Performance.",
  intro: [
    "Your customers spend most of their screen time on their phones. A well-built mobile app keeps your service one tap away — but a slow or buggy one is quickly uninstalled.",
    "Impetic builds cross-platform iOS and Android apps from one codebase, with smooth performance, clean design and the backend, notifications and analytics needed to keep users engaged.",
  ],
  capabilitiesTitle: "Mobile App Capabilities",
  capabilities: [
    { icon: Smartphone, title: "iOS & Android from one codebase" },
    { icon: LayoutTemplate, title: "Mobile UI/UX design" },
    { icon: Bell, title: "Push notifications & engagement" },
    { icon: Server, title: "APIs & backend services" },
    { icon: Lock, title: "Secure login & payments" },
    { icon: Rocket, title: "App Store & Google Play publishing" },
  ],
  featureBlocks: [
    { icon: Smartphone, title: "One Codebase, Two Platforms", description: "Cross-platform frameworks let us ship to both iOS and Android with shared code, reducing cost and keeping features in sync across platforms." },
    { icon: LayoutTemplate, title: "Designed for Thumbs, Not Desktops", description: "We design mobile-first interfaces with intuitive navigation, fast load times and accessibility in mind, tested on real devices." },
    { icon: Rocket, title: "From Build to App Store", description: "We handle app store requirements, submissions and updates, plus analytics and crash reporting so you can improve the app after launch." },
  ],
  examples: [
    { title: "Customer booking app", description: "Customers book services, pay and receive reminders through a branded mobile app." },
    { title: "Companion app for a web platform", description: "An existing web product gets a mobile app that shares the same accounts and data." },
    { title: "Field team app", description: "Technicians view jobs, capture photos and update status on site, even with poor connectivity." },
    { title: "Loyalty and ordering app", description: "A retail or food business lets customers order ahead and collect rewards." },
  ],
  benefits: [
    "Reach customers on iOS and Android",
    "Lower cost through shared code",
    "Smooth, reliable user experience",
    "Ongoing updates and support",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "Goals, users, features and platform requirements." },
    { step: "02", title: "Design", description: "User flows, UI design and prototypes." },
    { step: "03", title: "Development & Testing", description: "Build, integrate and test on real devices." },
    { step: "04", title: "Launch & Iterate", description: "Store release, analytics and updates." },
  ],
  ctaTitle: "Build Your Mobile App",
  ctaDescription: "Tell us what your app needs to do.",
  faqs: [
    { q: "Do you build native or cross-platform apps?", a: "We usually build cross-platform apps for iOS and Android from a single codebase, and recommend native development when a project needs it." },
    { q: "How long does it take to build a mobile app?", a: "A first version typically takes a few months depending on features, design and integrations." },
    { q: "Can you publish the app to the stores for us?", a: "Yes. We prepare store listings, handle submissions and manage updates on the App Store and Google Play." },
    { q: "Can the app work with our existing website or system?", a: "Yes. We connect the app to your existing backend, or build the APIs it needs." },
    { q: "Do you maintain apps after launch?", a: "Yes. We provide updates for new OS versions, bug fixes and new features." },
  ],
}

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage content={content} />
}
