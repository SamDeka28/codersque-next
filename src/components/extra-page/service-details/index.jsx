import React from "react";
import DetailsSection from "./details-section";
import FaqSection from "./faq-section";
import ServiceSection from "@components/home/service-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Header from "@layout/header/header";
import FooterSix from "@layout/footer/footer-6";

const Index = ({ item }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={item.title} subTitle={item.title} />
        <DetailsSection item={item} />
        {/* <FaqSection /> */}
        <ServiceSection serviceBgg="service_section section_space_lg bg_light" />
      </main>
      <FooterSix />
    </>
  );
};

export default Index;
