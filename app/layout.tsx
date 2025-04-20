import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Lato } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatSystem from "@/components/chat-system"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import PageLoader from "@/components/page-loader"
import BackToTop from "@/components/back-to-top"
import { CustomCursor } from "@/components/ui/custom-cursor"

// Font configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Codersque Technologies",
  description: "Building Smarter Digital Solutions - Software Development Company in Guwahati, Assam",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lato.variable} font-poppins antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
