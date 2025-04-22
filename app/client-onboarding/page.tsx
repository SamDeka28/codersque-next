import PageTransition from "@/components/page-transition"
import ClientEngagementForm from "@/components/client-onboarding/client-engagement-form"
import OnboardingHero from "@/components/client-onboarding/onboarding-hero"
import ProcessOverview from "@/components/client-onboarding/process-overview"

export const metadata = {
  title: "Client Onboarding | Codersque Technologies",
  description:
    "Start your journey with Codersque Technologies. Fill out our client engagement form to help us understand your project needs.",
}

export default function ClientOnboardingPage() {
  return (
    <PageTransition>
      <OnboardingHero />
      <ProcessOverview />
      <ClientEngagementForm />
    </PageTransition>
  )
}
