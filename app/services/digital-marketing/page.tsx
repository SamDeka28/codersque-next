import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function DigitalMarketingPage() {
  return (
    <DetailedPageLayout
      title="Digital Marketing Services"
      subtitle="Strategic digital marketing services to boost your online presence and drive business growth."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
      image="/stock/marketing.jpg"
    >
      <ContentSection
        title="Comprehensive Digital Marketing Solutions"
        description="We help businesses establish a strong online presence and reach their target audience through strategic digital marketing services. Our data-driven approach ensures measurable results and continuous improvement of your marketing efforts."
        image="/stock/marketing.jpg"
        imageAlt="Digital marketing strategy"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Search Engine Optimization (SEO)</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We improve your website's visibility in search engine results to drive organic traffic and leads.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Social Media Marketing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We develop and execute social media strategies to build brand awareness and engage with your audience.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Content Marketing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We create valuable and relevant content that attracts and retains your target audience.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Marketing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We design and implement email campaigns that nurture leads and drive conversions.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Digital Marketing Process"
        description="We follow a strategic approach to digital marketing that ensures your campaigns are aligned with your business goals and deliver measurable results."
        image="/stock/marketing.jpg"
        imageAlt="Digital marketing process"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Research & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conduct thorough research on your industry, competitors, and target audience.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Strategy Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We develop a comprehensive digital marketing strategy tailored to your business goals.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Campaign Execution</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We implement and manage your digital marketing campaigns across various channels.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Monitoring & Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We continuously monitor campaign performance and make data-driven optimizations.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-foreground">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Reporting & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We provide detailed reports and insights on campaign performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="Our Digital Marketing Projects"
        description="Take a look at some of our successful digital marketing projects"
        examples={[
          {
            title: "E-commerce SEO Campaign",
            description:
              "Increased organic traffic by 150% and conversions by 80% for an e-commerce client within 6 months.",
            image:
              "/stock/marketing.jpg",
          },
          {
            title: "B2B Social Media Strategy",
            description:
              "Developed and implemented a comprehensive social media strategy for a B2B software company, increasing lead generation by 65%.",
            image:
              "/stock/marketing.jpg",
          },
          {
            title: "Content Marketing Campaign",
            description:
              "Created and executed a content marketing strategy that increased website traffic by 200% and improved search rankings for a healthcare provider.",
            image:
              "/stock/marketing.jpg",
          },
        ]}
      />

      <ContentSection
        title="Digital Marketing Tools We Use"
        description="We leverage industry-leading tools and platforms to execute and optimize your digital marketing campaigns."
        image="/stock/marketing.jpg"
        imageAlt="Digital marketing tools"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Google Analytics</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">SEMrush</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Ahrefs</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">HubSpot</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Mailchimp</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white">Hootsuite</h3>
          </div>
        </div>
      </ContentSection>

      <ResourceLinks
        title="Additional Resources"
        description="Explore these resources to learn more about digital marketing"
        resources={[
          {
            title: "SEO Best Practices Guide",
            description: "Learn the latest SEO techniques to improve your website's search rankings",
            link: "#",
            type: "article",
          },
          {
            title: "Social Media Marketing Strategies",
            description: "Effective strategies for building your brand on social media platforms",
            link: "#",
            type: "documentation",
          },
          {
            title: "Content Marketing 101",
            description: "A beginner's guide to creating valuable content that drives results",
            link: "#",
            type: "article",
          },
          {
            title: "Email Marketing Optimization",
            description: "Tips and techniques for improving your email marketing campaigns",
            link: "#",
            type: "video",
          },
        ]}
      />

      <CTABanner
        title="Ready to Boost Your Online Presence?"
        description="Contact us today to discuss your digital marketing needs and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </DetailedPageLayout>
  )
}
