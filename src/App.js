import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Skills />
      <Journey />
      <Certificates />
      <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;