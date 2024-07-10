import "./Experience.css";
import Navbar from "./Navbar";

import ojt1 from "../img/kcat1.jpg";
import ojt2 from "../img/kcat2.jpg";
import ojt3 from "../img/kcatnov.jpg";
import ojt4 from "../img/kcatnove.jpg";
import ojt5 from "../img/kcatdec.jpg";
import ojt6 from "../img/kcatjan.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <svg className="air-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
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
        <div className="container mt-1">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1 text-white">
            <i>Experiences</i>
          </h1>
        </div>
        <svg className="air-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
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

        <section id="photos">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="card align-items-center">
                <h4 className="ms-3 mt-3">On The Job Training (OJT)</h4>
              </div>
              <section id="info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg mb-1 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          <i><strong>OCTOBER</strong></i>
                        </h4>
                        <h5 className="text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt1} alt="October Activity 1" />
                          <img src={ojt2} alt="October Activity 2" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-5">
                      <div className="card p-1 shadow">
                        <h4 className="text-center">
                          <i><strong>NOVEMBER</strong></i>
                        </h4>
                        <h5 className="text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt3} alt="November Activity 1" />
                          <img src={ojt4} alt="November Activity 2" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg mb-3 mt-3">
                      <div className="card p-3 shadow">
                        <h4 className="text-center">
                          <i><strong>DECEMBER-JANUARY</strong></i>
                        </h4>
                        <h5 className="text-center">Activities</h5>
                        <div className="col text-center">
                          <img src={ojt5} alt="December Activity" />
                          <img src={ojt6} alt="January Activity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

      <svg className="air-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
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
      <section id="info2">
        <div className="container text-center">
          <div className="col mb-3 mt-5">
            <div className="card align-items-center">
              <h4 className="ms-3 mt-3">Activities during On The Job Training (OJT)</h4>
            </div>
            <div id="kds" className="row mt-2">
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Bookings</h4>
                    <p className="text-secondary">
                      At KCAT, I gained experience in ledger bookings, where I recorded customer details in the ledger.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Journal Entries</h4>
                    <p className="text-secondary">
                      In the accounting office, I was responsible for encoding journal entries related to overdue payments and customer transactions at KCAT.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Wiring Connections</h4>
                    <p className="text-secondary">
                      As a trainee, I learned about cable and internet connectivity installations from one location to another, understanding the flow and transfer of connections from the main server to clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>
              <a href="mailto:kdnadar23@gmail.com">kdnadar23@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
