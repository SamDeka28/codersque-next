"use client"

import { motion } from "framer-motion"
import { KeyRound, BookOpen, Code2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"
import { buttonVariants } from "@/components/ui/button"
import { ImageVeil } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

const pillars = [
  {
    icon: KeyRound,
    title: "Client ownership first",
    description: "You hold the product, the accounts, and the roadmap from day one.",
    features: ["Full product ownership transfer", "No forced retainers or lock-ins", "Support when you actually need it"],
  },
  {
    icon: BookOpen,
    title: "Documentation that lasts",
    description: "Technical and product knowledge written so your team can keep shipping.",
    features: ["In-product walkthroughs", "Architecture and runbooks", "Handover your engineers can use"],
  },
  {
    icon: Code2,
    title: "Code your team can run",
    description: "Clear structure, no hidden dependencies, and nothing you cannot maintain.",
    features: ["Modular architecture", "Readable implementation", "No legacy traps"],
  },
]

export default function Differentiators() {
  return (
    <Section bleed className="py-0">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[46rem]">
          <Image src="/stock/partnership.jpg" alt="Working as a delivery partner" fill className="photo-media object-cover" />
          <ImageVeil />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-12">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">Approach</p>
            <p className="mt-3 max-w-md text-2xl font-semibold tracking-tight md:text-3xl">
              Built so you do not need us forever.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-muted/35 px-5 py-16 sm:px-10 lg:px-14 lg:py-20">
          <SectionHeader
            eyebrow="Partnership"
            title="A studio, not a lock-in"
            description="We act as a delivery partner, not a permanent dependency. The work is yours to operate."
            className="mb-10"
          />

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border/70 bg-background/80 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <IconWell size="sm">
                    <pillar.icon />
                  </IconWell>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                    <ul className="mt-4 space-y-2">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link href="/future-ready-partnerships" className={cn(buttonVariants({ variant: "outline" }))}>
              How the partnership works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
