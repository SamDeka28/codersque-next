"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ImageVeil } from "@/components/ui/visual"

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
    <section className="border-t border-border py-20 md:py-28">
      <div className="container">
        <div className="mb-12">
          <p className="eyebrow mb-4">Office</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How to reach us</h2>
          <p className="mt-3 text-muted-foreground">Guwahati, with remote delivery for the rest of the work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border bg-card p-6 rounded-[1.5rem]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center border border-border text-foreground">
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
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                {item.action.text}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Office</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Visit our modern office space in the heart of Guwahati's tech district. We'd love to meet you in person
                and discuss how we can help your business grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-0.5 h-5 w-5 text-foreground" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">123 Tech Park, Guwahati, Assam 781001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 mt-0.5 h-5 w-5 text-foreground" />
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
            <div className="relative h-64 overflow-hidden lg:h-auto">
              <Image src="/stock/office.jpg" alt="Codersque office" fill className="photo-media object-cover" />
              <ImageVeil />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
