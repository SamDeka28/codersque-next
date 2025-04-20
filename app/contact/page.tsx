import PageTransition from "@/components/page-transition"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import MapSection from "@/components/contact/map-section"

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactForm />
      <ContactInfo />
      <MapSection />
    </PageTransition>
  )
}
