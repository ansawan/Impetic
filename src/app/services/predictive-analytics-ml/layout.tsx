import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/predictive-analytics-ml/' },
  title: "Predictive Analytics & Machine Learning Services | Impetic",
  description:
    "Predictive analytics and ML models for forecasting, scoring and classification, trained on your own data. Turn data into decisions. Get a quote.",
  openGraph: {
    title: "Predictive Analytics & Machine Learning Services | Impetic",
    description:
      "Predictive analytics and ML models for forecasting, scoring and classification, trained on your own data. Turn data into decisions. Get a quote.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
