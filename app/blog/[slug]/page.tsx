import PageTransition from "@/components/page-transition"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import RelatedPosts from "@/components/blog/related-posts"
import CommentSection from "@/components/blog/comment-section"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <PageTransition>
      <BlogPostHeader slug={params.slug} />
      <BlogPostContent slug={params.slug} />
      <RelatedPosts slug={params.slug} />
      <CommentSection slug={params.slug} />
    </PageTransition>
  )
}
