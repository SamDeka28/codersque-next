import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function WebDevelopmentPage() {
  return (
    <DetailedPageLayout
      title="Web Development Services"
      subtitle="Custom websites and web applications built with modern frameworks and technologies."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
    >
      <ContentSection
        title="Modern Web Development Solutions"
        description="At Codersque Technologies, we specialize in creating custom web applications that are tailored to your specific business needs. Our team of experienced developers uses the latest technologies and frameworks to build responsive, scalable, and high-performance web solutions."
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Web development team working on code"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create responsive and interactive user interfaces using modern frameworks like React, Next.js, and
              Vue.js.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We build robust server-side applications using Node.js, Python, PHP, and other technologies.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We design and implement efficient database structures using SQL and NoSQL databases.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create RESTful and GraphQL APIs that enable seamless communication between different systems.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Web Development Process"
        description="We follow a systematic approach to web development that ensures high-quality results and client satisfaction. Our process is designed to be transparent, collaborative, and efficient."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Web development process diagram"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We start by understanding your business goals, target audience, and project requirements.
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
                We create wireframes and interactive prototypes to visualize the user interface and experience.
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
                Our developers write clean, efficient code following best practices and industry standards.
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
                We thoroughly test the application to ensure it's bug-free, secure, and performs well.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment & Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We deploy your application and provide ongoing support and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our Web Development Projects"
        description="Take a look at some of our successful web development projects"
        examples={[
          {
            title: "E-commerce Platform",
            description:
              "A comprehensive e-commerce solution with product recommendations, secure payments, and an admin dashboard.",
            image:
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Real Estate Marketplace",
            description:
              "A property listing platform that connects buyers, sellers, and agents with advanced search capabilities.",
            image:
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Educational Platform",
            description:
              "An online learning platform with interactive courses, quizzes, and progress tracking for students and educators.",
            image:
              "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ]}
      />

      <ContentSection
        title="Technologies We Use"
        description="We stay up-to-date with the latest web development technologies and frameworks to deliver cutting-edge solutions."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Web development technologies"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">React</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Next.js</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Vue.js</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Node.js</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Express</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">MongoDB</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">PostgreSQL</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">GraphQL</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about web development"
        resources={[
          {
            title: "Web Development Best Practices",
            description: "Learn about the latest best practices in web development",
            link: "#",
            type: "article",
          },
          {
            title: "Introduction to React",
            description: "A beginner's guide to React.js framework",
            link: "#",
            type: "documentation",
          },
          {
            title: "Modern JavaScript Explained",
            description: "Understanding ES6+ features and best practices",
            link: "#",
            type: "article",
          },
          {
            title: "Web Performance Optimization",
            description: "Techniques to improve your website's performance",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Start Your Web Development Project?"
        description="Contact us today to discuss your project requirements and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
