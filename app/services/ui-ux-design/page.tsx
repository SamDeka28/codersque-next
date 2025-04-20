import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function UiUxDesignPage() {
  return (
    <DetailedPageLayout
      title="UI/UX Design Services"
      subtitle="User-centric design solutions that enhance user experience and engagement."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
    >
      <ContentSection
        title="User-Centered Design Approach"
        description="At Codersque Technologies, we believe that great design starts with understanding the user. Our UI/UX design services focus on creating intuitive, engaging, and accessible interfaces that delight users and achieve business goals."
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="UI/UX design process"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User Research</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We conduct thorough research to understand your users' needs, behaviors, and pain points.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Information Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We organize content and functionality in a way that's intuitive and easy to navigate.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visual Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create visually appealing interfaces that align with your brand identity and engage users.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interaction Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We design intuitive interactions that guide users through their journey with minimal friction.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our UI/UX Design Process"
        description="We follow a comprehensive design process that ensures your digital products are both beautiful and functional."
        image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="UI/UX design process diagram"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Discovery & Research</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We start by understanding your business goals, target audience, and conducting user research.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Wireframing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We create low-fidelity wireframes to establish the basic structure and layout of your interface.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We develop interactive prototypes that simulate the user experience and allow for early testing.
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
                We create high-fidelity designs that incorporate your brand identity and visual elements.
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
                We conduct usability tests to identify and address any issues before development begins.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our UI/UX Design Projects"
        description="Take a look at some of our successful UI/UX design projects"
        examples={[
          {
            title: "Financial Dashboard",
            description: "An intuitive financial dashboard designed for a fintech startup with data visualization.",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "E-commerce Redesign",
            description: "A complete redesign of an e-commerce platform focusing on improving conversion rates.",
            image:
              "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Healthcare App",
            description: "A user-friendly healthcare app designed for patients to manage appointments and medications.",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ]}
      />

      <ContentSection
        title="Design Tools We Use"
        description="We leverage industry-standard design tools to create exceptional user experiences."
        image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="UI/UX design tools"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Figma</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Adobe XD</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Sketch</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">InVision</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Protopie</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Adobe Illustrator</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about UI/UX design"
        resources={[
          {
            title: "UI/UX Design Principles",
            description: "Learn about the fundamental principles of effective UI/UX design",
            link: "#",
            type: "article",
          },
          {
            title: "User Research Methods",
            description: "A guide to conducting effective user research for better design outcomes",
            link: "#",
            type: "documentation",
          },
          {
            title: "Accessibility in Design",
            description: "Best practices for creating accessible digital experiences",
            link: "#",
            type: "article",
          },
          {
            title: "Design Systems 101",
            description: "An introduction to creating and maintaining design systems",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Enhance Your User Experience?"
        description="Contact us today to discuss your UI/UX design project and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
