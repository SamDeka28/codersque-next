import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function CloudServicesPage() {
  return (
    <DetailedPageLayout
      title="Cloud Services"
      subtitle="Scalable, secure, and cost-effective cloud infrastructure and deployment solutions for your applications."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Cloud Services", href: "/services/cloud-services" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
    >
      <ContentSection
        title="Modern Cloud Solutions"
        description="Our cloud services enable businesses to leverage scalable, secure, and cost-effective infrastructure. We provide cloud migration, architecture design, and management services to optimize your operations and ensure reliability."
        image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Cloud computing infrastructure"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Migration</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We help businesses migrate their existing applications and infrastructure to the cloud securely and
              efficiently.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Architecture Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We design scalable, resilient, and cost-effective cloud architectures tailored to your specific needs.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps & CI/CD</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We implement DevOps practices and CI/CD pipelines to automate deployment and improve development
              workflows.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Security</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We implement robust security measures to protect your cloud infrastructure and data from threats.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Cloud Services Approach"
        description="We follow a comprehensive approach to cloud services that ensures your infrastructure is optimized for performance, security, and cost-efficiency."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Cloud architecture diagram"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Assessment & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We assess your current infrastructure and develop a comprehensive cloud strategy.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Architecture Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We design a cloud architecture that meets your performance, security, and scalability requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Migration & Implementation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We execute the migration plan with minimal disruption to your business operations.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We continuously optimize your cloud infrastructure for performance and cost-efficiency.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Monitoring & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We provide ongoing monitoring, maintenance, and support for your cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our Cloud Projects"
        description="Take a look at some of our successful cloud services projects"
        examples={[
          {
            title: "E-commerce Platform Migration",
            description:
              "Migrated a high-traffic e-commerce platform to AWS, improving performance and reducing costs by 40%.",
            image:
              "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Microservices Architecture",
            description:
              "Designed and implemented a microservices architecture on Google Cloud Platform for a fintech startup.",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "DevOps Implementation",
            description:
              "Implemented CI/CD pipelines and DevOps practices for a software development company, reducing deployment time by 70%.",
            image:
              "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ]}
      />

      <ContentSection
        title="Cloud Technologies We Use"
        description="We leverage leading cloud platforms and technologies to deliver robust and scalable solutions."
        image="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Cloud technologies"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">AWS</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Google Cloud</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Microsoft Azure</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Docker</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Kubernetes</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Terraform</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about cloud services"
        resources={[
          {
            title: "Cloud Migration Guide",
            description: "A comprehensive guide to migrating your applications to the cloud",
            link: "#",
            type: "article",
          },
          {
            title: "Cloud Security Best Practices",
            description: "Learn how to secure your cloud infrastructure and data",
            link: "#",
            type: "documentation",
          },
          {
            title: "Microservices Architecture",
            description: "Understanding microservices architecture and its benefits",
            link: "#",
            type: "article",
          },
          {
            title: "DevOps and CI/CD Pipelines",
            description: "An introduction to DevOps practices and CI/CD pipelines",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Move to the Cloud?"
        description="Contact us today to discuss your cloud migration or implementation project and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
