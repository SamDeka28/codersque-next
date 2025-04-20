"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default function BlogPostContent({ slug }: { slug: string }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex">
            {/* Social Share Sidebar */}
            <motion.div
              className="hidden lg:flex flex-col items-center space-y-4 mr-6 sticky top-32 self-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Share</p>
              <button
                aria-label="Share on Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook size={18} />
              </button>
              <button
                aria-label="Share on Twitter"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter size={18} />
              </button>
              <button
                aria-label="Share on LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={18} />
              </button>
              <button
                aria-label="Share via Email"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
              >
                <Mail size={18} />
              </button>
            </motion.div>

            {/* Main Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p>
                The web development landscape is constantly evolving, with new technologies, frameworks, and
                methodologies emerging at a rapid pace. Staying ahead of these trends is crucial for businesses and
                developers who want to deliver cutting-edge digital experiences.
              </p>

              <h2>1. The Rise of Web3 and Blockchain Integration</h2>
              <p>
                Web3 represents the next generation of the internet, characterized by decentralization, blockchain
                technology, and token-based economics. In 2023, we're seeing increased adoption of Web3 technologies in
                mainstream web development, with applications ranging from decentralized finance (DeFi) platforms to
                non-fungible token (NFT) marketplaces.
              </p>
              <p>
                Developers are incorporating blockchain functionality into traditional web applications, creating hybrid
                experiences that bridge the gap between Web2 and Web3. This integration opens up new possibilities for
                user ownership, digital identity, and secure transactions.
              </p>

              <h2>2. AI-Driven Development Tools</h2>
              <p>
                Artificial intelligence is transforming the way we build websites and web applications. AI-powered
                development tools can now generate code, create design assets, and automate repetitive tasks,
                significantly accelerating the development process.
              </p>
              <p>
                From GitHub Copilot to AI design tools like Midjourney and DALL-E, developers have access to an
                expanding toolkit that enhances productivity and creativity. These tools are not replacing human
                developers but rather augmenting their capabilities and allowing them to focus on higher-level tasks.
              </p>

              <h2>3. Server-Side Rendering and Edge Computing</h2>
              <p>
                As web applications become more complex, optimizing performance and user experience has become
                paramount. Server-side rendering (SSR) and edge computing are addressing these challenges by bringing
                computation closer to the end user.
              </p>
              <p>
                Frameworks like Next.js have popularized SSR and static site generation (SSG), enabling developers to
                build fast, SEO-friendly applications. Meanwhile, edge computing platforms are allowing code to run on
                servers physically closer to users, reducing latency and improving performance.
              </p>

              <h2>4. WebAssembly Going Mainstream</h2>
              <p>
                WebAssembly (Wasm) continues to gain traction as a powerful technology that enables high-performance
                code execution in web browsers. Originally designed to allow languages like C, C++, and Rust to run in
                browsers, Wasm is now being used for a wide range of applications, from gaming to data visualization.
              </p>
              <p>
                The ability to run complex, computation-heavy applications in the browser without sacrificing
                performance opens up new possibilities for web developers. As tooling improves and more languages add
                Wasm support, we can expect to see increased adoption across the industry.
              </p>

              <h2>5. Enhanced Focus on Accessibility</h2>
              <p>
                Web accessibility is no longer an afterthought but a fundamental aspect of modern web development. In
                2023, we're seeing a stronger emphasis on creating inclusive web experiences that can be used by people
                of all abilities.
              </p>
              <p>
                This trend is driven by both ethical considerations and legal requirements, as more countries implement
                accessibility regulations. Developers are incorporating accessibility testing into their workflows and
                leveraging tools that help identify and fix accessibility issues early in the development process.
              </p>

              <h2>Conclusion</h2>
              <p>
                The web development landscape in 2023 is characterized by a blend of cutting-edge technologies, enhanced
                performance optimization, and a stronger focus on user experience and accessibility. By staying informed
                about these trends and selectively adopting relevant technologies, businesses can create digital
                experiences that stand out in an increasingly competitive market.
              </p>
              <p>
                At Codersque Technologies, we're committed to staying at the forefront of these developments, helping
                our clients leverage the latest technologies to achieve their business objectives. Whether you're
                looking to build a new web application or modernize an existing one, our team of experts is here to
                guide you through the process.
              </p>

              {/* Mobile Share Buttons */}
              <div className="flex justify-center items-center space-x-4 mt-8 lg:hidden">
                <p className="text-sm text-gray-500 dark:text-gray-400">Share:</p>
                <button
                  aria-label="Share on Facebook"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                >
                  <Facebook size={18} />
                </button>
                <button
                  aria-label="Share on Twitter"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                >
                  <Twitter size={18} />
                </button>
                <button
                  aria-label="Share on LinkedIn"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  aria-label="Share via Email"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
                >
                  <Mail size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
