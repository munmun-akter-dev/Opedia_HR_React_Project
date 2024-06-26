
// import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <section className="top_bar" style={{ overflowX: "hidden" }}>
        <div className="nav_section">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <h3 className="nav_left"> Opedia<span className="hr">HR</span></h3>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className=" left_list navbar-nav align-items-center ms-auto  mb-2 ">

                  <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="#">Our Platform</a>
                    {/* <Link to='/' >Our Platform</Link> */}

                  </li>

                  <li className="nav-item ">
                    <a className="nav-link" href="#">Solutions </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Why OpediaHR</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Resources</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>

                <ul className=" right_list navbar-nav align-items-center ms-auto   mb-2 mb-lg-0">


                  <li className="nav-item d-none d-lg-block ">
                    <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg " width="24"
                      height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.77194 2.43905L8.84894 2.09505C9.85694 1.77305 10.9349 2.29405 11.3669 3.31205L12.2269 5.34005C12.6019 6.22305 12.3939 7.26205 11.7129 7.90805L9.81994 9.70605C9.93694 10.7821 10.2979 11.8411 10.9039 12.8831C11.4798 13.8912 12.252 14.7736 13.1749 15.4781L15.4509 14.7181C16.3129 14.4311 17.2519 14.7621 17.7809 15.5391L19.0129 17.3491C19.6289 18.2531 19.5179 19.4991 18.7549 20.2651L17.9369 21.0861C17.1229 21.9031 15.9609 22.2001 14.8849 21.8641C12.3459 21.0721 10.0119 18.7211 7.88194 14.8111C5.74894 10.8951 4.99694 7.57105 5.62394 4.84305C5.88794 3.69505 6.70594 2.78005 7.77394 2.43905"
                        fill="#7275FF" />
                    </svg>+154521695401</a>

                  </li>

                  <li className="nav-item">

                    <a className="nav-link" href="#"><span className="blck_log">Login</span></a>
                  </li>

                  <li className="nav-item">

                    <button className="btn_primary">
                      <a href="#"><span className="cnt">Contact Us</span></a>
                    </button>

                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>

      </section>

    </div>
  )
}

export default Navbar
