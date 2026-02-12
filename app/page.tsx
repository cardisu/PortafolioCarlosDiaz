import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CultureSection } from "@/components/culture-section"
import { TikTokSection } from "@/components/tiktok-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CultureSection />
        <TikTokSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
