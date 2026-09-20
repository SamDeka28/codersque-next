"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FileCode2, BookOpen, Boxes, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { IconWell } from "@/components/ui/icon-well"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const guarantees = [
  {
    title: "Readable, durable code",
    description: "Structure and conventions chosen so another engineer can pick it up.",
    icon: FileCode2,
  },
  {
    title: "Documentation that ships with the product",
    description: "Architecture notes, runbooks, and in-product guidance, not a wiki nobody maintains.",
    icon: BookOpen,
  },
  {
    title: "Modular architecture",
    description: "Clear boundaries so you can change one part without rewriting the rest.",
    icon: Boxes,
  },
  {
    title: "Optional onboarding for your team",
    description: "Walkthroughs for the people who will own it after we leave.",
    icon: Users,
  },
]

export default function SelfSufficientCode() {
  return (
    <Section muted>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden border border-border"
        >
          <Image
            src="/self-sufficient-code.png"
            alt="Code handover"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">Handover</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Code your team can run</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every project is scoped to leave you with a system you can operate. Support is available when you want it,
            not because the codebase requires it.
          </p>

          <div className="mt-8 space-y-4">
            {guarantees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex gap-4 border border-border p-4"
              >
                <IconWell size="sm">
                  <item.icon />
                </IconWell>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/client-onboarding" className={cn(buttonVariants(), "mt-8")}>
            Start a project
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
