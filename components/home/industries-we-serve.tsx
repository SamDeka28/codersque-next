"use client"
import { motion } from "framer-motion"
import {
  Banknote, Stethoscope, ShoppingCart, GraduationCap,
  Plane, Factory, Leaf, Database
} from "lucide-react"
import { AnimatedText } from "../ui/animated-text"

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: <Banknote className="w-8 h-8 text-blue-600" />,
      title: "Financial Services",
      description: "Secure fintech solutions, banking platforms, and payment systems with compliance-ready architecture",
      highlights: [
        "PCI-DSS compliant payment processing",
        "Fraud detection algorithms",
        "Blockchain integration"
      ]
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      title: "Healthcare",
      description: "HIPAA-compliant healthtech solutions that improve patient outcomes",
      highlights: [
        "EHR/EMR systems",
        "Telemedicine platforms",
        "Medical IoT integration"
      ]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      title: "E-Commerce",
      description: "High-conversion online stores and marketplace platforms",
      highlights: [
        "AI-powered recommendations",
        "Omnichannel solutions",
        "Inventory management"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
      title: "Education",
      description: "Edtech platforms that enhance learning experiences",
      highlights: [
        "LMS systems",
        "Virtual classroom solutions",
        "Adaptive learning tech"
      ]
    },
    {
      icon: <Plane className="w-8 h-8 text-red-500" />,
      title: "Travel & Hospitality",
      description: "Booking engines and property management systems",
      highlights: [
        "Dynamic pricing engines",
        "Reservation systems",
        "Loyalty programs"
      ]
    },
    {
      icon: <Factory className="w-8 h-8 text-indigo-600" />,
      title: "Manufacturing",
      description: "Industry 4.0 solutions for smart factories",
      highlights: [
        "IIoT platforms",
        "Predictive maintenance",
        "Supply chain optimization"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: "Sustainability",
      description: "Tech solutions for environmental impact",
      highlights: [
        "Carbon footprint tracking",
        "Smart energy systems",
        "Circular economy platforms"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: "Enterprise SaaS",
      description: "Custom business applications for operational excellence",
      highlights: [
        "Workflow automation",
        "Data analytics dashboards",
        "CRM/ERP solutions"
      ]
    }
  ]

  return (
<section className="py-20 bg-white dark:bg-gray-900 font-[var(--font-poppins)]">
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
        {/* Optional Label */}
      </motion.div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-poppins)]">
        <AnimatedText
          text="Industries We Serve"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-600 dark:to-blue-300"
          animationType="reveal"
          once={true}
        />
      </h2>

      <motion.p
        className="text-gray-600 dark:text-gray-400 font-[var(--font-lato)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We've delivered transformative solutions across diverse sectors, adapting our expertise to your unique industry challenges
      </motion.p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-[var(--font-lato)]">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-opacity-20" style={{
              backgroundColor: industry.icon.props.className.includes('blue') ? 'rgba(37, 99, 235, 0.1)' :
                industry.icon.props.className.includes('green') ? 'rgba(22, 163, 74, 0.1)' :
                  industry.icon.props.className.includes('purple') ? 'rgba(124, 58, 237, 0.1)' :
                    industry.icon.props.className.includes('amber') ? 'rgba(245, 158, 11, 0.1)' :
                      industry.icon.props.className.includes('red') ? 'rgba(239, 68, 68, 0.1)' :
                        industry.icon.props.className.includes('indigo') ? 'rgba(79, 70, 229, 0.1)' :
                          industry.icon.props.className.includes('emerald') ? 'rgba(16, 185, 129, 0.1)' :
                            'rgba(6, 182, 212, 0.1)'
            }}>
              {industry.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-[var(--font-poppins)]">{industry.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{industry.description}</p>
          <ul className="space-y-2">
            {industry.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )
}
