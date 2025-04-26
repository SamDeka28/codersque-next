"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ShoppingBag,
  Heart,
  DollarSign,
  Briefcase,
  GraduationCapIcon as Graduation,
  Globe,
} from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const industries = [
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E-Commerce",
    description: "Custom online stores with seamless payment integration and inventory management",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Healthcare",
    description: "HIPAA-compliant solutions for patient management and telehealth services",
    image: "/placeholder.svg?height=300&width=400&text=Healthcare",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Finance",
    description: "Secure financial platforms with real-time data processing and reporting",
    image: "/placeholder.svg?height=300&width=400&text=Finance",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Enterprise",
    description: "Scalable business solutions that streamline operations and boost productivity",
    image: "/placeholder.svg?height=300&width=400&text=Enterprise",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Graduation className="h-6 w-6" />,
    title: "Education",
    description: "Interactive learning platforms with progress tracking and content management",
    image: "/placeholder.svg?height=300&width=400&text=Education",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Travel & Hospitality",
    description: "Booking systems and customer experience platforms for the travel industry",
    image: "/placeholder.svg?height=300&width=400&text=Travel",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function IndustrySolutionsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4"
          >
            Specialized Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400"
          >
            Industry Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            We deliver tailored solutions for various industries with domain-specific expertise
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" glareEnabled={true} glareMaxOpacity={0.1} scale={1.02}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <div className="text-white w-12 h-12 flex items-center justify-center">{industry.icon}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{industry.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{industry.description}</p>

                    <Link
                      href={`/services/${industry.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Explore All Industry Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
