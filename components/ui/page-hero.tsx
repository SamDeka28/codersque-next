"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  image?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  image = "/generated/hero-studio.png",
}: PageHeroProps) {
  return (
    <section className={cn("relative isolate min-h-[56vh] overflow-hidden pb-20 pt-36 md:min-h-[62vh] md:pb-28 md:pt-44", className)}>
      <Image src={image} alt="" fill priority className={cn("object-cover", photoMediaClass(image))} />
      <ImageVeil tone={isStudioSrc(image) ? "studio" : "photo"} />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
      <Container className="relative z-10">
        <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="eyebrow mb-5"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className={cn(
                "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  )
}
