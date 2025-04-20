"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:p-16 relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
                <p className="text-white text-opacity-90 text-lg max-w-2xl mx-auto">
                  Contact us today to discuss your project requirements and get a free consultation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-purple-600 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    // Logic to open chat would go here
                    const chatButton = document.querySelector('button[aria-label="Toggle chat"]')
                    if (chatButton) {
                      ;(chatButton as HTMLButtonElement).click()
                    }
                  }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat with Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
