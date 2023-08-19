import React from 'react';
import shape_9 from '@assets/images/shapes/shape_9.svg'
import site_logo_dark from '@assets/images/logo/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const FooterSix = () => {
  return (
    <footer className="site_footer style_5">
      <div className="calltoaction_section style_5" style={{ marginTop: "100px", paddingTop: "100px", paddingBottom: "100px", background: "white" }}>
        <div className="container">
          <div className="content_box bg_primary decoration_wrap text-center">
            <div className="row justify-content-center">
              <div className="col col-lg-7">
                <div className="section_heading text-white">
                  <h2 className="heading_title mb-0">
                    Let’s create something amazing together.
                  </h2>
                </div>
                <Link href="/contact" className="bd-btn-link btn_warning">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Get Started</span>
                        <span className="bd-button-text">Get Started</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="deco_item shape_2">
              <Image className="wow fadeInUp" style={{ width: "100%", height: "auto" }} data-wow-delay=".2s" src={shape_9} alt="Codersque cta background image" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_widget_area">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col col-lg-3">
              <div className="footer_widget mb-4 mb-lg-0">
                <div className="site_logo">
                  <Link className="site_link" href="/">
                    <Image className="wow fadeInUp" data-wow-delay=".2s" style={{ width: "100%", height: "30px" }} src={site_logo_dark} alt="Site Logo - Codersque Technologies Pvt Ltd" />
                  </Link>
                </div>
                {/* <p>
                  Our action plan is focused and planned. We are result oriented organization
                </p>
                <div className="social_wrap d-block">
                  <h3 className="social_title">Follow Me on :</h3>
                  <ul className="social_icon unordered_list">
                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                    <li><Link href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col col-lg-5">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Links</h3>
                <ul style={{ listStyle: "none", lineHeight: '2em' }}>
                  <li><a href="/services/web-development">Web Development</a></li>
                  <li><a href="/services/app-development">Mobile Applications</a></li>
                  <li><a href="/services/ui-ux">UI/UX Design</a></li>
                  <li><a href="/services/custom-application-development">Custom Application Development</a></li>
                  <li><a href="/services/erp-development">ERP Development</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="footer_widget mb-4 mb-lg-0">
                <h3 className="footer_widget_title">Contact</h3>
                <p>
                  <strong>Address</strong> : Hno 34, Ashirwaad Path, Sonai Mikir Path, Satgaon, Guwahati, Assam
                </p>
                <p>
                  <strong>Email</strong> : sales@codersque.com
                </p>
                <p>
                  <strong>Mobile</strong> : +91 76359 58420
                </p>
              </div>
            </div>
          </div>
          <div className="copyright_widget copyright_space text-center">
            Copyright © 2023 by <Link target="_blank" href="/"><u>Codersque Technologies Pvt Ltd</u></Link> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSix;