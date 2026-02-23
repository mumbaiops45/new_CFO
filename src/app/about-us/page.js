
"use client";

import React from "react";
import { FaChartLine, FaBullseye, FaShieldAlt } from "react-icons/fa";
import { FiUsers, FiTarget } from "react-icons/fi";


const Page = () => {
    return (
        <div>
            <section className="text-white text-center position-relative pt-4">

                <img
                    src="/about.jpg"
                    alt="About CFO Project"
                    className="w-100"
                    style={{ height: "450px", objectFit: "cover" }}
                />


                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: "linear-gradient(rgba(13,27,42,0.7), rgba(65,90,119,0.7))",
                    }}
                ></div>


                <div className="container py-5 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center">
                    <h1 className="display-4 fw-bold mb-4">About CFO Project</h1>
                    <p className="lead col-lg-8 mx-auto">
                        Empowering businesses with strategic financial intelligence,
                        smart advisory solutions, and data-driven insights to achieve
                        sustainable growth and long-term success.
                    </p>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <h2 className="fw-bold mb-4 text-black">Who We Are</h2>
                            <p className="text-muted ">
                                CFO Project is a modern financial consulting platform dedicated
                                to helping startups, entrepreneurs, and enterprises build strong
                                financial foundations. We combine industry expertise with strategic
                                planning to deliver measurable business outcomes.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div className="card shadow-lg border-0 rounded-4 p-4 hover-scale">
                                <h5 className="fw-bold mb-3 text-dark">Our Core Services</h5>

                                <ul className="list-unstyled text-muted">
                                    <li className="mb-2 d-flex align-items-center">
                                        <FaChartLine className="me-2 text-primary" /> Strategic Financial Planning
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <FiTarget className="me-2 text-primary" /> Budgeting & Forecasting
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <FaShieldAlt className="me-2 text-primary" /> Risk Management
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <FiUsers className="me-2 text-primary" /> Business Growth Advisory
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <FaBullseye className="me-2 text-primary" /> Performance Analytics
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card h-100 shadow border-0 rounded-4 p-4 hover-scale">
                                <h4 className="fw-bold text-black mb-3">Our Mission</h4>
                                <p className="text-muted">
                                    To simplify financial management for businesses through
                                    intelligent planning, transparent reporting, and actionable
                                    insights that drive consistent growth.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 shadow border-0 rounded-4 p-4 hover-scale">
                                <h4 className="fw-bold text-black mb-3">Our Vision</h4>
                                <p className="text-muted">
                                    To become a trusted global financial intelligence partner,
                                    enabling companies to make confident decisions and build
                                    financially resilient organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="py-5 text-white"
                style={{
                    background: "linear-gradient(135deg, #1b263b, #0d1b2a)",
                }}
            >
                <div className="container text-center">
                    <h2 className="fw-bold mb-5">Why Choose CFO Project?</h2>
                    <div className="row g-4">
                        {[
                            {
                                title: "Expert Guidance",
                                desc: "Financial expertise tailored to your business strategy.",
                            },
                            {
                                title: "Data-Driven Approach",
                                desc: "Insights powered by analytics and industry best practices.",
                            },
                            {
                                title: "Growth Focused",
                                desc: "Strategies designed for long-term profitability and scalability.",
                            },
                        ].map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="p-4 bg-white text-dark rounded-4 shadow h-100 hover-raise">
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4 text-black">
                        Let’s Build Your Financial Future
                    </h2>
                    <p className="text-muted mb-4 col-lg-6 mx-auto">
                        Partner with CFO Project and transform your financial operations
                        into a strategic advantage.
                    </p>

                    <button
                        className="btn btn-lg px-5 shadow"
                        style={{ backgroundColor: "#5EA349", color: "#fff" }}
                    >
                        Get Started
                    </button>
                </div>
            </section>


            <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
        }
        .hover-raise:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </div>
    );
};

export default Page;