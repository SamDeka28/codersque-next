"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Palette, Brain, Cloud, LineChart, Scale, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { FluidOrbs, ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and proven architecture.",
    link: "/services/web-development",
    image: "/stock/web.jpg",
    className: "lg:col-span-2 lg:row-span-2 min-h-[22rem] lg:min-h-[36rem]",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform applications for iOS and Android.",
    link: "/services/mobile-apps",
    image: "/stock/mobile.jpg",
    className: "min-h-[22rem]",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Product design that clarifies complex workflows and keeps users moving.",
    link: "/services/ui-ux-design",
    image: "/stock/design.jpg",
    className: "min-h-[22rem]",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Applied machine learning and automation that sit inside real business processes.",
    link: "/services/ai-solutions",
    image: "/generated/ai.png",
    className: "lg:col-span-2 min-h-[20rem]",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Infrastructure, deployment, and operations that scale without locking you in.",
    link: "/services/cloud-services",
    image: "/stock/cloud.jpg",
    className: "lg:col-span-2 min-h-[20rem]",
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description: "Technical SEO, content, and growth systems tied to measurable outcomes.",
    link: "/services/digital-marketing",
    image: "/stock/marketing.jpg",
    className: "min-h-[16rem]",
  },
  {
    icon: Scale,
    title: "IP Services",
    description: "Patents, trademarks, and copyright support to protect what you build.",
    link: "/services/ip-services",
    image: "/stock/legal.jpg",
    className: "min-h-[16rem]",
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <Section className="mesh-wash" size="wide">
      <FluidOrbs className="opacity-40" />
      <SectionHeader
        eyebrow="Capabilities"
        title="What we build"
        description="A focused set of practices for companies that need software they can operate after we leave."
        className="relative z-10 mb-12 md:mb-16"
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { y: 32, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
            }}
            className={cn("group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card", service.className)}
          >
            <Link href={service.link} className="absolute inset-0 z-10" aria-label={service.title} />
            {service.image && (
              <Image
                src={service.image}
                alt=""
                fill
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-[1.06]",
                  photoMediaClass(service.image),
                )}
              />
            )}
            {service.image ? (
              <ImageVeil tone={isStudioSrc(service.image) ? "studio" : "photo"} />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/60" />
            )}
            <div className={cn("relative z-20 flex h-full flex-col justify-end p-6 md:p-8", service.image ? "text-white" : "")}>
              <service.icon className={cn("mb-4 h-5 w-5", service.image ? "text-white/80" : "text-primary")} />
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className={cn("mt-2 max-w-md text-sm leading-relaxed", service.image ? "text-white/72" : "text-muted-foreground")}>
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
