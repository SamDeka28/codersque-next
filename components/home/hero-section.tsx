"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { ImageVeil } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Clients" },
  { value: "10+", label: "Years of practice" },
]

const capabilities = [
  "Web platforms",
  "iOS & Android",
  "Product design",
  "Cloud architecture",
  "Applied AI",
  "Growth systems",
  "IP protection",
  "Handover & ownership",
]

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/generated/hero-studio.png"
          alt="Codersque engineering studio"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <ImageVeil tone="studio" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/15" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden opacity-[0.07] lg:block">
        <div className="code-animation absolute inset-0 overflow-hidden font-mono text-xs md:text-sm">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="code-line"
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: `translateY(${Math.random() * 100}%)`,
              }}
            >
              {`import { useState, useEffect } from 'react';`}
            </div>
          ))}
        </div>
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-36 pt-36 md:pb-40 md:pt-40">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70"
          >
            Software engineering studio · Guwahati
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[5.4rem]"
          >
            Digital products
            <span className="block text-white/55">your team can own.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/72 md:text-xl"
          >
            Codersque designs and builds web platforms, mobile apps, and internal systems, then hands over the
            architecture, the accounts, and the knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/client-onboarding"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-neutral-950 hover:bg-white/90")}
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white",
              )}
            >
              View work
            </Link>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-md md:px-6 md:py-5"
            >
              <dt className="text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-xs">{stat.label}</dt>
              <dd className="mt-2 font-heading text-2xl font-semibold tracking-tight md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-white/10 bg-black/30 py-3 backdrop-blur-md">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10 text-[11px] uppercase tracking-[0.28em] text-white/55">
          {[...capabilities, ...capabilities].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
              {item}
              <span className="h-px w-8 bg-white/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
