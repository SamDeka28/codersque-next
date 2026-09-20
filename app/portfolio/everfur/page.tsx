import { notFound } from "next/navigation"
import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study"
import { getPortfolioProject } from "@/data/portfolio"

export default function EverfurPage() {
  const project = getPortfolioProject("everfur")
  if (!project) notFound()
  return <ProjectCaseStudyPage project={project} />
}
