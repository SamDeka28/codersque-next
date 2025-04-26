"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Award, TrendingUp, BarChart, Zap, ChevronRight } from "lucide-react"

const metrics = [
  {
    id: "delivery",
    icon: <Clock className="h-6 w-6" />,
    title: "Delivery Speed",
    description: "We pride ourselves on delivering projects faster than the industry average without compromising quality.",
    stats: [
      { label: "Average Project Completion", value: "4-6 weeks" },
      { label: "On-Time Delivery Rate", value: "98%" },
      { label: "Time Saved vs. Industry Average", value: "35%" },
    ],
    color: "from-blue-500 to-cyan-500",
    highlight: "Our rapid delivery process helps clients launch products 40% faster than competitors"
  },
  {
    id: "satisfaction",
    icon: <Users className="h-6 w-6" />,
    title: "Client Satisfaction",
    description: "Our client-first approach ensures high satisfaction rates and long-term partnerships.",
    stats: [
      { label: "Client Satisfaction Score", value: "4.9/5" },
      { label: "Client Retention Rate", value: "92%" },
      { label: "Referral Rate", value: "78%" },
    ],
    color: "from-purple-500 to-pink-500",
    highlight: "92% of clients return for additional projects within 12 months"
  },
  {
    id: "quality",
    icon: <Award className="h-6 w-6" />,
    title: "Code Quality",
    description: "We maintain the highest standards of code quality, ensuring maintainability and scalability.",
    stats: [
      { label: "Code Review Score", value: "98/100" },
      { label: "Bug Rate", value: "<0.5%" },
      { label: "Technical Debt Ratio", value: "<5%" },
    ],
    color: "from-amber-500 to-orange-500",
    highlight: "Our code quality reduces maintenance costs by an average of 60%"
  },
  {
    id: "performance",
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Business Impact",
    description: "Our solutions deliver measurable business results and ROI for our clients.",
    stats: [
      { label: "Average Revenue Increase", value: "32%" },
      { label: "Operational Efficiency Gain", value: "45%" },
      { label: "Customer Engagement Boost", value: "58%" },
    ],
    color: "from-green-500 to-emerald-500",
    highlight: "Clients see an average 3.5x ROI within the first year of implementation"
  },
]

export default function SuccessMetricsSection() {
  const [activeTab, setActiveTab] = useState("delivery")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4"
          >
            Measurable Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400"
          >
            Our Success Metrics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            We measure our success by the tangible results we deliver to our clients
          </motion.p>
        </div>

        {/* Metrics Tabs */}
        <div ref={ref} className="max-w-5xl mx-auto">
          <Tabs defaultValue="delivery" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mb-12">
              {metrics.map((metric) => (
                <TabsTrigger
                  key={metric.id}
                  value={metric.id}
                  className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 border data-[state=active]:border-transparent data-[state=active]:shadow-xl ${activeTab === metric.id ? 'border-transparent' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  <div className="absolute inset-0 -z-10">
                    {activeTab === metric.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10 dark:opacity-20 rounded-xl`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center text-white shadow-md`}
                    >
                      {metric.icon}
                    </div>
                    <span className="text-sm font-medium">{metric.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Animated border */}
              <motion.div
                initial={false}
                animate={{
                  background: [
                    `conic-gradient(from 90deg, #3b82f6, #06b6d4, #3b82f6)`,
                    `conic-gradient(from 90deg, #8b5cf6, #ec4899, #8b5cf6)`,
                    `conic-gradient(from 90deg, #f59e0b, #f97316, #f59e0b)`,
                    `conic-gradient(from 90deg, #10b981, #34d399, #10b981)`,
                  ][metrics.findIndex(m => m.id === activeTab)]
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 -z-10 bg-gradient-to-r p-[2px] rounded-2xl"
              />

              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-8">
                <AnimatePresence mode="wait">
                  {metrics.map((metric) => (
                    <TabsContent key={metric.id} value={metric.id} className="relative z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex flex-col md:flex-row items-start gap-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                          >
                            {metric.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                              {metric.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                              {metric.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {metric.stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700`}
                            >
                              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-100 dark:border-blue-800/30">
                          <div className="flex items-start gap-4">
                            <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-gray-700 dark:text-gray-300">
                              {metric.highlight}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </Tabs>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>See How We Achieve These Results</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2">
              <BarChart className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Data verified from client projects completed in the last 24 months
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}