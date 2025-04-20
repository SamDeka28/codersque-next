"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CompanyIntro() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
              About Codersque Technologies
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Codersque Technologies is a leading software development company based in Guwahati, Assam. Founded in
              2022, we specialize in creating innovative digital solutions that help businesses transform and thrive in
              the digital era.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With a team of expert developers, designers, and strategists, we deliver cutting-edge solutions that
              address complex business challenges and create exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in the power of technology to transform businesses and improve lives. Our mission is to empower
              organizations with innovative digital solutions that drive growth, efficiency, and success.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Codersque Office"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700 max-w-xs">
              <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                "We transform ideas into exceptional digital experiences that drive business growth."
              </p>
              <p className="text-right text-sm font-medium text-gray-900 dark:text-white mt-2">
                - CEO, Codersque Technologies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
