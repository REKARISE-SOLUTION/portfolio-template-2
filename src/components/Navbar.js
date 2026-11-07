import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["projects", "about", "skills", "journey", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#home" onClick={() => setOpen(false)} aria-label="Company portfolio, home">yourname<span>®</span></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
      <ul className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map((link) => <li key={link}><a className={`${active === link ? "active" : ""} ${link === "contact" ? "nav-cta" : ""}`} href={`#${link}`} onClick={() => setOpen(false)}>{({projects: "Work", about: "About", skills: "Expertise", journey: "Experience", contact: "Let's talk ↗"})[link]}</a></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
