import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ContactSection from './contact-section';
import FooterSix from '@layout/footer/footer-6';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Contact Us' subTitle='Contact Us' />
            <ContactSection />
            <FooterSix />
        </main>
    );
};

export default Index;