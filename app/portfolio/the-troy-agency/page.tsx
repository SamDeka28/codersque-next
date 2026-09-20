import { notFound } from "next/navigation"
import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study"
import { getPortfolioProject } from "@/data/portfolio"

export default function TroyAgencyPage() {
  const project = getPortfolioProject("the-troy-agency")
  if (!project) notFound()
  return <ProjectCaseStudyPage project={project} />
}
