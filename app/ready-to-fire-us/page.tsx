import TestimonialsSection from "@/components/home/testimonials-section"
import PageTransition from "@/components/page-transition"
import BenefitsSection from "@/components/ready-to-fire/benefits-section"
import ClientIndependence from "@/components/ready-to-fire/client-independence"
import CtaSection from "@/components/ready-to-fire/cta-section"
import ReadyToFireHero from "@/components/ready-to-fire/hero"
import SelfSufficientCode from "@/components/ready-to-fire/self-sufficient-code"


export const metadata = {
  title: "Ready to Fire Us? | Codersque Technologies",
  description:
    "At Codersque, we believe in empowering our clients with full ownership and independence. Learn how we build solutions that allow you to grow without us.",
}

export default function ReadyToFireUsPage() {
  return (
    <PageTransition>
      <ReadyToFireHero />
      <ClientIndependence />
      <BenefitsSection />
      <SelfSufficientCode />
      <TestimonialsSection />
      <CtaSection />
    </PageTransition>
  )
}
