"use client"

import { CTABanner } from "@/components/ui/cta-banner"

export default function CtaSection() {
  return (
    <CTABanner
      title="Have a product to build?"
      description="Tell us what you need to ship. We’ll respond with a clear scope, a team, and a timeline you can own."
      buttonText="Start a project"
      buttonLink="/client-onboarding"
      secondaryButtonText="Talk to us"
      secondaryButtonLink="/contact"
    />
  )
}
