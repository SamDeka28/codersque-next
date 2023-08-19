import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import CollectionSection from '@components/home/collection-section';
import PolicySection from './policy-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import StarterStepsSection from '@components/home-6/starter-steps-section';
import FooterSix from '@layout/footer/footer-6';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Our Services' subTitle='Our Services' />
            <ServicesSection />
            <PortfolioSection />
            {/* <PolicySection /> */}
            <StarterStepsSection />
            <CollectionSection />
            <FooterSix />
        </main>
    );
};

export default Index;