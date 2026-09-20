import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatSystem from "@/components/chat-system"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import PageLoader from "@/components/page-loader"
import BackToTop from "@/components/back-to-top"
import { CustomCursor } from "@/components/ui/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codersque.com"), // Set the base URL for resolving relative links
  title: "Codersque Technologies | Software Development Company in Guwahati, Assam",
  description:
    "Codersque Technologies provides innovative software development services, specializing in web and mobile app development, custom solutions, and scalable technologies. Based in Guwahati, Assam, we empower businesses with full ownership and independence.",
  keywords:
    "software development, web development, mobile app development, custom software solutions, scalable technology, Guwahati software company, app development agency, tech consulting, React, Next.js, custom solutions, SaaS, e-commerce development",
  authors: [{ name: "Codersque Technologies" }],
  robots: "index, follow",
  openGraph: {
    title: "Codersque Technologies | Empowering Businesses with Custom Software Solutions",
    description:
      "Codersque Technologies helps businesses in Guwahati, Assam, and beyond with tailored software solutions, from app development to digital transformation, offering full client independence.",
    images: ["/images/social-share-image.jpg"], // Relative URL
    type: "website",
    url: "https://www.codersque.com", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Codersque Technologies | Custom Software Development",
    description:
      "Looking for a software development partner? Codersque Technologies delivers scalable, custom solutions with a focus on empowering businesses to grow independently.",
    images: ["/images/social-share-image.jpg"], // Relative URL
    creator: "@Codersque",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <PageLoader />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <ScrollProgress />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatSystem />
            <BackToTop />
            <CustomCursor />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
