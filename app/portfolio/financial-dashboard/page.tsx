import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function FinancialDashboardPage() {
  return (
    <DetailedPageLayout
      title="Financial Dashboard"
      subtitle="An intuitive financial dashboard designed for a fintech startup, providing real-time data visualization and analytics."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Financial Dashboard", href: "/portfolio/financial-dashboard" },
      ]}
      backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675&q=80"
                alt="Financial Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                <p className="text-gray-600 dark:text-gray-400">FinanceWorks</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">3 months</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">Figma, Adobe XD, Chart.js, D3.js</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2>Project Overview</h2>
              <p>
                FinanceWorks, a growing fintech startup, approached us to design an intuitive financial dashboard that
                would provide their users with real-time data visualization and analytics. They needed a solution that
                would simplify complex financial information and help users make informed decisions about their
                investments and financial planning.
              </p>

              <h2>The Challenge</h2>
              <p>The client faced several challenges with their existing dashboard solution:</p>
              <ul>
                <li>Complex and cluttered interface that overwhelmed users with information</li>
                <li>Poor data visualization that made it difficult to interpret financial trends</li>
                <li>Lack of personalization options to meet different user needs</li>
                <li>Inconsistent design language across different sections of the dashboard</li>
                <li>Limited accessibility features for users with disabilities</li>
              </ul>

              <h2>Our Solution</h2>
              <p>
                We designed a comprehensive financial dashboard with a focus on user experience, data visualization, and
                accessibility. Our design process involved extensive user research, wireframing, prototyping, and
                usability testing to ensure the final product met the needs of FinanceWorks' diverse user base.
              </p>
              <p>Key features of the solution included:</p>
              <ul>
                <li>Clean, intuitive interface with a focus on essential information</li>
                <li>Interactive data visualizations that make financial trends easy to understand</li>
                <li>Customizable dashboard widgets that users can arrange according to their preferences</li>
                <li>Responsive design that works seamlessly across desktop and mobile devices</li>
                <li>Comprehensive design system for consistent visual language</li>
                <li>Accessibility features that comply with WCAG 2.1 guidelines</li>
                <li>Dark mode support for reduced eye strain during extended use</li>
              </ul>

              <h2>The Results</h2>
              <p>The new financial dashboard design delivered significant improvements for FinanceWorks:</p>
              <ul>
                <li>65% increase in user engagement with the dashboard</li>
                <li>40% reduction in support tickets related to dashboard usability</li>
                <li>90% positive feedback from user testing sessions</li>
                <li>Successful implementation by the development team with minimal design revisions</li>
                <li>Improved accessibility score from 72% to 98%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="Design Process"
        description="Our approach to designing the financial dashboard involved a comprehensive user-centered design process."
        image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
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
