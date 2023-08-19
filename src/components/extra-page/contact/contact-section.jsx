import NiceSelect from '@ui/niceSelect';
import Link from 'next/link';
import React, { useState } from 'react';

const Initial = {
  firstname: '',
  lastname: '',
  email: '',
  service: '',
  message: ''
};
const ContactSection = () => {
  let [formValue, setFormData] = useState(Initial)
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = document.createElement('a');
    a.href = `mailto:sales@codersque.com?subject=Requesting Service details - ${formValue.service}&body=${formValue.message}`;
    a.click();
    setFormData(Initial)
  }
  const selectHandler = data => {
    setFormData(prev => ({ ...prev, service: data.value }))
  }

  const handleChange = function (e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <section className="contact_section section_space_lg">
      <div className="container">
        <div className="section_heading">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Contact Us</span>
          </h2>
          <h3 className="heading_title mb-0">Feel Free to Contact Us</h3>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <div className="contact_form">
              <form onSubmit={handleSubmit} action="#">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        required
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        required
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="select_option m-0">
                      <NiceSelect
                        options={[
                          { value: "Select Subject", text: "Select Subject" },
                          {
                            value: "Website Development",
                            text: "Website Development",
                          },
                          { value: "UX/UI Design", text: "UX/UI Design" },
                          { value: "Mobile Development", text: "Mobile Development" },
                          { value: "Custom Software Development", text: "Custom Software Development" },
                        ]}
                        defaultCurrent={1}
                        onChange={selectHandler}
                        required
                        name="Select Subject"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        required
                        onChange={handleChange}
                        placeholder="Write your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="bd-btn-link">
                      <span className="bd-button-content-wrapper">
                        <span className="bd-button-icon">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </span>
                        <span className="pd-animation-flip">
                          <span className="bd-btn-anim-wrapp">
                            <span className="bd-button-text">Send Now</span>
                            <span className="bd-button-text">Send Now</span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col col-lg-6">
            <ul className="contact_info_list style_2 ps-lg-4 unordered_list_block">
              <li>
                <strong>Location:</strong>
                <span>Hno 34, Ashirwaad Path, Sonai Mikir Path, Satgaon, Guwahati, Assam</span>
              </li>
              <li>
                <strong>Phone:</strong>
                <span>+91 76359 58420</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>sales@codersque.com</span>
              </li>
              <li>
                <strong>Opening:</strong>
                <span>10am - 6pm, Saturday-Sunday Closed</span>
              </li>
              <li>
                <strong>Follow Us:</strong>
                <ul className="social_icon unordered_list">
                  <li>
                    <Link href="https://www.linkedin.com/company/codersque/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;