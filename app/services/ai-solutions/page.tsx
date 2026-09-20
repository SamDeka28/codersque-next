import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function AiSolutionsPage() {
  return (
    <DetailedPageLayout
      title="AI Solutions"
      subtitle="Intelligent systems and machine learning solutions for business automation and innovation."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Solutions", href: "/services/ai-solutions" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
      image="/generated/ai.png"
    >
      <ContentSection
        title="Transforming Businesses with AI"
        description="We leverage artificial intelligence and machine learning technologies to build intelligent systems that automate processes, analyze data, and provide valuable insights for your business. Our AI solutions are designed to solve complex problems and drive innovation."
        image="/generated/ai.png"
        imageAlt="AI and machine learning visualization"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning Models</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We develop custom machine learning models tailored to your specific business needs and data.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Natural Language Processing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We build NLP solutions that can understand, interpret, and generate human language.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Computer Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create systems that can analyze and interpret visual information from the world.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Predictive Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We develop predictive models that analyze historical data to forecast future trends and outcomes.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our AI Development Process"
        description="We follow a systematic approach to AI solution development that ensures high-quality results and business value."
        image="/generated/ai.png"
        imageAlt="AI development process"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Problem Definition</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We work with you to clearly define the business problem that AI can help solve.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Data Collection & Preparation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We gather, clean, and prepare the data needed to train your AI models.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Model Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We develop and train AI models using appropriate algorithms and techniques.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing & Validation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We rigorously test and validate the models to ensure accuracy and reliability.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deployment & Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We deploy the AI solution and integrate it with your existing systems and workflows.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our AI Projects"
        description="Take a look at some of our successful AI solution projects"
        examples={[
          {
            title: "AI-powered Chatbot",
            description:
              "An intelligent customer service chatbot that uses natural language processing to answer customer queries.",
            image:
              "/generated/ai.png",
          },
          {
            title: "Predictive Maintenance System",
            description:
              "An AI system that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
            image:
              "/generated/ai.png",
          },
          {
            title: "Recommendation Engine",
            description:
              "A personalized recommendation system for an e-commerce platform that increases conversion rates.",
            image:
              "/generated/ai.png",
          },
        ]}
      />

      <ContentSection
        title="Technologies We Use"
        description="We leverage the latest AI and machine learning technologies to build innovative solutions."
        image="/generated/ai.png"
        imageAlt="AI technologies"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">TensorFlow</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">PyTorch</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Scikit-learn</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">OpenAI API</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Hugging Face</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">AWS SageMaker</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about AI and machine learning"
        resources={[
          {
            title: "Introduction to AI for Business",
            description: "Learn how AI can transform your business operations and drive growth",
            link: "#",
            type: "article",
          },
          {
            title: "Machine Learning Fundamentals",
            description: "A beginner's guide to understanding machine learning concepts",
            link: "#",
            type: "documentation",
          },
          {
            title: "AI Ethics and Responsible AI",
            description: "Understanding the ethical considerations in AI development",
            link: "#",
            type: "article",
          },
          {
            title: "Data Preparation for AI Projects",
            description: "Best practices for preparing data for machine learning models",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Implement AI in Your Business?"
        description="Contact us today to discuss your AI project and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
