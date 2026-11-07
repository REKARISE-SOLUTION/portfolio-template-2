import { useRef } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import ProjectArt from "./ProjectArt";
function ProjectCard({ project, index }) {
  const dialog = useRef(null);
  return <article className="project-card">
    <button className="project-cover" onClick={() => dialog.current.showModal()} aria-label={`View ${project.title} concept`}><ProjectArt theme={project.theme} /><span className="project-open"><FaArrowRight /></span></button>
    <div className="project-heading"><div><p className="project-category">{project.label} <span> / {project.year}</span></p><h3><button onClick={() => dialog.current.showModal()}>{project.title}</button></h3></div><span className="project-number">0{index + 1}</span></div><p className="project-description">{project.description}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
    <dialog ref={dialog} aria-labelledby={`${project.id}-title`} className="project-dialog" onClick={e => { if(e.target === e.currentTarget) dialog.current.close(); }}><button className="dialog-close" onClick={() => dialog.current.close()} aria-label="Close project"><FaTimes /></button><ProjectArt theme={project.theme} /><div className="dialog-content"><p className="kicker">ILLUSTRATIVE CONCEPT / {project.category}</p><h2 id={`${project.id}-title`}>{project.title}</h2><p>{project.description}</p><h3>The approach</h3><p>{project.detail}</p><p className="dialog-role"><strong>Role</strong> {project.role}</p><a className="text-link" href="#contact" onClick={() => dialog.current.close()}>Discuss a similar project <FaArrowRight /></a></div></dialog>
  </article>;
}
export default ProjectCard;
