import React from "react";
import "./about-me.css";

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="luminous-card">

        {/* Content Section */}
        <div className="content-section">
          <div className="profile-header">

            <div className="avatar">
              <img
                src="/profile.png"
                alt="Profile"
                className="avatar-img"
              />
            </div>

            <div className="profile-info">
              <h3 className="profile-title">Full Stack Developer</h3>
              <p className="profile-subtitle">Building Digital Experiences</p>
            </div>
          </div>

          <p className="description-main">
            I'm a passionate Full Stack Developer with expertise in building
            modern, scalable web applications. With experience in both
            frontend and backend technologies, I create seamless digital
            experiences from database to user interface.
          </p>

          <p className="description-secondary">
            With a deep understanding of both frontend elegance and backend
            robustness, I transform complex challenges into elegant solutions.
            
          </p>
        </div>

        <div className="about-section">
          <h4 className="about-title">About Me</h4>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
