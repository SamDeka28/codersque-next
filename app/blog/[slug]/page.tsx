import PageTransition from "@/components/page-transition"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import RelatedPosts from "@/components/blog/related-posts"
import CommentSection from "@/components/blog/comment-section"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/data/blog-posts"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogPosts = await import("@/data/blog-posts").then((mod) => mod.blogPosts)
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <RelatedPosts slug={params.slug} />
      <CommentSection slug={params.slug} />
    </PageTransition>
  )
}