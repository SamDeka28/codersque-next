"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Palette, Database, CloudLightning, TrendingUp } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"
import { AnimatedText } from "@/components/ui/animated-text"
import Link from "next/link"

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and technologies.",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    link: "/services/mobile-apps",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "User-centric design solutions that enhance user experience and engagement.",
    link: "/services/ui-ux-design",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "AI Solutions",
    description: "Intelligent systems and machine learning solutions for business automation.",
    link: "/services/ai-solutions",
  },
  {
    icon: <CloudLightning className="h-6 w-6" />,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions for your applications.",
    link: "/services/cloud-services",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing services to boost your online presence and growth.",
    link: "/services/digital-marketing",
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            What We Offer
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AnimatedText
              text="Our Services"
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-600 dark:to-blue-300"
              animationType="reveal"
              once={true}
            />
          </h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer a comprehensive range of software solutions tailored to meet your business needs
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard className="h-full" glareEnabled={true} glareMaxOpacity={0.1} scale={1.02}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                  <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>

                  <motion.div
                    className="mt-6 inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={service.link} className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium">
    Learn more
    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
