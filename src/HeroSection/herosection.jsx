import { useEffect, useRef } from "react";
import "./herosection.css";
import GlowingCurve from './GlowingCurve' // optional
import HolographicHero from "./Hero-Text";

export default function Herosection({scrollToContact}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numStars = 25; // increased number of stars
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";

      // random position
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      // random size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // random twinkle timing
      star.style.animationDelay = `${1 + Math.random() * 4}s`;
      star.style.animationDuration = `${3 + Math.random() * 3}s`;

      container.appendChild(star);
      stars.push(star);
    }

    // Random movement for each star
    const moveStars = () => {
      stars.forEach((star) => {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        star.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(moveStars);
    };
    moveStars();
  }, []);

  return (
    <div className="hero-section">
      
      <div ref={containerRef} className="star-container"></div>
    
     <div className="herotext-container">
      <div className="Hero-text">
       
      <HolographicHero scrollToContact={scrollToContact}/>
      </div>
     </div>
      <GlowingCurve />
     

    </div>
  );
}
