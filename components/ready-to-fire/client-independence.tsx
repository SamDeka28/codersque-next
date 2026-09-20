"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

const takeaways = [
  "Written architecture and runbooks",
  "In-product walkthroughs where they help",
  "A structure your engineers can extend",
  "Access and ownership sitting with you",
]

export default function ClientIndependence() {
  return (
    <Section id="client-independence">
      <SectionHeader
        eyebrow="Independence"
        title="The work is yours after launch"
        description="We measure success by whether your team can operate the product without us sitting in the middle."
        className="mb-12 md:mb-16"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold tracking-tight">Build together, then step back</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Delivery, documentation, and handover are part of the same engagement. Retainers are optional. They are not
            how the relationship is structured.
          </p>

          <h3 className="mt-8 text-xl font-semibold tracking-tight">What you leave with</h3>
          <ul className="mt-4 space-y-2.5">
            {takeaways.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden border border-border"
        >
          <Image
            src="/product-understanding.png"
            alt="Product handover"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </Section>
  )
}
