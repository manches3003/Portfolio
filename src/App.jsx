import "./index.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { MarqueeStrip, ParticlesBg, Footer } from "./components/Extras";
import { personalInfo } from "./data/portfolioData";

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <ParticlesBg />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Experience />
        <MarqueeStrip />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer name={personalInfo.name} initials={personalInfo.initials} />
    </>
  );
}
