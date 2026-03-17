import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { label: "About",      to: "about"      },
  { label: "Experience", to: "experience" },
  { label: "Projects",   to: "projects"   },
  { label: "Skills",     to: "skills"     },
  { label: "Education",  to: "education"  },
  { label: "Contact",    to: "contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <Link to="hero" smooth duration={600} className="nav-logo" style={{ cursor: "none" }}>
        {personalInfo.initials}.
      </Link>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to} smooth duration={600} offset={-80}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <a href={personalInfo.resume} download className="nav-resume">
        Download CV ↓
      </a>
    </nav>
  );
}
