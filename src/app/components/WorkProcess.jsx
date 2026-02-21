"use client";

import React from "react";
import "../styles/workprocess.modal.css";
import {
  FaSearch,
  FaChartLine,
  FaCogs,
  FaChartBar
} from "react-icons/fa";

export default function Workprocess() {

  const steps = [
    {
      icon: <FaSearch />,
      title: "Discovery & Analysis",
      desc: "We understand your business structure, financial position, and growth challenges."
    },
    {
      icon: <FaChartLine />,
      title: "Strategic Planning",
      desc: "We develop a customized CFO roadmap aligned with your business goals."
    },
    {
      icon: <FaCogs />,
      title: "Execution & Implementation",
      desc: "We implement systems, financial controls, and optimization strategies."
    },
    {
      icon: <FaChartBar />,
      title: "Monitoring & Optimization",
      desc: "We continuously track performance and improve financial efficiency."
    }
  ];

  return (
    <section className="cfo-workflow-section">

      <div className="cfo-workflow-container">

        {/* heading */}
        <div className="cfo-workflow-header">

          {/* <span className="cfo-workflow-badge">
            OUR WORK PROCESS
          </span> */}

          <h2 className="cfo-workflow-title">
            Strategic Financial Leadership for Growing Businesses
          </h2>

          <p className="cfo-workflow-subtitle">
            Our proven CFO process ensures transparency, efficiency, and measurable financial growth.
          </p>

        </div>

        {/* steps */}
        <div className="cfo-workflow-grid">

          {steps.map((step, index) => (
            <div className="cfo-workflow-card" key={index}>

              <div className="cfo-workflow-icon">
                {step.icon}
              </div>

              <h3 className="cfo-workflow-card-title">
                {step.title}
              </h3>

              <p className="cfo-workflow-card-desc">
                {step.desc}
              </p>

              <div className="cfo-workflow-number">
                0{index + 1}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}