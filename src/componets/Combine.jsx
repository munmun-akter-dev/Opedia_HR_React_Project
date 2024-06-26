/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import combinerpic from '../assets/images/combine_right_pic.png'


function Combine() {
  return (
    <div>
      <section className="combine bg_off_white" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="combine_left_side">
                <h2>
                  Combine all your <span className="purple_service">HR <br className="d-none d-lg-block" />
                    systems</span> into one platform.
                </h2>

                <p className="combine_left_content">BambooHR allows you to track hours worked, manage benefits
                  enrollment, and run <br className="d-none d-lg-block" />payroll
                  all from a single platform. No more data double entry and manual approval <br
                    className="d-none d-lg-block" />
                  processes—just easy, accurate payroll for you and your employees.</p>


                <div className="combine_left_btns d-flex ">

                  <button className="btn_secondary">
                    <a href="#"><span className="btn_white_text">Contact Us</span></a>
                  </button>

                  <button className="btn_primary">
                    <a href="#"><span className="cnt">Learn More</span></a>
                  </button>

                </div>


                <div className="list_parent">

                  <div className="accordion" id="accordionExample">

                    <ul className="list_group">

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Payroll, Time & Benefits
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"
                          aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>Payroll, Time & Benefits.</strong> This involves identifying
                            staffing needs,
                            sourcing candidates, conducting interviews, and selecting the most
                            suitable candidates for available positions. It's about finding the
                            right talent to fulfill specific roles within the organization.
                          </div>
                        </div>
                      </div>

                    </ul>



                    <ul className="list_group">

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            Hiring & Onboarding
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse"
                          aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">


                            <strong> Hiring </strong>This involves identifying staffing needs,
                            sourcing candidates, conducting interviews, and selecting the most
                            suitable candidates for available positions. It's about finding the
                            right talent to fulfill specific roles within the organization.

                            <strong> Onboarding</strong> Once a candidate accepts an offer,
                            onboarding begins. This process involves introducing the new employee to
                            the company culture, policies, procedures, and their role within the
                            organization. Effective onboarding sets the stage for success by helping
                            new hires integrate smoothly into their teams and understand
                            expectations, ultimately leading to higher productivity and job
                            satisfaction.
                          </div>
                        </div>
                      </div>

                    </ul>

                    <ul className="list_group">

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            HR Data & Reporting
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse"
                          aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>HR Data & Reporting.</strong> HR data and reporting involve the
                            collection,
                            analysis, and presentation of various human resources-related
                            information within an organization. This data can include employee
                            demographics, performance metrics, attendance records, and more.
                            Reporting on this data helps HR professionals make informed decisions,
                            track trends, and measure the effectiveness of HR initiatives.
                          </div>
                        </div>
                      </div>

                    </ul>

                  </div>
                </div>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="combine_right_side">
                <img className="img-fluid" src={combinerpic} alt="" />

              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Combine
