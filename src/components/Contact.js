import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCopy } from "react-icons/fa";
function Contact() {
 const [copied,setCopied] = useState(false);
 const [error,setError] = useState(false);
 const timer = useRef(null);
 useEffect(() => () => clearTimeout(timer.current), []);
 const handleCopyEmail = async () => {
  try { await navigator.clipboard.writeText("hello@example.com"); setCopied(true); setError(false); clearTimeout(timer.current); timer.current=setTimeout(() => setCopied(false),2000); }
  catch { setCopied(false); setError(true); }
 };
 return <section id="contact" className="contact"><div className="contact-top"><p className="kicker">05 / YOUR NEXT CHAPTER</p><span><i className="status-dot" /> Let's make something good</span></div><div className="contact-main"><div><h2>Have an idea?<br /><em>Let's bring it to life.</em></h2><p>Tell me what you're thinking. A new website, a fresh identity,<br className="desktop-break" /> or something we haven't imagined yet.</p></div><a href="mailto:hello@example.com" className="contact-arrow" aria-label="Start a conversation by email"><FaArrowRight /></a></div><div className="contact-bottom"><div className="email-wrap"><a href="mailto:hello@example.com">hello@example.com</a><button type="button" onClick={handleCopyEmail} aria-label="Copy email"><FaCopy /></button><span role="status">{copied ? "Copied!" : error ? "Select the address to copy it." : ""}</span></div><p>Your City, Country <span> / </span> Available remotely</p></div></section>;
}
export default Contact;
