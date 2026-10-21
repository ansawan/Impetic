'use client'

import { Activity, Cloud, Gauge, GitBranch, Lock, Server } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "MLOPS & MODEL DEPLOYMENT",
  titleLead: "MLOps & Model",
  titleAccent: "Deployment",
  tagline: "Production Infrastructure for AI Models and Inference Endpoints.",
  intro: [
    "Many AI projects work in a notebook but never make it to production — or reach production and then slowly degrade without anyone noticing. Getting models live, reliable and affordable is an engineering discipline of its own.",
    "Impetic builds the infrastructure to deploy, version, monitor and scale machine learning and LLM systems, with automated pipelines so improvements reach users safely and quickly.",
  ],
  capabilitiesTitle: "MLOps Capabilities",
  capabilities: [
    { icon: Server, title: "Model serving & inference APIs" },
    { icon: GitBranch, title: "Versioning & CI/CD for models" },
    { icon: Activity, title: "Monitoring, drift & quality alerts" },
    { icon: Gauge, title: "Latency & cost optimization" },
    { icon: Cloud, title: "Cloud & GPU infrastructure" },
    { icon: Lock, title: "Security & access control" },
  ],
  featureBlocks: [
    { icon: Server, title: "Reliable, Scalable Serving", description: "We deploy models behind fast, secure APIs that scale with demand, using the right mix of managed services, containers and GPUs for your workload." },
    { icon: GitBranch, title: "Automated Pipelines", description: "Training, testing and deployment are automated with version control, so every model change is reproducible, reviewed and easy to roll back." },
    { icon: Activity, title: "Monitoring That Catches Problems Early", description: "We track latency, errors, costs, data drift and output quality, with alerts so performance issues are fixed before users notice." },
  ],
  examples: [
    { title: "From notebook to production API", description: "A data science team’s prototype model is packaged, tested and deployed as a reliable API used by the main product." },
    { title: "LLM cost control", description: "A company reduces AI running costs through caching, batching and routing simpler requests to smaller models." },
    { title: "Drift monitoring", description: "A forecasting model is monitored for changing data patterns and retrained automatically when accuracy drops." },
    { title: "Multi-model platform", description: "Several models are managed in one platform with shared deployment, monitoring and access control." },
  ],
  benefits: [
    "Models that reach production faster",
    "Reliable performance under real traffic",
    "Lower and predictable infrastructure costs",
    "Early warning when quality drops",
  ],
  processSteps: [
    { step: "01", title: "Assessment", description: "Review models, infrastructure and requirements." },
    { step: "02", title: "Architecture", description: "Design serving, pipelines and monitoring." },
    { step: "03", title: "Implementation", description: "Build CI/CD, deployment and observability." },
    { step: "04", title: "Operate & Optimize", description: "Monitor, scale and reduce costs over time." },
  ],
  ctaTitle: "Take Your Models to Production",
  ctaDescription: "Get a review of your ML deployment and infrastructure.",
  faqs: [
    { q: "What is MLOps?", a: "MLOps is the set of practices and tools for deploying, monitoring and maintaining machine learning models in production reliably, similar to DevOps for software." },
    { q: "Which cloud platforms do you work with?", a: "We work with major cloud providers and can also deploy on your own infrastructure depending on your requirements." },
    { q: "Can you reduce our AI inference costs?", a: "Often, yes. Techniques include right-sizing infrastructure, caching, batching, quantization and routing requests to the most cost-effective model." },
    { q: "What is model drift?", a: "Drift happens when real-world data changes so the model’s predictions become less accurate. Monitoring detects it so the model can be retrained." },
    { q: "Do you support LLM applications as well as traditional ML?", a: "Yes. We deploy and monitor both classic machine learning models and LLM-based applications." },
  ],
}

export default function MLOpsModelDeploymentPage() {
  return <ServiceDetailPage content={content} />
}
