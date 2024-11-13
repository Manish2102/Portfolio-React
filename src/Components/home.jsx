import React, { useState } from 'react';
import { FaAws, FaReact, FaPython, FaGithub, FaHtml5, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLogoFlutter, BiLogoFlask } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { Link } from 'react-scroll';  // Import Link from react-scroll
import './home.css';
import './navbar.css';
import './tools.css';
import './experiences.css';
import './contact.css';
import './Projects.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="Manishyadav.svg" alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="hamburger-icon"></div>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="home-section" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects-section" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="experiences-section" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact-section" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <div className="home-content" id="home-section">
        <div className="profile-picture">
          <img src="portfolio.svg" alt="Profile" />
        </div>
        <h1>
          Hey There <span>I code</span> and make content <span>about it!</span>
        </h1>
        <p>
          I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development.
          My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.
        </p>
        <div className="buttons">
          <button className="button">Get In Touch</button>
          <button className="button">Download CV</button>
        </div>
      </div>

      {/* Tools and Technologies */}
      <div className="experience-section" id="projects-section">
        <h2>Tools & Technologies</h2>
        <div className="icon-container">
          <div className="icon-box">
            <FaReact size={50} />
            <h3>React</h3>
          </div>
          <div className="icon-box">
            <FaPython size={50} />
            <h3>Python</h3>
          </div>
          <div className="icon-box">
            <BiLogoFlask size={50} />
            <h3>Flask API</h3>
          </div>
          <div className="icon-box">
            <BiLogoFlutter size={50} />
            <h3>Flutter</h3>
          </div>
          <div className="icon-box">
            <FaHtml5 size={50} />
            <h3>HTML</h3>
          </div>
          <div className="icon-box">
            <IoLogoCss3 size={50} />
            <h3>CSS</h3>
          </div>
          <div className="icon-box">
            <FaAws size={50} />
            <h3>AWS</h3>
          </div>
          <div className="icon-box">
            <FaGithub size={50} />
            <h3>Github</h3>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section" id="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="experience-card">
            <div className="experience-info">
              <h3>Vectorization and Validation</h3>
              <p>Developed a system for storing text embeddings in a vector database for efficient retrieval.</p>
              <p>Applied cosine similarity and Euclidean distance for accurate, query-based matching.</p>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-info">
              <h3>Garden Controller App</h3>
              <p>Developed an App Garden Controller to control Motor and schedule it.</p>
            </div>
          </div>
          <div className="experience-card">
            <div className="experience-info">
              <h3>Laundry Service Mobile Application</h3>
              <p>Built a cross-platform laundry service app with user and admin interfaces using Flutter and Dart.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="experiences-section" id="experiences-section">
        <h2>My Experiences</h2>
        <div className="experience-card">
          <div className="experience-info">
            <h3>NGE Industries | Hyderabad</h3>
            <p>Mobile Application Developer | Feb 2024 - July 2024</p>
            <p>At NGE, I served as a Mobile Application Developer and contributed to a project focused on building mobile apps using modern technologies.</p>
          </div>
        </div>
        {/* Add more experience cards as necessary */}
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:your-email@example.com">manishy0812@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91 6309387431</a></p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/manish-yadav-9024811b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Manish2102" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
