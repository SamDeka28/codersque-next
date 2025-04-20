"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }) // Start off-screen
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Check if device has cursor (non-touch device)
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0
    }

    // Don't show custom cursor on touch devices
    if (isTouchDevice()) return

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onMouseEnter = () => {
      setVisible(true)
    }

    const onMouseLeave = () => {
      setVisible(false)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Track link and button hovers
    const handleLinkHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role=button], input, textarea, select, [data-cursor-pointer]",
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    // Add event listeners with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      addEventListeners()
      handleLinkHoverEvents()
      document.body.style.cursor = "none"
    }, 500)

    return () => {
      clearTimeout(timer)
      removeEventListeners()
      document.body.style.cursor = "auto"
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-purple-600 dark:bg-purple-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          width: 10,
          height: 10,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </>
  )
}
