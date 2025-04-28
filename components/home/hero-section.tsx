"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Zap, BarChart } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-11 lg:pt-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Code animation background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
        <div className="code-animation absolute inset-0 text-xs md:text-sm overflow-hidden font-mono">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="code-line"
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: `translateY(${Math.random() * 100}%)`,
              }}
            >
              {`import { useState, useEffect } from 'react';`}
            </div>
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i + 40}
              className="code-line"
              style={{
                animationDelay: `${(i + 20) * 0.1}s`,
                transform: `translateY(${Math.random() * 100}%)`,
              }}
            >
              {`const [data, setData] = useState(null);`}
            </div>
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i + 80}
              className="code-line"
              style={{
                animationDelay: `${(i + 40) * 0.1}s`,
                transform: `translateY(${Math.random() * 100}%)`,
              }}
            >
              {`useEffect(() => { fetchData(); }, []);`}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-block px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Leading Software Development Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Building </span>
              <span className="text-blue-600 dark:text-blue-400">Smarter</span>
              <br />
              <span className="text-purple-600 dark:text-purple-400">Digital </span>
              <span className="text-gray-900 dark:text-white">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
            >
              We transform your ideas into exceptional digital experiences that drive growth and innovation for your
              business. Our expert team delivers cutting-edge solutions tailored to your unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <Link
                href="/client-onboarding"
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 max-w-xl"
            >
              <div className="text-center p-2 md:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-2 md:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center p-2 md:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <Image
                src="/worki.jpg"
                alt="Professional team working on digital solutions"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700 hidden md:flex"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700 hidden md:flex"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            >
              <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 left-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700 hidden md:flex"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
            >
              <BarChart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
