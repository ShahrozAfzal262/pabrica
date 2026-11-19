import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import "./Hero2.css";

/*
  Hero slider ki images: src/assets/images/hero/ mein ye naam rakho
    hero2-1.jpg, hero2-2.jpg, hero2-3.jpg   (jpg / jpeg / png / webp / avif)
  Sirf hero2.jpg ho to teeno slides usi image par chalengi.
  Image na ho to dark gradient dikhega, koi error nahi aayega.
*/
const files = import.meta.glob("../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});
const baseName = (path) => path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
const allKeys = Object.keys(files).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const hero2Keys = allKeys.filter((k) => baseName(k).startsWith("hero2"));
const pool = hero2Keys.length ? hero2Keys : allKeys;
const imageAt = (i) => (pool.length ? files[pool[i % pool.length]] : "");

const slides = [
  { title: "Finding real world solutions.", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" },
  { title: "Create. Enhance. and Sustain.", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" },
  { title: "Green navigation and sustainability.", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor" },
];

const features = [
  {
    title: "Solution",
    text: "Neque ad vitae felis augue aenean finibus maecenas adipiscing lacinia",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    ),
  },
  {
    title: "Reliable",
    text: "Neque ad vitae felis augue aenean finibus maecenas adipiscing lacinia",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    title: "Support",
    text: "Neque ad vitae felis augue aenean finibus maecenas adipiscing lacinia",
    icon: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="1" />
        <rect x="17" y="14" width="4" height="6" rx="1" />
        <path d="M19 20c0 1.5-1.5 2-4 2h-2" />
      </>
    ),
  },
];

const AUTOPLAY_MS = 6500;

export default function Hero2() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // apne aap agli slide (reduce motion walon ke liye band)
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <>
      {/* ---------- Slider ---------- */}
      <section
        className="hero2"
        aria-roledescription="carousel"
        aria-label="Featured"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`hero2__slide${i === active ? " is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <div className="hero2__bg" aria-hidden="true">
              {imageAt(i) && <img className="hero2__img" src={imageAt(i)} alt="" />}
            </div>
            <div className="hero2__overlay" aria-hidden="true" />

            <div className="hero2__content">
              {i === active ? <h1>{s.title}</h1> : <h2>{s.title}</h2>}
              <p>{s.text}</p>
              <a className="hero2__btn" href="#top" onClick={scrollToTop} tabIndex={i === active ? 0 : -1}>
                Discover More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 12h18M14 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}

        <div className="hero2__dots" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>

      {/* ---------- Solution / Reliable / Support ---------- */}
      <section className="hero2-features" aria-label="Highlights">
        <ul>
          {features.map((f) => (
            <li key={f.title}>
              <span className="hero2-features__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Delivering results (center) ---------- */}
      <section className="hero2-lead" aria-labelledby="hero2-lead-title">
        <h2 id="hero2-lead-title">Delivering results, reliability, &amp; rock solid dependability.</h2>
        <p>
          We develop creative, comprehensive, and sustainable engineering solutions for a future
          where society can thrive.
        </p>
      </section>
    </>
  );
}