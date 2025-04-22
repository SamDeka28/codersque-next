"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-300/30 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Ready to Build Something You Truly Own?
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                We'd love to help you build something that empowers your business with full control and independence.
                Let's start the conversation today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/client-onboarding"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20 w-full sm:w-auto"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-white dark:bg-gray-700 border border-purple-200 dark:border-gray-600 text-gray-800 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">
                  Have questions? Call us at{" "}
                  <a href="tel:+919876543210" className="text-purple-600 dark:text-purple-400 hover:underline">
                  +91 97062 02403
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:info@codersque.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  sales@codersque.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
