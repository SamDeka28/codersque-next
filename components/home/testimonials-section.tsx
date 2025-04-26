"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Updated testimonials with more detailed content and real images
const testimonials = [
  {
    name: "Rajiv Sharma",
    position: "CEO, TechVentures",
    content:
      "Codersque Technologies delivered an exceptional e-commerce platform that exceeded our expectations. Their team's attention to detail and commitment to quality resulted in a seamless user experience that has significantly increased our conversion rates by 45%. Their ongoing support has been invaluable to our business growth.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    project: "E-commerce Platform Development",
    company: "TechVentures",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80",
  },
  {
    name: "Priya Patel",
    position: "Marketing Director, GrowthHub",
    content:
      "Working with Codersque was a game-changer for our digital marketing strategy. Their innovative approach and technical expertise helped us implement advanced analytics and automation that increased our lead generation by 60%. The team's responsiveness and strategic insights have made them an essential partner in our success.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    project: "Digital Marketing Automation",
    company: "GrowthHub",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80",
  },
  {
    name: "Amit Choudhury",
    position: "Founder, HealthTech",
    content:
      "The mobile app developed by Codersque has transformed how we connect with our customers. The intuitive design and seamless functionality have received outstanding feedback, with our app store rating increasing to 4.8 stars. Their development process was transparent, and they delivered the project ahead of schedule without compromising quality.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    project: "Healthcare Mobile App",
    company: "HealthTech",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80",
  },
  {
    name: "Sunita Roy",
    position: "CTO, FinanceWorks",
    content:
      "Codersque Technologies built our financial dashboard with exceptional attention to security and performance. Their expertise in handling sensitive data while creating an intuitive interface impressed our entire team. The solution has streamlined our operations and reduced reporting time by 70%. I highly recommend their services for complex technical projects.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    project: "Financial Dashboard Development",
    company: "FinanceWorks",
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80",
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
    }, 6000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            Client Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Don't just take our word for it - hear what our clients have to say about our services
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards */}
            <div className="relative h-[800px] sm:h-[700px] md:h-[600px] lg:h-[500px] overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Left side - Image and company info */}
                    <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 p-8 flex flex-col justify-between">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern
                              id="grid"
                              width="10"
                              height="10"
                              patternUnits="userSpaceOnUse"
                              patternTransform="rotate(45)"
                            >
                              <rect width="6" height="6" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <div className="w-20 h-20 rounded-full bg-white p-1 mb-6">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src={testimonials[current].image || "/placeholder.svg"}
                              alt={testimonials[current].name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{testimonials[current].name}</h3>
                        <p className="text-white text-opacity-90 mb-4">{testimonials[current].position}</p>
                        <div className="flex">{renderStars(testimonials[current].rating)}</div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 mr-4">
                            <Image
                              src={testimonials[current].companyLogo || "/placeholder.svg"}
                              alt={testimonials[current].company}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{testimonials[current].company}</p>
                            <p className="text-white text-opacity-80 text-sm">{testimonials[current].project}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Testimonial content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <svg
                          className="w-12 h-12 text-purple-200 dark:text-purple-800"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        {testimonials[current].content}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex space-x-1">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setCurrent(index)
                                setAutoplay(false)
                              }}
                              className={`w-3 h-3 rounded-full ${
                                current === index ? "bg-purple-600 dark:bg-purple-400" : "bg-gray-300 dark:bg-gray-600"
                              }`}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              prevTestimonial()
                              setAutoplay(false)
                            }}
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              nextTestimonial()
                              setAutoplay(false)
                            }}
                            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Next testimonial"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
