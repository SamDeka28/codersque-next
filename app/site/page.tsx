"use client"

import React from "react"

export default function SiteInfo() {
  return (
    <section className="container pb-16 pt-32">
      <h1 className="text-4xl font-bold mb-8 text-foreground">About Codersque Technologies</h1>
      <p className="text-lg text-foreground mb-6">
        Codersque Technologies is a leading software development company based in Guwahati, Assam, India. We specialize in delivering high-quality web and mobile app development services, designed to help businesses grow and thrive in the digital age.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Mission</h2>
      <p className="text-lg text-foreground mb-6">
        Our mission is to drive business success by creating innovative and tailored digital solutions. We help businesses transform through technology by delivering scalable, secure, and user-friendly software solutions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Services</h2>
      <p className="text-lg text-foreground mb-6">
        We offer a wide range of services designed to meet your business needs:
      </p>
      <ul className="list-disc ml-8 space-y-2 text-lg text-foreground">
        <li>Custom Web & Mobile App Development</li>
        <li>E-commerce Solutions</li>
        <li>Cloud-based Solutions</li>
        <li>AI/ML Development</li>
        <li>UI/UX Design & Prototyping</li>
        <li>Digital Marketing</li>
        <li>IP Services (Patents, Trademarks, Copyrights)</li>
        <li>Digital Transformation Consulting</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
      <p className="text-lg text-foreground mb-6">
        We would love to hear from you! If you have any questions or want to discuss a project, reach out to us:
      </p>
      <ul className="text-lg text-foreground space-y-2">
        <li>Email: <a href="mailto:hello@codersque.com" className="text-blue-600 underline">sales@codersque.com</a></li>
        <li>Phone: <a href="tel:+919706019543" className="text-blue-600 underline">+91 97060 19543</a></li>
      </ul>
    </section>
  )
}
