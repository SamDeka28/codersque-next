"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Decorative blurred backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 right-24 w-96 h-96 bg-purple-400/20 dark:bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-blue-400/20 dark:bg-blue-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-10 md:p-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shadow-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
            Build Something <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Truly Yours</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Empower your business with solutions you fully own. Let's create something powerful together — your vision, your rules.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/client-onboarding"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 border-t pt-6 border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Questions? Call{" "}
              <a href="tel:+919706202403" className="text-purple-600 dark:text-purple-400 hover:underline">
                +91 97062 02403
              </a>{" "}
              or email{" "}
              <a href="mailto:sales@codersque.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                sales@codersque.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
