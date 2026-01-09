import { useMemo } from "react";
import "./herosection.css";
import GlowingCurve from "./GlowingCurve";
import HolographicHero from "./Hero-Text";

export default function Herosection({ scrollToContact }) {
  // generate stars ONCE
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  return (
    <div className="hero-section">
      <div className="star-container">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="herotext-container">
        <div className="Hero-text">
          <HolographicHero scrollToContact={scrollToContact} />
        </div>
      </div>

      <GlowingCurve />
    </div>
  );
}
