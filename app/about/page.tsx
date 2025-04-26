import PageTransition from "@/components/page-transition"
import CompanyIntro from "@/components/about/company-intro"
import Timeline from "@/components/about/timeline"
import Values from "@/components/about/values"
import Team from "@/components/about/team"

export default function AboutPage() {
  return (
    <PageTransition>
      <CompanyIntro />
      <Timeline />
      <Values />
      {/* <Team /> */}
    </PageTransition>
  )
}
