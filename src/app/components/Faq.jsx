

"use client";

import { useState, useEffect, useRef } from "react";
import Question from "../data/faq";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/faq.modal.css";


function FAQItem({ question, answer, index }) {

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

  }, []);

  return (

    <div
      ref={ref}
      className={`faq-premium-item ${visible ? "faq-show" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >

      <button
        className="faq-premium-question"
        onClick={() => setOpen(!open)}
      >

        <span>{question}</span>

        <span className={`faq-icon ${open ? "rotate" : ""}`}>
          +
        </span>

      </button>

      <div className={`faq-premium-answer ${open ? "open" : ""}`}>

        <p>{answer}</p>

      </div>

    </div>

  );

}



export default function Faq() {

  return (

    <section className="faq-premium-section">

      <div className="faq-premium-container">

        {/* HEADER */}

        <div className="faq-header-center">

          
          <h2 className="faq-premium-title">
            Frequently Asked Questions
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about our Virtual CFO services
          </p>

        </div>


        <div className="faq-grid">

          {/* LEFT FAQ */}

          <div>

            {Question.map((faq, index) => (

              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />

            ))}

          </div>


          {/* RIGHT SIDEBAR */}

          <div>

            <div className="faq-premium-card">

              <h3>
                Need Financial Guidance?
              </h3>

              <p>
                Talk with our Virtual CFO experts for compliance,
                tax planning, and strategic growth.
              </p>

              <a href="tel:+918454816913">

                <button className="faq-cta-btn">
                  Book Consultation
                </button>

              </a>

            </div>


            <div className="faq-premium-card">

              <h3>
                Why Choose Radiant?
              </h3>

              <ul className="faq-feature-list">

                <li>
                  <FaCheckCircle /> 500+ Businesses Served
                </li>

                <li>
                  <FaCheckCircle /> 10+ Years Experience
                </li>

                <li>
                  <FaCheckCircle /> PAN India Support
                </li>

                <li>
                  <FaCheckCircle /> Trusted CFO Experts
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}