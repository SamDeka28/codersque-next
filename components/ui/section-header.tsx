"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  index?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {(eyebrow || index) && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="eyebrow mb-5 inline-flex items-center gap-3"
        >
          {index && <span className="font-mono text-[11px] tracking-widest text-primary">{index}</span>}
          {index && eyebrow && <span className="h-px w-8 bg-border" />}
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn("text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]", titleClassName)}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
