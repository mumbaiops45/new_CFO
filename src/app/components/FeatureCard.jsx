'use client';

import React from 'react'

const FeatureCard = ({ name, role, text, extraText, image, rating, showExtra }) => {
  return (
     <div className="voice-card">
      <div className="voice-quote">"</div>

      <p className="voice-text">{text}</p>

      {showExtra && (
        <div className="voice-overlay">
          {image && <img src={image} alt={name} className="voice-extra-image" />}
          <p className="voice-extra-text">{extraText}</p>
        </div>
      )}

      <div className="voice-rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>&#9733;</span>
        ))}
      </div>

      <div className="voice-user">
        <div className="voice-avatar">{name.charAt(0)}</div>
        <div>
          <div className="voice-name">{name}</div>
          <div className="voice-role">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
