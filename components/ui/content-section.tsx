"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  children?: React.ReactNode
  className?: string
}

export function ContentSection({
  title,
  description,
  image,
  imageAlt = "Section image",
  imagePosition = "right",
  children,
  className = "",
}: ContentSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
            {children}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-border/70"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className={cn("h-auto w-full object-cover", photoMediaClass(image))}
              />
              <ImageVeil tone={image && isStudioSrc(image) ? "studio" : "photo"} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
