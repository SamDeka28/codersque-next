import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function HealthFitnessAppPage() {
  return (
     <DetailedPageLayout
     title="The Troy Agency"
     subtitle="Specialized consultancy empowering B2B professionals through LinkedIn outreach, video content, and email campaigns"
     breadcrumbs={[
         { label: "Home", href: "/" },
         { label: "Portfolio", href: "/portfolio" },
         { label: "The Troy Agency", href: "/portfolio/the-troy-agency" },
     ]}
     backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
        >
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-xl mb-12">
                  <Image
                    src="/tr.png"
                    alt="The Troy Agency"
                    width={1200}
                    height={675}
                    className="w-full h-auto lg:h-[675px] object-cover"
                  />
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                    <p className="text-gray-600 dark:text-gray-400">MPAARS Technologies</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                    <p className="text-gray-600 dark:text-gray-400">1 months</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                    <p className="text-gray-600 dark:text-</div>gray-400"> WordPress, Custom Theme Development, WooCommerce Advanced Custom Fields, Elementor Pro, SEO Optimization,</p>
                  </div>
                </div>

            <div className="space-y-12 mb-12">
              {/* Project Overview Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Troy Agency website project focused on creating a modern, professional online presence for this specialized B2B consultancy. Our WordPress implementation features a custom theme, optimized user experience, and seamless integration of their service offerings. The site effectively showcases their expertise in LinkedIn outreach, video content creation, and email campaign management.</p>
              </div>

              {/* Challenges Section */}
              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
              "Creating a professional and modern website design that reflects the agency's brand.",
              "Implementing a responsive layout that works seamlessly across all devices.",
              "Integrating dynamic content management for service offerings and case studies.",
              "Setting up optimized landing pages for lead generation and conversion.",
              "Ensuring fast loading times and SEO best practices for better visibility.",
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
              We developed a custom WordPress website with a modern, responsive design that effectively showcases The Troy Agency's services. Our solution includes custom post types for case studies, integrated lead generation forms, and optimized landing pages for each service offering.
              The implementation features a user-friendly content management system, enabling easy updates to service descriptions, portfolio items, and client testimonials.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Custom WordPress theme development",
                  "Responsive design implementation",
                  "SEO-optimized content structure",
                  "Lead generation form integration",
                  "Dynamic service page templates",
                  "Performance-optimized architecture",
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
                { metric: "80%", desc: "Increase in website traffic" },
                { metric: "60%", desc: "Growth in lead generation" },
                { metric: "45%", desc: "Higher conversion rate" },
                { metric: "3x", desc: "Increase in engagement" },
                { metric: "25%", desc: "More client inquiries" },
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
        title="Development Process"
        description="Our approach to developing the Algebrik platform emphasized a customer-centric design philosophy and agile methodology for rapid iterations."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Development process"
      >
 <div className="space-y-4">
          {[
            { step: "WordPress Theme Planning", description: "Analyzed requirements and planned custom theme structure with focus on client's business needs." },
            { step: "Custom Theme Development", description: "Built responsive WordPress theme with custom post types, advanced custom fields, and WooCommerce integration." },
            { step: "Plugin Integration", description: "Implemented essential plugins including Elementor Pro, Yoast SEO, and custom form solutions for lead generation." },
            { step: "Performance Optimization", description: "Optimized site speed, implemented caching solutions, and ensured mobile responsiveness across devices." },
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.step}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              App Screenshots
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/a1.png"
                  alt="App home screen"
                  width={300}
                  height={600}
                  className="w-full h-[450px] rounded-lg"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                    src="/a1.png"
                    alt="App home screen"
                    width={300}
                    height={600}
                    className="w-full h-[450px] rounded-lg"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/a1.png"
                  alt="App home screen"
                  width={300}
                  height={600}
                  className="w-full h-[450px] rounded-lg"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                src="/a1.png"
                alt="App home screen"
                width={300}
                height={600}
                className="w-full h-[450px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <ResourceLinks
        title="Related Resources"
        description="Explore these resources to learn more about mobile app development"
        resources={[
          {
            title: "React Native Best Practices",
            description: "Learn about the latest best practices in React Native development",
            link: "#",
            type: "article",
          },
          {
            title: "Health App UX Design",
            description: "A guide to designing user-friendly health and fitness applications",
            link: "#",
            type: "documentation",
          },
          {
            title: "Integrating with Health Platforms",
            description: "Best practices for integrating with HealthKit and Google Fit",
            link: "#",
            type: "article",
          },
          {
            title: "Mobile App Performance Optimization",
            description: "Strategies for optimizing the performance of React Native applications",
            link: "#",
            type: "video",
          },
        ]}
      /> */}

      <CTABanner
        title="Ready to Build Your Mobile App?"
        description="Contact us today to discuss your mobile app project requirements and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
