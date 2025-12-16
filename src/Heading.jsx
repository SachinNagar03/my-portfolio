import React from "react";
import "./Heading.css";

const Heading = ({ bgText, overlayText }) => {
  return (
    <div className="heading-container">
      {/* Background Text */}
      <h2 className="background-text">{bgText}</h2>

      {/* Overlay Text */}
      <div className="overlay-container">
        <h3 className="overlay-text">{overlayText}</h3>
      </div>

      {/* Accent Elements */}
      <div className="accent-elements">
        <div className="accent-dot"></div>
        <div className="accent-square"></div>
      </div>
    </div>
  );
};

export default Heading;
