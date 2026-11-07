import skills from "../data/skills";
function Skills() {
 return <section id="skills" className="skills"><div className="section-heading"><div><p className="kicker">03 / WHAT I BRING</p><h2>From the first idea<br />to the <em>final detail.</em></h2></div><p>A considered mix of creative thinking and technical craft. Built around what your project needs.</p></div><div className="skills-grid">{skills.map((group,i) => <article className="skill-card" key={group.category}><div className="skill-top"><span>0{i+1}</span><span aria-hidden="true">{["✳","⌘","↗"][i]}</span></div><h3>{group.category}</h3><p>{group.description}</p><div className="badges">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>;
}
export default Skills;
