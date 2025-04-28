import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPostsSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            From our blog
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Learn more about development, design, and innovation from our latest articles.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group relative flex flex-col">
              <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 mt-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                    <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg transition-all duration-300"
          >
            View All Posts
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
