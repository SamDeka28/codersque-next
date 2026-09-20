"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { ImageVeil } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

export default function ReadyToFireHero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden pb-20 pt-36 md:min-h-[88vh] md:pb-28 md:pt-44">
      <Image src="/stock/partnership.jpg" alt="Partnership" fill priority className="photo-media object-cover" />
      <ImageVeil />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/65"
          >
            Partnerships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            We build with you, then step back.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/72"
          >
            Codersque is set up so you can run the product without a permanent vendor in the loop. Support is
            available. It is not the business model.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/client-onboarding" className={cn(buttonVariants({ size: "lg" }), "bg-white text-neutral-950 hover:bg-white/90")}>
              Start a conversation
            </Link>
            <a
              href="#client-independence"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white",
              )}
            >
              How it works
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
