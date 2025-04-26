"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Tag, ArrowLeft } from "lucide-react"
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
        <div className="max-w-4xl mx-auto">
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

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 mb-8 gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mr-6">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mr-6">
              <Tag size={16} className="mr-2" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center">
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden mb-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
