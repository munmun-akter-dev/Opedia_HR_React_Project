import React from 'react'
import tcom1 from '../assets/images/tcom1.png'
import tcom2 from '../assets/images/tcom2.png'
import tcom3 from '../assets/images/tcom3.png'
import tcom4 from '../assets/images/tcom4.png'
import tcom5 from '../assets/images/tcom5.png'
import tcom6 from '../assets/images/tcom6.png'



function Trusted() {
  return (
    <div>
      <section className="trusted bg_org" style={{ overflowX: 'hidden' }}>
        <div className="container">
          <div className="row">
            <div className="trusted_parent">
              <h3>Trusted by <span className="thirty_black">30,000+</span> Companies of All Sizes</h3>

              <div className="trusted_img_group  ">
                <img className="img-fluid" src={tcom1} alt="" />
                <img className="img-fluid" src={tcom2} alt="" />
                <img className="img-fluid" src={tcom3} alt="" />
                <img className="img-fluid" src={tcom4} alt="" />
                <img className="img-fluid" src={tcom5} alt="" />
                <img className="img-fluid" src={tcom6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trusted
