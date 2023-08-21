import ErrorMainArea from '@components/extra-page/error-page/error-main-area';
import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";


export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'Transform Your Vision into Reality | Codersque Technologies Pvt Ltd'} description={"Welcome to Codersque Technologies Pvt Ltd, where we believe that every idea, no matter how ambitious, can be transformed into a powerful software solution. Our passion for innovation drives us to deliver cutting-edge software that empowers businesses to thrive in the digital age. Contact us to discuss your project today!"}></SEO>
      <HomeMain />
    </Wrapper>
  )
}