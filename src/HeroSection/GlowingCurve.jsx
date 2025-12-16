import React from "react";

const GlowingCurve = () => {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] transform overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
      }}
    >
      {/* 🔮 Inner Purple Glow (Made Smoother & Richer) */}
      <div
        className="-translate-x-1/2 absolute bottom-[165px] left-1/2 h-[120px] w-[820px] blur-[70px] rounded-full"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(125,60,255,0.9) 0%, rgba(50,10,120,0.2) 60%, rgba(10,10,10,0) 100%)",
          transform: "translateX(90px)",
          opacity: 0.9,
        }}
      ></div>

      {/* 🌫️ Depth Shadow (Smoother fade, darker base) */}
      <div
        className="absolute right-[-430px] bottom-[-760px] left-[-450px] h-[960px] rounded-[100%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 70%)",
          filter: "blur(4px)",
          opacity: 0.9,
        }}
      ></div>

      {/* ✨ Outer Curve Line – Enhanced Glow */}
      <div
        className="absolute right-[-510px] bottom-[-760px] left-[-525px] rounded-[100%] z-10 pointer-events-none"
        style={{
          aspectRatio: "2.3468 / 1",
          height: "956px",
          border: "2px solid rgba(255, 255, 255, 0.9)",
          background: "transparent",
          boxShadow: `
            0 0 40px rgba(255,255,255,0.8),
            0 0 90px rgba(170,120,255,0.45),
            inset 0 0 25px rgba(255,255,255,0.9),
            0 0 120px rgba(150,60,255,0.4)
          `,
        }}
      ></div>
    </div>
  );
};

export default GlowingCurve;
