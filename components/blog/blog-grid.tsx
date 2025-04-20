"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging technologies and trends that are shaping the future of web development and how they can benefit your business.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "June 15, 2023",
    author: "Rahul Sharma",
    category: "Web Development",
    slug: "future-web-development-trends",
  },
  {
    id: 2,
    title: "Why User Experience Should Be Your Top Priority",
    excerpt:
      "Learn why investing in user experience design is crucial for business success and how it impacts customer satisfaction and retention.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "May 28, 2023",
    author: "Priya Singh",
    category: "UI/UX Design",
    slug: "user-experience-priority",
  },
  {
    id: 3,
    title: "Building Scalable Mobile Applications with React Native",
    excerpt:
      "Discover best practices and strategies for developing scalable, high-performance mobile applications using React Native.",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "May 12, 2023",
    author: "Amit Das",
    category: "Mobile Development",
    slug: "scalable-react-native-apps",
  },
  {
    id: 4,
    title: "Implementing AI in Your Business: Practical Applications",
    excerpt:
      "Explore practical ways to integrate artificial intelligence into your business operations to improve efficiency and drive innovation.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "April 30, 2023",
    author: "Meera Patel",
    category: "AI Solutions",
    slug: "ai-business-applications",
  },
  {
    id: 5,
    title: "The Benefits of Cloud-Native Architecture",
    excerpt:
      "Learn about the advantages of cloud-native architecture and how it can help your organization achieve greater agility and scalability.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "April 15, 2023",
    author: "Vikram Choudhury",
    category: "Cloud Services",
    slug: "cloud-native-architecture-benefits",
  },
  {
    id: 6,
    title: "Securing Your Web Applications: Best Practices",
    excerpt:
      "Discover essential security practices to protect your web applications from common vulnerabilities and cyber threats.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "March 28, 2023",
    author: "Rahul Sharma",
    category: "Web Development",
    slug: "web-app-security-practices",
  },
  {
    id: 7,
    title: "Optimizing Website Performance for Better Conversion Rates",
    excerpt:
      "Learn how website performance impacts conversion rates and strategies to optimize your site for speed and user engagement.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "March 15, 2023",
    author: "Sunita Roy",
    category: "Digital Marketing",
    slug: "website-performance-conversion-rates",
  },
  {
    id: 8,
    title: "The Role of DevOps in Modern Software Development",
    excerpt:
      "Understand the importance of DevOps practices in streamlining development processes and improving collaboration between teams.",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "February 28, 2023",
    author: "Vikram Choudhury",
    category: "Development",
    slug: "devops-in-software-development",
  },
  {
    id: 9,
    title: "Creating Accessible Web Applications for All Users",
    excerpt:
      "Discover guidelines and techniques for building inclusive web applications that are accessible to users with disabilities.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    date: "February 15, 2023",
    author: "Priya Singh",
    category: "Web Development",
    slug: "accessible-web-applications",
  },
]

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  "AI Solutions",
  "Cloud Services",
  "Digital Marketing",
  "Development",
]

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query),
      )
    }

    setFilteredPosts(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [selectedCategory, searchQuery])

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-auto md:min-w-[320px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                size={18}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs rounded-full bg-purple-600 text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
                          <div className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No articles found. Try a different search or category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition-colors`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
