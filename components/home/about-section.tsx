"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Section } from "@/components/ui/section"
import { ImageVeil } from "@/components/ui/visual"

const notes = [
  {
    title: "Mission",
    body: "Give businesses software they can operate, extend, and own.",
  },
  {
    title: "Team",
    body: "Engineers, designers, and delivery leads who stay close to the work.",
  },
  {
    title: "Vision",
    body: "Be a durable partner for product teams in India and beyond.",
  },
  {
    title: "Values",
    body: "Clarity, craft, independence, and measured delivery.",
  },
]

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <Section bleed className="py-0">
      <div className="relative min-h-[40rem] overflow-hidden lg:min-h-[52rem]">
        <Image src="/stock/team.jpg" alt="Codersque team collaborating" fill className="photo-media object-cover" />
        <ImageVeil />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-[40rem] w-full max-w-[1440px] items-end gap-10 px-5 py-20 sm:px-8 lg:min-h-[52rem] lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-16 lg:py-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl text-white"
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65">Studio</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">A software company, not a retainer trap</h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
              Founded in 2022 in Guwahati, Codersque builds web products, mobile apps, and internal systems for companies
              that need a serious engineering partner without giving up ownership.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              We work in small, senior teams. Ship something production-ready, document it properly, and leave you able
              to run it.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline">
              About the company
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {notes.map((note) => (
              <div key={note.title} className="rounded-3xl border border-white/12 bg-white/8 p-5 text-white backdrop-blur-md md:p-6">
                <h3 className="text-sm font-semibold tracking-tight">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{note.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
