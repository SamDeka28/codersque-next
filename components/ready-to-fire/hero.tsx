"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ReadyToFireHero() {
  return (
    <section className="relative pt-36 pb-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800"></div>

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-300/30 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
             Future Ready Partnerships
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
              We build with you, then step back gracefully.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              At Codersque, we believe great partnerships don't rely on hand-holding. Our goal is to build something
              powerful—and make sure you have the clarity, resources, and tools to grow without us.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/client-onboarding"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20 w-full sm:w-auto text-center"
              >
                Let's Connect
              </Link>
              <a
                href="#client-independence"
                className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-purple-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden p-1">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                  <Image
                    src="/future-ready-handshake.png"
                    alt="Team collaboration"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Client Independence</h3>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      Our Mission
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    "At Codersque, we take pride in helping founders and teams become truly independent. We'll always be
                    around when needed—but the goal is that you won't need us much."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
