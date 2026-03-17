import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, languages } from "../data/portfolioData";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section about-section" ref={ref}>
      <motion.div className="section-header" initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeLeft}>
        <span className="section-num">01</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </motion.div>

      <div className="about-grid">
        {/* Photo */}
        <motion.div className="about-photo-container" initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeLeft}>
          <div className="about-photo">
            {personalInfo.photo ? (
              <img src={personalInfo.photo} alt={personalInfo.name} />
            ) : (
              <div className="about-photo-placeholder">{personalInfo.initials}</div>
            )}
          </div>
          <div className="about-photo-border" />
          <div className="available-tag">Open to Work ✓</div>
        </motion.div>

        {/* Info */}
        <motion.div className="about-text" initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeRight}>
          <h3>A developer who cares about the details</h3>
          <p>
            I'm a full-stack developer based in <strong style={{ color: "var(--fg)" }}>{personalInfo.location}</strong>, with a
            passion for building products that live on the internet. I enjoy creating things that are fast, beautiful, and
            accessible to everyone.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing to open source, or brewing the
            perfect cup of coffee. I believe great software is a craft — every detail matters.
          </p>

          <div className="about-info-grid">
            {[
              { label: "Full Name",    value: personalInfo.name,         special: "" },
              { label: "Location",     value: personalInfo.location,     special: "" },
              { label: "Email",        value: personalInfo.email,        special: "" },
              { label: "Phone",        value: personalInfo.phone,        special: "" },
              { label: "Availability", value: personalInfo.availability, special: "available" },
              { label: "Work Type",    value: "Part-time / Freelance",   special: "" },
            ].map((item) => (
              <div className="info-card" key={item.label}>
                <div className="info-label">{item.label}</div>
                <div className={`info-value${item.special ? " " + item.special : ""}`}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="languages-section">
            <div className="languages-title">Languages Spoken</div>
            {languages.map((lang) => (
              <div className="lang-row" key={lang.name}>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
                <div className="lang-dots">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className={`lang-dot${i < lang.dots ? " filled" : ""}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
