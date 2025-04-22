"use client"


import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

// Update the navItems array to include "Ready to Fire Us?"
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Ready to Fire Us?", path: "/ready-to-fire-us" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg border border-gray-100 dark:border-gray-800 px-6 py-3">
          <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
<div className="flex items-center">
<motion.img
  src="/logo.png"
  alt="Codersque Logo"
  width={40}
  height={40}
  className="mr-2"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
/>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
>
  Codersque
</motion.div>
</div>
</Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? "text-white"
                      : "text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400"
                  }`}
                >
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
              <div className="pl-2">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 p-2 rounded-full"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-2"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-full ${
                      pathname === item.path
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                        : "text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
