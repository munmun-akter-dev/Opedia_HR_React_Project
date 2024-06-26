import React from 'react'
import samls from '../assets/images/samls.png'
import slack from '../assets/images/slack.png'
import cul from '../assets/images/cul.png'
import netsel from '../assets/images/netsel.png'
import deel from '../assets/images/deel.png'
import check from '../assets/images/check.png'
import gift from '../assets/images/gift.png'
import msoft from '../assets/images/msoft.png'
import fifteen from '../assets/images/fifteen.png'
import indeed from '../assets/images/indeed.png'
import dep from '../assets/images/dep.png'
import latties from '../assets/images/latties.png'
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t4 from '../assets/images/t4.png'
import gogool from '../assets/images/gogool.png'


function Tools(props) {
  return (
    <div>
      <section className="tools bg_white" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tools_left_side ">
                <div className="tools_img_group d-flex  ">
                  <img className="img-fluid" src={samls} alt="" />
                  <img className="img-fluid" src={slack} alt="" />
                  <img className="img-fluid" src={cul} alt="" />
                  <img className="img-fluid" src={netsel} alt="" />

                  <img className="img-fluid d-none d-lg-block d-md-block" src={deel} alt="" />
                  <img className="img-fluid d-none d-lg-block d-md-block" src={check} alt="" />

                </div>
                <div className="tools_img_group d-flex pt-3 ">

                  <img className="img-fluid" src={deel} alt="" />

                  <img className="img-fluid" src={gift} alt="" />

                  <img className="img-fluid" src={msoft} alt="" />
                  <img className="img-fluid" src={fifteen} alt="" />

                  <img className="img-fluid d-none d-lg-block d-md-block" src={indeed} alt="" />
                  <img className="img-fluid d-none d-lg-block d-md-block" src={dep} alt="" />
                </div>
                <div className="tools_img_group d-flex pt-3 ">
                  <img className="img-fluid" src={t1} alt="" />
                  <img className="img-fluid" src={t2} alt="" />
                  <img className="img-fluid" src={gogool} alt="" />
                  <img className="img-fluid" src={t4} alt="" />

                  <img className="img-fluid d-none d-lg-block d-md-block" src={gift} alt="" />
                  <img className="img-fluid d-none d-lg-block d-md-block" src={latties}
                    alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tools_right_side">
                <p className="pera_num">125+ Integrations</p>
                <h2>Pre-built HR for the <span className="purple_service">most <br className="d-none d-lg-block" />
                  popular</span> tools</h2>

                <p className="pera_num">Easily integrate your program with all of the <br className="d-none d-lg-block" />
                  other tool in your stack.</p>

                <div className="tools_btn">

                  <button className="btn_secondary">
                    <a href="#"><span className="btn_white_text">See All Inergrations</span></a>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

Tools.propTypes = {

}

export default Tools

