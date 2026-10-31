import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/model-fine-tuning-evaluation/' },
  title: "LLM Fine-Tuning & Model Evaluation Services | Impetic",
  description:
    "LLM fine-tuning and evaluation against real-world edge cases and benchmarks, for open-weight and proprietary models. Get a free consultation.",
  openGraph: {
    title: "LLM Fine-Tuning & Model Evaluation Services | Impetic",
    description:
      "LLM fine-tuning and evaluation against real-world edge cases and benchmarks, for open-weight and proprietary models. Get a free consultation.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
