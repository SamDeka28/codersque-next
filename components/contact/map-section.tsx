"use client"

import { motion } from "framer-motion"

export default function MapSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            Find Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Our Location
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            Visit our office or get in touch with us online
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-[500px]"
        >
          {/* This is a placeholder for a map. In a real application, you would integrate with Google Maps or another mapping service */}
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Map Placeholder</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In a real application, this would be an interactive map showing our location.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
