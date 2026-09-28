import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MLOps & Model Deployment Services | Impetic',
  description: 'vLLM GPU inference server deployment, model versioning, latency telemetry, and CI/CD pipelines.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
