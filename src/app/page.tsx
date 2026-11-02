import type { Metadata } from 'next'
import { withPageSeo } from '@/lib/pageMetadata'
import { HeroOverlay } from '@/components/overlays/HeroOverlay'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { AboutTeaserOverlay } from '@/components/overlays/AboutTeaserOverlay'
import { CategoryServicesCarousel } from '@/components/sections/CategoryServicesCarousel'
import { ServicesCarousel } from '@/components/sections/ServicesCarousel'
import { ServicesOverlay } from '@/components/overlays/ServicesOverlay'
import { ProcessOverlay } from '@/components/overlays/ProcessOverlay'
import { ShowcaseOverlay } from '@/components/overlays/ShowcaseOverlay'
import { TestimonialsOverlay } from '@/components/overlays/TestimonialsOverlay'
import { StatsOverlay } from '@/components/overlays/StatsOverlay'
import { CTAOverlay } from '@/components/overlays/CTAOverlay'

const fallbackMetadata: Metadata = {
  alternates: { canonical: '/' },
  title: "Digital Marketing, AI & Web Development | Impetic",
  description: "Impetic is a digital marketing company delivering SEO, PPC, AI automation, virtual assistants and web development to grow your business. Get a free audit.",
  openGraph: {
    title: "Digital Marketing, AI & Web Development | Impetic",
    description: "Impetic is a digital marketing company delivering SEO, PPC, AI automation, virtual assistants and web development to grow your business. Get a free audit.",
    type: 'website',
  },
}

// Values saved in Admin → SEO override these at build time.
export async function generateMetadata(): Promise<Metadata> {
  return withPageSeo('/', fallbackMetadata)
}

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center">
      <HeroOverlay />
      <LogoMarquee />
      <CategoryServicesCarousel />
      <AboutTeaserOverlay />
      <div className="w-full">
        <ServicesCarousel />
      </div>
      <ServicesOverlay />
      <ProcessOverlay />
      <ShowcaseOverlay />
      <TestimonialsOverlay />
      <StatsOverlay />
      <CTAOverlay />
    </main>
  )
}
