

"use client";

import React from "react";
import "../styles/clientfeedback.modal.css"

const testimonials = [
  {
    name: "Shivam Singh",
    role: "Founder",
    rating: 5,
    text: "Radiant Company Services has been a game-changer for our business. Their Virtual CFO support and strategic planning helped us streamline finances and make smarter decisions."
  },
  {
    name: "Kanika",
    role: "Business Owner",
    rating: 5,
    text: "Their team made the entire compliance process stress-free. From legal drafting to GST filings, they were fast, accurate, and always available for queries."
  },
  {
    name: "Saheb Narang",
    role: "Entrepreneur",
    rating: 5,
    text: "Radiant Company Services offers more than just accounting—they truly understand business. Their insights into financial planning and compliance have saved us time and money."
  }
];

export default function ClientFeedback() {
  return (
    <section className="cfo-testimonial-section">

      <div className="cfo-testimonial-container">

        <div className="cfo-testimonial-header">
          {/* <span className="cfo-testimonial-badge">CLIENT FEEDBACKS</span> */}
          <h2>What Our Clients Say</h2>
          <p>Trusted by growing businesses for strategic financial leadership and compliance excellence.</p>
        </div>

        <div className="cfo-testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="cfo-testimonial-card">

              <div className="cfo-rating">
                {"★★★★★"}
              </div>

              <p className="cfo-testimonial-text">
                “{item.text}”
              </p>

              <div className="cfo-client-info">
                <div className="cfo-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}