
'use client';

import React, { useState } from 'react';
import "../styles/feature.modal.css";
import FeatureCard from './FeatureCard';

const Feature = () => {
  const cards = [
    {
      name: "Saheb Narang",
      role: "Business Owner",
      text: "Radiant Company Services offers more than just accounting — they truly understand business.",
      extraText: "They also provided detailed growth strategies that increased revenue by 25%.",
      image: "https://t3.ftcdn.net/jpg/05/17/96/20/360_F_517962042_PssY3rZpOEpC9LN0kiF3t5m3vdn18LXd.jpg",
      rating: 5,
    },
    {
      name: "Shivam Singh",
      role: "Startup Founder",
      text: "Their team made compliance stress-free. From GST to legal drafting, everything was fast and Growing",
      extraText: "The dashboard they provided helped track finances easily and avoid mistakes.",
      image: "https://www.shutterstock.com/image-photo/happy-young-professional-latin-business-260nw-2438190417.jpg",
      rating: 4,
    },
    {
      name: "Kanika",
      role: "Finance Director",
      text: "Virtual CFO support helped us make smarter decisions and improve profitability significantly.",
      extraText: "They suggested cost-cutting and investment strategies that doubled efficiency.",
      image: "https://photos.peopleimages.com/picture/202302/2628087-happy-smile-and-portrait-of-indian-woman-at-desk-for-management-planning-and-data.-research-innovation-and-vision-with-face-of-employee-in-office-for-information-website-and-professional--fit_400_400.jpg",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "CEO",
      text: "Professional, reliable, and highly knowledgeable. Their financial advisory helped us scale confidently.",
      extraText: "We achieved a 30% increase in quarterly profits with their guidance.",
      image: "https://t3.ftcdn.net/jpg/05/17/96/20/360_F_517962042_PssY3rZpOEpC9LN0kiF3t5m3vdn18LXd.jpg",
      rating: 5,
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="voice-premium-section">
      <div className="voice-container">
        <div className="voice-header">
          <h2 className="voice-title">Explore Our Core Services</h2>
        </div>

        <div className="voice-carousel-wrapper">
          <div className="voice-carousel-track">
            {cards.concat(cards).map((card, index) => (
              <div
                key={index}
                className="voice-card-wrapper"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <FeatureCard {...card} showExtra={hoveredIndex === index} />
                
                {hoveredIndex === index && (
                  <button className="hover-btn">Get Started</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;