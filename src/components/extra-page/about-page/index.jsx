import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import DetailsAboutSection from './about-section';
import AboutSectionTwo from './about-section-2';
import HistorySection from './history-section';
import TeamSection from '@components/home-3/team-section';
import StarterStepsSection from '@components/home-6/starter-steps-section';
import CollectionSection from '@components/home/collection-section';
import CounterSection from './counter-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import AboutSectionSix from '@components/home-6/about-section-6';
import CounterSectionSix from '@components/home-6/counter-section-6';
import FooterSix from '@layout/footer/footer-6';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title="About Us" subTitle="About Us" />
            {/* <DetailsAboutSection /> */}
            <AboutSectionSix />
            <CounterSectionSix />
            {/* <AboutSectionTwo /> */}
            <HistorySection />
            <StarterStepsSection />
            {/* <TeamSection /> */}
            {/* <CollectionSection /> */}
            <FooterSix />
        </main>
    );
};

export default Index;