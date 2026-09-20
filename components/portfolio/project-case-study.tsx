"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react"
import type { PortfolioProject } from "@/data/portfolio"
import { ProjectCollage } from "@/components/portfolio/project-collage"
import { Container } from "@/components/ui/container"
import { CTABanner } from "@/components/ui/cta-banner"
import { FluidOrbs, Grain } from "@/components/ui/visual"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function Frame({
  src,
  alt,
  caption,
  className,
  portrait = false,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  portrait?: boolean
}) {
  return (
    <figure className={cn("overflow-hidden rounded-[4px] border border-border/70 bg-card", className)}>
      <div className={cn("relative overflow-hidden bg-white", portrait ? "aspect-[9/19.5]" : "aspect-[16/10]")}>
        <Image
          src={src}
          alt={alt}
          fill
          className={portrait ? "object-contain object-top" : "object-cover object-top"}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-border/70 px-4 py-2.5 text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export function ProjectCaseStudyPage({ project }: { project: PortfolioProject }) {
  const links =
    project.links ?? (project.liveUrl ? [{ label: "Visit live product", href: project.liveUrl }] : [])
  const shots = project.screenshots ?? []
  const apps = project.appScreens ?? []
  const overviewShot = shots[0]
  const moreShots = shots.slice(1)
  const remainingApps = overviewShot ? apps : apps.slice(1)
  const useCaseApps = remainingApps.slice(0, 3)
  const laterApps = remainingApps.slice(3)
  const leftoverWeb = apps.length > 0 ? moreShots : moreShots.slice(2)
  const laterVisuals = [
    ...leftoverWeb.map((shot) => ({ src: shot.src, caption: shot.caption, portrait: false })),
    ...laterApps.map((src) => ({ src, caption: undefined as string | undefined, portrait: true })),
  ]

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-black pt-32 text-white md:pt-40">
        <FluidOrbs />
        <Grain />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black" />
        <Container className="relative z-10">
          <div className="mb-6">
            <nav
              className="inline-flex rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 backdrop-blur-md"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex flex-wrap items-center gap-1 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/portfolio" },
                  { label: project.title, href: `/portfolio/${project.slug}` },
                ].map((item, index, list) => (
                  <li key={item.href} className="inline-flex items-center">
                    {index > 0 && <ChevronRight className="mx-1 h-3.5 w-3.5 text-white/50" />}
                    <Link
                      href={item.href}
                      className={index === list.length - 1 ? "font-medium text-white" : "text-white/80 hover:text-white"}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">{project.category}</p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
              >
                {project.description}
              </motion.p>
              {links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "border-white/25 bg-white/5 text-white hover:bg-white hover:text-black",
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-5 lg:pt-12">
              {[
                { label: "Industry", value: project.industry },
                { label: "Practice", value: project.category },
                { label: "Stack", value: project.technologies.join(", ") },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/15 pt-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#09090d] md:mt-16">
            <ProjectCollage project={project} />
          </div>
        </Container>
        <div className="h-16 bg-gradient-to-b from-transparent to-background md:h-24" />
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <article className="lg:col-span-5">
              <p className="eyebrow">Overview</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What we built</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{project.overview}</p>
            </article>
            {overviewShot ? (
              <Frame
                src={overviewShot.src}
                alt={overviewShot.caption}
                caption={overviewShot.caption}
                className="lg:col-span-7"
              />
            ) : useCaseApps[0] ? (
              <Frame src={useCaseApps[0]} alt={`${project.title} listing`} portrait className="lg:col-span-5 lg:col-start-8" />
            ) : null}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="rounded-[1.5rem] border border-border/70 bg-card p-7 md:p-9">
              <h2 className="text-xl font-semibold tracking-tight">The brief</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
            </article>
            <article className="rounded-[1.5rem] border border-border/70 bg-card p-7 md:p-9">
              <h2 className="text-xl font-semibold tracking-tight">What we shipped</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>
            </article>
          </div>

          <div
            className={cn(
              "mt-16 grid items-start gap-10 lg:gap-16",
              useCaseApps.length > 0 || moreShots.length > 0 ? "lg:grid-cols-12" : "",
            )}
          >
            <article className={useCaseApps.length > 0 || moreShots.length > 0 ? "lg:col-span-4" : "max-w-2xl"}>
              <p className="eyebrow">Use cases</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">How it is used</h2>
              <ol className="mt-6 space-y-4">
                {project.useCases.map((item, index) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <span className="mt-0.5 font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
            <div className="lg:col-span-8">
              {useCaseApps.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {useCaseApps.map((src, index) => (
                    <Frame key={src} src={src} alt={`${project.title} listing ${index + 1}`} portrait />
                  ))}
                </div>
              ) : moreShots.length > 0 ? (
                <div className={cn("grid gap-4", moreShots.length === 1 ? "grid-cols-1" : "sm:grid-cols-2")}>
                  {moreShots.slice(0, 2).map((shot) => (
                    <Frame key={shot.src} src={shot.src} alt={shot.caption} caption={shot.caption} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div
            className={cn(
              "mt-16 grid items-start gap-10 lg:gap-16",
              laterVisuals.length > 0 ? "lg:grid-cols-12" : "",
            )}
          >
            <article className={laterVisuals.length > 0 ? "lg:col-span-5" : "max-w-2xl"}>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">What shipped in the product</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.capabilities.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            {laterVisuals.length > 0 ? (
              <div className={cn("grid gap-4 lg:col-span-7", laterVisuals.length > 1 ? "sm:grid-cols-2" : "grid-cols-1")}>
                {laterVisuals.map((item) => (
                  <Frame
                    key={item.src}
                    src={item.src}
                    alt={item.caption ?? `${project.title} screen`}
                    caption={item.caption}
                    portrait={item.portrait}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Have a product to build?"
        description="Tell us what you need to ship. We'll come back with a team, a plan, and a timeline you can own."
        buttonText="Start a project"
        buttonLink="/client-onboarding"
        secondaryButtonText="All work"
        secondaryButtonLink="/portfolio"
      />
    </div>
  )
}
