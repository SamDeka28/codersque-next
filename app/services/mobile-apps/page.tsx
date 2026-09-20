import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function MobileAppDevelopmentPage() {
  return (
    <DetailedPageLayout
      title="Mobile App Development"
      subtitle="Native and cross-platform mobile applications for iOS and Android devices."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile App Development", href: "/services/mobile-apps" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
      image="/stock/mobile.jpg"
    >
      <ContentSection
        title="Innovative Mobile Solutions"
        description="We create cutting-edge mobile applications that deliver exceptional user experiences across all devices. Our team specializes in both native and cross-platform development, ensuring your app performs optimally on any platform."
        image="/stock/mobile.jpg"
        imageAlt="Mobile app development"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Native iOS Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We build high-performance iOS applications using Swift and SwiftUI, optimized for all Apple devices.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Native Android Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create robust Android applications using Kotlin and Jetpack Compose for the diverse Android ecosystem.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cross-Platform Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We develop cross-platform apps using React Native and Flutter to maximize code reuse and reduce
              time-to-market.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">App Maintenance & Updates</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We provide ongoing support, maintenance, and updates to ensure your app remains compatible with the latest
              OS versions.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Mobile Development Process"
        description="We follow a comprehensive approach to mobile app development that ensures your app is built to the highest standards of quality and user experience."
        image="/stock/mobile.jpg"
        imageAlt="Mobile development process"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Strategy & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We define your app's goals, target audience, and key features to create a comprehensive development
                strategy.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We create intuitive and engaging user interfaces that follow platform-specific design guidelines.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our developers write clean, efficient code using the latest technologies and best practices.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing & QA</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conduct thorough testing across multiple devices to ensure your app is bug-free and performs well.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We handle the app store submission process and provide ongoing support and updates.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our Mobile App Projects"
        description="Take a look at some of our successful mobile app development projects"
        examples={[
          {
            title: "Health & Fitness App",
            description: "A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.",
            image:
              "/stock/mobile.jpg",
          },
          {
            title: "Social Media App",
            description: "A social networking platform for creative professionals with portfolio showcasing features.",
            image:
              "/stock/mobile.jpg",
          },
          {
            title: "Tourism Mobile App",
            description: "A travel guide app with offline maps, local attractions, and personalized itineraries.",
            image:
              "/stock/mobile.jpg",
          },
        ]}
      />

      <ContentSection
        title="Technologies We Use"
        description="We leverage the latest mobile development technologies and frameworks to build high-quality applications."
        image="/stock/mobile.jpg"
        imageAlt="Mobile development technologies"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Swift</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Kotlin</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">React Native</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Flutter</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Firebase</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">SwiftUI</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Jetpack Compose</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">GraphQL</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Redux</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about mobile app development"
        resources={[
          {
            title: "Mobile App Development Guide",
            description: "A comprehensive guide to building successful mobile applications",
            link: "#",
            type: "article",
          },
          {
            title: "Native vs Cross-Platform Development",
            description: "Understanding the pros and cons of different mobile development approaches",
            link: "#",
            type: "article",
          },
          {
            title: "Mobile UI/UX Best Practices",
            description: "Design principles for creating intuitive mobile interfaces",
            link: "#",
            type: "documentation",
          },
          {
            title: "App Store Optimization Tips",
            description: "Strategies to improve your app's visibility in app stores",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Build Your Mobile App?"
        description="Contact us today to discuss your mobile app project and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
