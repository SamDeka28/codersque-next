"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { getBlogPostBySlug } from "@/data/blog-posts"

export default function BlogPostContent({ slug }: { slug: string }) {
  const { ref, isInView } = useScrollAnimation()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p>Content not found</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex">
            {/* Social Share Sidebar */}
            <motion.div
              className="hidden lg:flex flex-col items-center space-y-4 mr-6 sticky top-32 self-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Share</p>
              <button
                aria-label="Share on Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook size={18} />
              </button>
              <button
                aria-label="Share on Twitter"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter size={18} />
              </button>
              <button
                aria-label="Share on LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={18} />
              </button>
              <button
                aria-label="Share via Email"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
              >
                <Mail size={18} />
              </button>
            </motion.div>

            {/* Main Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Mobile Share Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8 lg:hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">Share:</p>
            <button
              aria-label="Share on Facebook"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
            >
              <Facebook size={18} />
            </button>
            <button
              aria-label="Share on Twitter"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter size={18} />
            </button>
            <button
              aria-label="Share on LinkedIn"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </button>
            <button
              aria-label="Share via Email"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
            >
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
