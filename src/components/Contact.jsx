import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, socialLinks } from "../data/portfolioData";
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
    "service_ja5zmmo",       // paste your Service ID
    "template_dairex8",      // paste your Template ID
    {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    },
    "EOOZ3AznF-U81Hh7_"        // paste your Public Key
    ).then(() => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
    }).catch((error) => {
    console.error("Failed to send:", error);
    alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="section-num">06</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line" />
      </motion.div>

      <div className="contact-grid">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="contact-big-title">
            Let's build something<br />
            <span className="grad">great together.</span>
          </h2>
          <p className="contact-subtext">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
          </p>

          <div className="social-links">
            {socialLinks.map((s) => (
              <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="social-link">
                <div className="social-icon">{s.icon}</div>
                <div className="social-meta">
                  <span className="social-platform">{s.platform}</span>
                  <span className="social-handle">{s.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="form-submit">
            {sent ? "Message Sent! ✓" : "Send Message →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
