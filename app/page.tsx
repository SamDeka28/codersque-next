import PageTransition from "@/components/page-transition"
import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import ProjectsSection from "@/components/home/projects-section"
import AboutSection from "@/components/home/about-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
    </PageTransition>
  )
}
