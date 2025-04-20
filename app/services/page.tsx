import PageTransition from "@/components/page-transition"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ProcessSection from "@/components/services/process-section"
import CtaSection from "@/components/services/cta-section"

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CtaSection />
    </PageTransition>
  )
}
