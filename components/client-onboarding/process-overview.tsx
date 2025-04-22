"use client"

import { motion } from "framer-motion"
import { ClipboardList, MessageSquare, Lightbulb, Code, Rocket, Users, BarChart2, ShieldCheck, GitMerge, Smartphone, Server, Globe } from "lucide-react"

export default function ProcessOverview() {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Discovery Session",
      description: "We conduct in-depth interviews to understand your business objectives, target audience, and technical requirements.",
      duration: "1-2 days",
      features: ["Requirement analysis", "Competitor research", "Stakeholder interviews"]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Strategy Workshop",
      description: "Collaborative sessions to define project scope, KPIs, and success metrics with your team.",
      duration: "2-3 days",
      features: ["Technical feasibility study", "User journey mapping", "Solution architecture"]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Solution Design",
      description: "Our experts create detailed technical specifications and UI/UX prototypes for your approval.",
      duration: "3-5 days",
      features: ["Wireframing", "Tech stack selection", "System architecture"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Agile Development",
      description: "Incremental development with bi-weekly demos and continuous integration/deployment.",
      duration: "2-8 weeks",
      features: ["Sprint planning", "Code reviews", "Automated testing"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing across devices and platforms with real user feedback sessions.",
      duration: "1-2 weeks",
      features: ["Performance testing", "Security audits", "User acceptance testing"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment & Growth",
      description: "Seamless launch with monitoring, analytics, and iterative improvements.",
      duration: "Ongoing",
      features: ["CI/CD pipeline", "Real-time monitoring", "Growth optimization"]
    }
  ]

  const techDomains = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      name: "Mobile Development",
      description: "iOS, Android, and cross-platform solutions"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Web Applications",
      description: "Responsive, PWAs, and enterprise-grade web apps"
    },
    {
      icon: <Server className="w-5 h-5" />,
      name: "Backend Systems",
      description: "Microservices, APIs, and cloud infrastructure"
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      name: "Data Analytics",
      description: "BI tools, dashboards, and predictive modeling"
    },
    {
      icon: <GitMerge className="w-5 h-5" />,
      name: "DevOps",
      description: "Automation, containerization, and scaling"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      name: "Security",
      description: "Penetration testing and compliance"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Process Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-5">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Transparent Development Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our 6-phase approach ensures quality, transparency, and alignment with your business goals at every step.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Domains Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50 border-t border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Technology Domains We Master
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge solutions across all major technology verticals.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 mt-1">
                    {domain.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{domain.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{domain.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Schedule Consultation
              </a>
              <a
                href="/portfolio"
                className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}