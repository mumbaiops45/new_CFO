


'use client';
import React from 'react';
import "../styles/body.modal.css";

const Body = () => {
  return (
    <section className="hero-wrapper">

      {/* background shape */}
      <div className="hero-bg-shape"></div>

      <div className="container hero-container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <h1 className="hero-title1">
              Strategic Financial Leadership
              <span className="hero-highlight"> for Growing Businesses</span>
            </h1>

            <p className="hero-desc">
              Radiant Services Company provides expert Virtual CFO, tax,
              compliance, and strategic advisory services. We help companies
              improve profitability, maintain compliance, and scale with
              confidence.
            </p>

            {/* premium cards */}
            <div className="hero-card-grid">

              <div className="hero-card">
                <div className="card-icon">📊</div>
                <div>
                  <h6>Virtual CFO</h6>
                  <p>Financial strategy & leadership</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">📁</div>
                <div>
                  <h6>Compliance</h6>
                  <p>Statutory & legal compliance</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">💰</div>
                <div>
                  <h6>Tax Filing</h6>
                  <p>GST & Income tax services</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">📈</div>
                <div>
                  <h6>Business Growth</h6>
                  <p>Planning & advisory</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">

            <div className="hero-image-box">

              <img
                src="static.png"
                alt="CFO Services"
                className="hero-image"
              />

              <div className="floating-card">
                <span>15+ Years Experience</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Body;
