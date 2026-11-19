import { useEffect, useRef, useState } from "react";
import "./TrustedBrands.css";

/*
  Logos abhi placeholder hain. Asli logo lagane ke liye:
  1) images src/assets/images/logo/ mein rakho
  2) upar import karo:  import brand1 from "../../assets/images/logo/brand1.png";
  3) neeche us item mein  src: brand1  likh do  (src ho to placeholder ki jagah image dikhegi)
*/
const brands = [
  { name: "logoipsum", icon: "half", variant: "bold" },
  { name: "LOGO", icon: "square", variant: "block" },
  { name: "LOGOIPSUM", icon: "leaf", variant: "thin" },
  { name: "logoipsum", icon: "dots", variant: "stack" },
  { name: "logoipsum", icon: "wave", variant: "bold" },
  { name: "LOGOIPSUM", icon: "bars", variant: "spaced" },
  { name: "logoipsum", icon: "cluster", variant: "bold" },
  { name: "logoipsum", icon: "ring", variant: "bold" },
  { name: "logoipsum", icon: "box", variant: "bold" },
];

const icons = {
  half: <><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" /></>,
  square: <rect x="3" y="3" width="18" height="18" fill="currentColor" />,
  leaf: <path d="M12 2c3 3 3 8 0 12-3-4-3-9 0-12zm0 12v8" fill="none" stroke="currentColor" strokeWidth="2" />,
  dots: <><rect x="1" y="6" width="12" height="12" fill="currentColor" /><circle cx="17" cy="12" r="5" fill="currentColor" /></>,
  wave: <path d="M2 8c3-3 5 3 10 0s7 3 10 0M2 14c3-3 5 3 10 0s7 3 10 0M2 20c3-3 5 3 10 0s7 3 10 0" fill="none" stroke="currentColor" strokeWidth="2.5" />,
  bars: <path d="M3 4v16M7 2v20M11 5v14M15 8v8" fill="none" stroke="currentColor" strokeWidth="2" />,
  cluster: <><circle cx="7" cy="7" r="4" fill="currentColor" /><circle cx="17" cy="9" r="4" fill="currentColor" /><circle cx="9" cy="17" r="4" fill="currentColor" /><circle cx="19" cy="19" r="3" fill="currentColor" /></>,
  ring: <><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M6 18L18 6" stroke="currentColor" strokeWidth="2.5" /></>,
  box: <><rect x="2" y="6" width="18" height="16" fill="currentColor" /><circle cx="14" cy="9" r="6" fill="#fff" stroke="currentColor" strokeWidth="3" /></>,
};

export default function TrustedBrands() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Jab logos screen par nazar aayen tab EK baar animation chale
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="brands" aria-labelledby="brands-title">
      <div className="brands__text">
        <h2 id="brands-title">Trusted by 25,000+ world-class brands and organizations of all sizes.</h2>
        <p>
          Tristique pharetra mauris rutrum consequat egestas felis id laoreet nascetur nec at. Fames
          conubia bibendum imperdiet eleifend tortor aliquam senectus orci. Euismod aliquam sit
          nullam amet nisi dis quam iaculis risus consectetuer tincidunt.
        </p>
      </div>

      <ul ref={gridRef} className={`brands__grid${visible ? " is-visible" : ""}`}>
        {brands.map((b, i) => (
          <li key={i} className={`brand brand--${b.variant}`} style={{ "--i": i }}>
            {b.src ? (
              <img src={b.src} alt={b.name} />
            ) : (
              <>
                <svg viewBox="0 0 24 24" aria-hidden="true">{icons[b.icon]}</svg>
                <span>{b.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}