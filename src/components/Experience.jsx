import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolioData";

function TimelineEntry({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="timeline-entry"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="timeline-entry-dot" />
      <div className="timeline-top">
        <span className="timeline-badge">{item.period}</span>
        <span className="timeline-type">{item.type}</span>
      </div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      <p className="timeline-desc">{item.description}</p>
      <ul className="timeline-bullets">
        {(item.bullets || []).map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="tech-tags">
        {(item.tech || []).map((t) => <span className="tech-tag" key={t}>{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-num">02</span>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-line" />
      </motion.div>

      <div className="timeline">
        {experience.map((item, i) => (
          <TimelineEntry key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
