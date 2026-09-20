"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft } from "lucide-react"
import PageTransition from "@/components/page-transition"
import { Container } from "@/components/ui/container"
import { ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface DetailedPageLayoutProps {
  title: string
  subtitle: string
  breadcrumbs: BreadcrumbItem[]
  backLink?: {
    label: string
    href: string
  }
  children: React.ReactNode
  image?: string
}

export default function DetailedPageLayout({
  title,
  subtitle,
  breadcrumbs,
  backLink,
  children,
  image = "/generated/hero-studio.png",
}: DetailedPageLayoutProps) {
  return (
    <PageTransition>
      <div className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <Image src={image} alt="" fill className={cn("object-cover", photoMediaClass(image))} />
        <ImageVeil tone={isStudioSrc(image) ? "studio" : "photo"} />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
        <Container className="relative z-10">
          <nav className="mb-6 flex" aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-1 text-sm">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="inline-flex items-center">
                  {index > 0 && <ChevronRight className="mx-1 h-3.5 w-3.5 text-muted-foreground" />}
                  <Link
                    href={item.href}
                    className={
                      index === breadcrumbs.length - 1
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {backLink && (
            <Link href={backLink.href} className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLink.label}
            </Link>
          )}

          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight md:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>
          </div>
        </Container>
      </div>

      <div className="py-16">{children}</div>
    </PageTransition>
  )
}
