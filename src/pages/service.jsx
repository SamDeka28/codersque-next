import SEO from '@components/seo';
import ServiceMainArea from '@components/extra-page/service-main-area';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Services | Codersque Technologies Pvt Ltd'} description={"Explore our comprehensive suite of software development services, including web development, mobile app development, custom application development, and ERP development. Our expert team can tailor solutions to empower your business. Contact us to discuss your project today!"} />
      <ServiceMainArea />
    </Wrapper>
  );
};

export default Index;