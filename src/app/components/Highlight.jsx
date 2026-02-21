


"use client";

import React, { useState, useEffect } from "react";
import "../styles/highlight.modal.css"

const services = [
    {
        id: "01",
        name: "Virtual CFO",
        title: "Virtual CFO Support",
        desc: "Strategic financial leadership, reporting, forecasting, and growth planning for modern businesses.",
        image: "/partner1.jpg"
    },
    {
        id: "02",
        name: "Tax & GST",
        title: "Income Tax and GST Filing",
        desc: "Stay compliant with accurate and timely filings. Optimize deductions and reduce compliance stress.",
        image: "/strat.jpeg"
    },
    {
        id: "03",
        name: "Compliance",
        title: "Statutory Compliance Management",
        desc: "Complete compliance solutions including ROC, GST, and regulatory reporting support.",
        image: "/gstimg.jpg"
    }
];

export default function Highlight() {

    const [active, setActive] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % services.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="cfo-premium-services-section">

            <div className="cfo-premium-services-container">


                <div className="cfo-premium-services-header">


                    <h2 className="cfo-premium-services-title">
                        Smart support for finance, tax, and compliance
                    </h2>

                    <p className="cfo-premium-services-subtitle">
                        Reliable solutions built for growing businesses. Clear process, timely compliance, and expert guidance that keeps you confident.
                    </p>

                </div>


                <div className="cfo-premium-services-grid">


                    <div className="cfo-premium-services-list">

                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`cfo-premium-service-item ${active === index ? "active" : ""}`}
                                onClick={() => setActive(index)}
                            >

                                {/* <div className="cfo-premium-service-number">
                                    {service.id}
                                </div> */}

                                <div>
                                    {/* <div className="cfo-premium-service-name">
                                        {service.name}
                                    </div> */}

                                    <div className="cfo-premium-service-title-small">
                                        {service.title}
                                    </div>
                                </div>

                            </div>
                        ))}

                         <div className="cfo-premium-preview-content">
                        <span className="cfo-premium-preview-badge">
                            Radiant Company Services
                        </span>

                        <h3>
                            {services[active].title}
                        </h3>

                        <p>
                            {services[active].desc}
                        </p>

                        <div className="cfo-premium-preview-buttons">

                            <button className="cfo-premium-btn-primary">
                                Get a Quote →
                            </button>

                            <button className="cfo-premium-btn-secondary">
                                View Services
                            </button>

                        </div>
                    </div>

                    </div>


                    <div className="cfo-premium-service-preview">

                        <div className="cfo-premium-preview-card">

                            <div className="cfo-premium-preview-image-wrapper">

                                <img
                                    src={services[active].image}
                                    className="cfo-premium-preview-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}