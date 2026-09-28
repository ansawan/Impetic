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
