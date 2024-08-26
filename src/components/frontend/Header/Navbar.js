import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
 
  
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Zohaib</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'false' : ''}`}>
              <ul className="navbar-nav me-5">
                <li className="nav-item active">
                  <a className="nav-link" href="/" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/about"  >About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services" >Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/project" >Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact" >Contact</a>
                </li>
              </ul>
            <div className="d-flex ">
            <a href="/Resume/resume.pdf" download="My_Resume.pdf" className='download-link'>
          <button className='download-button'>
            Download My Resume
          </button>
        </a>
            </div>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <ul className="sidebar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/services">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
          <div className="d-flex m-2 f-10">
          <a href="/Resume/resume.pdf" download="My_Resume.pdf" className='download-link'>
          <button className='download-button'>
            Download My Resume
          </button>
        </a>
            </div>
        </ul>
      </div>

      <div className="sideicon d-flex flex-column p-5 pr-3">
        <a href="https://www.instagram.com/zohaibimtiaz185/#" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/zohaib47" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/zohaib-imtiaz-1713b6214/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BECPaEwAHQPq9MdTF5LK1rA%3D%3D" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  );
}

export default Navbar;
