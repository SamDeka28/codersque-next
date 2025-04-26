import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function HealthFitnessAppPage() {
  return (
     <DetailedPageLayout
          title="Algebrik"
          subtitle="Algebrik's cloud-native, AI-powered platform empowers lenders to simplify lending experiences and delight borrowers."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Albegrik", href: "/portfolio/albegrik" },
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
            Algebrik's cloud-native, AI-powered platform empowers lenders to simplify lending experiences and delight borrowers. Built using Next.js, the platform delivers a fast, intelligent, and seamless experience across lending workflows — from loan origination to customer onboarding and servicing.</p>
              </div>

              {/* Challenges Section */}
              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
              "Developed responsive, scalable UI components using Next.js and Tailwind CSS.",
              "Integrated complex API systems for real-time loan management and customer interactions.",
              "Implemented secure authentication and role-based access for lenders and borrowers.",
              "Built dynamic forms for borrower applications and document uploads.",
              "Focused on performance optimization, SEO, and accessibility best practices.",
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
              At Algebrik, we designed and developed a cloud-native, AI-powered lending platform that empowers financial institutions to modernize every step of the borrower journey.
              Our solution leverages Next.js for high-performance web applications, integrates AI models for intelligent decision-making, and uses secure cloud infrastructure to ensure scalability and data protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "AI-powered loan assessment and approval",
                  "Real-time borrower credit analysis",
                  "Automated document verification",
                  "Secure digital loan application process",
                  "Multi-lender integration capabilities",
                  "Customizable lending workflows",
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
                { metric: "30%", desc: "Higher engagement rates" },
                { metric: "28%", desc: "Reduction in abandoned carts" },
                { metric: "2x", desc: "Faster inventory turnover" },
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
            { step: "User Research & Analysis", description: "Extensive research to understand customer behaviors, needs, and friction points." },
            { step: "UX/UI Design", description: "Crafted engaging, mobile-first user interfaces with a focus on performance and experience." },
            { step: "Backend & Integrations", description: "Real-time database integration with Firebase, seamless payment setup with Stripe, and logistics system sync." },
            { step: "Optimization & Testing", description: "Continuous performance optimization and user testing to fine-tune UX and ensure robust operations." },
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

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
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
      </section>

      <ResourceLinks
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
      />

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
