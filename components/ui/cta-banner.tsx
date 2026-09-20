"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  image?: string
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image = "/stock/partnership.jpg",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Image src={image} alt="" fill className={cn("object-cover", photoMediaClass(image))} />
      <ImageVeil tone={isStudioSrc(image) ? "studio" : "photo"} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-white"
        >
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={buttonLink}
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-neutral-950 hover:bg-white/90")}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
