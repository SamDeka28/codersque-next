import DetailedPageLayout from "@/components/layouts/detailed-page-layout"
import { ContentSection } from "@/components/ui/content-section"
import { ExampleShowcase } from "@/components/ui/example-showcase"
import { ResourceLinks } from "@/components/ui/resource-links"
import { CTABanner } from "@/components/ui/cta-banner"

export default function IPServicesPage() {
  return (
    <DetailedPageLayout
      title="IP Services"
      subtitle="Comprehensive intellectual property services to protect your innovations, brands, and creative works."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "IP Services", href: "/services/ip-services" },
      ]}
      backLink={{ label: "Back to Services", href: "/services" }}
    >
      <ContentSection
        title="Intellectual Property Protection Services"
        description="At Codersque Technologies, we understand the critical importance of protecting your intellectual property. Our comprehensive IP services help you secure patents, trademarks, copyrights, and trade secrets to safeguard your competitive advantage and maximize the value of your innovations."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="Intellectual property protection services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Patent Services</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Comprehensive patent filing, prosecution, and maintenance services for utility, design, and provisional patents.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trademark Services</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Trademark search, registration, monitoring, and enforcement to protect your brand identity and reputation.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Copyright Services</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Copyright registration and protection for software, content, designs, and other creative works.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">IP Portfolio Management</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Strategic management and optimization of your intellectual property portfolio for maximum value.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our IP Services Process"
        description="We follow a systematic approach to intellectual property protection that ensures comprehensive coverage and strategic alignment with your business goals. Our process is designed to be transparent, efficient, and results-oriented."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="IP services process"
        imagePosition="left"
      >
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">IP Assessment & Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We conduct a comprehensive assessment of your intellectual property assets and develop a strategic protection plan.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prior Art Search & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We perform thorough prior art searches and patentability analyses to assess the strength of your IP claims.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Application Preparation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our expert team prepares and files comprehensive IP applications with all necessary documentation and claims.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prosecution & Response</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We handle all office actions, responses, and communications with patent and trademark offices on your behalf.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Maintenance & Enforcement</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We provide ongoing maintenance services and enforcement strategies to protect your IP rights and prevent infringement.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our IP Service Offerings"
        description="We offer a comprehensive range of intellectual property services to meet all your protection needs."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        imageAlt="IP service offerings"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Patent Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Utility patent filing and prosecution</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Design patent applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Provisional patent applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Patent search and prior art analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Patent maintenance and renewal</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>International patent filing (PCT)</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Trademark Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trademark search and clearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trademark registration (US and international)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trademark monitoring and watch services</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trademark renewal and maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trademark opposition and cancellation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Brand protection strategies</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Copyright Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Copyright registration for software</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Copyright registration for content</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Copyright registration for designs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>DMCA takedown notices</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Copyright infringement analysis</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Additional IP Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Trade secret protection strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>IP portfolio management and audits</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>IP licensing and agreements</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>IP due diligence for M&A</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>IP litigation support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                <span>Freedom to operate (FTO) analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ExampleShowcase
        title="IP Protection Success Stories"
        description="Examples of how we've helped clients protect their intellectual property"
        examples={[
          {
            title: "Software Patent Portfolio",
            description:
              "Successfully filed and prosecuted a comprehensive patent portfolio for a SaaS platform, securing protection for core algorithms and user interface innovations.",
            image:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Brand Trademark Protection",
            description:
              "Established comprehensive trademark protection across multiple jurisdictions for a growing tech startup, including monitoring and enforcement services.",
            image:
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            title: "Copyright Registration Program",
            description:
              "Implemented a systematic copyright registration program for a content creation company, protecting hundreds of digital assets and creative works.",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ]}
      />

      <ResourceLinks
        title="IP Resources & Information"
        description="Learn more about intellectual property protection and management"
        resources={[
          {
            title: "Understanding Patents",
            description: "A comprehensive guide to patents and the patent application process",
            link: "#",
            type: "article",
          },
          {
            title: "Trademark Basics",
            description: "Essential information about trademarks and brand protection",
            link: "#",
            type: "article",
          },
          {
            title: "Copyright Protection Guide",
            description: "Understanding copyright protection for software and digital content",
            link: "#",
            type: "documentation",
          },
          {
            title: "IP Portfolio Strategy",
            description: "Best practices for managing and optimizing your IP portfolio",
            link: "#",
            type: "article",
          },
        ]}
      />

      <CTABanner
        title="Ready to Protect Your Intellectual Property?"
        description="Contact us today to discuss your IP protection needs and get a free consultation."
        buttonText="Get a Quote"
        buttonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
      />
    </DetailedPageLayout>
  )
}

