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
    >
      <ContentSection
        title="Transforming Businesses with AI"
        description="We leverage artificial intelligence and machine learning technologies to build intelligent systems that automate processes, analyze data, and provide valuable insights for your business. Our AI solutions are designed to solve complex problems and drive innovation."
        image="https://images.unsplash.com/photo-1677442135968-6bd241f8dd36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
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
        image="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="AI development process"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
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
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
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
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
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
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
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
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
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
              "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Predictive Maintenance System",
            description:
              "An AI system that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
            image:
              "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Recommendation Engine",
            description:
              "A personalized recommendation system for an e-commerce platform that increases conversion rates.",
            image:
              "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ]}
      />

      <ContentSection
        title="Technologies We Use"
        description="We leverage the latest AI and machine learning technologies to build innovative solutions."
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
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
