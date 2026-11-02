import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/model-fine-tuning-evaluation/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
