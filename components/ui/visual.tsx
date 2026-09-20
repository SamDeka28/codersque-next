"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function FluidOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        className="absolute -left-32 top-[12%] h-[28rem] w-[28rem] rounded-full bg-[#e23a8c]/35 blur-[110px]"
        animate={{ x: [0, 48, -24, 0], y: [0, -36, 22, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-[-8%] h-[34rem] w-[34rem] rounded-full bg-[#4f6bff]/30 blur-[120px]"
        animate={{ x: [0, -36, 22, 0], y: [0, 42, -18, 0], scale: [1, 0.9, 1.14, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[28%] h-[26rem] w-[26rem] rounded-full bg-[#7c3aed]/28 blur-[100px]"
        animate={{ x: [0, 28, -18, 0], y: [0, -28, 16, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}

export function Grain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("grain-overlay pointer-events-none absolute inset-0 z-[1]", className)}
    />
  )
}

export function BrandSplatter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen", className)} aria-hidden>
      <motion.div
        className="absolute -left-[18%] top-[-12%] h-[72%] w-[58%] rounded-full bg-[#e23a8c]/50 blur-[100px]"
        animate={{ x: [0, 36, -18, 0], y: [0, -24, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[16%] top-[-18%] h-[78%] w-[52%] rounded-full bg-[#4f6bff]/45 blur-[110px]"
        animate={{ x: [0, -28, 16, 0], y: [0, 32, -14, 0], scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-22%] left-[18%] h-[62%] w-[48%] rounded-full bg-[#7c3aed]/48 blur-[95px]"
        animate={{ x: [0, 22, -14, 0], y: [0, -20, 12, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}

export function isStudioSrc(src: string) {
  return src.startsWith("/generated/")
}

export function photoMediaClass(src?: string) {
  if (!src || isStudioSrc(src)) return undefined
  return "photo-media"
}

export function ImageVeil({
  className,
  tone = "photo",
}: {
  className?: string
  tone?: "photo" | "studio"
}) {
  const studio = tone === "studio"
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <div className={cn("absolute inset-0", studio ? "bg-black/30" : "bg-black/58")} />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          studio ? "from-black/85 via-black/40 to-black/20" : "from-black via-black/58 to-black/38",
        )}
      />
      <BrandSplatter />
      <Grain />
    </div>
  )
}
