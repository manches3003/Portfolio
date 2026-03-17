import { useEffect, useRef } from "react";
import { marqueeItems } from "../data/portfolioData";

export function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ParticlesBg() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const colors = ["#7c5cfc", "#fc5c7d", "#5cf0fc", "#00e676"];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const sz = Math.random() * 3 + 1;
      Object.assign(p.style, {
        left: Math.random() * 100 + "%",
        width: sz + "px",
        height: sz + "px",
        background: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 22 + 14 + "s",
        animationDelay: Math.random() * 18 + "s",
      });
      container.appendChild(p);
    }
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  return <div ref={containerRef} className="particles-bg" />;
}

export function Footer({ name, initials }) {
  return (
    <footer className="footer">
      <div className="footer-logo">{initials}.</div>
      <div className="footer-copy">© {new Date().getFullYear()} {name} · Leipzig, Germany 🇩🇪</div>
      <div className="footer-links">
        <a href="#hero">Back to Top ↑</a>
        <a href="/resume.pdf" download>Resume</a>
        <a href="mailto:keshavkansara123@gmail.com">Email</a>
      </div>
    </footer>
  );
}
