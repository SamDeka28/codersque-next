"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { ExternalLink, FileText, Video, Book, Code } from "lucide-react"

interface Resource {
  title: string
  description: string
  link: string
  type: "article" | "video" | "documentation" | "code" | "external"
}

interface ResourceLinksProps {
  title: string
  description: string
  resources: Resource[]
}

export function ResourceLinks({ title, description, resources }: ResourceLinksProps) {
  const { ref, isInView } = useScrollAnimation()

  const getIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "documentation":
        return <Book className="h-5 w-5" />
      case "code":
        return <Code className="h-5 w-5" />
      default:
        return <ExternalLink className="h-5 w-5" />
    }
  }

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mr-4 text-purple-600 dark:text-purple-400">{getIcon(resource.type)}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
