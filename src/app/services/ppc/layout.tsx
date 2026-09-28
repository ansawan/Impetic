import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay-Per-Click Advertising Services | Top PPC Agency — Impetic',
  description:
    "Impetic is a pay-per-click advertising company that treats your budget like it's ours. Local or national, we build PPC campaigns that actually convert.",
  openGraph: {
    title: 'Pay-Per-Click Advertising Services | Top PPC Agency — Impetic',
    description:
      "Impetic is a pay-per-click advertising company that treats your budget like it's ours. Local or national, we build PPC campaigns that actually convert.",
    type: 'website',
  },
}

export default function PPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
