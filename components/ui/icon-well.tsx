import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IconWellProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
}

export function IconWell({ children, className, size = "md" }: IconWellProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-muted/60 text-primary shadow-[0_0_28px_-12px_hsl(var(--primary))]",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  )
}
