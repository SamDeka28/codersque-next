"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { getBlogPostBySlug } from "@/data/blog-posts"

export default function BlogPostHeader({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <section className="pt-32 pb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Post not found
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </motion.div>

          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          {/* Author and Meta Info */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mb-10 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white dark:border-gray-800 shadow-md">
                <Image
                  src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                {/* <div className="text-sm">{post.authorTitle || "Content Writer"}</div> */}
              </div>
            </div>

            <div className="flex items-center text-sm">
              <Calendar size={16} className="mr-2 text-purple-500" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-2 text-purple-500" />
              <span>{post.readTime}</span>
            </div>

            <div className="ml-auto flex items-center">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Share2 size={16} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="rounded-2xl overflow-hidden mb-12 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={post.image || "/placeholder.svg?height=675&width=1200"}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
