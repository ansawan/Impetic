import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Model Fine-Tuning & Evaluation Services | Impetic',
  description: 'Custom LLM fine-tuning, LoRA training, and evaluation benchmark suites for production models.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
