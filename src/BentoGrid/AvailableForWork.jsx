import React from "react";
import "./AvailableForWork.css";

const AvailableForWork = () => {
  return (
    <div className="AFW-card">
      <div className="status-badge">
        <div className="status-dot"></div>
        <span className="status-text">Available for Work</span>
      </div>

      <h2 className="AFW-headline">
        I'm <span className="AFW-text-gradient">open to work</span>
      </h2>

      <p className="AFW-description">
        Currently seeking new opportunities to create impactful digital
        experiences. I specialize in building modern web applications with
        clean, maintainable code and exceptional user experiences.
      </p>


      <ul className="AFW-details-list">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Remote / Worldwide</span>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Flexible hours</span>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <span>Full-time / Contract / Freelance</span>
        </li>

      

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>Fast delivery & high quality</span>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>Great communication & collaboration</span>
        </li>
      </ul>

      <button className="AFW-cta-button" onClick={()=>window.open("/sachinResume.pdf" , "_blank")}>Resume</button>
    </div>
  );
};

export default AvailableForWork;
