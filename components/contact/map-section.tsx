"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

export default function MapSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Location"
        title="Guwahati"
        description="Codersque Technologies Pvt. Ltd., Satgaon. We work with teams across India and remotely."
        className="mb-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="h-[420px] overflow-hidden border border-border"
      >
        <iframe
          title="Codersque office location"
          src="https://www.google.com/maps?q=Satgaon,+Guwahati,+Assam+781171&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </motion.div>
    </Section>
  )
}
