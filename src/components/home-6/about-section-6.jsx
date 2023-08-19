import React from 'react';
import about_image from '@assets/images/illustrations/scrum method-rafiki.svg'
import about from '@assets/images/about/home-about-us.jpg'
import icon_eye_primary from '@assets/images/icons/icon_eye_primary.svg'
import icon_dart_board from '@assets/images/icons/icon_dart_board_primary.svg'
import shape_close_icon from '@assets/images/shapes/shape_close_icon.png'
import Image from 'next/image';

const AboutSectionSix = () => {
  return (
    <section className="about_section section_space_lg pb-0 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="about_image_3 mb-4 mb-lg-0">
              {/* <Image className="wow fadeInUp" data-wow-delay=".1s" src={about_image} alt="Codersque - About Image" /> */}
              <Image className="wow fadeInUp" data-wow-delay=".1s" src={about_image} alt="Codersque - About Image" />
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading style_4">
                <h2 className="heading_subtitle text-uppercase">
                  <span>About <strong>Codersque Technologies</strong></span>
                </h2>
                <h3 className="heading_title">
                  We Can Transform Your Product Idea into Reality
                </h3>
                <p className="heading_description mb-0">
                  We are a team of highly skilled developers and designers
                  dedicated to providing top-notch software solutions to our clients. With years of experience and a
                  focus on innovation, we are ready to transform your ideas into reality. Learn more about our team
                  and our mission.</p>
              </div>
              <div className="mission_vision row">
                <div className="col col-md-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_eye_primary} style={{ width: "auto", height: "auto" }} alt=" Icon Eye White" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Our Vision</h3>
                      <p className="mb-0">
                        Our vision is to reshape the digital landscape by delivering cutting-edge software solutions that elevate businesses to new heights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_dart_board} style={{ width: "auto", height: "auto" }} alt=" Icon Eye White" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Our Mission</h3>
                      <p className="mb-0">
                        We drive innovation, transforming challenges into seamless solutions. Through expert software development, we empower businesses and individuals to thrive in the digital realm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_6" data-parallax='{"y" : 200, "smoothness": 20}'>
        <Image src={shape_close_icon} style={{ width: "100%", height: "100%" }} alt=" Illustration Image" />
      </div>
    </section>
  );
};

export default AboutSectionSix;