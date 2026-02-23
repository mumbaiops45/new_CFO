'use client';

import React, { useState, useEffect } from "react";
import "../styles/main.modal.css";

const sections = [
  {
    id: 1,
    number: "01",
    title: "Virtual CFO And Strategic Planning Support",
    desc: "Need stronger financial control and better decisions. Our Virtual CFO and advisory services help you plan, comply, and grow with full visibility.",
    buttons: [
      { text: "Book Call", type: "primary" },
      { text: "Know More", type: "secondary" },
    ],
    img: "virtual.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Expert Financial And Legal Solutions For Growth",
    desc: "We empower businesses with end to end support including income tax and GST filings, legal drafting, and compliance so you can focus on scaling with confidence.",
    buttons: [
      { text: "Connect with Us", type: "primary" },
      { text: "Our Services", type: "secondary" },
    ],
    img: "handshak1.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Trusted CA And Consultants: Income Tax And GST Filings Made Simple",
    desc: "From accurate filings to smart planning, we handle your tax and GST needs with clarity and on time compliance to reduce risk and save effort.",
    buttons: [
      { text: "Get a Consultant", type: "primary" },
      { text: "View More Services", type: "secondary" },
    ],
    img: "gstimg.jpg",
  },
];

const Main = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formd, setformd] = useState({
    name: "",
    email: "",
    mobileNo: "",
    service: "",
    message: ""
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformd((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted data ", formd)
  }

  return (
    <div className="main-container">

      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`section ${index === currentSection ? "active" : "inactive"}`}
          style={{ backgroundImage: `url(${section.img})` }}
        >
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-number">{section.number}</div>
              <h1>{section.title}</h1>
              <p>{section.desc}</p>
              <div className="buttons">
                {section.buttons.map((btn, i) => (
                  <button key={i} className={btn.type}>
                    {btn.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}


      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <h4>Request a Consultation</h4>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="tsts"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formd.name}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="mobileNo"
            className="tsts"
            placeholder="Enter phone number"
            onChange={handleChange}
            value={formd.mobileNo}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            className="tsts"
            placeholder="Enter email"
            onChange={handleChange}
            value={formd.email}
            required
          />

          <label>Service Needed</label>
          <select
            name="service"
            className="tsts"
            value={formd.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Income Tax">Income Tax</option>
            <option value="GST Filing">GST Filing</option>
            <option value="Legal Drafting">Legal Drafting</option>
            <option value="Statutory Compliance">Statutory Compliance</option>
            <option value="Virtual CFO">Virtual CFO</option>
            <option value="Business Consulting">Business Consulting</option>
          </select>

          <label>Message</label>
          <input
            type="text"
            name="message"
            className="tsts"
            placeholder="Enter Short Message"
            onChange={handleChange}
            value={formd.message}
          />

          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default Main;