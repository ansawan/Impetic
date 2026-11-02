import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'

const fallbackMetadata: Metadata = {
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

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/services/predictive-analytics-ml/', fallbackMetadata)
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
