import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { IntegrationSection } from "@/components/integration-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <IntegrationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
