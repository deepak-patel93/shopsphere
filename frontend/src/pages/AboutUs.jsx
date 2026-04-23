import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../pageStyles/About.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">
          About <span>Us</span>
        </h1>

        <p className="about-description">
          Welcome to our E-Commerce website built using MERN stack. We provide
          high-quality products with a smooth and secure shopping experience.
        </p>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To deliver the best products with great user experience and fast
            delivery.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To become a trusted online platform for customers worldwide.</p>
        </div>

        <button className="about-btn">Explore Products</button>
      </div>

      <div className="team-section">
        <h2 style={{ textAlign: "center", color: "magenta" }}>Our Team</h2>
        <div className="team-container">
          <a
            href="https://instagram.com/deepak_kumar__3"
            target="_blank"
            rel="noopener noreferrer" className="team-link"
          >
            <div className="team-card">
              <img src="/Deepak.jpg" alt="profile" />
              <h3>Deepak Patel</h3>
              <p>Frontend Developer</p>
            </div>
          </a>

          <div className="team-card">
            <img src="/AlokImage.jpg" alt="profile" />
            <h3>Alok kumar</h3>
            <p>Backend Developer</p>
          </div>

          <div className="team-card">
            <img src="/Brijesh.jpg" alt="profile" />
            <h3>Brijesh Ram</h3>
            <p>Database Manager</p>
          </div>

          <div className="team-card">
            <img src="/image.png" alt="profile" />
            <h3>Anil kurmar Chaudhary</h3>
            <p>UI Designer</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
