import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  muted?: boolean
  bleed?: boolean
  size?: "default" | "wide" | "narrow"
  id?: string
}

export function Section({
  children,
  className,
  containerClassName,
  muted = false,
  bleed = false,
  size = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-24 md:py-32", muted && "bg-muted/35", className)}
    >
      {bleed ? children : <Container size={size} className={containerClassName}>{children}</Container>}
    </section>
  )
}
