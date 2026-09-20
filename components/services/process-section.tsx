"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, FileText, Palette, Code, CheckCircle2, Upload, Headphones } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn the business, the constraints, and what success looks like after launch.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    description: "Scope, sequence, and technical decisions written down before the build starts.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Design",
    description: "Flows and interface work that match how users actually complete the job.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description: "Implementation with the stack that fits the product, not the trend of the week.",
    icon: Code,
  },
  {
    number: "05",
    title: "Testing",
    description: "Functional, performance, and security checks against the definition of done.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Release",
    description: "Deployment, access, and documentation so your team can operate the system.",
    icon: Upload,
  },
  {
    number: "07",
    title: "Support",
    description: "Optional follow-on support. You decide when, and whether, you need it.",
    icon: Headphones,
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section muted>
      <SectionHeader
        eyebrow="Method"
        title="How an engagement runs"
        description="A straightforward path from brief to handover. The same sequence, adjusted to the size of the product."
        className="mb-12 md:mb-16"
      />

      <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-border/70 bg-card p-7"
          >
            <div className="flex items-center justify-between">
              <IconWell>
                <step.icon />
              </IconWell>
              <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
