import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import IMG from "../img/prof2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
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
        </div>
      </div>

      <section id="carton">
        <h1 className="fw-bold display-1 text-white text-center">
          <i>ABOUT</i>
        </h1>
        <div className="container">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-12 text-center fw-bold mt-5">
                  <h2 className="text-dark">About Me</h2>
                  <p>
                    <i>
                      Hello! My name is Karl Dave Nadar, living in Kabankalan City, and studying BSIT at Central Philippines State University. I enjoy reading manhwa, manhua, and manga, watching anime and sci-fi movies, and love traveling and photographing sunsets. These hobbies and my passion for technology inspire me to continuously learn and grow.
                    </i>
                  </p>
                </div>
              </div>
              <center>
                <img src={IMG} alt="Karl Dave M. Nadar profile picture" className="mt-3"/>
              </center>
            </div>
          </div>
        </div>
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

      <section id="info_2">
        <div className="section-heading text-center mb-1">
          <h1><i>Educational Attainment</i></h1>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h3>2008-2014</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">ERAMS-East</h4>
                    <p className="text-secondary">
                      Barangay 9, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h3>2014-2019</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Kabankalan Catholic College</h4>
                    <p className="text-secondary">
                      Brgy. Talubangi, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h3>2019-2024</h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Central Philippines State University</h4>
                    <p className="text-secondary">
                      Brgy. Camingawan, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href="mailto:kdnadar23@gmail.com"> kdnadar23@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
