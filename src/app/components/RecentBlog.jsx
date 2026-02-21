"use client"

import React from "react";
import "../styles/blog.modal.css";

const blogs = [
  {
    id: 1,
    title: "Why Every Growing Business Needs a Virtual CFO",
    category: "Finance Strategy",
    date: "10 Feb 2026",
    image: "/static.png",
  },
  {
    id: 2,
    title: "GST Compliance Checklist for Startups",
    category: "Tax & Compliance",
    date: "05 Feb 2026",
    image: "/gstimg.jpg",
  },
  {
    id: 3,
    title: "Financial Planning Mistakes to Avoid in 2026",
    category: "Business Growth",
    date: "28 Jan 2026",
    image: "/strat.jpeg",
  },
];

const RecentBlog = () => {
  return (
    <section className="cfo-blog-section">

      <div className="cfo-blog-container">

        <div className="cfo-blog-header">
          {/* <span className="cfo-blog-badge">RECENT ARTICLES</span> */}
          <h2>Insights & Financial Expertise</h2>
          <p>Expert guidance on finance, tax planning, and compliance for modern businesses.</p>
        </div>

        <div className="cfo-blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="cfo-blog-card">

              <div className="cfo-blog-image-wrapper">
                <img src={blog.image} alt={blog.title} />
                <span className="cfo-blog-category">{blog.category}</span>
              </div>

              <div className="cfo-blog-content">
                <span className="cfo-blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>

                <button className="cfo-blog-btn">
                  Read More →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default RecentBlog;