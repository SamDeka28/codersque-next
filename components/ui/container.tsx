import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  size?: "default" | "wide" | "narrow"
}

const sizes = {
  default: "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16",
  wide: "mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16",
  narrow: "mx-auto w-full max-w-3xl px-5 sm:px-8",
}

export function Container({ children, className, as: Comp = "div", size = "default" }: ContainerProps) {
  return <Comp className={cn(sizes[size], className)}>{children}</Comp>
}
