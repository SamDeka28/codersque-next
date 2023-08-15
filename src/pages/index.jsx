import SEO from "@components/seo";
import HomeMain from "@components/home-6"
import Wrapper from "../layout/wrapper";
import CommingSoon from "@components/extra-page/comming-soon/comming-soon";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Codersque Technologies - Comming Soon'}></SEO>
      {/* <HomeMain /> */}
      <CommingSoon />
    </Wrapper>
  )
}
