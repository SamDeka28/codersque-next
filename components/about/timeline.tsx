"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

// Updated timeline events with more detailed content and images
const timelineEvents = [
  {
    year: "2022",
    title: "Company Founded",
    description:
      "Codersque Technologies Pvt. Ltd. was officially founded in November 2022 in Guwahati, Assam. The company set out to provide innovative software solutions tailored to modern business needs.",
    icon: "🚀",
    achievements: [
      "Registered as a private limited company",
      "Established headquarters in Satgaon, Guwahati",
      "Formed founding team with a focus on web technologies"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    year: "2023",
    title: "Service Expansion & First Major Clients",
    description:
      "Codersque expanded its service offerings to include mobile app development, custom software, and UI/UX design. The company gained momentum by successfully delivering projects for clients across India.",
    icon: "📱",
    achievements: [
      "Launched mobile and UI/UX services",
      "Built ERP systems and custom applications",
      "Successfully delivered 15+ client projects"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    year: "2024",
    title: "Strategic Partnerships & Recognition",
    description:
      "Codersque collaborated with notable startups and businesses, including BrandWorks Worldwide, Revynox Technologies LLC,  MPAARS Innovation Pvt. Ltd. and AttendeeGain. Their commitment to quality and innovation made them a trusted name in software development.",
    icon: "🏆",
    achievements: [
      "Formed strategic partnerships with startups",
      "Delivered high-impact projects in various sectors",
      "Client satisfaction ratings above 95%",
      "Expanded team to support increasing demand"
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    year: "2025",
    title: "Towards Innovation & AI Integration",
    description:
      "With the rise of AI and cloud-first architecture, Codersque began integrating smart systems into its services. The company laid the groundwork for AI-powered solutions and smart digital transformation tools.",
    icon: "🤖",
    achievements: [
      "Initiated AI and cloud service offerings",
      "Started R&D for automation tools",
      "Enhanced product stack with modern tech"
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
<section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl"
    />

    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -5, 0],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-900/20 blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
      >
        Our History
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
      >
        Our Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-400"
      >
        A timeline of our growth and achievements since our inception
      </motion.p>
    </div>

    <motion.div ref={ref} style={{ opacity, scale }} className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 transform -translate-x-1/2 rounded-full" />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col md:flex-row items-center md:items-start mb-24 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="w-full md:w-1/2 px-4 md:px-8 mb-8 md:mb-0">
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-100 dark:border-purple-800/30 relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-bl-full -z-10 opacity-70"></div>

              <div className="text-4xl mb-3">{event.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium mb-2">
                {event.year}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {event.description}
              </p>

              <div className="space-y-1 mt-4">
                <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Key Achievements:
                </h4>
                {event.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 mr-2"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 px-4 md:px-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>

          <div className="absolute hidden md:flex left-1/2 transform -translate-x-1/2 items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-purple-600 dark:border-purple-400 bg-white dark:bg-gray-900 z-10 flex items-center justify-center text-xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.1 + 0.2,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 0 5px rgba(124, 58, 237, 0.3)",
              }}
            >
              {event.year.slice(2)}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

  )
}