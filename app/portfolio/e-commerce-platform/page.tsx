import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function EcommercePlatformPage() {
  return (
    <DetailedPageLayout
      title="E-commerce Platform"
      subtitle="A comprehensive e-commerce solution built with Next.js, featuring product recommendations, secure payments, and an admin dashboard."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "E-commerce Platform", href: "/portfolio/e-commerce-platform" },
      ]}
      backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675&q=80"
                alt="E-commerce Platform"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                <p className="text-gray-600 dark:text-gray-400">TechVentures</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">4 months</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">Next.js, React, Node.js, MongoDB, Stripe</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2>Project Overview</h2>
              <p>
                TechVentures, a leading electronics retailer, approached us to develop a modern e-commerce platform that
                would provide a seamless shopping experience for their customers. They needed a solution that could
                handle a large product catalog, provide personalized recommendations, process secure payments, and
                include a comprehensive admin dashboard for managing products, orders, and customers.
              </p>

              <h2>The Challenge</h2>
              <p>The client faced several challenges with their existing e-commerce solution:</p>
              <ul>
                <li>Poor performance and slow page load times, leading to high bounce rates</li>
                <li>Limited mobile responsiveness, resulting in a suboptimal experience for mobile users</li>
                <li>Lack of personalization features to engage customers and increase conversions</li>
                <li>Inefficient inventory and order management processes</li>
                <li>Security concerns with payment processing</li>
              </ul>

              <h2>Our Solution</h2>
              <p>
                We developed a comprehensive e-commerce platform using Next.js, a React framework that provides
                server-side rendering and static site generation capabilities. This approach ensured fast page load
                times, excellent SEO performance, and a smooth user experience.
              </p>
              <p>Key features of the solution included:</p>
              <ul>
                <li>Responsive design that works seamlessly across all devices</li>
                <li>Advanced search and filtering capabilities for easy product discovery</li>
                <li>Personalized product recommendations based on user behavior and preferences</li>
                <li>Secure payment processing with Stripe integration</li>
                <li>Comprehensive admin dashboard for managing products, orders, and customers</li>
                <li>Real-time inventory management and order tracking</li>
                <li>Integration with existing CRM and ERP systems</li>
              </ul>

              <h2>The Results</h2>
              <p>The new e-commerce platform delivered significant improvements for TechVentures:</p>
              <ul>
                <li>45% increase in conversion rates</li>
                <li>60% reduction in page load times</li>
                <li>35% increase in average order value through personalized recommendations</li>
                <li>50% reduction in order processing time through improved admin workflows</li>
                <li>30% increase in mobile sales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="Development Process"
        description="Our approach to developing the e-commerce platform involved a collaborative process with the client, ensuring that the solution met their specific needs and requirements."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Development process"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted thorough research to understand the client's business, target audience, and specific
                requirements for the e-commerce platform.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Design & Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We created wireframes and interactive prototypes to visualize the user interface and experience,
                iterating based on client feedback.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We implemented the frontend and backend components of the platform, integrating with payment gateways
                and other third-party services.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing & Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted thorough testing to ensure the platform was bug-free, secure, and performed well under
                various conditions.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment & Training</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We deployed the platform and provided comprehensive training to the client's team on how to use the
                admin dashboard and manage the system.
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
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Product page"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Shopping cart"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Admin dashboard"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Product recommendations"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Checkout process"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResourceLinks
        title="Related Resources"
        description="Explore these resources to learn more about e-commerce development"
        resources={[
          {
            title: "E-commerce Best Practices",
            description: "Learn about the latest best practices in e-commerce development",
            link: "#",
            type: "article",
          },
          {
            title: "Next.js for E-commerce",
            description: "A guide to building e-commerce platforms with Next.js",
            link: "#",
            type: "documentation",
          },
          {
            title: "Secure Payment Processing",
            description: "Best practices for implementing secure payment processing in web applications",
            link: "#",
            type: "article",
          },
          {
            title: "Personalization in E-commerce",
            description: "Strategies for implementing personalized recommendations in e-commerce",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Start Your E-commerce Project?"
        description="Contact us today to discuss your e-commerce project requirements and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
