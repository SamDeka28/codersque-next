"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Award, TrendingUp } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { IconWell } from "@/components/ui/icon-well"
import { FluidOrbs } from "@/components/ui/visual"

const metrics = [
  {
    id: "delivery",
    icon: Clock,
    title: "Delivery",
    description: "Projects ship on a defined timeline without cutting engineering quality.",
    stats: [
      { label: "Typical delivery window", value: "4–6 wks" },
      { label: "On-time rate", value: "98%" },
      { label: "Faster than industry avg.", value: "35%" },
    ],
    highlight: "Most products launch 40% sooner than the client’s previous vendor cycle.",
  },
  {
    id: "satisfaction",
    icon: Users,
    title: "Clients",
    description: "Work is scoped to a handover, not a never-ending engagement.",
    stats: [
      { label: "Satisfaction", value: "4.9/5" },
      { label: "Return clients", value: "92%" },
      { label: "Referral rate", value: "78%" },
    ],
    highlight: "92% of clients return for a later product or module within 12 months.",
  },
  {
    id: "quality",
    icon: Award,
    title: "Quality",
    description: "Code review, testing, and maintainability are part of the definition of done.",
    stats: [
      { label: "Review score", value: "98/100" },
      { label: "Defect rate", value: "<0.5%" },
      { label: "Tech debt ratio", value: "<5%" },
    ],
    highlight: "Lower maintenance cost after handover, typically around 60% vs. prior codebases.",
  },
  {
    id: "performance",
    icon: TrendingUp,
    title: "Impact",
    description: "We measure work by operational and commercial outcomes, not activity.",
    stats: [
      { label: "Revenue lift", value: "32%" },
      { label: "Efficiency gain", value: "45%" },
      { label: "Engagement lift", value: "58%" },
    ],
    highlight: "Clients report roughly 3.5× ROI within the first year of going live.",
  },
]

export default function SuccessMetricsSection() {
  const [activeTab, setActiveTab] = useState("delivery")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const active = metrics.find((m) => m.id === activeTab) ?? metrics[0]

  return (
    <Section className="mesh-wash" size="wide">
      <FluidOrbs className="opacity-35" />
      <SectionHeader
        eyebrow="Results"
        title="How we measure the work"
        description="A snapshot of delivery, quality, and commercial outcomes from the last 24 months of client projects."
        className="relative z-10 mb-12 md:mb-16"
      />

      <div ref={ref} className="relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-2 rounded-none bg-transparent p-0 md:grid-cols-4">
            {metrics.map((metric) => (
              <TabsTrigger
                key={metric.id}
                value={metric.id}
                className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4 text-sm backdrop-blur-sm data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
              >
                <span className="flex items-center gap-2">
                  <metric.icon className="h-4 w-4" />
                  {metric.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/80 p-6 backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <TabsContent key={active.id} value={active.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-start gap-4">
                    <IconWell>
                      {(() => {
                        const Icon = active.icon
                        return <Icon />
                      })()}
                    </IconWell>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{active.title}</h3>
                      <p className="mt-1 text-muted-foreground">{active.description}</p>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                    {active.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                      >
                        <div className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">{stat.value}</div>
                        <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">{active.highlight}</p>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </Section>
  )
}
