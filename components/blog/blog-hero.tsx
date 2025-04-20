"use client"

import { motion } from "framer-motion"

export default function BlogHero() {
  return (
    <section className="py-20 pt-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with the latest trends, insights, and news from the world of technology and digital innovation.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
