import { useEffect, useRef } from "react";

export default function SphereCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = 700, H = 700;
    canvas.width = W; canvas.height = H;
    const cx = W / 2, cy = H / 2, R = 260;
    let angle = 0, rafId;

    // Build lattice lines on sphere
    const buildLines = () => {
      const lines = [];
      // Latitude rings
      for (let lat = -80; lat <= 80; lat += 20) {
        const row = [];
        for (let lon = 0; lon <= 360; lon += 15) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lon * Math.PI) / 180;
          row.push([
            R * Math.cos(phi) * Math.cos(theta),
            R * Math.cos(phi) * Math.sin(theta),
            R * Math.sin(phi),
          ]);
        }
        lines.push(row);
      }
      // Longitude meridians
      for (let lon = 0; lon < 360; lon += 15) {
        const col = [];
        for (let lat = -80; lat <= 80; lat += 10) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lon * Math.PI) / 180;
          col.push([
            R * Math.cos(phi) * Math.cos(theta),
            R * Math.cos(phi) * Math.sin(theta),
            R * Math.sin(phi),
          ]);
        }
        lines.push(col);
      }
      return lines;
    };

    // Dots on sphere surface
    const buildDots = () => {
      const dots = [];
      for (let lat = -80; lat <= 80; lat += 20) {
        for (let lon = 0; lon < 360; lon += 20) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lon * Math.PI) / 180;
          dots.push([
            R * Math.cos(phi) * Math.cos(theta),
            R * Math.cos(phi) * Math.sin(theta),
            R * Math.sin(phi),
          ]);
        }
      }
      return dots;
    };

    const lines = buildLines();
    const dots = buildDots();

    const rotY = (p, a) => [
      p[0] * Math.cos(a) + p[2] * Math.sin(a),
      p[1],
      -p[0] * Math.sin(a) + p[2] * Math.cos(a),
    ];
    const rotX = (p, a) => [
      p[0],
      p[1] * Math.cos(a) - p[2] * Math.sin(a),
      p[1] * Math.sin(a) + p[2] * Math.cos(a),
    ];
    const proj = (p) => [cx + p[0], cy - p[1]];
    const depth = (p) => (p[2] + R) / (2 * R); // 0..1

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      angle += 0.004;

      // Draw grid lines
      lines.forEach((line) => {
        ctx.beginPath();
        line.forEach((pt, i) => {
          let p = rotY(pt, angle);
          p = rotX(p, 0.35);
          const [x, y] = proj(p);
          const d = depth(p);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = `rgba(124,92,252,0.18)`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      // Draw dots
      dots.forEach((pt) => {
        let p = rotY(pt, angle);
        p = rotX(p, 0.35);
        const [x, y] = proj(p);
        const d = depth(p);
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252,92,125,${0.1 + d * 0.65})`;
        ctx.fill();
      });

      // Draw accent glow dots at equator
      for (let lon = 0; lon < 360; lon += 45) {
        const theta = ((lon + angle * 80) * Math.PI) / 180;
        const pt = [R * Math.cos(theta), 0, R * Math.sin(theta)];
        let p = rotY(pt, angle);
        p = rotX(p, 0.35);
        const [x, y] = proj(p);
        const d = depth(p);
        if (d > 0.5) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(92,240,252,${d * 0.8})`;
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.5,
      }}
    />
  );
}
