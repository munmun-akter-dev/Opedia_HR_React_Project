import React from 'react'
import rushrpic from '../assets/images/rush_right_pic.png'

function Rush() {
  return (
    <div>
      <section className="rush bg_white" style={{ overflowX: 'hidden' }}>
        <div className="container">
          <div className="row rush_box align-items-center">

            <div className="col-lg-6">

              <div className="rust_left_content">
                <h2>
                  In a rush? Try <br className="d-none d-lg-block" /> BambooHR now!
                </h2>
                <div className="rush_btn">
                  <button className="btn_black">
                    <a href="#"><span className="btn_white_text">Start Free Trial</span></a>
                  </button>
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="rush_right_content">
                <img src={rushrpic} alt="" />
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Rush
