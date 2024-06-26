/* eslint-disable react/no-unknown-property */
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <section className="footer bg_black" style={{ overflowX: "hidden" }} >
        <div className="footer_wrapper">
          <div className="container">
            <div className="row ">

              <div className="col-lg-6 ">
                <div className="footer_left_side">
                  <h5>Opedia <span className="sky_blue">HR</span></h5>
                  <p>The payments platform designed to put <br className="d-none d-lg-block" /> merchants first</p>
                </div>
              </div>


              <div className="col-lg-2 ">

                <div className="footer_items">
                  <h3>
                    Company

                  </h3>
                  <ul>
                    <li><a href="./about_us.html">About Us</a></li>
                    <li><a href="./consultancy.html"> Careers</a></li>
                    <li><a href="./brand_protection.html"> Why OpediaHR</a></li>
                    <li><a href="./our_product.html"> Blog</a></li>
                    <li><a href="./our_product.html"> Contact us</a></li>
                  </ul>
                </div>

              </div>



              <div className="col-lg-2  ">

                <div className="footer_items ">
                  <h3>
                    Support

                  </h3>
                  <ul>
                    <li><a href="./about_us.html"> Resources</a></li>
                    <li><a href="./consultancy.html"> Webinars</a></li>
                    <li><a href="./brand_protection.html"> Services</a></li>
                    <li><a href="./our_product.html"> FAQ</a></li>
                    <li><a href="./our_product.html"> Partner with us</a></li>

                  </ul>
                </div>

              </div>

              <div className="col-lg-2 ">

                <div className="footer_items ">
                  <h3>
                    Compare OpediaHR
                  </h3>
                  <ul>
                    <li><a href="./about_us.html"> vs ADP</a></li>
                    <li><a href="./consultancy.html"> vs HiBob</a></li>
                    <li><a href="./brand_protection.html"> vs Paylocity</a></li>
                    <li><a href="./our_product.html"> vs Zenefits</a></li>
                    <li><a href="./our_product.html"> vs Gusto</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>


      </section >


      <section className="bg_black">
        <div className="footer_bottom_wrapper">
          <div className="container">
            <div className="row">
              <div className="line">
                <div className="line_content">
                  <div className="line_left">
                    <ul className="line_child">
                      <li>© Opedia 2024</li>
                      <li>Terms of Service</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                  <div className="line_right">
                    <ul className="line_child">
                      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill="white" />
                      </svg></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                          fill="white" />
                      </svg></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_102_2157)">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.817 6.98939C17.464 6.48139 16.52 5.76739 14.991 6.07539C14.099 6.25439 13.566 6.69539 13.227 7.27739C12.866 7.89739 12.691 8.74039 12.691 9.72139C12.691 9.98661 12.5857 10.241 12.3982 10.4285C12.2106 10.616 11.9563 10.7214 11.691 10.7214C9.32504 10.7214 7.07304 10.0184 5.17804 8.11739C5.03497 8.88869 4.97862 9.67357 5.01004 10.4574C5.06304 11.5434 5.32204 12.6324 5.93704 13.5654C6.54204 14.4824 7.53704 15.3224 9.20104 15.8504C9.3641 15.9021 9.51115 15.9948 9.62816 16.1196C9.74516 16.2444 9.8282 16.3971 9.86934 16.5631C9.91047 16.7292 9.90832 16.903 9.8631 17.0679C9.81788 17.2329 9.73109 17.3835 9.61104 17.5054C9.07804 18.0521 8.47396 18.5246 7.81504 18.9104C8.87504 19.0204 9.89704 19.0284 10.845 18.9424C12.765 18.7684 14.294 18.2194 15.25 17.4424C17.263 15.8104 18.34 13.3764 18.14 9.29839C18.106 8.62839 18.753 7.90539 19.065 7.35639C18.594 7.44439 18.122 7.42839 17.817 6.98939ZM4.59404 4.98439C4.7751 4.96335 4.95846 4.99219 5.12431 5.0678C5.29016 5.14342 5.43218 5.26292 5.53504 5.41339C7.01104 7.57239 8.78304 8.47039 10.75 8.67439C10.846 7.83339 11.073 7.00239 11.5 6.27039C12.126 5.19639 13.144 4.40639 14.598 4.11439C16.608 3.71039 18.138 4.43839 19.025 5.32939L20.817 4.99439C21.0046 4.95926 21.1982 4.9785 21.3752 5.04984C21.5521 5.12119 21.7049 5.24166 21.8157 5.39704C21.9264 5.55242 21.9903 5.73623 21.9999 5.92677C22.0096 6.11731 21.9645 6.30663 21.87 6.47239L20.15 9.49439C20.307 13.8554 19.095 16.8994 16.511 18.9964C15.141 20.1084 13.179 20.7394 11.026 20.9344C8.85604 21.1304 6.40304 20.8934 3.96504 20.1814C3.75674 20.1206 3.57384 19.9938 3.44397 19.8199C3.31409 19.6461 3.24428 19.4347 3.24507 19.2178C3.24587 19.0008 3.31721 18.7899 3.44835 18.617C3.57949 18.4442 3.7633 18.3186 3.97204 18.2594C5.19804 17.9104 6.13204 17.6094 6.97504 17.0824C5.77604 16.4464 4.89304 15.6144 4.26804 14.6664C3.40004 13.3484 3.07804 11.8784 3.01404 10.5534C2.95004 9.22839 3.14104 8.00039 3.34304 7.11539C3.45804 6.61039 3.59204 6.10439 3.77704 5.62039C3.8423 5.44978 3.95304 5.30031 4.09725 5.18818C4.24145 5.07606 4.41261 5.00558 4.59404 4.98439Z"
                            fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_102_2157">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46937 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z"
                          fill="white" />
                      </svg></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7ZM2 8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V8ZM10 9L14 12L10 15V9Z"
                          fill="white" />
                      </svg></li>
                    </ul>

                  </div>

                </div>

              </div>

              <div className=" bottom_parent d-flex">
                <p className="bottom_pera">Do not sell or share my personals information</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop smooth top="100" color="white" border-redius="50px" />



    </div >
  )
}

export default Footer
