import { useState } from "react";
import {
  Code2,
  GraduationCap,
  FolderGit2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

const Navbar = ({
  scrollToSkills,
  scrollToEducation,
  scrollToProjects,
  scrollToContact,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="parent-nav">
      <nav id="navbar">
        <div className="nav-top">
          <h3 className="logo">Sachin</h3>

          {/* Desktop Menu */}
          <div id="menu-items">
            <button onClick={scrollToSkills}>
              <Code2 size={18} />
              Skills
            </button>

            <button onClick={scrollToEducation}>
              <GraduationCap size={18} />
              Education
            </button>

            <button onClick={scrollToProjects}>
              <FolderGit2 size={18} />
              Projects
            </button>

            <button onClick={scrollToContact}>
              <Mail size={18} />
              Contact
            </button>
          </div>

          {/* Hamburger */}
          <div id="hamburger" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={open ? "open" : ""}
          style={{ maxHeight: open ? "300px" : "0px" }}
        >
          <button onClick={() => { scrollToSkills(); setOpen(false); }}>
            <Code2 size={18} />
            Skills
          </button>

          <button onClick={() => { scrollToEducation(); setOpen(false); }}>
            <GraduationCap size={18} />
            Education
          </button>

          <button onClick={() => { scrollToProjects(); setOpen(false); }}>
            <FolderGit2 size={18} />
            Projects
          </button>

          <button onClick={() => { scrollToContact(); setOpen(false); }}>
            <Mail size={18} />
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
