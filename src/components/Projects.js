import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
function Projects() {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(p => filter === "All work" || p.category === filter);
  return <section id="projects" className="projects"><div className="section-heading"><div><p className="kicker">01 / SELECTED WORK</p><h2>A few things<br />I've <em>made.</em></h2></div><p>A selection of ideas brought to life through design and development. Explore these illustrative concept projects.</p></div>
    <div className="project-toolbar"><div className="filters" aria-label="Filter projects">{["All work", "Web design", "Development", "Branding"].map(label => <button key={label} aria-pressed={filter === label} className={filter === label ? "selected" : ""} onClick={() => setFilter(label)}>{label}</button>)}</div><span className="work-count" aria-live="polite">{String(visible.length).padStart(2,"0")} projects</span></div>
    <div className="projects-grid">{visible.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div>
  </section>;
}
export default Projects;
