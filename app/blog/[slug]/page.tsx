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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <BlogPostHeader slug={slug} />
      <BlogPostContent slug={slug} />
      {/* <AuthorBio slug={slug} /> */}
      <RelatedPosts slug={slug} />
      <CommentSection slug={slug} />
    </PageTransition>
  )
}
