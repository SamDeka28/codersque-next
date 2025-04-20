"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  particleSize?: number
  particleSpeed?: number
  connectParticles?: boolean
  responsive?: boolean
}

export function ParticleBackground({
  className = "",
  particleCount = 50,
  particleSize = 3,
  particleSpeed = 0.5,
  connectParticles = true,
  responsive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (responsive && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      // Recreate particles when canvas is resized
      createParticles()
    }

    const createParticles = () => {
      particlesRef.current = []
      const isDark = theme === "dark"

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * particleSize + 1

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed,
          color: isDark ? "#ffffff" : "#000000",
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color === "#ffffff" ? "255, 255, 255" : "0, 0, 0"}, ${particle.opacity})`
        ctx.fill()

        // Connect particles if enabled
        if (connectParticles) {
          for (let j = index + 1; j < particlesRef.current.length; j++) {
            const otherParticle = particlesRef.current[j]
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
            )

            if (distance < 120) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(${particle.color === "#ffffff" ? "255, 255, 255" : "0, 0, 0"}, ${0.2 * (1 - distance / 120)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        }
      })

      animationRef.current = requestAnimationFrame(drawParticles)
    }

    // Initialize
    resizeCanvas()
    drawParticles()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [particleCount, particleSize, particleSpeed, connectParticles, responsive, theme])

  // Update particles when theme changes
  useEffect(() => {
    const isDark = theme === "dark"

    particlesRef.current.forEach((particle) => {
      particle.color = isDark ? "#ffffff" : "#000000"
    })
  }, [theme])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
}
