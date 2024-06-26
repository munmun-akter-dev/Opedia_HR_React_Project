import React from 'react'

import clpic from '../assets/images/consulting_left_pic.png'
import handshakeimg from '../assets/images/hand_shake_img.png'
import peopleimg from '../assets/images/people_img.png'

function Consulting() {
  return (
    <div>
      <section className="consulting bg_white" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="consulting_parent">
              <h5>
                WHO WE ARE
              </h5>
              <h2>
                Why choose HR consulting <br className="d-none d-lg-block" /> <span className="purple_service">Services
                  Company</span>
              </h2>
            </div>
          </div>
          <div className="col_parent">
            <div className="row ">

              <div className="col-lg-6">
                <div className="col_left_side">
                  <img className="img-fluid" src={clpic} alt="" />

                </div>
              </div>

              <div className="col-lg-6">
                <div className="col_right_side">
                  <p className="right_content">Our advisers provides a broad menu service that identifies the task
                    <br className="d-none d-lg-block" /> requirements in the
                    organization job and designs the task description with skill <br
                      className="d-none d-lg-block" /> requirements for the task.
                  </p>


                  <div className="upper_content">
                    <ul className="content_list d-flex ">
                      <li>

                        <img src={handshakeimg} alt="" />
                      </li>
                      <li className="heading_content">
                        <h5>Strategic Partners</h5>
                        <p className="right_content_with_img">We believe in the value that our functions
                          added to a <br className="d-none d-lg-block" /> business.
                          Our strategic partners that specialist role for HR is <br
                            className="d-none d-lg-block" /> success of a business.</p>
                      </li>

                    </ul>

                  </div>


                  <div className="lower_content">
                    <ul className=" content_list d-flex ">
                      <li>
                        <img src={peopleimg} alt="" />
                      </li>
                      <li className="heading_content">
                        <h5>Corporate Programs</h5>
                        <p className="right_content_with_img">Corporate Programs are that added our
                          functions to a <br className="d-none d-lg-block" /> business.
                          Our Strategic Partners that specialist role for HR is <br
                            className="d-none d-lg-block" /> success of a business.</p>
                      </li>

                    </ul>

                  </div>

                  <a href="#">
                    <p className="right_content">Get intrigued about our service pricing? <span
                      className="lrn_more">
                      Learn More</span></p>
                  </a>

                </div>

              </div>


            </div>
          </div>
        </div>
      </section>

    </div >
  )
}

export default Consulting