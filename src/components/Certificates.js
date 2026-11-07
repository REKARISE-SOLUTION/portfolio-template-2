import certificates from "../data/certificates";
function Certificates() {
 return <section id="certificates" className="certificates"><p className="kicker">CONTINUOUS LEARNING</p><div className="qualification-list">{certificates.map(c => <article key={c.title}><span className="qualification-icon" aria-hidden="true">✧</span><div><h3>{c.title}</h3><p>{c.issuer} · {c.year}</p></div>{c.link ? <a className="text-link" href={c.link} target="_blank" rel="noreferrer">View certificate ↗</a> : <span className="sample-label">Sample qualification</span>}</article>)}</div></section>;
}
export default Certificates;
