import { FaArrowDown, FaArrowRight, FaAsterisk } from "react-icons/fa";
function Hero() {
  return <section className="hero" id="home">
    <div className="hero-topline"><span><i className="status-dot" /> Open for collaborations</span><span>Independent designer & developer</span></div>
    <div className="hero-layout">
      <div className="hero-copy"><p className="kicker">HELLO, I'M YOUR NAME</p>
        <h1>Good ideas.<br />Thoughtful design.<br /><span>Real impact.</span></h1>
        <p className="description">I turn complex problems into simple, considered digital experiences. A little strategy, a lot of craft, and a love for the details.</p>
        <div className="buttons"><a className="btn-primary" href="#projects">Explore my work <FaArrowRight /></a><a className="text-link" href="#contact">Let's talk <span>↗</span></a></div>
        <div className="hero-footnote"><span className="small-star">✳</span><p>Built with purpose.<br /><strong>Made to feel different.</strong></p></div>
      </div>
      <div className="hero-art" aria-label="Abstract geometric composition in orange and cream">
        <div className="art-grid" /><span className="art-caption">A STUDY IN FORM & FUNCTION</span>
        <div className="art-orbit" /><div className="art-disc" /><div className="art-sphere" /><div className="art-block" /><FaAsterisk className="art-asterisk" />
        <div className="art-label"><span>Creative thinking.<br />Clear execution.</span><span>↗</span></div>
        <span className="art-index">FIG. 01 / CREATIVE PRACTICE</span>
      </div>
    </div>
    <a href="#projects" className="scroll-cue"><FaArrowDown /> Scroll to discover</a>
  </section>;
}
export default Hero;
