import { useEffect, useRef, useState } from "react";
import "./Statistics.css";

// sep = hazaron ka separator (aap ke text ke hisab se: , ya .)
const bigStat = { end: 740223, sep: "," };
const stats = [
  { end: 2415, sep: ".", label: "Project Realize" },
  { end: 1441, sep: ",", label: "Expertise" },
  { end: 8451, sep: ".", label: "staff members worldwide" },
  { end: 141, sep: ",", label: "Awards Won" },
];

const format = (n, sep) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);

/* Number 0 se end tak sirf EK baar chalta hai, jab section screen par pehli baar nazar aaye */
function CountUp({ end, sep = ",", duration = 2200 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // jinhon ne "reduce motion" on kiya ho unhe seedha final number
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setValue(end * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect(); // dobara nahi chalega
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return <span ref={ref} className="count">{format(value, sep)}</span>;
}

export default function Statistics() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="stats__main">
        <strong className="stats__big">
          <CountUp end={bigStat.end} sep={bigStat.sep} duration={2600} />
          <span className="plus">+</span>
        </strong>
        <p>Company From All Around The World trust on Pabrica for awesome project</p>
      </div>

      <ul className="stats__grid">
        {stats.map((s) => (
          <li key={s.label} className="stats__item">
            <strong>
              <CountUp end={s.end} sep={s.sep} />
              <span className="plus">+</span>
            </strong>
            <p>{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}