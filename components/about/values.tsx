"use client"

import { motion } from "framer-motion"
import { Award, Users, Lightbulb, Target, Heart, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/ui/tilt-card"
import CtaSection from "../ready-to-fire/cta-section"

const values = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations and create lasting value for our clients.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and collaborate closely with our clients to understand their needs and achieve shared goals.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "We embrace innovation and continuously explore new technologies and approaches to solve complex problems and drive digital transformation.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Results-Driven",
    description:
      "We focus on delivering tangible results that drive business growth and success for our clients through measurable outcomes.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Integrity",
    description:
      "We conduct our business with integrity, honesty, and transparency, building trust with our clients and partners for long-term relationships.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Adaptability",
    description:
      "We embrace change and adapt quickly to evolving technologies and market demands, ensuring our solutions remain relevant and effective.",
    color: "from-violet-500 to-purple-500",
  },
]

export default function Values() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 -z-10" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            Our Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Our Core Values
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            The principles that guide our work and define our company culture
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 10,
              }}
            >
              <TiltCard className="h-full" glareEnabled={true} glareMaxOpacity={0.1} scale={1.02}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 h-full border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 relative overflow-hidden">
                  {/* Background gradient */}
                  <div
                    className={`absolute -top-24 -right-24 w-40 h-40 rounded-full bg-gradient-to-br ${value.color} opacity-10 blur-xl`}
                  />

                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 text-white shadow-lg`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CtaSection/>
    </section>
  )
}
