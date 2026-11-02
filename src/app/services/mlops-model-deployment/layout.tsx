import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/services/mlops-model-deployment/' },
  title: "MLOps & Model Deployment Services | Impetic",
  description:
    "MLOps services for model versioning, monitoring, cost tracking and CI/CD rollouts, so your ML models run reliably in production. Get a quote.",
  openGraph: {
    title: "MLOps & Model Deployment Services | Impetic",
    description:
      "MLOps services for model versioning, monitoring, cost tracking and CI/CD rollouts, so your ML models run reliably in production. Get a quote.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/mlops-model-deployment/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
