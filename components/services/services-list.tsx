"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Smartphone, Palette, Database, CloudLightning, TrendingUp, ArrowRight } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description:
      "We build responsive, scalable, and high-performance web applications using the latest technologies and frameworks like React, Next.js, and Node.js. Our web solutions are designed to provide exceptional user experiences and achieve your business goals.",
    features: [
      "Custom web application development",
      "E-commerce websites",
      "Progressive Web Apps (PWAs)",
      "Content Management Systems",
      "API development and integration",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description:
      "Our mobile app development team creates native and cross-platform applications that deliver seamless experiences across all devices. We focus on intuitive interfaces, optimal performance, and scalable architectures for iOS and Android platforms.",
    features: [
      "Native iOS and Android development",
      "Cross-platform apps using React Native",
      "App UI/UX design",
      "Mobile app testing and optimization",
      "App maintenance and support",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/services/mobile-apps",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description:
      "We create visually stunning and user-friendly interfaces that enhance user engagement and satisfaction. Our design process is centered around understanding user behaviors, needs, and motivations to create intuitive and enjoyable experiences.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design systems creation",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/services/ui-ux-design",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "AI Solutions",
    description:
      "We leverage artificial intelligence and machine learning technologies to build intelligent systems that automate processes, analyze data, and provide valuable insights for your business. Our AI solutions are designed to solve complex problems and drive innovation.",
    features: [
      "Machine learning models development",
      "Natural Language Processing (NLP)",
      "Computer Vision applications",
      "Predictive analytics",
      "Chatbots and virtual assistants",
    ],
    image:
      "https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80",
    link: "/services/ai-solutions",
  },
  {
    icon: <CloudLightning className="h-10 w-10" />,
    title: "Cloud Services",
    description:
      "Our cloud expertise enables businesses to leverage scalable, secure, and cost-effective infrastructure. We provide cloud migration, architecture design, and management services to optimize your operations and ensure reliability.",
    features: [
      "Cloud migration and deployment",
      "Infrastructure as Code (IaC)",
      "Microservices architecture",
      "Serverless applications",
      "Cloud security and compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/services/cloud-services",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Digital Marketing",
    description:
      "We help businesses establish a strong online presence and reach their target audience through strategic digital marketing services. Our data-driven approach ensures measurable results and continuous improvement of your marketing efforts.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing Campaigns",
      "Analytics and Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    link: "/services/digital-marketing",
  },
]

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <TiltCard className="h-full" glareEnabled={true} glareMaxOpacity={0.1} scale={1.02}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-purple-700">
                    <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Link href={service.link}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 text-sm">
                          Learn more about our {service.title.toLowerCase()} services
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
