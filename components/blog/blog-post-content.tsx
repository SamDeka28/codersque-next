"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Facebook, Twitter, Linkedin, Mail, Bookmark, Heart } from "lucide-react"
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

  // Function to add spacing between paragraphs and headings
  const formatContent = (content: string) => {
    // Add more spacing between paragraphs
    let formattedContent = content.replace(/<\/p><p>/g, '</p><div class="py-4"></div><p>')

    // Add more spacing before headings
    formattedContent = formattedContent.replace(/<h2>/g, '<div class="pt-8"></div><h2>')
    formattedContent = formattedContent.replace(/<h3>/g, '<div class="pt-6"></div><h3>')

    // Add styling to headings
    formattedContent = formattedContent.replace(
      /<h2>/g,
      '<h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">',
    )
    formattedContent = formattedContent.replace(
      /<h3>/g,
      '<h3 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">',
    )

    // Style paragraphs
    formattedContent = formattedContent.replace(
      /<p>/g,
      '<p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">',
    )

    // Add dividers after some sections
    formattedContent = formattedContent.replace(
      /<\/h2><div class="py-4"><\/div><p>/g,
      '</h2><div class="w-24 h-1 bg-purple-500 rounded my-6"></div><p>',
    )

    return formattedContent
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-8">
            {/* Social Share Sidebar */}
            <motion.div
              className="hidden lg:flex flex-col items-center space-y-5 mr-6 sticky top-32 self-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors cursor-pointer">
                <Heart size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors cursor-pointer">
                <Bookmark size={18} />
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 rotate-90">Share</p>
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
              className="prose prose-lg dark:prose-invert max-w-none lg:max-w-3xl"
            >
              {/* Table of Contents */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-10 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Table of Contents</h3>
                <ul className="space-y-2">
                  {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((match, index) => {
                    const title = match.replace(/<h2>|<\/h2>/g, "")
                    const anchor = title.toLowerCase().replace(/\s+/g, "-")
                    return (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        <a
                          href={`#${anchor}`}
                          className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Introduction */}
              <div className="mb-10">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
              </div>

              {/* Content with added spacing */}
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 lg:hidden">
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
