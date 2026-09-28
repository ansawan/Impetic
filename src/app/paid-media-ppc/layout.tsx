import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paid Media & PPC Advertising Services | Impetic',
  description: 'High-ROI Google Ads, Meta Ads, and LinkedIn PPC management engineered to maximize return on ad spend and reduce acquisition cost.',
  openGraph: {
    title: 'Paid Media & PPC Advertising Services | Impetic',
    description: 'High-ROI Google Ads, Meta Ads, and LinkedIn PPC management engineered to maximize return on ad spend and reduce acquisition cost.',
    type: 'website',
  },
}

export default function PaidMediaPPCRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
