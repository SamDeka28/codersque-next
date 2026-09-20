"use client"

import { useState, useEffect, useRef } from "react"
import { useInView, motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { ImageVeil } from "@/components/ui/visual"

const testimonials = [
  {
    name: "Rajiv Sharma",
    position: "CEO, TechVentures",
    content:
      "Codersque delivered an e-commerce platform that increased conversion by 45%. The handover was complete. Our team could operate it without a vendor sitting in the middle.",
    project: "E-commerce platform",
    company: "TechVentures",
  },
  {
    name: "Priya Patel",
    position: "Marketing Director, GrowthHub",
    content:
      "They implemented analytics and automation that lifted lead generation by 60%. Communication was precise, and the work was documented well enough for us to iterate internally.",
    project: "Marketing automation",
    company: "GrowthHub",
  },
  {
    name: "Amit Choudhury",
    position: "Founder, HealthTech",
    content:
      "The mobile app went live ahead of schedule and now sits at 4.8 stars. The process was transparent, and nothing was left as a black box.",
    project: "Healthcare mobile app",
    company: "HealthTech",
  },
  {
    name: "Sunita Roy",
    position: "CTO, FinanceWorks",
    content:
      "They built our financial dashboard with the security and performance we needed. Reporting time dropped 70%. I would use them again for any complex technical brief.",
    project: "Financial dashboard",
    company: "FinanceWorks",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      nextTestimonial()
    }, 7000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  const item = testimonials[current]

  return (
    <Section size="wide">
      <div ref={containerRef}>
        <SectionHeader
          eyebrow="Clients"
          title="What partners say"
          description="Direct feedback from product and technology leaders we have worked with."
          className="mb-12 md:mb-16"
        />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid lg:grid-cols-[minmax(260px,0.4fr)_1fr]"
            >
              <div className="relative min-h-[16rem] overflow-hidden lg:min-h-[28rem]">
                <Image src="/generated/office.png" alt="" fill className="object-cover" />
                <ImageVeil tone="studio" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/65">{item.project}</p>
                  <p className="mt-5 font-heading text-xl font-semibold tracking-tight">{item.name}</p>
                  <p className="mt-1 text-sm text-white/70">{item.position}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                <blockquote className="text-2xl leading-snug tracking-tight md:text-3xl md:leading-snug">
                  “{item.content}”
                </blockquote>
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrent(index)
                          setAutoplay(false)
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          current === index ? "w-10 bg-foreground" : "w-6 bg-border"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        prevTestimonial()
                        setAutoplay(false)
                      }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        nextTestimonial()
                        setAutoplay(false)
                      }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
