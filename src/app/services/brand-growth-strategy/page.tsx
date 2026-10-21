'use client'

import { Compass, MessageSquare, Rocket, Target, TrendingUp, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "BRAND & GROWTH STRATEGY",
  titleLead: "Brand & Growth",
  titleAccent: "Strategy",
  tagline: "Strategic Market Positioning and Multi-Channel Growth Blueprints.",
  intro: [
    "Growth stalls when a brand tries to speak to everyone, spreads budget across too many channels, or cannot explain why it is different. Tactics only work when they sit on top of a clear strategy.",
    "Impetic helps you define who you serve, what makes you the obvious choice, and which channels will reach those customers most efficiently — then turns that into a practical plan your team can execute.",
  ],
  capabilitiesTitle: "Strategy Capabilities",
  capabilities: [
    { icon: Compass, title: "Market & competitor research" },
    { icon: Users, title: "Ideal customer profiles & personas" },
    { icon: Target, title: "Positioning & value proposition" },
    { icon: MessageSquare, title: "Messaging frameworks & brand voice" },
    { icon: Rocket, title: "Go-to-market planning" },
    { icon: TrendingUp, title: "Channel mix & growth roadmaps" },
  ],
  featureBlocks: [
    { icon: Compass, title: "Know Your Market and Your Customer", description: "We research competitors, customer needs and buying behaviour to identify the segments where you can win, and document them as clear customer profiles." },
    { icon: Target, title: "Positioning That Sets You Apart", description: "We define what you stand for, who you are for and why customers should choose you — and turn it into messaging your website, sales team and campaigns can use consistently." },
    { icon: TrendingUp, title: "A Growth Plan, Not Just a Deck", description: "Strategy ends in action: prioritized channels, budgets, campaigns and KPIs for the next 90 days and beyond, with a review rhythm to adjust as results come in." },
  ],
  examples: [
    { title: "Launching a new service line", description: "An agency adding a new service defines the target buyer, pricing position and launch channels before spending on ads." },
    { title: "Repositioning a crowded offer", description: "A business competing on price shifts its messaging to a clear niche and specialist expertise, making its marketing easier to differentiate." },
    { title: "Entering a new market", description: "A company expanding to a new region gets a competitor map, localized messaging and a phased channel plan." },
    { title: "Aligning sales and marketing", description: "Sales and marketing teams adopt one messaging framework so ads, website and sales calls tell the same story." },
  ],
  benefits: [
    "Clear positioning that makes marketing easier",
    "Budget focused on the channels that fit",
    "Consistent messaging across every touchpoint",
    "A roadmap with measurable goals",
  ],
  processSteps: [
    { step: "01", title: "Discovery", description: "Workshops, data review and stakeholder interviews." },
    { step: "02", title: "Research", description: "Market, competitor and customer analysis." },
    { step: "03", title: "Strategy", description: "Positioning, messaging and channel plan." },
    { step: "04", title: "Activation", description: "A 90-day roadmap with KPIs and review points." },
  ],
  ctaTitle: "Build a Strategy That Drives Growth",
  ctaDescription: "Start with a strategy session for your brand.",
  faqs: [
    { q: "What is a brand and growth strategy?", a: "It defines your target customers, your positioning against competitors, your core messages and the channels and goals that will grow the business — the foundation every campaign is built on." },
    { q: "How long does a strategy project take?", a: "Most strategy projects take three to six weeks, depending on the amount of research and the number of markets or offers involved." },
    { q: "Do you also execute the plan?", a: "Yes. Our SEO, paid media, content and web teams can execute the plan, or we can hand it to your internal team." },
    { q: "Is this only for new businesses?", a: "No. Established businesses use strategy work to reposition, launch new offers, enter new markets or fix stalled growth." },
    { q: "What do we receive at the end?", a: "A strategy document covering customers, positioning, messaging, channels and KPIs, plus a prioritized action roadmap." },
  ],
}

export default function BrandGrowthStrategyPage() {
  return <ServiceDetailPage content={content} />
}
