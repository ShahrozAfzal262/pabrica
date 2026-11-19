import "./WhatWeDo.css";
import { scrollToTop } from "../../utils/scrollToTop";

/*
  Card images: src/assets/images/services/ ki images naam ke order mein (1, 2, 3...) cards par lagti hain.
  s1(1).jpg, s1(2).jpg ... ya s1.jpg, s2.jpg ... dono tarah ke naam chalte hain:
    1st = Engineering & Design, 2nd = Procurement, 3rd = Construction,
    4th = Fabrication,          5th = Technical Consulting
*/
const imageFiles = import.meta.glob("../../assets/images/services/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

// numeric (natural) sort: s1(1) < s1(2) < ... < s1(10)
const sortedKeys = Object.keys(imageFiles).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
);

const services = [
  { title: "Engineering & Design", to: "/services" },
  { title: "Procurement", to: "/services" },
  { title: "Construction", to: "/services" },
  { title: "Fabrication", to: "/services" },
  { title: "Technical Consulting", to: "/services" },
];

const imageFor = (index) => (sortedKeys[index] ? imageFiles[sortedKeys[index]] : null);

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export default function WhatWeDo() {
  return (
    <section className="wwd" aria-labelledby="wwd-title">
      <div className="wwd__grid">
        {/* Card 1: intro */}
        <div className="wwd__intro">
          <span className="wwd__eyebrow">What we do</span>
          <h2 id="wwd-title">Expertise</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a className="wwd__btn" href="#top" onClick={scrollToTop}>
            Discover More <Arrow />
          </a>
        </div>

        {/* Cards 2-6: picture cards */}
        {services.map((s, i) => {
          const img = imageFor(i);
          return (
            <article key={s.title} className="wwd__card">
              {img && <img className="wwd__img" src={img} alt="" loading="lazy" />}
              <div className="wwd__body">
                <h3>{s.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                <a className="wwd__link" href="#top" onClick={scrollToTop}>
                  Learn More <Arrow />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}