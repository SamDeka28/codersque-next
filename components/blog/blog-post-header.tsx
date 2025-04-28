"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getBlogPostBySlug } from "@/data/blog-posts"
import { BlogPost } from "@/data/blog-posts"

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="relative">
      <div className="relative h-[400px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-white">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-gray-300 text-sm">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
