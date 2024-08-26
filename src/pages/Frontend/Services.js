
import React, { useState } from 'react';
// icons
import { IoAdd } from "react-icons/io5";
// Importing logos
import htmlLogo from '../../images/html.png';
import cssLogo from '../../images/css.png';
import bootLogo from '../../images/boot.jpeg';
import reactLogo from '../../images/react.png';
import saasLogo from '../../images/saas.png';
import jsLogo from '../../images/js.png';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible2, setIsVisible2] = useState(false);

  const handleClick2 = () => {
    setIsVisible2(!isVisible2);
  };

  return (
    <div className="container text-center mt-5 services ">
      <h1 className="mb-4">Front-end Web Development Skills</h1>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="service-card">
            <img src={htmlLogo} alt="HTML" className="img-fluid mb-3" />
            <h3>HTML</h3>
            <p>Building the structure of web pages with semantic markup.</p>

            <div class="progress " role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: ' 91%' }}>
              <div class="progress-bar" style={{ width: ' 91%', background: "#ff0000" }}></div>
            </div>


          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={cssLogo} alt="CSS" className="img-fluid mb-3" />
            <h3>CSS</h3>
            <p>Styling web pages with modern CSS techniques and pre-processors.</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: ' 85%', background: "#264de4" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={bootLogo} alt="Bootstrap" className="img-fluid mb-3 " />
            <h3>Bootstrap</h3>
            <p>Responsive design and components with the Bootstrap framework.</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: ' 90%', background: "#563d7c" }}></div>
            </div>
          </div>
        </div>

      </div>
      <div className="row ">

        <div className="col-md-4">
          <div className="service-card">
            <img src={saasLogo} alt="React" className="img-fluid mb-3" />
            <h3>Sass</h3>
            <p>Building dynamic user interfaces with React.js.</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: ' 90%', background: "#c69" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={jsLogo} alt="React" className="img-fluid mb-3" />
            <h3>Java Script</h3>
            <p>Building dynamic user interfaces with React.js.</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: ' 82%', background: "#f0db4f" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={reactLogo} alt="React" className="img-fluid mb-3" />
            <h3>React</h3>
            <p>Building dynamic user interfaces with React.js.</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: ' 85%', background: "#4c768d" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* education section */}
      <div className="education">
        <h1>Education</h1>
        <div className="row ">


          <div className="col-6 mt-5">
            <div className="container ps-5 ">
              <h2>Bachelor of software Engineering  </h2>

              {isVisible && (

                <h5>Riphah International University of Faisalabad
                  <br />
                  <strong>2020 to 2024</strong>
                </h5>

              )}

              <button className='descBtn' onClick={handleClick}> {isVisible ? < IoAdd style={{ width: "40px", height: "40px" }} /> : < IoAdd style={{ width: "40px", height: "40px"}} />}    </button>


            </div>

          </div>
          <div className="col-6 mt-5">
            <div className="container ps-5">
              <h2>Itermediate</h2>
              {isVisible2 && (
              <h5>shahab college of shahkot  <br />
              <strong>2018 to 2020</strong></h5>
                )}
              <button className='descBtn' onClick={handleClick2}> {isVisible2 ? < IoAdd style={{ width: "40px", height: "40px" }} /> : < IoAdd style={{ width: "40px", height: "40px" }} />}    </button>

            </div>
          </div>
        </div>

      
      </div>
    
    </div>
  );
};

