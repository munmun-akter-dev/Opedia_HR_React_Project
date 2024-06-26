/* eslint-disable react/no-unknown-property */
import React from 'react'
import hls from '../assets/images/hero_left_star.png'
import hcpimg from '../assets/images/hero_circle_play_img.png'
import hrimg from '../assets/images/h_right_img.png'
import hlsmallimg from '../assets/images/hero_lsmall_img.png'
import hsmallimg from '../assets/images/h_small_img.png'


function Hero() {

  return (
    <div>
      <section className="hero bg_purple" style={{ overflowX: "hidden" }}>
        <div className="container-fluid" />
        <div className="row align-items-center ">
          <div className="col-lg-6">
            <div className="hero_left_side">

              <h1 className="hero_head">
                HR, Payroll, Benefits. <br className="d-none d-lg-block" />
                <span className="black_head"> The Complete HR Software.</span>
              </h1>
              <h5>Simplify HR with award-winning solutions for everything from <br className="d-none d-lg-block" />
                hire to retire.</h5>
              <h6>“Excellent’’ based on over 50 reviews</h6>


              <div className="star_parent d-flex">


                <div className="star_left d-flex ">
                  <img className="img-fluid" src={hls} alt="" />
                  <img src={hls} alt="" />
                  <img src={hls} alt="" />
                  <img src={hls} alt="" />
                  <img src={hls} alt="" />

                </div>

                <div className=" star_right d-flex justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                      fill="#7275FF" />
                  </svg>
                  <h6>Trsuplit</h6>
                </div>

              </div>

              <div className="hero_left_btn_group d-flex  align-items-center ">

                <button className="btn_secondary">
                  <a href="#"><span className="btn_white_text">Get a Demo</span></a>
                </button>

                <img className="img-fluid" src={hcpimg} alt="" />

                <h5>How We Work</h5>

                <div className="svg_img d-none d-lg-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"
                    fill="none">
                    <path
                      d="M91.9015 0.253695C88.2362 1.91973 84.7378 3.75236 81.2389 5.7516C78.0734 7.41763 74.2416 9.08366 71.5759 11.5827C70.0765 12.9155 71.5759 15.7478 73.5751 15.0814C73.5751 15.0814 73.7417 15.0814 73.7417 14.9148C74.2416 15.248 74.575 15.5812 75.0746 16.081C75.0746 16.2476 75.2409 16.5808 75.2409 16.7474C75.4075 17.0806 75.7407 17.4138 76.0742 17.747C71.2427 26.7436 66.7444 35.7402 61.0799 44.0703C59.4139 46.5694 57.581 48.9018 55.4154 51.0676C50.0841 42.5709 41.4205 32.7413 30.9245 34.5739C17.0964 37.073 24.5935 51.9004 31.7575 56.8988C40.2542 63.0631 47.5848 62.7299 54.9153 56.8988C58.2474 62.5633 60.5801 68.8939 60.2466 75.0585C59.7468 89.8862 46.4186 92.3849 35.2561 88.5531C36.9222 84.2214 37.422 79.2236 36.4224 74.8916C34.7563 67.0613 22.7609 60.0639 15.7636 65.5619C8.93285 71.0598 21.7613 85.0544 25.9264 87.8869C27.0926 88.72 28.4254 89.5527 29.7582 90.2191C29.5916 90.3857 29.5916 90.5526 29.425 90.7189C21.7613 102.714 11.5985 92.385 6.93361 83.8882C6.2672 82.5554 4.43456 83.7216 4.93437 85.0544C8.76625 93.8844 16.5966 104.214 27.0926 98.2161C29.5916 96.7166 31.7575 94.5508 33.2569 91.8851C42.4201 95.5504 53.083 95.5504 59.7468 87.2203C67.7438 77.2241 62.7459 64.229 57.4146 54.566L57.7478 54.2328C67.2442 45.0697 73.0753 32.0746 79.0731 20.4124C80.2393 21.2454 81.5724 22.0784 82.7383 22.9114C83.5716 23.4113 84.7378 23.2447 85.404 22.5782C90.2355 16.9137 93.9007 10.083 95.0669 2.58587C95.5668 0.753504 93.7344 -0.579321 91.9015 0.253695ZM48.5847 56.5653C42.2537 60.2306 35.9228 55.7323 31.2579 51.4006C25.0936 45.7361 26.7597 36.5729 36.256 38.4058C41.0875 39.4054 44.9194 43.7371 48.0849 47.2358C49.7509 49.0684 51.4172 51.234 52.9166 53.5664C51.5838 54.7329 50.0841 55.7325 48.5847 56.5653ZM31.5911 86.887C27.0929 84.5549 23.7608 81.2225 21.0951 77.0577C19.9289 75.2251 18.9293 73.2259 18.4295 71.06C16.7635 65.3955 25.76 68.2278 28.0925 69.394C34.4234 72.8927 33.9236 80.8896 31.5911 86.887ZM83.4047 18.2468C83.2381 18.2468 83.2381 18.0802 83.0715 18.0802C83.0715 17.5804 82.738 17.0806 82.0719 16.7474C80.9057 16.2476 79.7395 15.5812 78.573 14.9148C78.0732 14.5816 77.0735 13.5819 77.0735 13.9152C77.0735 13.7485 76.9069 13.5819 76.7403 13.5819C78.5727 12.5823 80.4056 11.2495 82.238 10.2499C84.5704 8.91706 87.0695 7.58423 89.5688 6.25141C88.4031 10.4165 86.2373 14.5816 83.4047 18.2468Z"
                      fill="#7275FF" fill-opacity="0.3" />
                  </svg>

                </div>

              </div>

            </div>

          </div>

          <div className="col-lg-6 justify-content-end">
            <div className="hero_right_side ">

              <div className="big_pic position-relative">

                <img className="img-fluid" src={hrimg} alt="" />
              </div>

              <div className="small_pics position-absolute d-none d-xxl-block">
                <img className="small_left_pic img-fluid" src={hlsmallimg} alt="" />

                <img className="small_right_pic" src={hsmallimg} alt="" />

              </div>

            </div>

          </div>
        </div>

      </section>
    </div>
  )
}
export default Hero
