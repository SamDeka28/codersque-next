"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A comprehensive e-commerce solution built with Next.js, featuring product recommendations, secure payments, and an admin dashboard.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    link: "/portfolio/e-commerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Health & Fitness App",
    category: "Mobile Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A mobile application for iOS and Android that helps users track their fitness goals, nutrition, and workout routines.",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit API"],
    link: "/portfolio/health-fitness-app",
    featured: true,
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "An intuitive financial dashboard designed for a fintech startup, providing real-time data visualization and analytics.",
    technologies: ["Figma", "Adobe XD", "Chart.js", "D3.js"],
    link: "/portfolio/financial-dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A property listing platform that connects buyers, sellers, and agents with advanced search and filtering capabilities.",
    technologies: ["React", "Redux", "Express", "PostgreSQL", "Google Maps API"],
    link: "/portfolio/real-estate-marketplace",
    featured: false,
  },
  {
    id: 5,
    title: "AI-powered Chatbot",
    category: "AI Solutions",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "An intelligent customer service chatbot that uses natural language processing to answer customer queries and provide support.",
    technologies: ["Python", "TensorFlow", "NLP", "DialogFlow", "Node.js"],
    link: "/portfolio/ai-chatbot",
    featured: true,
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A social networking application focused on connecting professionals in the creative industry.",
    technologies: ["Flutter", "Firebase", "GraphQL", "AWS", "WebRTC"],
    link: "/portfolio/social-media-app",
    featured: false,
  },
  {
    id: 7,
    title: "Educational Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "An online learning platform with interactive courses, quizzes, and progress tracking for students and educators.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    link: "/portfolio/educational-platform",
    featured: false,
  },
  {
    id: 8,
    title: "Inventory Management System",
    category: "Enterprise Solutions",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A comprehensive inventory management solution for retail businesses to track stock, orders, and generate reports.",
    technologies: ["Angular", "Express", "MySQL", "Docker", "Jenkins"],
    link: "/portfolio/inventory-management",
    featured: false,
  },
  {
    id: 9,
    title: "Tourism Mobile App",
    category: "Mobile Development",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A travel guide application highlighting local attractions, restaurants, and events with offline maps and itinerary planning.",
    technologies: ["React Native", "Redux", "Firebase", "Google Maps API", "Stripe"],
    link: "/portfolio/tourism-app",
    featured: false,
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "AI Solutions",
  "Enterprise Solutions",
]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Featured Projects */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
            >
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
            >
              Our Best Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400"
            >
              Explore some of our most successful and innovative projects
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .slice(0, 3)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl h-full flex flex-col border border-gray-100 dark:border-gray-700">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <span className="inline-block px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-medium mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/20 text-white">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors mt-auto"
                      >
                        View Project
                        <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            All Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 mb-8"
          >
            Browse our complete portfolio of work across different categories
          </motion.p>

          {/* Mobile filter button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium"
            >
              <Filter size={16} />
              <span>Filter Projects</span>
            </button>
          </div>

          {/* Category Filters - Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Mobile filter dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Filter by Category</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsFilterOpen(false)
                      }}
                      className={`px-4 py-2 rounded-lg text-left text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-medium mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={selectedProject.link}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
