"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Check, X, Send, Loader2 } from "lucide-react"

export default function ClientEngagementForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",

    // Project Details
    projectName: "",
    projectDescription: "",
    projectGoals: "",
    targetAudience: "",
    timeline: "",
    budget: "",

    // Additional Info
    existingWebsite: "",
    competitors: "",
    additionalInfo: "",

    // Tech Stack Tool
    projectType: "",
    budgetRange: "",
    scalability: "",
    features: [] as string[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showTechStackTool, setShowTechStackTool] = useState(false)
  const [techStackStep, setTechStackStep] = useState(1)
  const [techStackResults, setTechStackResults] = useState<null | {
    frontend: string[]
    backend: string[]
    database: string[]
    hosting: string[]
    additional: string[]
  }>(null)

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = "Invalid email address"
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    }

    if (currentStep === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = "Project name is required"
      if (!formData.projectDescription.trim()) newErrors.projectDescription = "Project description is required"
      if (!formData.budget.trim()) newErrors.budget = "Budget information is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    if (name === "features") {
      setFormData((prev) => ({
        ...prev,
        features: checked ? [...prev.features, value] : prev.features.filter((feature) => feature !== value),
      }))
    }
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(step)) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after a few seconds
      setTimeout(() => {
        setStep(1)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          role: "",
          projectName: "",
          projectDescription: "",
          projectGoals: "",
          targetAudience: "",
          timeline: "",
          budget: "",
          existingWebsite: "",
          competitors: "",
          additionalInfo: "",
          projectType: "",
          budgetRange: "",
          scalability: "",
          features: [],
        })
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const startTechStackTool = () => {
    setShowTechStackTool(true)
    setTechStackStep(1)
    setTechStackResults(null)
  }

  const closeTechStackTool = () => {
    setShowTechStackTool(false)
    setTechStackStep(1)
    setTechStackResults(null)
  }

  const nextTechStackStep = () => {
    if (techStackStep < 4) {
      setTechStackStep((prev) => prev + 1)
    } else {
      // Generate recommendations based on selections
      generateTechStackRecommendations()
    }
  }

  const prevTechStackStep = () => {
    setTechStackStep((prev) => prev - 1)
  }

  const generateTechStackRecommendations = () => {
    // Logic to determine tech stack based on user selections
    const recommendations = {
      frontend: [] as string[],
      backend: [] as string[],
      database: [] as string[],
      hosting: [] as string[],
      additional: [] as string[],
    }

    // Frontend recommendations
    if (formData.projectType === "e-commerce") {
      recommendations.frontend.push("Next.js", "React")
      if (formData.budgetRange === "high") {
        recommendations.frontend.push("Shopify Hydrogen")
      }
    } else if (formData.projectType === "saas") {
      recommendations.frontend.push("React", "TypeScript")
      if (formData.features.includes("real-time")) {
        recommendations.frontend.push("WebSockets")
      }
    } else if (formData.projectType === "blog") {
      recommendations.frontend.push("Next.js", "Astro")
    } else if (formData.projectType === "portfolio") {
      recommendations.frontend.push("React", "Astro", "Next.js")
    } else if (formData.projectType === "social-network") {
      recommendations.frontend.push("React", "Redux", "WebSockets")
    }

    // Backend recommendations
    if (formData.scalability === "large" || formData.features.includes("real-time")) {
      recommendations.backend.push("Node.js", "Express.js", "WebSockets")
    } else if (formData.projectType === "e-commerce") {
      recommendations.backend.push("Node.js", "Express.js")
      if (formData.budgetRange === "high") {
        recommendations.backend.push("Shopify API")
      }
    } else if (formData.projectType === "blog") {
      recommendations.backend.push("Next.js API Routes", "Headless CMS")
    } else {
      recommendations.backend.push("Node.js", "Express.js")
    }

    // Database recommendations
    if (formData.scalability === "large") {
      recommendations.database.push("PostgreSQL", "MongoDB Atlas")
    } else if (formData.features.includes("real-time")) {
      recommendations.database.push("MongoDB", "Firebase Realtime Database")
    } else if (formData.budgetRange === "low") {
      recommendations.database.push("Supabase", "Firebase")
    } else {
      recommendations.database.push("MongoDB", "PostgreSQL")
    }

    // Hosting recommendations
    if (formData.budgetRange === "low") {
      recommendations.hosting.push("Vercel", "Netlify")
    } else if (formData.scalability === "large") {
      recommendations.hosting.push("AWS", "Google Cloud Platform")
    } else {
      recommendations.hosting.push("Vercel", "DigitalOcean")
    }

    // Additional tools
    if (formData.features.includes("payments")) {
      recommendations.additional.push("Stripe", "PayPal")
    }
    if (formData.features.includes("authentication")) {
      recommendations.additional.push("NextAuth.js", "Firebase Auth")
    }
    if (formData.features.includes("analytics")) {
      recommendations.additional.push("Google Analytics", "Mixpanel")
    }

    setTechStackResults(recommendations)
    setTechStackStep(5) // Move to results step
  }

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. CEO, Marketing Manager, Project Manager"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Name *
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.projectName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                />
                {errors.projectName && <p className="mt-1 text-sm text-red-500">{errors.projectName}</p>}
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Please describe your project in detail"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.projectDescription ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                ></textarea>
                {errors.projectDescription && <p className="mt-1 text-sm text-red-500">{errors.projectDescription}</p>}
              </div>

              <div>
                <label
                  htmlFor="projectGoals"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Goals
                </label>
                <textarea
                  id="projectGoals"
                  name="projectGoals"
                  rows={3}
                  value={formData.projectGoals}
                  onChange={handleChange}
                  placeholder="What are the main goals you want to achieve with this project?"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="targetAudience"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Target Audience
                </label>
                <input
                  type="text"
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="Who is your target audience?"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Expected Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1+ year">1+ year</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.budget ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600`}
                  >
                    <option value="">Select budget range</option>
                    <option value="Less than $5,000">Less than $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Additional Information</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="existingWebsite"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Existing Website/App (if any)
                </label>
                <input
                  type="text"
                  id="existingWebsite"
                  name="existingWebsite"
                  value={formData.existingWebsite}
                  onChange={handleChange}
                  placeholder="e.g. https://yourwebsite.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label
                  htmlFor="competitors"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Competitors or Reference Sites
                </label>
                <textarea
                  id="competitors"
                  name="competitors"
                  rows={3}
                  value={formData.competitors}
                  onChange={handleChange}
                  placeholder="List any competitors or websites you like for reference"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any other details you'd like to share about your project"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-100 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Need help choosing technologies?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our Tech Stack Recommendation Tool can help you identify the best technologies for your project based
                  on your specific requirements.
                </p>
                <button
                  type="button"
                  onClick={startTechStackTool}
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                >
                  Try Tech Stack Tool
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Review & Submit</h3>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Name:</span>
                    <span className="text-gray-900 dark:text-white">{formData.name}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Email:</span>
                    <span className="text-gray-900 dark:text-white">{formData.email}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Phone:</span>
                    <span className="text-gray-900 dark:text-white">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Company:</span>
                    <span className="text-gray-900 dark:text-white">{formData.company || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Role:</span>
                    <span className="text-gray-900 dark:text-white">{formData.role || "N/A"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Project Details</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Project Name:</span>
                    <span className="text-gray-900 dark:text-white">{formData.projectName}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Description:</span>
                    <span className="text-gray-900 dark:text-white">{formData.projectDescription}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Goals:</span>
                    <span className="text-gray-900 dark:text-white">{formData.projectGoals || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Target Audience:</span>
                    <span className="text-gray-900 dark:text-white">{formData.targetAudience || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Timeline:</span>
                    <span className="text-gray-900 dark:text-white">{formData.timeline || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Budget Range:</span>
                    <span className="text-gray-900 dark:text-white">{formData.budget}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Additional Information</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Existing Website/App:</span>
                    <span className="text-gray-900 dark:text-white">{formData.existingWebsite || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Competitors/References:</span>
                    <span className="text-gray-900 dark:text-white">{formData.competitors || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 dark:text-gray-400">Additional Info:</span>
                    <span className="text-gray-900 dark:text-white">{formData.additionalInfo || "N/A"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6 border border-purple-100 dark:border-purple-800/30">
                <p className="text-gray-700 dark:text-gray-300">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy-policy" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted by our team regarding your project.
                </p>
              </div>
            </div>
          </div>
        )
    }
  }

  const renderTechStackTool = () => {
    switch (techStackStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's your project type?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { value: "e-commerce", label: "E-commerce", icon: "🛒" },
                { value: "saas", label: "SaaS Application", icon: "🔧" },
                { value: "blog", label: "Blog/Content Site", icon: "📝" },
                { value: "portfolio", label: "Portfolio/Showcase", icon: "🖼️" },
                { value: "social-network", label: "Social Network", icon: "👥" },
                { value: "other", label: "Other", icon: "🔍" },
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => setFormData({ ...formData, projectType: option.value })}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.projectType === option.value
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's your estimated budget?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "low", label: "Low Budget", description: "Under $10,000" },
                { value: "medium", label: "Medium Budget", description: "$10,000 - $50,000" },
                { value: "high", label: "High Budget", description: "Over $50,000" },
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => setFormData({ ...formData, budgetRange: option.value })}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.budgetRange === option.value
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700"
                  }`}
                >
                  <div className="text-center">
                    <h4 className="font-medium mb-1">{option.label}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's your target scalability?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  value: "small",
                  label: "Small Scale",
                  description: "Few hundred users, limited growth expected",
                },
                {
                  value: "medium",
                  label: "Medium Scale",
                  description: "Thousands of users, moderate growth expected",
                },
                {
                  value: "large",
                  label: "Large Scale",
                  description: "Millions of users, rapid growth expected",
                },
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => setFormData({ ...formData, scalability: option.value })}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.scalability === option.value
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700"
                  }`}
                >
                  <div className="text-center">
                    <h4 className="font-medium mb-1">{option.label}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What features are most important for your project?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Select all that apply</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: "real-time", label: "Real-time updates" },
                { value: "authentication", label: "User authentication" },
                { value: "payments", label: "Payments integration" },
                { value: "search", label: "Advanced search functionality" },
                { value: "analytics", label: "Analytics and reporting" },
                { value: "mobile", label: "Mobile app integration" },
                { value: "multilingual", label: "Multilingual support" },
                { value: "offline", label: "Offline functionality" },
              ].map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`feature-${option.value}`}
                    name="features"
                    value={option.value}
                    checked={formData.features.includes(option.value)}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`feature-${option.value}`} className="ml-3 text-gray-700 dark:text-gray-300">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Your Tech Stack Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on your project requirements, here are our technology recommendations
              </p>
            </div>

            {techStackResults && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Frontend</h4>
                  <ul className="space-y-2">
                    {techStackResults.frontend.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Backend</h4>
                  <ul className="space-y-2">
                    {techStackResults.backend.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Database</h4>
                  <ul className="space-y-2">
                    {techStackResults.database.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-teal-600 dark:text-teal-400">Hosting</h4>
                  <ul className="space-y-2">
                    {techStackResults.hosting.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {techStackResults.additional.length > 0 && (
                  <div className="md:col-span-2 bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Additional Tools</h4>
                    <ul className="space-y-2">
                      {techStackResults.additional.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-100 dark:border-purple-800 mt-6">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Want to discuss these recommendations?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our team can provide more detailed guidance on the best technology stack for your specific project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={closeTechStackTool}
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                >
                  Continue with Form
                </button>
                <button
                  type="button"
                  onClick={() => setTechStackStep(1)}
                  className="px-6 py-2 rounded-lg bg-white dark:bg-gray-700 border border-purple-200 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="engagement-form" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your information has been submitted successfully. Our team will review your project details and get
                  back to you within 24-48 hours.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Return to Homepage
                </a>
              </div>
            ) : (
              <>
                {/* Tech Stack Tool Modal */}
                <AnimatePresence>
                  {showTechStackTool && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                      >
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Tech Stack Recommendation Tool
                          </h2>
                          <button
                            type="button"
                            onClick={closeTechStackTool}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="p-6">{renderTechStackTool()}</div>

                        {techStackStep !== 5 && (
                          <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                            <button
                              type="button"
                              onClick={techStackStep > 1 ? prevTechStackStep : closeTechStackTool}
                              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {techStackStep > 1 ? "Back" : "Cancel"}
                            </button>
                            <button
                              type="button"
                              onClick={nextTechStackStep}
                              disabled={
                                (techStackStep === 1 && !formData.projectType) ||
                                (techStackStep === 2 && !formData.budgetRange) ||
                                (techStackStep === 3 && !formData.scalability) ||
                                (techStackStep === 4 && formData.features.length === 0)
                              }
                              className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {techStackStep < 4 ? "Next" : "Get Recommendations"}
                            </button>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                  <h2 className="text-2xl font-bold">Client Engagement Form</h2>
                  <p className="mt-1 opacity-90">Tell us about your project and requirements</p>
                </div>

                {/* Form Steps */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4].map((stepNumber) => (
                      <div key={stepNumber} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                            step >= stepNumber
                              ? "bg-purple-600 text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {stepNumber}
                        </div>
                        <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 hidden sm:block">
                          {stepNumber === 1 && "Personal Info"}
                          {stepNumber === 2 && "Project Details"}
                          {stepNumber === 3 && "Additional Info"}
                          {stepNumber === 4 && "Review & Submit"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit}>
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {renderFormStep()}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Form Navigation */}
                  <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className={`px-6 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 ${
                        step === 1 ? "invisible" : ""
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5 inline mr-1" />
                      Back
                    </button>

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                      >
                        Next
                        <ChevronRight className="w-5 h-5 inline ml-1" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
