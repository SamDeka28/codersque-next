"use client"

import { motion } from "framer-motion"
import { Award, Users, Lightbulb, Target, ShieldCheck, RefreshCw } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"
import CtaSection from "../ready-to-fire/cta-section"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "The work should still look correct a year later, in the code, the interface, and the handover.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work with the client’s team, not around it. Decisions stay with the people who will run the product.",
  },
  {
    icon: Lightbulb,
    title: "Judgement",
    description: "New technology when it solves a real constraint. Familiar technology when it is the responsible choice.",
  },
  {
    icon: Target,
    title: "Outcomes",
    description: "Scope is written against a result: a launch, a metric, or a system someone can operate.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Clear estimates, written agreements, and no lock-in dressed up as a partnership.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "Plans change. The architecture and the process should be able to absorb that without drama.",
  },
]

export default function Values() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Culture"
          title="How we work"
          description="A short list of principles we use when choosing work, writing code, and handing it over."
          className="mb-12 md:mb-16"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-border/70 bg-card p-7"
            >
              <IconWell>
                <value.icon />
              </IconWell>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <CtaSection />
    </>
  )
}
