import PageTransition from "@/components/page-transition"
import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import ProjectsSection from "@/components/home/projects-section"
import AboutSection from "@/components/home/about-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/ready-to-fire/cta-section"
import Differentiators from "@/components/home/what-makes-us-different"
import IndustriesWeServe from "@/components/home/industries-we-serve"
import SuccessMetricsSection from "@/components/home/success-metrics-section"
import IndustrySolutionsSection from "@/components/home/industry-solutions-section"

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <Differentiators />
      <ProjectsSection />
      <AboutSection />
      {/* <IndustriesWeServe /> */}
      {/* <IndustrySolutionsSection /> */}
      <SuccessMetricsSection />
      <TestimonialsSection />
      <CtaSection/>
    </PageTransition>
  )
}
