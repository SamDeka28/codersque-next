import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
import FooterSix from '@layout/footer/footer-6';
const PortfolioGridSection = dynamic(() => import('./portfolio-grid-section'), {
    ssr: false
})

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Our Recent Work' subTitle='Our Recent Work' />
            <PortfolioGridSection />
            {/* <CollectionSection /> */}
            <FooterSix />
        </main>
    );
};

export default Index;