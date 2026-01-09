import React from "react";
import "./Hero-Text.css";

const HolographicHero = ({scrollToContact}) => {
  const copyEmail = () => {
    navigator.clipboard.writeText("sachinnagar8662@gmail.com");
    alert("Email copied!");
  };

  return (
    <div className="ht-container">
      <div className="ht-scanlines"></div>

      {/* BADGE */}
      <div className="ht-badge-wrapper">
        
        <a href="/projects" className="ht-badge">
          <span>Design • Develop • Deliver</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff8fa3" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </div>

      {/* HEADING */}
      <h1 className="ht-heading">
        Building <span className="ht-highlight">digital experiences</span>
        <br />
        with clarity & creativity.
      </h1>

      {/* INTRO CARD */}
      <div className="ht-intro-wrapper">
       
        <div className="ht-intro-card">
        
        <span> <span className="hello-emoji">👋</span> Hello, I'm Sachin Nagar a Full Stack Developer</span>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="ht-buttons">
        <div className="ht-btn-primary-wrapper">
          <div className="ht-btn-gradient"></div>
          <div className="ht-btn-gradient-blur"></div>

          <button className="ht-btn-primary" onClick={scrollToContact}>
            Let's Connect
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="ht-btn-secondary-wrapper">
          <div className="ht-btn-secondary-glow"></div>

          <button className="ht-btn-secondary" onClick={copyEmail}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            hello@sachinnagar.in
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolographicHero;
