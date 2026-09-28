import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency | Impetic',
  description:
    'Impetic is a social media marketing company that builds strategy around real business results, not just post count. Small business, enterprise, local, and financial services experience.',
  openGraph: {
    title: 'Social Media Marketing Agency | Impetic',
    description:
      'Impetic is a social media marketing company that builds strategy around real business results, not just post count. Small business, enterprise, local, and financial services experience.',
    type: 'website',
  },
}

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
