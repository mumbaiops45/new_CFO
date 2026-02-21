


// "use client";
import React from "react";
import Link from "next/link";
import "../styles/case.modal.css";

const caseStudies = [
  {
    category: "Virtual CFO",
    type: "Services Business",
    title: "Cashflow stability for a growing services firm",
    description:
      "We implemented monthly reporting, structured budgeting, and vendor payment discipline to improve financial visibility and operational control.",
    points: [
      "Cashflow Planning",
      "Monthly MIS",
      "Better Forecasting",
    ],
  },
  {
    category: "Income Tax & GST",
    type: "Startup and SME",
    title: "Simplified filings and reduced compliance stress",
    description:
      "Accurate filings and proactive planning helped avoid penalties and removed last-minute documentation pressure.",
    points: [
      "On-time Returns",
      "Reduced Errors",
      "Improved Deductions",
    ],
  },
  {
    category: "Statutory Compliance",
    type: "Private Limited Company",
    title: "ROC and regulatory compliance made audit ready",
    description:
      "We created a compliance calendar and managed ROC filings with proper documentation and strict timeline control.",
    points: [
      "ROC Filings",
      "Compliance Calendar",
      "Audit Ready Docs",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="case-section">

      {/* HEADER */}
      <div className="case-header">
        <h2 className="case-title">
          Real outcomes delivered with clarity and compliance
        </h2>

        <p className="case-subtitle">
          Explore how Radiant Company Services supports businesses with
          structured finance, accurate filings, and strong compliance systems.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="case-grid">
        {caseStudies.map((item, index) => (
          <div key={index} className="case-card">

            {/* TOP */}
            <div className="case-card-top">

              <div className="case-badge">
                {item.category}
              </div>

              <div className="case-type">
                {item.type}
              </div>

              <h3 className="case-card-title">
                {item.title}
              </h3>

              <p className="case-description">
                {item.description}
              </p>

            </div>

            {/* POINTS */}
            <div className="case-points">
              {item.points.map((point, i) => (
                <div key={i} className="case-point">
                   {point}
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="case-card-footer">

              <Link href="#" className="case-link btn btn-success text-white">
                Read Full Story →
              </Link>

              <Link href="#" className="case-btn btn btn-primary ">
                Talk to Expert
              </Link>

            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      {/* <div className="case-cta">

        <h3>
          Want similar results for your business?
        </h3>

        <p>
          Get support for tax filing, compliance, Virtual CFO, and business
          planning with a clear process and timely delivery.
        </p>

        <Link href="#" className="case-main-btn">
          Schedule Consultation
        </Link>

      </div> */}

    </section>
  );
};

export default CaseStudies;
