'use client'

import { Activity, Bot, Brain, ListChecks, ShieldCheck, Workflow } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "CUSTOM AI AGENTS",
  titleLead: "Custom",
  titleAccent: "AI Agents",
  tagline: "Autonomous Multi-Step AI Systems That Take Real Actions.",
  intro: [
    "AI agents go beyond chat. Given a goal, an agent can plan the steps, call tools and APIs, check its own work and complete multi-step tasks — from researching leads to processing documents or updating systems.",
    "Impetic builds custom AI agents designed around your real workflows, with clear limits on what they can do, approval steps for important actions, and full logging so you always know what happened and why.",
  ],
  capabilitiesTitle: "Agent Capabilities",
  capabilities: [
    { icon: Bot, title: "Single and multi-agent systems" },
    { icon: Workflow, title: "Tool calling & API execution" },
    { icon: Brain, title: "Planning, memory & long-running tasks" },
    { icon: ShieldCheck, title: "Human-in-the-loop approvals" },
    { icon: ListChecks, title: "Evaluation & reliability testing" },
    { icon: Activity, title: "Logging, monitoring & cost control" },
  ],
  featureBlocks: [
    { icon: Bot, title: "Agents Built Around Your Workflow", description: "We break a business process into clear steps and roles, then build agents that use your tools — CRM, email, spreadsheets, internal APIs — to complete the work end to end." },
    { icon: ShieldCheck, title: "Guardrails and Human Approval", description: "Agents operate within defined permissions. Sensitive actions such as sending emails, changing records or spending money can require human approval before they run." },
    { icon: Activity, title: "Observable and Measurable", description: "Every step, tool call and decision is logged. We measure success rates, time saved and cost per task so you can trust the agent in production." },
  ],
  examples: [
    { title: "Lead research agent", description: "An agent researches new leads, enriches company data, scores fit and drafts personalized outreach for a salesperson to review." },
    { title: "Document processing agent", description: "Incoming invoices or forms are read, validated, entered into the right system and flagged when something looks wrong." },
    { title: "Operations assistant", description: "An agent monitors an inbox or queue, categorizes requests, gathers information and prepares responses or tasks for the team." },
    { title: "Reporting agent", description: "An agent pulls data from several tools each week, summarizes performance and highlights anomalies for managers." },
  ],
  benefits: [
    "Hours of repetitive work automated",
    "Consistent execution of multi-step processes",
    "Human control over important decisions",
    "Clear logs and measurable ROI",
  ],
  processSteps: [
    { step: "01", title: "Task Decomposition", description: "Map the process, decisions and tools involved." },
    { step: "02", title: "Agent Engineering", description: "Build prompts, tools, memory and guardrails." },
    { step: "03", title: "Evaluation", description: "Test on real scenarios and edge cases." },
    { step: "04", title: "Deploy & Monitor", description: "Run in production with logging and oversight." },
  ],
  ctaTitle: "Deploy Custom AI Agents",
  ctaDescription: "Tell us which process you want to automate.",
  faqs: [
    { q: "What is an AI agent?", a: "An AI agent is software that uses a language model to plan and carry out tasks: it can break down a goal, call tools or APIs, evaluate results and continue until the task is complete." },
    { q: "How is an agent different from a chatbot?", a: "A chatbot mainly answers questions. An agent takes actions across systems — such as updating records, sending messages or processing documents — to complete a task." },
    { q: "Are AI agents safe to use in business?", a: "With the right design, yes. We limit permissions, require approval for sensitive actions, test against edge cases and log everything the agent does." },
    { q: "Which tools can an agent connect to?", a: "Agents can use any system with an API, plus common tools such as CRMs, email, calendars, spreadsheets, databases and internal services." },
    { q: "How do you measure if an agent is working?", a: "We track task success rate, accuracy, time saved, escalations and cost per task, and review results regularly to improve the agent." },
  ],
}

export default function CustomAIAgentsPage() {
  return <ServiceDetailPage content={content} />
}
