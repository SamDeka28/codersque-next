"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type AnimatedTextProps = {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  animationType?: "wave" | "reveal" | "typewriter" | "bounce"
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  animationType = "wave",
}: AnimatedTextProps) {
  const [scope, setScope] = useState<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!scope) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    observer.observe(scope)
    return () => observer.disconnect()
  }, [scope])

  const shouldAnimate = once ? isInView : true

  const getAnimationVariants = () => {
    switch (animationType) {
      case "wave":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * duration + delay,
              duration: 0.5,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          }),
        }
      case "reveal":
        return {
          hidden: { opacity: 0, y: 75 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * duration + delay,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
            },
          }),
        }
      case "typewriter":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: i * duration + delay,
              duration: 0.2,
              ease: "easeInOut",
            },
          }),
        }
      case "bounce":
        return {
          hidden: { opacity: 0, scale: 0.3 },
          visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
              delay: i * duration + delay,
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }),
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const words = text.split(" ")
  const variants = getAnimationVariants()

  return (
    <div ref={setScope} className={className}>
      <div className="inline-block">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-1.5">
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                custom={wordIndex + charIndex / 100}
                variants={variants}
                initial="hidden"
                animate={shouldAnimate ? "visible" : "hidden"}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
