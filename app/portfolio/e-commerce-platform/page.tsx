import { notFound } from "next/navigation"
import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study"
import { getPortfolioProject } from "@/data/portfolio"

export default function EcommercePlatformPage() {
  const project = getPortfolioProject("e-commerce-platform")
  if (!project) notFound()
  return <ProjectCaseStudyPage project={project} />
}
