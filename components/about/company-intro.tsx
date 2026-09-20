"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Container } from "@/components/ui/container"
import { ImageVeil } from "@/components/ui/visual"

export default function CompanyIntro() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden pb-20 pt-36 md:min-h-[86vh] md:pb-28 md:pt-44">
      <Image src="/stock/team.jpg" alt="Codersque team" fill priority className="photo-media object-cover" />
      <ImageVeil />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <Container className="relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl text-white">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65">About</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">Codersque Technologies</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              A software company based in Guwahati, Assam. We design and build digital products for organisations that
              want a capable partner, and full ownership of what ships.
            </p>
            <p className="mt-4 leading-relaxed text-white/65">
              Founded in 2022, the studio works across web, mobile, cloud, and applied AI. The team is small, senior,
              and close to the delivery.
            </p>
            <p className="mt-4 leading-relaxed text-white/65">
              The point of the work is independence: clear architecture, written knowledge, and a product your people
              can run.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/12 bg-white/8 p-6 text-white backdrop-blur-md md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/55">Operating principle</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">
              Software you can operate after we step back.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Guwahati headquarters. Remote-capable delivery. Handover is part of the definition of done.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
