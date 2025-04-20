"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, ArrowLeft } from "lucide-react"
import PageTransition from "@/components/page-transition"

interface BreadcrumbItem {
  label: string
  href: string
}

interface DetailedPageLayoutProps {
  title: string
  subtitle: string
  breadcrumbs: BreadcrumbItem[]
  backLink?: {
    label: string
    href: string
  }
  children: React.ReactNode
}

export default function DetailedPageLayout({
  title,
  subtitle,
  breadcrumbs,
  backLink,
  children,
}: DetailedPageLayoutProps) {
  return (
    <PageTransition>
      <div className="bg-gray-50 dark:bg-gray-900 pt-32 pb-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />}
                  <Link
                    href={item.href}
                    className={`inline-flex items-center text-sm font-medium ${
                      index === breadcrumbs.length - 1
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* Back link if provided */}
          {backLink && (
            <Link
              href={backLink.href}
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLink.label}
            </Link>
          )}

          {/* Page header */}
          <div className="max-w-3xl mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="py-16 bg-white dark:bg-gray-950">{children}</div>
    </PageTransition>
  )
}
