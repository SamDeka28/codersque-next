"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
              About Codersque Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded in 2022, Codersque Technologies is a leading software development company based in Guwahati,
              Assam. We specialize in creating innovative digital solutions that help businesses transform and thrive in
              the digital era.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our team of expert developers, designers, and strategists work collaboratively to deliver cutting-edge
              solutions that address complex business challenges and create exceptional user experiences.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:rotate-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    To empower businesses with innovative digital solutions that drive growth and success.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:rotate-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Team</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    A diverse group of talented professionals passionate about technology and innovation.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:rotate-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    To be at the forefront of technological innovation and digital transformation.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:rotate-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Values</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Excellence, integrity, innovation, collaboration, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
