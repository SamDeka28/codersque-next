import PageTransition from "@/components/page-transition"
import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"

export default function BlogPage() {
  return (
    <PageTransition>
      <BlogHero />
      <BlogGrid />
    </PageTransition>
  )
}
