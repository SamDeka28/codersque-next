import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function FinancialDashboardPage() {
  return (
    <DetailedPageLayout
      title="Algebrik"
      subtitle="An intuitive financial dashboard designed for a fintech startup, providing real-time data visualization and analytics."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Financial Dashboard", href: "/portfolio/albegrik" },
      ]}
      backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
                src="/albegrik.png"
                alt="Financial Dashboard"
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
                <p className="text-gray-600 dark:text-gray-400">2 months</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">Next.js, Framer Motion</p>
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
        title="Design Process"
        description="Our approach to designing the financial dashboard involved a comprehensive user-centered design process."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Design process"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">User Research</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted interviews and surveys with target users to understand their needs, pain points, and
                preferences.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Information Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We organized the dashboard content and functionality in a logical and intuitive structure.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Wireframing & Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We created low-fidelity wireframes and interactive prototypes to test and refine the user experience.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visual Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We developed a comprehensive design system and applied it to create high-fidelity mockups.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Usability Testing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted usability tests with real users to identify and address any issues before finalization.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Dashboard Design Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Dashboard overview"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Financial analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Portfolio tracking"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Mobile dashboard view"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResourceLinks
        title="Related Resources"
        description="Explore these resources to learn more about UI/UX design for financial applications"
        resources={[
          {
            title: "Financial Dashboard Design Principles",
            description: "Learn about best practices for designing effective financial dashboards",
            link: "#",
            type: "article",
          },
          {
            title: "Data Visualization for Finance",
            description: "A guide to creating meaningful data visualizations for financial information",
            link: "#",
            type: "documentation",
          },
          {
            title: "Accessibility in Financial Applications",
            description: "Best practices for creating accessible financial interfaces",
            link: "#",
            type: "article",
          },
          {
            title: "Design Systems for Fintech",
            description: "How to create and implement design systems for financial technology products",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Design Your Financial Dashboard?"
        description="Contact us today to discuss your UI/UX design project requirements and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
