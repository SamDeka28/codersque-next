import type React from "react"
import "../blog/blog-content.css"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
