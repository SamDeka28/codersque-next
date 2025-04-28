"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientIndependence() {
  return (
    <section id="client-independence" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
            >
              Client Independence is at the Heart of What We Do
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              From day one, our mission is to build powerful solutions while ensuring you have the knowledge, resources, and tools to thrive independently. This isn't about letting go—it's about empowering you to succeed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white flex items-center">
                    <span className="text-3xl mr-3">🛤️</span>
                    Our Mission: Build With You, Then Step Back Gracefully
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're committed to delivering exceptional value, providing clear solutions, and ensuring your long-term success—not creating dependency through endless retainers.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800/30 backdrop-blur-sm">
                  <p className="text-gray-800 dark:text-gray-200 italic font-medium">
                    "At Codersque, we take pride in helping founders and teams become truly independent."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    While we're always here to support you, our ultimate success is measured by your ability to operate independently.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white flex items-center">
                    <span className="text-3xl mr-3">🧾</span>
                    Ready to Take Full Control?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We consider it a success when our clients achieve full autonomy. It's a testament to our commitment to your long-term success.
                  </p>

                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">You'll Walk Away With:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Clear, AI-generated documentation
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      In-app tutorials and screen walkthroughs
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      A future-proof architecture
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      The confidence to make changes yourself
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              {/* Glassmorphism image container */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="/product-understanding.png"
                    alt="Client independence"
                    width={800}
                    height={600}
                    className="w-full h-auto lg:h-[600px]"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-medium">
                      Gain complete understanding of your product and the confidence to drive it forward independently.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
