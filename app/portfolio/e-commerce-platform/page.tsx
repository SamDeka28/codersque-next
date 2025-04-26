import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function EcommercePlatformPage() {
  return (
    <DetailedPageLayout
      title="EverythinkInk"
      subtitle="A robust and scalable e-commerce platform for EverythinkInk, enabling seamless product management, personalized customer experiences, and secure transactions."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "EverythinkInk", href: "/portfolio/e-commerce-platform" },
      ]}
      backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
        src="/everythink.png"                alt="EverythinkInk"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                <p className="text-gray-600 dark:text-gray-400">BrandWorks Worldwide</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">5 months</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">Shopify, Node.js, Firebase, AWS S3, Stripe</p>
              </div>
            </div>

            <div className="space-y-12 mb-12">
              {/* Project Overview Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              EverythinkInk, a growing fashion brand, needed a modernized e-commerce platform that would scale with their business.
                They required a feature-rich solution capable of handling thousands of SKUs, personalized customer journeys, secure checkout experiences, and a fully integrated admin system.
              </p>
              </div>

              {/* Challenges Section */}
              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                "Inconsistent user experience across mobile and desktop",
                "Limited inventory visibility and inefficient stock management",
                "Slow website performance affecting SEO and conversions",
                "No personalization in product recommendations",
                "Fragmented payment processing systems"
                ].map((challenge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                </div>
                ))}
              </div>
              </div>

              {/* Solution Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We built a custom Shopify solution enhanced with Firebase for real-time operations and AWS S3 for efficient media management.
                The frontend focused on performance-first development, ensuring mobile-first responsiveness and seamless navigation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                "Fully responsive, performance-optimized storefront",
                "Personalized product suggestions using customer activity tracking",
                "Secure and streamlined Stripe payments",
                "Integrated order, inventory, and customer management",
                "Marketing automation integrations",
                "Third-party CRM and logistics provider integrations"
                ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
                ))}
              </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Impact & Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                { metric: "50%", desc: "Faster website load times" },
                { metric: "40%", desc: "Increase in sales conversions" },
                { metric: "30%", desc: "Higher engagement" },
                { metric: "28%", desc: "Reduction in abandoned carts" },
                { metric: "2x", desc: "Improved inventory turnover" }
                ].map((result, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.metric}</div>
                  <div className="text-gray-600 dark:text-gray-400">{result.desc}</div>
                </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="How We Built It"
        description="Our development journey focused on iterative progress, active client collaboration, and user-focused design choices to build a platform Confect can scale with confidence."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Development process"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Discovery Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We worked closely with Confect’s marketing and operations teams to understand pain points, user behaviors, and technical goals.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prototyping & User Flows</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We designed detailed wireframes, focusing on intuitive navigation, fast checkout flows, and engaging product displays.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Custom Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We integrated Shopify’s flexible back-end with a performance-optimized frontend, Stripe payments, and real-time database features with Firebase.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Rigorous Testing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted stress testing, security audits, mobile responsiveness checks, and UX testing to ensure a flawless launch.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Launch & Post-launch Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We launched the platform and trained Confect’s internal teams, ensuring a smooth handover with continuous post-launch optimizations.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="E-commerce homepage"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </section>
    </DetailedPageLayout>
  )
}
