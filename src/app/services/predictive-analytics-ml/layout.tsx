import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predictive Analytics & ML Models Services | Impetic',
  description: 'Custom forecasting, churn scoring, and predictive machine learning models trained on proprietary data.',
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
