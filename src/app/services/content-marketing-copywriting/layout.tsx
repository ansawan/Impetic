import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Content Writing Services & Agency | Impetic',
  description:
    'Impetic is an SEO content writing company that writes for people first, search engines second — and still ranks. Content built to convert, not just fill a word count.',
  openGraph: {
    title: 'SEO Content Writing Services & Agency | Impetic',
    description:
      'Impetic is an SEO content writing company that writes for people first, search engines second — and still ranks. Content built to convert, not just fill a word count.',
    type: 'website',
  },
}

export default function ContentMarketingCopywritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
