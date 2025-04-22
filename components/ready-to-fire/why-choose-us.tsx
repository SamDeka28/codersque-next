"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Why Choose Codersque Technologies?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're not just another development agency. We're a team of passionate technologists committed to
              delivering exceptional value and results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Codersque Team Collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Expertise That Delivers</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team brings together decades of combined experience across various technologies and industries.
                    We don't just build what you ask for—we contribute ideas, identify potential issues, and suggest
                    improvements to make your project even better.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Transparent Communication</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    No surprises, no hidden costs. We maintain clear and open communication throughout the project
                    lifecycle. You'll always know exactly where your project stands, what's been accomplished, and
                    what's coming next.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Results-Driven Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We measure our success by your success. Our focus is on delivering solutions that drive real
                    business results—whether that's increasing conversions, improving user engagement, or streamlining
                    operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Long-Term Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We don't disappear after launch. Many of our clients have been with us for years because we're
                    committed to providing ongoing support, maintenance, and enhancements as your business evolves.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
