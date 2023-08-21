import CollectionSection from '@components/home/collection-section';
import Header from '@layout/header/header';
import React from 'react';
import ErrorSection from './error-section';
import FooterSix from '@layout/footer/footer-6';

const ErrorMainArea = () => {
    return (
        <main>
            <Header />
            <ErrorSection />
            <CollectionSection />
            <FooterSix />
        </main>
    );
};

export default ErrorMainArea;