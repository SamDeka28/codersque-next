import React from "react";
import shape_circle_1 from "@assets/images/shapes/shape_circle_1.svg";
import shape_circle_2 from "@assets/images/shapes/shape_1.svg";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ title, subTitle }) => {
  return (
    <section className="page_banner text-center">
      <div className="container decoration_wrap">
        <h1 className="page_title">{title}</h1>

        <Link href="/contact" className="bd-btn-link btn_primary">
          <span className="bd-button-content-wrapper">
            <span className="bd-button-icon">
              <i className="fa-light fa-arrow-right-long"></i>
            </span>
            <span className="pd-animation-flip">
              <span className="bd-btn-anim-wrapp">
                <span className="bd-button-text">Request an Estimate</span>
                <span className="bd-button-text">Request an Estimate</span>
              </span>
            </span>
          </span>
        </Link>
        {/* <ul className="breadcrumb_nav unordered_list_center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{subTitle}</li>
        </ul> */}
        <div className="deco_item shape_1 wow fadeInUp" data-wow-delay=".1s">
          <Image
            src={shape_circle_1}
            data-parallax='{"y" : -140, "smoothness": 10}'
            style={{ width: "100%", height: "100%" }}
            alt="shape circle"
          />
        </div>
        <div
          className="deco_item shape_2 wow rotateInDownRight"
          data-wow-delay=".1s"
        >
          <img src="/assets/images/shapes/shape_circle_half_1.svg" data-parallax='{"y" : 200, "smoothness": 10}' alt="share image" />
        </div>
        <div className="deco_item shape_3 wow fadeInDown">
          <Image
            data-parallax='{"x" : -200, "smoothness": 10}'
            src={shape_circle_2}
            alt="shape circle"
          />
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
