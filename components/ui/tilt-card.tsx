"use client"

import { useEffect } from "react"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
  scale?: number
  perspective?: number
  glareMaxOpacity?: number
  glareColor?: string
  gyroscope?: boolean
}

export function TiltCard({
  children,
  className = "",
  glareEnabled = true,
  scale = 1.05,
  perspective = 1000,
  glareMaxOpacity = 0.2,
  glareColor = "255, 255, 255",
  gyroscope = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for more natural movement
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), springConfig)
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), springConfig)
  const glareOpacity = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, glareMaxOpacity]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5
    const normalizedY = (e.clientY - rect.top) / height - 0.5

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  // Handle device orientation for gyroscope effect
  useEffect(() => {
    if (!gyroscope || !window.DeviceOrientationEvent) return

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (!e.beta || !e.gamma || !isHovered) return

      // Convert orientation to normalized values
      const normalizedX = Math.min(Math.max(e.gamma / 45, -0.5), 0.5)
      const normalizedY = Math.min(Math.max(e.beta / 45 - 0.5, -0.5), 0.5)

      mouseX.set(normalizedX)
      mouseY.set(normalizedY)
    }

    window.addEventListener("deviceorientation", handleOrientation)
    return () => window.removeEventListener("deviceorientation", handleOrientation)
  }, [gyroscope, isHovered, mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: scale }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          height: "100%",
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
      >
        {children}

        {glareEnabled && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(${glareColor}, ${glareOpacity}) 0%, rgba(${glareColor}, 0) 80%)`,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
