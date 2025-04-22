"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const benefits = [
    {
      icon: "💡",
      title: "Save Time & Resources",
      description:
        "We design our process to eliminate the need for support tickets and endless meetings. With AI-powered documentation, in-app guides, and a clean codebase, you're equipped to take the wheel confidently.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "🎯",
      title: "Full Ownership",
      description:
        "The product we hand over is entirely yours. Whether it's fixing a typo or launching a new feature, you won't need to depend on us for every detail. You'll have the freedom to move fast—and grow even faster.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤝",
      title: "Support That Transitions",
      description:
        "As your business scales, so can your team. We build everything in a way that's easy to onboard new developers or in-house staff. With structured documentation and modular design, no one's left guessing.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: "🔁",
      title: "And If You Still Need Us?",
      description:
        "Of course—we're here. If things get complicated, or you want to explore something new, we'll be your strategic partner. But the everyday stuff? That should be yours to own.",
      color: "from-orange-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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
              Key Benefits
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              We empower you with the tools, knowledge, and confidence to succeed independently
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Glassmorphism card */}
                <div className="absolute -inset-2 bg-gradient-to-br from-white/0 to-purple-500/20 dark:from-gray-800/0 dark:to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-300 hover:shadow-xl">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      y: hoveredCard === index ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl mb-4"
                  >
                    {benefit.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>

                  {benefit.title === "And If You Still Need Us?" && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600/50">
                      <p className="text-gray-700 dark:text-gray-300 italic font-medium text-sm">
                        "Our goal is never to leave you stranded—it's to make sure you're never stuck."
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
