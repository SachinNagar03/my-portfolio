import { useRef } from "react";
import "./App.css";

import EducationSection from "./educationsection";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import Projects from "./Project/Projects";
import Skillsection from "./skillsection";
import Herosection from "./HeroSection/herosection";
import BentoGrid from "./BentoGrid/bentogrid";
import SmoothScroll from "./SmoothScroll";

function App() {
  // Create references
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll functions (these will be passed to Navbar)
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToEducation = () => educationRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <SmoothScroll />

      <Navbar
        scrollToSkills={scrollToSkills}
        scrollToEducation={scrollToEducation}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      <Herosection scrollToContact={scrollToContact} />
      <BentoGrid />

      <div ref={skillsRef}>
        <Skillsection />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={educationRef}>
        <EducationSection />
      </div>

      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
