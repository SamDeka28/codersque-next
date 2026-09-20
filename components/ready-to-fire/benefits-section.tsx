"use client"

import { motion } from "framer-motion"
import { Clock, KeyRound, Users, Handshake } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"

const benefits = [
  {
    icon: Clock,
    title: "Less vendor overhead",
    description:
      "Documentation, in-product guidance, and a readable codebase replace most day-to-day tickets.",
  },
  {
    icon: KeyRound,
    title: "You own the product",
    description:
      "Accounts, repositories, and the roadmap sit with you. Changes do not have to wait on us.",
  },
  {
    icon: Users,
    title: "Handover that works",
    description:
      "Modular structure and written runbooks so new engineers can join without a knowledge bottleneck.",
  },
  {
    icon: Handshake,
    title: "Available, not required",
    description:
      "If you want another module or a harder problem, we can come back. Everyday work should not need that.",
  },
]

export default function BenefitsSection() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="Why this model"
        title="Independence is the deliverable"
        description="The engagement is designed so your team can operate, extend, and staff the product without us."
        className="mb-12 md:mb-16"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="border border-border bg-card p-7"
          >
            <IconWell>
              <benefit.icon />
            </IconWell>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
