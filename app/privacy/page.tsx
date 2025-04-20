"use client"

import React from "react"

export default function PrivacyPolicy() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-[190px] pb-16">
      <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      <p className="text-lg text-white mb-6">
        Welcome to Codersque Technologies! Your privacy is very important to us. This privacy policy outlines how we collect,
        use, and protect your personal data when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
      <p className="text-lg text-white mb-6">
        We collect the following types of information:
      </p>
      <ul className="list-disc ml-8 space-y-2 text-lg text-white">
        <li><strong>Personal Information:</strong> Name, email address, phone number, etc., when you register or interact with our platform.</li>
        <li><strong>Payment Information:</strong> Your billing information, payment history, and transaction details are collected when you make a purchase.</li>
        <li><strong>Usage Data:</strong> We track user activity such as IP addresses, browser type, and session data.</li>
        <li><strong>Cookies:</strong> We use cookies to enhance your user experience and track website usage.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
      <p className="text-lg text-white mb-6">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc ml-8 space-y-2 text-lg text-white">
        <li>To improve our website and services.</li>
        <li>To process payments and fulfill your requests.</li>
        <li>To communicate with you regarding your account, orders, or customer support needs.</li>
        <li>To personalize your experience and send marketing communications (only with your consent).</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Protect Your Information</h2>
      <p className="text-lg text-white mb-6">
        We take the security of your personal information seriously and use industry-standard encryption to protect data both in transit and at rest. We limit access to your data to authorized personnel only.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies</h2>
      <p className="text-lg text-white mb-6">
        Our website uses cookies to enhance your experience. Cookies are small files that are placed on your device when you visit our site. You can disable cookies in your browser settings, though doing so may limit some functionalities.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
      <p className="text-lg text-white mb-6">
        You have the right to access, update, or delete your personal data. You can also object to the processing of your data for marketing purposes at any time. For requests or inquiries, please contact us through the contact details below.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
      <p className="text-lg text-white mb-6">
        We may update our Privacy Policy from time to time. All changes will be posted on this page with an updated date at the top. Please review this page periodically to stay informed about our practices.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
      <p className="text-lg text-white mb-6">
        If you have any questions or concerns about our Privacy Policy, feel free to contact us at:
      </p>
      <ul className="text-lg text-white space-y-2">
        <li>Email: <a href="mailto:privacy@codersque.com" className="text-blue-600 underline">sales@codersque.com</a></li>
        <li>Phone: <a href="tel:+919706019543" className="text-blue-600 underline">+91 97060 19543</a></li>
      </ul>
    </section>
  )
}
