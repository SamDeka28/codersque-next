import ContacMainArea from '@components/extra-page/contact';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact Codersque Technologies for Your Next Software Project'} description={"Ready to take your business to the next level with our exceptional software solutions? Get in touch with us today! Our team is eager to hear about your project and provide tailored solutions that align with your goals. Contact Codersque Technologies Pvt Ltd for a no-obligation consultation."} />
      <ContacMainArea />
    </Wrapper>
  );
};

export default Index;