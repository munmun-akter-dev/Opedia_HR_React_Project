/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import cusquit from '../assets/images/customer_quote.png'
import menimg from '../assets/images/over_all_men.png'

function OverAll() {
  return (
    <div>
      <section className="over_all bg_white" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="container">
            <div className="over_all_parent">

              <p className="hear">
                Hear from our customers
              </p>
              <img className="img-fluid" src={cusquit} alt="" />



              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">


                  <div className="carousel-item active">

                    <h4> “Overall, I wanted to commend your team for creating a <br
                      className="d-none d-lg-block" />website
                      that not only meets but exceeds
                      expectations. It's <br className="d-none d-lg-block" /> evident that user experience was a
                      top
                      priority in the <br className="d-none d-lg-block" /> development process.
                      Thank you for providing such a positive <br className="d-none d-lg-block" /> online
                      environment..”</h4>

                  </div>
                  <div className="carousel-item">
                    <h4> “Overall, I wanted to commend your team for creating a <br
                      className="d-none d-lg-block" />website
                      that not only meets but exceeds
                      expectations. It's <br className="d-none d-lg-block" /> evident that user experience was a
                      top
                      priority in the <br className="d-none d-lg-block" /> development process.
                      Thank you for providing such a positive <br className="d-none d-lg-block" /> online
                      environment..”</h4>
                  </div>
                  <div className="carousel-item">
                    <h4> “Overall, I wanted to commend your team for creating a <br
                      className="d-none d-lg-block" />website
                      that not only meets but exceeds
                      expectations. It's <br className="d-none d-lg-block" /> evident that user experience was a
                      top
                      priority in the <br className="d-none d-lg-block" /> development process.
                      Thank you for providing such a positive <br className="d-none d-lg-block" /> online
                      environment..”</h4>
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M16.62 2.99028C16.5039 2.87387 16.366 2.78152 16.2141 2.7185C16.0622 2.65548 15.8994 2.62305 15.735 2.62305C15.5706 2.62305 15.4078 2.65548 15.2559 2.7185C15.1041 2.78152 14.9661 2.87387 14.85 2.99028L6.54 11.3003C6.4473 11.3928 6.37375 11.5027 6.32357 11.6237C6.27339 11.7446 6.24756 11.8743 6.24756 12.0053C6.24756 12.1362 6.27339 12.2659 6.32357 12.3869C6.37375 12.5079 6.4473 12.6178 6.54 12.7103L14.85 21.0203C15.34 21.5103 16.13 21.5103 16.62 21.0203C17.11 20.5303 17.11 19.7403 16.62 19.2503L9.38 12.0003L16.63 4.75028C17.11 4.27028 17.11 3.47028 16.62 2.99028Z"
                      fill="#707D8E" />
                  </svg>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M7.38 2.99028C7.49611 2.87387 7.63405 2.78152 7.78591 2.7185C7.93778 2.65548 8.10058 2.62305 8.265 2.62305C8.42942 2.62305 8.59222 2.65548 8.74408 2.7185C8.89594 2.78152 9.03388 2.87387 9.15 2.99028L17.46 11.3003C17.5527 11.3928 17.6262 11.5027 17.6764 11.6237C17.7266 11.7446 17.7524 11.8743 17.7524 12.0053C17.7524 12.1362 17.7266 12.2659 17.6764 12.3869C17.6262 12.5079 17.5527 12.6178 17.46 12.7103L9.15 21.0203C8.66 21.5103 7.87 21.5103 7.38 21.0203C6.89 20.5303 6.89 19.7403 7.38 19.2503L14.62 12.0003L7.37 4.75028C6.89 4.27028 6.89 3.47028 7.38 2.99028Z"
                      fill="#707D8E" />
                  </svg>
                </button>
              </div>


              <img className="img-fluid" src={menimg} alt="" />
              <h6>Abhay Ranjan, People Operations</h6>
              <h3>Mouse</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#040810" />
              </svg>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default OverAll


