
"use client"

import React, { useState } from "react";

const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center "
            style={{
                backgroundColor: "#E2EDFC",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div className="container " style={{ padding: "155px 0px" }}>
                <div className="row justify-content-center">

                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div
                            className="card shadow-lg p-5 rounded-4 border-0"
                            style={{
                                backgroundColor: "white",
                                color: "#333",
                            }}
                        >
                            <h2 className="fw-bold mb-3" style={{ fontSize: "16px" }}>Contact Us</h2>
                            <p className="mb-4" style={{ fontSize: "14px" }}>
                                Have questions or want to work together? Fill out the form and we’ll get back to you shortly.
                            </p>
                            <div className="mb-3">
                                <h5 className="fw-semibold" style={{ fontSize: "16px" }}>📞 Phone</h5>
                                <p style={{ fontSize: "14px" }}>+91 8454816913</p>
                            </div>
                            <div className="mb-3">
                                <h5 className="fw-semibold" style={{ fontSize: "18px" }}>📧 Email</h5>
                                <p style={{ fontSize: "14px" }}>info@radiantservices.in</p>
                            </div>
                            <div>
                                <h5 className="fw-semibold" style={{ fontSize: "18px" }}>📍 Address</h5>
                                <p style={{ fontSize: "14px" }}>427. A-Wing Phoenix House,Lower Parel West, Mumbai</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div
                            className="card shadow-lg rounded-4 border-0 p-5"
                            style={
                                {
                                    backgroundColor: "white",
                                    color: "#333",
                                    fontSize: "14px"
                                }
                            }
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="mt-3">
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <input
                                        type="email"
                                        className="form-control rounded-3"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        type="text"
                                        className="form-control rounded-3"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-3">
                                    <textarea
                                        className="form-control  rounded-3"
                                        name="message"
                                        rows="4"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn  w-100 mt-4 fw-bold shadow-sm "
                                    style={
                                    {
                                        color: "white",
                                        transition: "all 0.3s ease",
                                        background: "#0B1F3A"
                                    }
                                }
                                    onMouseOver={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.05)")
                                    }
                                    onMouseOut={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;