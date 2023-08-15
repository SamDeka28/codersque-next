import React from 'react';
import services_data from '@data/common_data/service-data';
import Link from 'next/link';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="service_section section_space_lg">
      <div className="container">
        <div className="row">
          {
            services_data.map((item) => (
              <div className="col col-lg-4 col-md-6 col-sm-6" key={item.id}>
                <div className="service_item style_1">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="item_icon" style={{ backgroundImage: `url(${item.overlay_bg.src})`, aspectRatio: 1, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                      <Image src={item.icon_svg} />
                    </div>
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      {item.category}
                    </h3>
                    <p className="item_description mb-0">
                      {item.description}
                    </p>
                  </div>
                  <Link className="item_details_btn" href={`/service-details/${item.id}`}>
                    <span className="btn_text">View Details</span>
                    <span className="btn_icon">
                      <img src="assets/images/icons/icon_arrow_down_right_primary.svg" alt="Paradox icons" />
                      <img src="assets/images/icons/icon_arrow_down_right_white.svg" alt="Paradox icons" />
                    </span>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;