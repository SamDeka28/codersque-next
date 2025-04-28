"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Search, FileText, Palette, Code, TestTube, Rocket, Headphones } from 'lucide-react'

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges through in-depth discussions and research.",
    icon: <Search className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We create a detailed project plan outlining scope, timelines, deliverables, and technical specifications.",
    icon: <FileText className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create wireframes and visual designs that align with your brand and user experience goals.",
    icon: <Palette className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our development team brings designs to life using the most appropriate technologies and best practices.",
    icon: <Code className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "05",
    title: "Testing",
    description: "We conduct thorough testing to ensure quality, functionality, performance, and security.",
    icon: <TestTube className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "06",
    title: "Deployment",
    description: "We deploy your solution and provide training and documentation to ensure a smooth transition.",
    icon: <Rocket className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "07",
    title: "Support",
    description: "We offer ongoing support and maintenance to ensure your solution continues to perform optimally.",
    icon: <Headphones className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    color: "from-blue-500 to-indigo-500",
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
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
            How We Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Our Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            We follow a systematic approach to deliver high-quality solutions that meet your needs
          </motion.p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 transform -translate-x-1/2 rounded-full hidden lg:block"></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-20 last:mb-0"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
                  {/* Step number and content */}
                  <div className="w-full lg:w-1/2 p-4 lg:p-10 relative">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative z-10">
                      <div className="absolute top-0 right-0 -mt-6 -mr-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                          {step.icon}
                        </div>
                      </div>
                      
                      <div className="mb-4 flex items-center">
                        <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.color} mr-3`}>
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      
                      <div className="mt-6 flex items-center">
                        <div className="h-1 flex-grow rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${step.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-500 dark:text-gray-400">Step {step.number}</span>
                      </div>
                    </div>
                    
                    {/* Connector for desktop */}
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? "right-0" : "left-0"} w-12 h-1 bg-gradient-to-r ${step.color} hidden lg:block`}></div>
                  </div>

                  {/* Center dot for desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} border-4 border-white dark:border-gray-900`}
                    ></motion.div>
                  </div>

                  {/* Step image */}
                  <div className="w-full lg:w-1/2 p-4 lg:p-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
