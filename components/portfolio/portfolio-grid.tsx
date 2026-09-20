"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, X, Filter } from "lucide-react"
import { portfolioProjects, portfolioCategories, type PortfolioProject } from "@/data/portfolio"
import { ProjectCollage } from "@/components/portfolio/project-collage"

const projects = portfolioProjects

const categories = [...portfolioCategories]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
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
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Featured Projects */}
        <div className="mb-24">
          <div className="mb-12">
            <p className="eyebrow mb-4">Featured</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Recent work</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Live products across mobile, web, marketplaces, and commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .slice(0, 6)
              .map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card">
                    <div className="relative overflow-hidden aspect-video">
                      <ProjectCollage project={project} />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="mt-auto inline-flex items-center text-sm font-medium"
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
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">All projects</h2>
          <p className="mt-2 text-muted-foreground">Filter by practice area.</p>

          {/* Mobile filter button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium"
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
                className={`px-3 py-1.5 text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:text-foreground"
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
                      className={`px-4 py-2 text-left text-sm ${
                        selectedCategory === category
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted"
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
            {filteredProjects.map((project: PortfolioProject) => (
              <motion.div key={project.slug} variants={item} layout className="cursor-pointer">
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card">
                    <div className="relative overflow-hidden aspect-video">
                      <ProjectCollage project={project} />
                      <div className="absolute top-4 left-4">
                        <span className="border border-border bg-background px-2 py-1 text-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="border border-border px-2 py-1 text-xs text-muted-foreground"
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
