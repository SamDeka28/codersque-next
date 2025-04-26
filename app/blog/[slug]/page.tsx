import PageTransition from "@/components/page-transition"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import RelatedPosts from "@/components/blog/related-posts"
import CommentSection from "@/components/blog/comment-section"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"

// Generate static params for all blog posts
export function generateStaticParams() {
  // Directly use the imported blogPosts
  if (!Array.isArray(blogPosts)) return []
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Add type safety check
  if (!Array.isArray(blogPosts)) {
    console.error("blogPosts is not an array:", blogPosts);
    notFound();
  }

  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <BlogPostHeader slug={params.slug} />
      <BlogPostContent slug={params.slug} />
      <RelatedPosts slug={params.slug} />
      <CommentSection slug={params.slug} />
    </PageTransition>
  )
}