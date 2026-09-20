"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Building2, Smartphone, Handshake, Cpu } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"

const timelineEvents = [
  {
    year: "2022",
    title: "Company founded",
    description:
      "Codersque Technologies Pvt. Ltd. was incorporated in Guwahati to build software for modern business operations.",
    icon: Building2,
    achievements: [
      "Registered as a private limited company",
      "Headquarters in Satgaon, Guwahati",
      "Founding team focused on web platforms",
    ],
  },
  {
    year: "2023",
    title: "Services and first clients",
    description:
      "Expanded into mobile, custom software, and product design. Delivered the first wave of production systems across India.",
    icon: Smartphone,
    achievements: ["Mobile and UI/UX practices added", "ERP and custom applications shipped", "15+ client projects delivered"],
  },
  {
    year: "2024",
    title: "Partnerships",
    description:
      "Worked with BrandWorks Worldwide, Revynox Technologies LLC, MPAARS Innovation, and AttendeeGain on product and platform work.",
    icon: Handshake,
    achievements: [
      "Longer-running product partnerships",
      "Delivery across multiple sectors",
      "Team expanded with demand",
    ],
  },
  {
    year: "2025",
    title: "Applied AI and cloud",
    description:
      "Integrated applied AI and cloud-first architecture into the service line, with a focus on systems clients can operate.",
    icon: Cpu,
    achievements: ["AI and cloud offerings launched", "Internal R&D on automation", "Stack updated around current platforms"],
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.4, 1, 1, 0.4])

  return (
    <Section muted>
      <SectionHeader
        eyebrow="History"
        title="Four years of delivery"
        description="From incorporation to a working studio with product, mobile, and infrastructure work in production."
        className="mb-12 md:mb-16"
      />

      <motion.ol ref={ref} style={{ opacity }} className="relative space-y-0 border-l border-border ml-3 md:ml-4">
        {timelineEvents.map((event, index) => (
          <motion.li
            key={event.year}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative pb-12 pl-8 last:pb-0 md:pl-12"
          >
            <span className="absolute -left-[9px] top-1 h-[17px] w-[17px] rounded-full border border-border bg-background" />
            <div className="flex flex-wrap items-center gap-3">
              <IconWell size="sm">
                <event.icon />
              </IconWell>
              <span className="font-mono text-xs text-muted-foreground">{event.year}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{event.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {event.description}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {event.achievements.map((achievement) => (
                <li key={achievement} className="text-sm text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
