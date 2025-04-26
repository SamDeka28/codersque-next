import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function HealthFitnessAppPage() {
  return (
     <DetailedPageLayout
     title="Everfur"
     subtitle="Everfur's innovative pet health platform offers at-home tests, empowering pet owners to monitor and optimize their pets' health with personalized insights."     
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Everfur", href: "/portfolio/everfur" },
          ]}
          backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
        >
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-xl mb-12">
                  <Image
                    src="/everfur.png"
                    alt="Financial Dashboard"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                    <p className="text-gray-600 dark:text-gray-400">MPAARS Technologies</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                    <p className="text-gray-600 dark:text-gray-400">6 months</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                    <p className="text-gray-600 dark:text-gray-400">Next.js, Shopify, Firebase, Liquid, GraphQL, Shopify Custom App Development, Stripe</p>
                  </div>
                </div>

            <div className="space-y-12 mb-12">
              {/* Project Overview Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Everfur is an innovative pet health platform designed to empower pet owners to proactively monitor and improve their pets' well-being. By analyzing unique molecules found in a pet’s fur, Everfur provides invaluable insights into their health, helping owners anticipate their pets' needs before they arise. The platform offers easy-to-use at-home health test kits that track everything from joint health to early disease detection. Developed in partnership with veterinarians, Everfur’s products aim to optimize pet care, reduce the risk of health issues, and ensure pets lead healthy, active lives.

The platform also includes a range of educational tools, including comprehensive reports and expert recommendations, enabling pet owners to make informed decisions about their pets' care. Trusted by veterinarians and pet owners alike, Everfur provides a seamless and pain-free way to ensure pets' long-term health.            </p>
              </div>

              {/* Challenges Section */}
              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
              "Developed a seamless e-commerce platform integrating Shopify with custom Next.js components.",
              "Created a secure system for handling sensitive pet health data and test results.",
              "Implemented real-time tracking and notifications for pet health test orders.",
              "Built an intuitive dashboard for pet owners to view and understand test results.",
              "Integrated with veterinary systems for professional health insights and recommendations.",
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
                Everfur revolutionizes pet health management through innovative fur-based diagnostics. Using at-home test kits, we analyze over 200 molecules in pet fur to detect early signs of health conditions, particularly focusing on arthritis and joint health. The platform provides personalized health reports with actionable recommendations, combining AI analytics with veterinary expertise to help pet owners make informed decisions about their pets' wellbeing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Scientific fur-based health analysis",
                  "Quick test result processing",
                  "Comprehensive health report generation",
                  "Secure pet health data storage",
                  "Direct veterinary consultation platform",
                  "Evidence-based wellness recommendations",
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
                { metric: "95%", desc: "Test result accuracy rate" },
                { metric: "60%", desc: "Earlier health issue detection" },
                { metric: "40%", desc: "Reduction in vet visits" },
                { metric: "25K+", desc: "Pet health tests processed" },
                { metric: "85%", desc: "Customer satisfaction rate" },
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
        description="Our approach to developing the Everfur platform emphasized a customer-centric design philosophy and agile methodology for rapid iterations."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Development process"
      >
 <div className="space-y-4">
          {[
            { step: "User Research & Analysis", description: "Extensive research to understand customer behaviors, needs, and friction points." },
            { step: "UX/UI Design", description: "Crafted engaging, mobile-first user interfaces with a focus on performance and experience." },
            { step: "Backend & Integrations", description: "Real-time database integration with Firebase, seamless payment setup with Stripe, and logistics system sync." },
            { step: "Optimization & Testing", description: "Continuous performance optimization and user testing to fine-tune UX and ensure robust operations." },
          ].map((item: { step: string; description: string }, index) => (
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
