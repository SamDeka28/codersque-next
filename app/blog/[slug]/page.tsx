import PageTransition from "@/components/page-transition"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
// import AuthorBio from "@/components/blog/author-bio"
import RelatedPosts from "@/components/blog/related-posts"
import CommentSection from "@/components/blog/comment-section"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Check if the blog post exists
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If the post doesn't exist, return a 404
  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <BlogPostHeader slug={params.slug} />
      <BlogPostContent slug={params.slug} />
      {/* <AuthorBio slug={params.slug} /> */}
      <RelatedPosts slug={params.slug} />
      <CommentSection slug={params.slug} />
    </PageTransition>
  )
}
