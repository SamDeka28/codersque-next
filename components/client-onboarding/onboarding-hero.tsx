"use client"

import { motion } from "framer-motion"

export default function OnboardingHero() {
  return (
    <section className="relative pt-36 pb-12 md:pt-24 md:pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-300/30 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:pb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Let's Build Something Amazing Together
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0">
              We're excited to learn about your project. Fill out our client engagement form to help us understand your
              needs and goals. This is the first step in our collaborative journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#engagement-form"
              className="w-full sm:w-auto py-4 sm:px-8 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20 text-sm sm:text-base"
            >
              Start Onboarding
            </a>
            <a
              href="#engagement-form"
              className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-3 rounded-lg bg-white dark:bg-gray-800 border border-purple-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
            >
              Try Our Tech Stack Tool
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}