"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, Users, Upload, MessageSquare, BarChart3 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"

const cards = [
  {
    icon: Lightbulb,
    title: "Discovery & planning",
    description: "Goals, users, and constraints written into a sequence the team can execute.",
  },
  {
    icon: Code,
    title: "Design & development",
    description: "Interface and engineering work in the same loop, against a shared spec.",
  },
  {
    icon: Users,
    title: "Review & feedback",
    description: "Regular checkpoints so changes land before they become expensive.",
  },
  {
    icon: Upload,
    title: "Release & handover",
    description: "Deployment, access, and documentation so your people can operate it.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Written updates. Decisions recorded. No status theatre.",
  },
  {
    icon: BarChart3,
    title: "Improvement",
    description: "After launch, we look at usage and quality, then you decide what happens next.",
  },
]

export default function ProcessCards() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="Process"
        title="A predictable engagement"
        description="The same structure on every project. Adjusted to size, not reinvented each time."
        className="mb-12 md:mb-16"
      />
      <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="bg-background p-7"
          >
            <IconWell>
              <card.icon />
            </IconWell>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
