import "./Portfolio.css";
import Navbar from "./Navbar";
import M1 from "../img/web1.png";
import M2 from "../img/MO.png";
import M3 from "../img/Canva.png";
import M4 from "../img/html4.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <svg className="air-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, 0.5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, 0.3)" />
        </g>
      </svg>
      <section id="portfolio1">
        <div className="container mt-2">
          <div className="pb-5 mt-4"></div>
          <h1 className="fw-bold display-2 text-center text-black">
            <i>Projects</i>
          </h1>
        </div>
      </section>
      <section id="kdinfo">
        <div className="container text-center">
          <div className="row">
            <div className="col mt-5">
              <a href="https://kdnadz23.github.io/Karl-Dave-M.-Nadar/" target="_blank" rel="noopener noreferrer">
                <img src={M1} alt="My Website" />
                <h4>My Website</h4>
              </a>
              <h4>
                This website, Nad-Bar, offers not only drinks but also services like catering, branding, and meals for events.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-1 mt-3">
              <div className="card p-3 shadow">
                <img src={M4} alt="HTML" />
                <h4 className="text-center">HTML</h4>
                <p>
                  HTML (HyperText Markup Language) structures and designs web pages, allowing the inclusion of headings, paragraphs, lists, tables, and sections for organized content. It also enables embedding multimedia, creating hyperlinks for navigation, and building forms for user input.
                </p>
              </div>
            </div>
            <div className="col-lg mb-1 mt-3">
              <div className="card p-3 shadow">
                <img src={M2} alt="Microsoft Office" />
                <h4 className="text-center">Microsoft Office</h4>
                <p>
                  Microsoft Office is a suite of productivity applications developed by Microsoft, including programs such as Word (for word processing), Excel (for spreadsheets), PowerPoint (for presentations), and Outlook (for email and calendar management). It also offers tools like OneNote for note-taking, Access for database management, and Teams for collaboration and communication.
                </p>
              </div>
            </div>
            <div className="col-lg mb-1 mt-3">
              <div className="card p-3 shadow">
                <img src={M3} alt="Canva" />
                <h4 className="text-center">Canva</h4>
                <p>
                  Canva is an online design tool that allows users to create a wide range of visual content, including social media graphics, presentations, posters, and more. It offers an intuitive drag-and-drop interface, a vast library of templates, images, and fonts, and is accessible to both professional designers and beginners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg className="air-waves" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, 0.5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, 0.3)" />
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

export default Portfolio;
