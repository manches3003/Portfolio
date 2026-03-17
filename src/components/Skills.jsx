import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolioData";

function SkillBar({ name, pct, inView, delay }) {
  const fillRef = useRef(null);
  useEffect(() => {
    if (inView && fillRef.current) {
      setTimeout(() => {
        if (fillRef.current) fillRef.current.style.width = pct + "%";
      }, delay);
    }
  }, [inView, pct, delay]);

  return (
    <div className="skill-row">
      <div className="skill-row-top">
        <span className="skill-row-name">{name}</span>
        <span className="skill-row-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div ref={fillRef} className="skill-fill" />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-num">04</span>
        <h2 className="section-title">Skills & Tech</h2>
        <div className="section-line" />
      </motion.div>

      <div className="skills-main-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="skills-col-title">Programming</div>
          {skills.frontend.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} inView={inView} delay={i * 100 + 200} />
          ))}

          <div className="skills-col-title" style={{ marginTop: 48 }}>Cyber Security</div>
          {skills.backend.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} inView={inView} delay={i * 100 + 600} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="tools-section">
            <div className="skills-col-title">Tools & Technologies</div>
            <div className="tools-grid">
              {skills.tools.map((t, i) => (
                <motion.span
                  key={t}
                  className="tool-pill"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.035 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
