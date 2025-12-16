import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.65, // longer = softer, floatier (1.4 - 1.7 is the max sweet spot)
      smooth: true,
      smoothTouch: true,
      lerp: 0.08, // extra smoothing layer (default is 0.1) lower = smoother
      wheelMultiplier: 0.85, // reduces sharp scroll jumps
      touchMultiplier: 1.1,
      syncTouch: true, // makes touch scroll smoother & synced
      easing: (t) => Math.min(1, 1 - Math.pow(2, -12 * t)), // hyper-smooth exponential ease
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScroll;
