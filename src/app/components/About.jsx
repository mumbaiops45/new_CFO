import React from 'react';
import "../styles/about.modal.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image animate-slide">
          <img src="/about.jpg" alt="Radiant Company Services" />
        </div>

        <div className="about-content animate-fade">
          <h2>ABOUT RADIANT COMPANY SERVICES</h2>
          <h3>Financial And Legal Support Built For Growing Businesses</h3>
          <p>
            At Radiant Company Services, we empower businesses to thrive with expert financial 
            and legal solutions. Our team of seasoned Chartered Accountants and consultants provides 
            end-to-end support including income tax and GST filings, legal drafting, strategic planning, 
            and statutory compliance. We deliver clarity, confidence, and compliance so you can focus on growth.
          </p>

          
          <div className="cards-container">
            <div className="card">Accurate income tax and GST filing with timely compliance</div>
            <div className="card">Legal drafting support for contracts, notices, and documentation</div>
            <div className="card">Virtual CFO and strategic planning for better decisions</div>
            <div className="card">Statutory compliance guidance to reduce risk and penalties</div>
          </div>

          <button className="premium-btn">Know about us</button>
        </div>
      </div>
    </section>
  );
};

export default About;