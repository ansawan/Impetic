import type { Metadata } from 'next'

export const metadata: Metadata = {
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

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
