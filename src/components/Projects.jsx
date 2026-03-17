import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/portfolioData";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      className={`project-card${item.featured ? " featured" : ""}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-top">
        <span className="project-num">{item.num}{item.featured ? " — Featured" : ""}</span>
        <div className="project-links-top">
          <a href={item.github} target="_blank" rel="noreferrer" className="project-link-icon" title="GitHub">
            <GithubIcon />
          </a>
          <a href={item.live} target="_blank" rel="noreferrer" className="project-link-icon" title="Live Demo">
            <ExternalIcon />
          </a>
        </div>
      </div>
      <span className="project-emoji">{item.emoji}</span>
      <div className="project-title">{item.title}</div>
      <p className="project-desc">{item.description}</p>
      <div className="tech-tags" style={{ marginBottom: 24 }}>
        {(item.tech || []).map((t) => <span className="tech-tag" key={t}>{t}</span>)}
      </div>
      <a href={item.live} target="_blank" rel="noreferrer" className="project-live-btn">
        View Live →
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </motion.div>

      <div className="projects-grid">
        {projects.map((item, i) => (
          <ProjectCard key={item.num} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
