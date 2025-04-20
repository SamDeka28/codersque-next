"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            <div className="mb-8 text-center">
              <motion.div
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Codersque Technologies
              </motion.div>
              <motion.div
                className="text-sm text-gray-500 dark:text-gray-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Building Smarter Digital Solutions
              </motion.div>
            </div>

            {/* Code brackets animation */}
            <div className="flex items-center justify-center h-20 w-20 relative">
              <motion.div
                className="absolute text-4xl font-mono text-purple-600 dark:text-purple-400"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {"<"}
              </motion.div>

              {/* Blinking cursor */}
              <motion.div
                className="h-5 w-2 bg-blue-500 dark:bg-blue-400"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />

              <motion.div
                className="absolute text-4xl font-mono text-purple-600 dark:text-purple-400"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {"/>"}
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.div
              className="mt-8 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading digital experiences...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
