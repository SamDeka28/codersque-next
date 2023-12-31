import Link from 'next/link';
import React from 'react';
import portfolio_data from '@data/common_data/portfolio-data';
import Image from 'next/image';
import Slider from "react-slick";
import { useRef } from 'react';

const PortfolioSection = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const portfolio_slide = {
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <section className="portfolio_section section_space_lg bg_light">
      <div className='container'>
        <div className="section_heading_inner">
          <div className="section_heading mb-0">
            <h2 className="heading_subtitle text-uppercase">
              <span className="double_icon">
                <i className="fas fa-sharp fa-square-full"></i>
                <i className="fas fa-sharp fa-square-full"></i>
              </span>
              <span>Our Work</span>
            </h2>
            <h3 className="heading_title mb-0">
              Our Latest Work
            </h3>
          </div>

          <ul className="carousel_arrow pt-0 unordered_list_center">
            <li>
              <button type="button" className="cc3c_left_arrow" onClick={handlePrevClick}>
                <i className="far fa-arrow-left"></i>
              </button>
            </li>
            <li>
              <button type="button" className="cc3c_right_arrow" onClick={handleNextClick}>
                <i className="far fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="portfolio_carousel">
          <div className="common_carousel_3col" data-slick='{"dots": false}'>
            <Slider {...portfolio_slide} ref={sliderRef}>
              {portfolio_data.length > 0 &&
                portfolio_data.slice(0, 5).map((item) => (
                  <div className="carousel_item" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt=" Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/service">{item.catagory_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href="/portfolio-details">
                            {item.catagory_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
          <div className="btn_wrap pb-0 text-center">
            <Link href="/portfolio" className="bd-btn-link btn_primary">
              <span className="bd-button-content-wrapper">
                <span className="bd-button-icon">
                  <i className="fa-light fa-arrow-right-long"></i>
                </span>
                <span className="pd-animation-flip">
                  <span className="bd-btn-anim-wrapp">
                    <span className="bd-button-text">View All Work</span>
                    <span className="bd-button-text">View All Work</span>
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;