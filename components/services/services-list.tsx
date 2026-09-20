"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Smartphone, Palette, Brain, Cloud, LineChart, Scale, ArrowRight, Check } from "lucide-react"
import { Section } from "@/components/ui/section"
import { IconWell } from "@/components/ui/icon-well"
import { ImageVeil, isStudioSrc, photoMediaClass } from "@/components/ui/visual"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Responsive, scalable web applications using React, Next.js, and Node.js. Built for performance, maintainability, and a clear ownership model.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "Progressive Web Apps",
      "Content management systems",
      "API design and integration",
    ],
    image: "/stock/web.jpg",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps with a focus on reliability, store-ready quality, and a codebase your team can extend.",
    features: [
      "Native iOS and Android",
      "React Native",
      "App UI and UX",
      "Testing and performance",
      "Release and support",
    ],
    image: "/stock/mobile.jpg",
    link: "/services/mobile-apps",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interface and product design grounded in how people actually work, not decoration. Systems your team can keep using.",
    features: [
      "Research and flows",
      "Wireframes and prototypes",
      "Visual design",
      "Usability testing",
      "Design systems",
    ],
    image: "/stock/design.jpg",
    link: "/services/ui-ux-design",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Practical machine learning and automation inside existing operations: models, pipelines, and product surfaces that can be maintained.",
    features: [
      "Model development",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Assistants and automation",
    ],
    image: "/generated/ai.png",
    link: "/services/ai-solutions",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Migration, architecture, and operations on infrastructure you control. Designed for cost, security, and scale.",
    features: [
      "Cloud migration",
      "Infrastructure as code",
      "Microservices",
      "Serverless workloads",
      "Security and compliance",
    ],
    image: "/stock/cloud.jpg",
    link: "/services/cloud-services",
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description:
      "Technical and content work that can be measured: search, channels, and reporting your team can run.",
    features: ["SEO", "Social programs", "Content", "Email programs", "Analytics"],
    image: "/stock/marketing.jpg",
    link: "/services/digital-marketing",
  },
  {
    icon: Scale,
    title: "IP Services",
    description:
      "Patents, trademarks, and copyright support so the product you ship is also protected.",
    features: [
      "Patent filing",
      "Trademark registration",
      "Copyright registration",
      "Portfolio management",
      "Enforcement support",
    ],
    image: "/stock/legal.jpg",
    link: "/services/ip-services",
  },
]

export default function ServicesList() {
  return (
    <Section size="wide">
      <div className="space-y-24 md:space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <IconWell>
                <service.icon />
              </IconWell>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">{service.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={service.link} className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline">
                Service details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Link href={service.link} className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={960}
                  height={640}
                  className={cn("h-auto w-full object-cover", photoMediaClass(service.image))}
                />
                <ImageVeil tone={isStudioSrc(service.image) ? "studio" : "photo"} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
