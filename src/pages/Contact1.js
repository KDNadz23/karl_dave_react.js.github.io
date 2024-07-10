import "./Contact.css";
import fb from "../img/facebook.png";
import tiktok from "../img/tiktok.png";
import instagram from "../img/instagram.png";

import Navbar from "./Navbar";

const Contact1 = () => {
  return (
    <>
      <Navbar />
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="contact">
        <div className="container mt-2">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <i>Contacts</i>
          </h1>
        </div>
        <section id="info">
          <div class="container">
            <div class="education-horizontal-timeline">
              <div class="row">
                <div class="col-md-4 text-center mb-3">
                  <div class="single-horizontal-timeline">
                    <div className="card p-1 shadow mt-5">
                      <h4 className="text-center">
                        <a href="https://www.facebook.com/kdnadz?mibextid=JRoKGi">
                          <img src={fb}></img>
                          <h4>Karl Dave M. Nadar</h4>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center mb-3">
                  <div class="single-horizontal-timeline">
                    <div className="card p-1 shadow mt-5">
                      <h4 className="text-center">
                        <a href="https://www.tiktok.com/@kdmn01">
                          <img src={tiktok}></img>
                          <h4>@kdmn01</h4>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center mb-3">
                  <div class="single-horizontal-timeline">
                    <div className="card p-1 shadow mt-5">
                      <h4 className="text-center">
                        <a href="https://www.instagram.com/krl_dv/">
                          <img src={instagram}></img>
                          <h4>krl_dvn</h4>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>
        <footer id="footer" className="footer_section pt-2 pb-2">
          <div className="container">
            <div className="footer-info">
              <div className="col">
                <p>
                  &copy; <span id="displayYear"></span>
                  <a href="atanganmea4@gmail.com "> kdnadar23@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <footer id="footer1" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="col"></div>
        </div>
      </footer>
    </>
  );
};

export default Contact1;
