import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../data/portfolioData";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section education-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-num">05</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </motion.div>

      <div className="edu-grid">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="edu-card"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-school">{item.school}</div>
            <div className="edu-year">{item.year}</div>
            <p className="edu-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
