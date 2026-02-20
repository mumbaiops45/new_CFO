import React from "react";
import "../styles/footer.modal.css";

const FooterColumn = ({ title, children }) => (
  <div className="col footer-column">
    <h5 className="footer-title">{title}</h5>
    <div className="footer-content mt-3">{children}</div>
  </div>
);

const Footer = () => {
  const services = [
    "CA & Audit Services",
    "Business Consultancy",
    "Virtual CFO Services",
    "Strategic Planning",
    "Compliance Management",
    "Income Tax & GST Filing",
    "Legal Documentation",
  ];

  const locations = ["Thane", "Mumbai", "Navi Mumbai"];

  const blogs = [
    "Expert CA & Audit Services in Thane",
    "Legal Drafting Services in Thane",
    "Compliance Experts in Navi Mumbai",
  ];

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row gy-4 text-start text-light">

          <div className="col footer-column">
            <img
              src="https://easylyve.s3.ap-south-1.amazonaws.com/logos/61YMOvbNuVL.jpg"
              alt="Company Logo"
              width="140"
              className="mb-3"
            />
            <p className="footer-text">
              Trusted Chartered Accountants & Financial Advisors delivering
              compliance, taxation, and strategic business solutions.
            </p>
          </div>

          
          <FooterColumn title="Our Services">
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2 footer-link">{service}</li>
              ))}
            </ul>
          </FooterColumn>

          
          <FooterColumn title="We Are Active In">
            <ul className="list-unstyled">
              {locations.map((location, index) => (
                <li key={index} className="mb-2 footer-text">{location}</li>
              ))}
            </ul>
          </FooterColumn>

          
          <FooterColumn title="Recent Blogs">
            <ul className="list-unstyled">
              {blogs.map((blog, index) => (
                <li key={index} className="mb-2 footer-link">{blog}</li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <p className="footer-text mb-1">427. A-Wing Phoenix House,</p>
            <p className="footer-text mb-1">Lower Parel West, Mumbai</p>
            <p className="footer-text mb-1">+91 84548 16913</p>
            <p className="footer-text mb-1">info@radiantservices.in</p>
          </FooterColumn>
        </div>
      </div>

      <div className="footer-bottom text-center mt-4 py-3">
        <small>
          © 2026{" "}
          <a
            href="https://www.nakshatranamahacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-bottom-link"
          >
            nakshatranamahacreations
          </a>
          . All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
