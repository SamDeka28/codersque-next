import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"
import Image from "next/image"

export default function HealthFitnessAppPage() {
  return (
    <DetailedPageLayout
      title="Health & Fitness App"
      subtitle="A mobile application for iOS and Android that helps users track their fitness goals, nutrition, and workout routines."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Health & Fitness App", href: "/portfolio/health-fitness-app" },
      ]}
      backLink={{ label: "Back to Portfolio", href: "/portfolio" }}
    >
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675&q=80"
                alt="Health & Fitness App"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                <p className="text-gray-600 dark:text-gray-400">HealthTech Solutions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">6 months</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React Native, Firebase, Redux, HealthKit, Google Fit API
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2>Project Overview</h2>
              <p>
                HealthTech Solutions approached us to develop a comprehensive health and fitness mobile application that
                would help users track their fitness goals, nutrition, and workout routines. They wanted a solution that
                would integrate with wearable devices, provide personalized recommendations, and foster a community of
                health-conscious individuals.
              </p>

              <h2>The Challenge</h2>
              <p>The client faced several challenges with their existing fitness tracking solution:</p>
              <ul>
                <li>Limited integration with health tracking devices and platforms</li>
                <li>Poor user engagement and retention rates</li>
                <li>Lack of personalization features to keep users motivated</li>
                <li>Difficulty in scaling the platform to accommodate growing user base</li>
                <li>Inconsistent user experience across iOS and Android platforms</li>
              </ul>

              <h2>Our Solution</h2>
              <p>
                We developed a cross-platform mobile application using React Native that provides a seamless experience
                across both iOS and Android devices. The app integrates with HealthKit on iOS and Google Fit on Android
                to collect and analyze health and fitness data.
              </p>
              <p>Key features of the solution included:</p>
              <ul>
                <li>Personalized workout plans based on user goals and fitness levels</li>
                <li>Nutrition tracking and meal planning with a comprehensive food database</li>
                <li>Integration with wearable devices for real-time health data monitoring</li>
                <li>Social features to connect with friends and participate in challenges</li>
                <li>Progress tracking with detailed analytics and visualizations</li>
                <li>Gamification elements to increase user engagement and motivation</li>
                <li>Offline functionality for tracking workouts without internet connection</li>
              </ul>

              <h2>The Results</h2>
              <p>The new health and fitness app delivered significant improvements for HealthTech Solutions:</p>
              <ul>
                <li>70% increase in user engagement and retention</li>
                <li>4.8-star average rating on app stores</li>
                <li>50% increase in daily active users within three months of launch</li>
                <li>40% improvement in workout completion rates through personalized plans</li>
                <li>Successful integration with major health platforms and wearable devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        title="Development Process"
        description="Our approach to developing the health and fitness app involved a user-centered design process and agile development methodology."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="App development process"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">User Research & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted extensive user research to understand the needs, preferences, and pain points of fitness
                app users.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">UX/UI Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We created intuitive and engaging user interfaces with a focus on simplicity and ease of use.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Cross-Platform Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We built the app using React Native to ensure consistent performance across iOS and Android platforms.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Health Platform Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We integrated with HealthKit, Google Fit, and other health platforms to collect and analyze user data.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing & Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conducted thorough testing across multiple devices and made performance optimizations.
              </p>
            </div>
          </div>
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
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600&q=80"
                  alt="App home screen"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600&q=80"
                  alt="Workout tracking"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600&q=80"
                  alt="Nutrition tracking"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600&q=80"
                  alt="Progress analytics"
                  width={300}
                  height={600}
                  className="w-full h-auto"
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
