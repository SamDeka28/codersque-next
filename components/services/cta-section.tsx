"use client"

import { CTABanner } from "@/components/ui/cta-banner"

export default function CtaSection() {
  return (
    <CTABanner
      title="Need a delivery partner?"
      description="Share the brief. We’ll come back with a team, a plan, and a date you can work with."
      buttonText="Request a proposal"
      buttonLink="/contact"
      secondaryButtonText="Start onboarding"
      secondaryButtonLink="/client-onboarding"
    />
  )
}
