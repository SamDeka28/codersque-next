"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { buttonVariants } from "@/components/ui/button"
import { getHomepageProjects, type PortfolioProject } from "@/data/portfolio"
import { ProjectCollage } from "@/components/portfolio/project-collage"
import { cn } from "@/lib/utils"

const projects = getHomepageProjects()

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.12 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <Section muted className="overflow-hidden mesh-wash" size="wide" containerClassName="relative z-10">
      <div ref={containerRef}>
        <motion.div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
          style={{ y }}
        />

        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title="Products in production"
            description="A short look at recent mobile, web, and commerce work currently in production."
            className="lg:max-w-2xl"
          />
          <Link href="/portfolio" className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}>
            All projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {projects.map((project: PortfolioProject, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, type: "spring", stiffness: 90, damping: 14 }}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                <div
                  className={cn(
                    "relative h-full overflow-hidden rounded-[1.75rem] border border-border/70",
                    index === 0 ? "aspect-[16/11] lg:aspect-auto lg:min-h-full" : "aspect-[16/10]",
                  )}
                >
                  <ProjectCollage project={project} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">{project.industry}</p>
                    <h3 className="mt-1 flex items-center justify-between text-2xl font-semibold tracking-tight md:text-3xl">
                      {project.title}
                      <ArrowRight className="h-5 w-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
