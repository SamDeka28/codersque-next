import Link from 'next/link';
import React, { useState } from 'react';
import service_details from '@assets/images/video/service_details_video_poster.jpg';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import { Form } from 'formik';


const DetailsSection = ({ item: { detailed = {} } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="details_section service_details section_space_lg position-relative">
        <div className="container">
          <div className="details_content_wrap">
            <div className="row">
              <div className="col col-lg-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3>{detailed.heading}</h3>
                {detailed.description?.map((description, index) => <p className={index == 0 ? 'mt-4' : ''}>{description}</p>)}
              </div>
              <div className='col col-lg-6 text-center'>
                <Image src={detailed.image} />
              </div>
            </div>
          </div>
        </div>
        <div className="ourprocesscontainer section_space_md">
          <div className='container our-process'>
            <div className='row mb-5'>
              <div className='col col-lg-12'>
                <div className='text-center'>
                  <h6 style={{ color: "#6741EF", fontWeight: "bold" }}>We do "standard"</h6>
                  <h2>Our {detailed.process?.length}-D Process</h2>

                </div>
              </div>
            </div>
            <div className="row row-first card-container">
              {detailed.process?.slice(0, 3)?.map((process, index) => <div className='card col col-lg-4'>
                <span className="card-head">
                  {index <= 9 ? `0${index + 1}.` : index + 1}
                </span>
                <span className="card-title">{process.title}</span>
                <span className='card-content'>
                  {process.description}
                </span>
              </div>)}
            </div>

            <div className='row row-second card-container'>
              {detailed.process?.slice(3, 6)?.map((process, index) => <div className='card col col-lg-4'>
                <span className="card-head">
                  {index <= 9 ? `0${(index + 3) + 1}.` : index + 4}
                </span>
                <span className="card-title">{process.title}</span>
                <span className='card-content'>
                  {process.description}
                </span>
              </div>)}
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className='row'>
            {/* <div className="section_space_lg">
              <div className="video_widget">
                <Image src={service_details} style={{ width: "100%", height: "100%" }} alt=" Service Video Poster" />
                <button type='button' className="video_play_icon popup_video" onClick={openVideoModal}>
                  <span className="icon_wrap" data-magnetic>
                    <i className="fas fa-play"></i>
                  </span>
                </button>
              </div>
            </div> */}
            <div className="row">
              <div className="col col-lg-4">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2 className="heading_title mb-0">
                      Why Choose Codersque Technologies?
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">View Case Studies</span>
                          <span className="bd-button-text">View Case Studies</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col col-lg-8">
                <div className="row">
                  {detailed.reason?.map(reason => <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={reason.icon} style={{ width: "100%", height: "100%" }} alt={reason.title} />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{reason.title}</h3>
                        <p className="mb-0">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default DetailsSection;