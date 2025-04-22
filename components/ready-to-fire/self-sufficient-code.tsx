"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SelfSufficientCode() {
  const guarantees = [
    {
      title: "Clean, scalable, future-proof code",
      description: "Our code follows best practices and is built to scale with your business needs",
      icon: "✨",
    },
    {
      title: "AI-powered documentation and tutorials",
      description: "Comprehensive documentation that grows and adapts with your product",
      icon: "🤖",
    },
    {
      title: "Modular architecture for seamless handovers",
      description: "Easy to understand and maintain, even for new team members",
      icon: "🧩",
    },
    {
      title: "Optional team onboarding support",
      description: "We'll help your team get up to speed with the codebase",
      icon: "👥",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glassmorphism image container */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Self-sufficient code"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating code snippet */}
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 max-w-xs">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                    <pre className="text-xs text-gray-800 dark:text-gray-300 overflow-x-auto">
                      <code>
                        {`// Clean, well-documented code
function calculateTotal(items) {
  // Sum all item prices
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  Our Promise: Self-Sufficient Code
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Every Codersque project comes with a Self-Sufficient Code Guarantee. You don't just get a product—you
                  get freedom.
                </p>

                <div className="space-y-4 mt-8">
                  {guarantees.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="text-2xl mr-4">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800/30 mt-8">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ready to Build Something Empowering?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Looking for a team that gives you full control—without letting you feel alone?
                  </p>
                  <a
                    href="/client-onboarding"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    Let's Connect
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
