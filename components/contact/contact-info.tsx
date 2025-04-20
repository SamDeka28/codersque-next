"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: ["123 Tech Park", "Guwahati, Assam 781001", "India"],
      action: {
        text: "Get Directions",
        url: "https://maps.google.com",
      },
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: {
        text: "Call Us",
        url: "tel:+919876543210",
      },
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@codersque.com", "support@codersque.com"],
      action: {
        text: "Send Email",
        url: "mailto:info@codersque.com",
      },
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      action: {
        text: "Schedule a Call",
        url: "#schedule",
      },
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            Contact Details
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <div className="space-y-1 mb-4">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
              <Link
                href={item.action.url}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                {item.action.text}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Office</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Visit our modern office space in the heart of Guwahati's tech district. We'd love to meet you in person
                and discuss how we can help your business grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">123 Tech Park, Guwahati, Assam 781001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Office Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image src="/placeholder.svg?height=400&width=600" alt="Codersque Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
