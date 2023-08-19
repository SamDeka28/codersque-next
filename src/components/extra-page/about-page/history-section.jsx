import React from "react";

// import Swiper and modules styles
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const HistorySection = () => {
  return (
    <section className="history_section section_space_lg">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Our History</span>
          </h2>
          <h3 className="heading_title mb-0">Journey of Codersque</h3>
        </div>
      </div>
      <div className="history_carousel_wrap">
        <div className="history_carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={false}
            navigation={{
              clickable: true,
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.2,
              },
            }}
          >
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        Ideation
                      </h3>
                      <p className="mb-0">
                        We thought of starting Codersque Technologies Pvt Ltd
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>September, 2022</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        Launch</h3>
                      <p className="mb-0">
                        Registered Codersque Technologies as a Pvt Ltd firm and started with 2 people
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>Nov, 2022</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        Struggle Phase
                      </h3>
                      <p className="mb-0">
                        We started getting local and national leads. We fixed meetings with potential clients both offline and online.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>Nov, 2022</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        Patnerships and Network building
                      </h3>
                      <p className="mb-0">
                        We started building up our network and partnered with peoples having same vision as us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>Dec, 2022</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        First Client Onboading
                      </h3>
                      <p className="mb-0">
                        We got our first client.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>Jan, 2023</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        Continuation...
                      </h3>
                      <p className="mb-0">
                        We are getting strong day by day
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>Present</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
