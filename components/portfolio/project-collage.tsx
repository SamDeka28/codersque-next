"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import type { PortfolioProject } from "@/data/portfolio"
import { cn } from "@/lib/utils"

function BrowserFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#121218] shadow-[0_22px_48px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/5 px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative min-h-0 flex-1 bg-neutral-950">
        <Image src={src} alt={alt} fill className="object-cover object-top" />
      </div>
    </div>
  )
}

function Poster({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[4px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.42)] ring-1 ring-black/10",
        className,
      )}
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <Image src={src} alt={alt} fill className="object-cover object-top" />
    </div>
  )
}

function Studio({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#09090d]", className)}>
      <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#e23a8c]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#4f6bff]/14 blur-3xl" />
      {children}
    </div>
  )
}

export function ProjectCollage({ project, className }: { project: PortfolioProject; className?: string }) {
  const posters = (project.appScreens ?? []).slice(0, 3)
  const pages = (project.screenshots ?? []).map((shot) => shot.src)
  const site = pages[0]
  const splash = posters[0]
  const landscapeApp = posters.length === 1

  if (site && splash) {
    return (
      <Studio className={className}>
        <div className="flex h-full items-center gap-3 p-4 md:gap-5 md:p-7">
          <BrowserFrame src={site} alt={project.title} className="h-[90%] min-w-0 flex-1" />
          <Poster src={splash} alt={`${project.title} app`} className="h-[90%] w-auto shrink-0" />
        </div>
      </Studio>
    )
  }

  if (posters.length >= 2) {
    return (
      <Studio className={className}>
        <div className="flex h-full items-center justify-center gap-3 px-5 py-6 md:gap-4 md:px-8">
          {posters.map((src, index) => (
            <Poster key={src} src={src} alt={`${project.title} ${index + 1}`} className="h-[88%] w-auto" />
          ))}
        </div>
      </Studio>
    )
  }

  if (landscapeApp) {
    return (
      <Studio className={className}>
        <div className="flex h-full items-center justify-center p-6 md:p-8">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
            <Image src={posters[0]} alt={project.title} fill className="object-cover object-center" />
          </div>
        </div>
      </Studio>
    )
  }

  if (pages.length >= 3) {
    return (
      <Studio className={className}>
        <div className="grid h-full grid-cols-12 grid-rows-2 gap-3 p-4 md:gap-4 md:p-6">
          <BrowserFrame src={pages[0]} alt={project.title} className="col-span-7 row-span-2" />
          <BrowserFrame src={pages[1]} alt="" className="col-span-5" />
          <BrowserFrame src={pages[2]} alt="" className="col-span-5" />
        </div>
      </Studio>
    )
  }

  if (pages.length === 2) {
    return (
      <Studio className={className}>
        <div className="grid h-full grid-cols-2 gap-3 p-4 md:gap-4 md:p-6">
          <BrowserFrame src={pages[0]} alt={project.title} />
          <BrowserFrame src={pages[1]} alt="" />
        </div>
      </Studio>
    )
  }

  return (
    <Studio className={className}>
      <div className="flex h-full w-full items-center justify-center p-5 md:p-8">
        <BrowserFrame
          src={site ?? project.image}
          alt={project.title}
          className="aspect-[16/10] h-auto w-full max-h-full"
        />
      </div>
    </Studio>
  )
}
