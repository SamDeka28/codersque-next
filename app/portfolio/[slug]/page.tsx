import { notFound } from "next/navigation"
import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study"
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio"

export function generateStaticParams() {
  const reserved = new Set(["e-commerce-platform", "albegrik", "everfur", "the-troy-agency", "financial-dashboard"])
  return portfolioProjects.filter((project) => !reserved.has(project.slug)).map((project) => ({ slug: project.slug }))
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getPortfolioProject(slug)
  if (!project) notFound()
  return <ProjectCaseStudyPage project={project} />
}
