import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/about/' },
  title: 'About Impetic — AI, Software & Digital Growth Studio',
  description:
    'Impetic is an engineering collective building high-performance web applications, intelligent AI systems, virtual assistant operations and data-driven digital marketing.',
  openGraph: {
    title: 'About Impetic — AI, Software & Digital Growth Studio',
    description:
      'Impetic is an engineering collective building high-performance web applications, intelligent AI systems, virtual assistant operations and data-driven digital marketing.',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
