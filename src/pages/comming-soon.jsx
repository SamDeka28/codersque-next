import CommingSoon from '@components/extra-page/comming-soon/comming-soon';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';


const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Comming Soon | Codersque Technologies Pvt Ltd'} />
            <CommingSoon />
        </Wrapper>
    );
};

export default Index;