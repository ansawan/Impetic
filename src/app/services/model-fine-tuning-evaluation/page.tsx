'use client'

import { Cpu, Database, Gauge, ListChecks, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "MODEL FINE-TUNING & EVALUATION",
  titleLead: "Model Fine-Tuning",
  titleAccent: "& Evaluation",
  tagline: "Tailor and Rigorously Test LLMs on Domain Data.",
  intro: [
    "General-purpose AI models are good at many things but rarely perfect at your specific task, tone or format. And without proper testing, it is hard to know whether a model is good enough to put in front of customers.",
    "Impetic fine-tunes models on your domain data where it makes sense, and builds evaluation frameworks that measure quality, safety and cost — so you can choose and improve models based on evidence.",
  ],
  capabilitiesTitle: "Fine-Tuning & Evaluation Capabilities",
  capabilities: [
    { icon: Database, title: "Training data curation & labeling" },
    { icon: SlidersHorizontal, title: "Supervised fine-tuning of LLMs" },
    { icon: Cpu, title: "Open-weight & commercial model options" },
    { icon: ListChecks, title: "Custom evaluation benchmarks" },
    { icon: ShieldCheck, title: "Safety & regression testing" },
    { icon: Gauge, title: "Cost, latency & quality trade-offs" },
  ],
  featureBlocks: [
    { icon: Database, title: "Quality Data First", description: "Fine-tuning is only as good as its examples. We help collect, clean and label representative data that teaches the model exactly the behaviour you want." },
    { icon: SlidersHorizontal, title: "Fine-Tune When It Adds Value", description: "We compare prompting, RAG and fine-tuning for your task, and only fine-tune when it improves quality, consistency or cost enough to justify it." },
    { icon: ListChecks, title: "Evaluation You Can Trust", description: "We build test sets from real cases, define scoring criteria and run automated evaluations, so every model change is measured before it reaches users." },
  ],
  examples: [
    { title: "Consistent brand tone", description: "A company fine-tunes a model to write product descriptions in its exact style and format." },
    { title: "Domain classification", description: "A support team trains a model to categorize tickets accurately using its own historical labels." },
    { title: "Smaller, cheaper model", description: "A business fine-tunes a smaller model that matches a larger model’s quality on one task at a fraction of the running cost." },
    { title: "Model selection", description: "Before launch, several models are compared on the same evaluation set to choose the best balance of quality, speed and cost." },
  ],
  benefits: [
    "Better accuracy on your specific tasks",
    "More consistent output format and tone",
    "Lower running costs where possible",
    "Evidence-based model decisions",
  ],
  processSteps: [
    { step: "01", title: "Task & Baseline", description: "Define the task and measure current model performance." },
    { step: "02", title: "Data Preparation", description: "Collect and label training and test examples." },
    { step: "03", title: "Fine-Tune & Compare", description: "Train candidates and compare against baselines." },
    { step: "04", title: "Deploy & Monitor", description: "Ship the best model and keep evaluating." },
  ],
  ctaTitle: "Get a Model Built for Your Task",
  ctaDescription: "Tell us your use case and we will recommend the right approach.",
  faqs: [
    { q: "What is fine-tuning?", a: "Fine-tuning trains an existing AI model further on your own examples so it performs a specific task, follows a format or matches a tone more reliably." },
    { q: "Do we need fine-tuning or is prompting enough?", a: "Often good prompting or RAG is enough. We test simpler approaches first and recommend fine-tuning only when it clearly improves results or cost." },
    { q: "How much training data is required?", a: "It varies by task. Some tasks improve with a few hundred high-quality examples, while others need more. We assess this during the baseline phase." },
    { q: "What is model evaluation?", a: "Evaluation means testing a model against a set of representative cases with clear scoring criteria, so you can measure quality and catch regressions." },
    { q: "Can you fine-tune open-source models?", a: "Yes. We work with both open-weight models that you can host and commercial models offered by major AI providers." },
  ],
}

export default function ModelFineTuningEvaluationPage() {
  return <ServiceDetailPage content={content} />
}
