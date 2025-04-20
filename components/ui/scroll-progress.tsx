"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
}

export function ScrollProgress({
  color = "bg-gradient-to-r from-purple-600 to-blue-500",
  height = 4,
  zIndex = 50,
}: ScrollProgressProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling down a bit
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 ${color} origin-left`}
      style={{
        scaleX,
        height,
        zIndex,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  )
}
