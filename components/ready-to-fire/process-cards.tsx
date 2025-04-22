"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Rocket, MessageSquare, BarChart } from "lucide-react"

export default function ProcessCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements to create a comprehensive roadmap.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Design & Development",
      description:
        "Our designers and developers work collaboratively to create intuitive interfaces and robust functionality.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Testing & Feedback",
      description:
        "Rigorous testing and client feedback ensure the final product meets all requirements and quality standards.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description:
        "We handle the deployment process and provide ongoing support to ensure your project's continued success.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Client Communication",
      description: "Regular updates and transparent communication keep you informed throughout the entire process.",
      color: "from-red-500 to-purple-500",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "We analyze performance metrics and user feedback to identify opportunities for enhancement.",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We follow a structured yet flexible approach to ensure your project is delivered on time, within budget,
              and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Card content */}
                <div className="p-8 relative z-10">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      y: hoveredCard === index ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6`}
                  >
                    {card.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                </div>

                {/* Animated border */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 border-2 border-gradient-to-r ${card.color} rounded-xl pointer-events-none`}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
