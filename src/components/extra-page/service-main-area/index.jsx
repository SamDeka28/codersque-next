import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import CollectionSection from '@components/home/collection-section';
import PolicySection from './policy-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Our Services' subTitle='Our Services' />
            <ServicesSection />
            <PortfolioSection />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;