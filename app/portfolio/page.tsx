import PageTransition from "@/components/page-transition"
import PortfolioHero from "@/components/portfolio/portfolio-hero"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import TestimonialsSection from "@/components/home/testimonials-section"

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PortfolioHero />
      <PortfolioGrid />
      <TestimonialsSection />
    </PageTransition>
  )
}
