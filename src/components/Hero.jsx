import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { personalInfo, roles } from "../data/portfolioData";
import SphereCanvas from "./SphereCanvas";

function useTyping(phrases) {
  const [text, setText] = useState("");
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phaseIdx];
    let timeout;
    if (!deleting) {
      if (text.length < phrase.length) {
        timeout = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(phrase.slice(0, text.length - 1)), 38);
      } else {
        setDeleting(false);
        setPhaseIdx((p) => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phaseIdx, phrases]);

  return text;
}

function CountUp({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 18);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref} className="stat-num">{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="hero" className="hero">
      {/* 3D Sphere */}
      <div className="hero-canvas-wrap">
        <SphereCanvas />
      </div>

      <div className="hero-content">
        <motion.div className="hero-eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="status-dot" />
          Available for part-time work
        </motion.div>

        <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
          Hi, I'm<br />
          <span className="hero-name-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.p className="hero-role" variants={fadeUp} initial="hidden" animate="show" custom={2}>
          <span className="typed-accent">{typed}</span>
          <span style={{ display: "inline-block", width: 2, height: "1.1em", background: "var(--accent3)", verticalAlign: "middle", marginLeft: 3, animation: "cursorBlink 1s step-end infinite" }} />
        </motion.p>

        <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="show" custom={3}>
          {personalInfo.description}
        </motion.p>

        <motion.div className="hero-btns" variants={fadeUp} initial="hidden" animate="show" custom={4}>
          <Link to="projects" smooth duration={700} offset={-80} className="btn-primary">
            <span>View My Work</span>
            <span>→</span>
          </Link>
          <Link to="contact" smooth duration={700} offset={-80} className="btn-outline">
            Let's Talk ✉
          </Link>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={5}>
          <div>
            <CountUp end={parseInt(personalInfo.experience)} />
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <CountUp end={parseInt(personalInfo.projects)} />
            <div className="stat-label">Projects Built</div>
          </div>
          <div>
            <CountUp end={2} />
            <div className="stat-label">Internships Done</div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      <style>{`
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
