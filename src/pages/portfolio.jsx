import PortfolioGridArea from '@components/extra-page/portfolio-grid-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Our Portfolio | Codersque Technologies Pvt Ltd'} description={"Explore a collection of our successful projects, each one a testament to our dedication to excellence and client satisfaction. From startups to established enterprises, our software solutions have made a significant impact across various industries. Discover how our custom-developed software has transformed businesses like yours."} />
      <PortfolioGridArea />
    </Wrapper>
  );
};

export default Index;