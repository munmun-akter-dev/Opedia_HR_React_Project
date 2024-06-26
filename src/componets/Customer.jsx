import React from 'react'
import customerlpic from '../assets/images/customer_line_pic.png'

function Customer() {
  return (
    <div>
      <section className="customer bg_black" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="customer_parent">
              <h2>
                OpediaHR customers save hundreds of <br className="d-flex d-lg-block" /> hours and reduce <span
                  className="purple_service"> HR</span> costs by 40%
              </h2>

              <div className="customer_content_group ">
                <div className="customer_content_child">
                  <h5>Saved $20,000 annually and <br className="d-none d-lg-block" /> 20 hours a week with
                    <br className="d-none d-lg-block" /> OpediaHR payroll.

                  </h5>



                </div>

                <img className="img-fluid d-none d-lg-block" src={customerlpic} alt="" />

                <div className="customer_content_child">
                  <h5>Saved $40,000 annually and <br className="d-none d-lg-block" /> hundreds of hours with <br
                    className="d-none d-lg-block" /> OpediaHR Performance <br className="d-none d-lg-block" />
                    Management.

                  </h5>



                </div>

                <img className="img-fluid d-none d-lg-block " src={customerlpic} alt="" />

                <div className="customer_content_child">
                  <h5>Shortened a 3 week benefits <br className="d-none d-lg-block" /> admin process into just 2 <br
                    className="d-none d-lg-block" /> days with OpediaHR Benefits <br
                      className="d-none d-lg-block" /> Administration
                  </h5>
                </div>
              </div>
              <div className="customer_btns ">
                <button className="btn_white">
                  <a href="#"><span className="btn_black_text">Get a Demo</span></a>
                </button>

                <button className="btn_black_with_border">
                  <a href="#"><span className="btn_white_text">See Case Studies</span></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Customer
