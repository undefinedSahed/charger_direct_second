import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import AboutSection from "@/components/about-section"
import { StepsSection } from "@/components/steps-section"
import CoverageMapUK from "@/components/map-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <AboutSection />
      <CoverageMapUK />
    </main>
  )
}
