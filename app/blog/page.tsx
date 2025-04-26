import PageTransition from "@/components/page-transition"
import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Codersque Technologies",
  description:
    "Explore the latest insights, trends, and tutorials in web development, mobile apps, and digital transformation.",
}

export default function BlogPage() {
  return (
    <PageTransition>
      <BlogHero />
      <BlogGrid />
    </PageTransition>
  )
}
