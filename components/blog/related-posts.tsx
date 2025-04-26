"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getRelatedPosts } from "@/data/blog-posts"

export default function RelatedPosts({ slug }: { slug: string }) {
  const relatedPosts = getRelatedPosts(slug)
  const { ref, isInView } = useScrollAnimation()

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Related Articles</h2>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{post.excerpt}</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
