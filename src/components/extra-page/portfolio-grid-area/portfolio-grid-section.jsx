import React from 'react';
import portfolio_data from '@data/common_data/portfolio-data';
import Link from 'next/link';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';

const PortfolioGridSection = () => {
  return (
    <section className="portfolio_section section_space_lg" style={{ marginBottom: "-200px" }}>
      <div className="container">
        <div className="button-group filters-button-group">
          <div className="portfolio_button">
            <nav>
              <div className="nav" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">View All</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Mobile Application</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Web Development</button>
              </div>
            </nav>
          </div>
        </div>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.map((item) => (
                  <div className="col col-lg-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`#`}>
                          <Image src={item.image} alt=" Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="#">{item.catagory_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`#`}>
                            {item.description}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.filter(item => item.catagory_list == "Mobile Application").map((item) => (
                  <div className="col col-lg-6 element-item graphics " data-category="Mobile Application" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`#`}>
                          <Image src={item.image} alt=" Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="#">{item.catagory_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`#`}>
                            {item.description}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.filter(item => item.catagory_list == "Web Development").map((item) => (
                  <div className="col col-lg-6 element-item graphics " data-category="Web Development" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`#`}>
                          <Image src={item.image} alt=" Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="#">{item.catagory_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`#`}>
                            {item.description}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* <Pagination_Data navClass="pagination_nav unordered_list_center" /> */}
      </div>
    </section>
  );
};

export default PortfolioGridSection;