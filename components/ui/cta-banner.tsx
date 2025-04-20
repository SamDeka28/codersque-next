"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTABannerProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:p-16 relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                {title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white text-opacity-90 text-lg max-w-2xl mx-auto mb-8"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                <Link
                  href={buttonLink}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-purple-600 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                {secondaryButtonText && secondaryButtonLink && (
                  <Link
                    href={secondaryButtonLink}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                  >
                    {secondaryButtonText}
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
