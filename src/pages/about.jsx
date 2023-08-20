import AboutPage from '@components/extra-page/about-page';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Codersque Technologies Pvt Ltd | Innovative Software Solutions'} description={"Discover the story behind Codersque Technologies Pvt Ltd. Our team of passionate professionals is committed to delivering innovative software solutions. Learn more about our values, expertise, and dedication to client success."} />
            <AboutPage />
        </Wrapper>
    );
};

export default Index;