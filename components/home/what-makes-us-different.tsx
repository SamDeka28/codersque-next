"use client"
import { motion } from "framer-motion"
import { Rocket, BookOpen, Code, Handshake, Puzzle, Cpu, Shield, Clock, Users, BarChart, Mail, ArrowRight } from "lucide-react"
import { AnimatedText } from "../ui/animated-text"
import Link from "next/link"

export default function Differentiators() {
  const pillars = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
      title: "Client Empowerment First",
      description: "We prioritize making you self-sufficient with clear ownership from day one",
      features: [
        "Full product ownership transfer",
        "No forced retainers or lock-ins",
        "Strategic support when you need it"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700',
      title: "AI-Powered Documentation",
      description: "Future-proof resources that grow with your product",
      features: [
        "Interactive in-app tutorials",
        "Context-aware technical docs",
        "Self-updating knowledge base"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      color: 'amber',
      gradient: 'from-amber-400 to-amber-600',
      title: "Self-Sufficient Code",
      description: "Clean architecture designed for your team's independence",
      features: [
        "Modular, scalable structure",
        "Zero legacy code guarantee",
        "Human-readable implementation"
      ]
    }
  ]
  
  

  const values = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "No Retainers, Just Results",
      description: "We deliver complete solutions, not dependencies"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Tailored Solutions",
      description: "Custom-built for your unique business needs"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Future-Proof Tech",
      description: "Built to evolve with your growing requirements"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Total Ownership",
      description: "100% control over your product's direction"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Efficient Delivery",
      description: "On-time, on-budget with zero surprises"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless Team Integration",
      description: "Easy onboarding for your developers"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
                Why Choose Us
             </motion.div>
   
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
             <AnimatedText
                 text="What Makes Us Different"
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
               At Codersque, we go beyond being just a service provider. We are your strategic partner in crafting innovative digital solutions.
             </motion.p>
           </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
              <div 
  className={`p-3 rounded-lg bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
>
  {pillar.icon}
</div>



                <h3 className="text-lg mb-4 font-bold text-gray-900 dark:text-white">{pillar.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/future-ready-partnerships"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Learn More About Our Approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
        {/* Supporting Values */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
