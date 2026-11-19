
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
// news cards: wahi LatestNews component jo Blog mein lagaya tha
import LatestNews from "../../components/LatestNews/LatestNews";
import "./Archive.css";

/* =====================================================================
   Archive page: hero + (LatestNews cards | side ke 3 box)
     Hero             -> src/assets/images/hero/ ki pehli image
     Request Proposal -> src/assets/images/careers/ ki aakhri image
   ===================================================================== */
const heroImgs = import.meta.glob("../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const careerImgs = import.meta.glob("../../assets/images/careers/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });

const toList = (obj) =>
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((k) => obj[k]);

const heroList = toList(heroImgs);
const careerList = toList(careerImgs);

const heroBg = heroList[0] || "";
const proposalBg = careerList[careerList.length - 1] || heroList[1] || heroList[0] || "";

/* ---------------- Popular Categories ---------------- */
const categories = ["Preventive System", "Urbanism", "Governmental", "Featured", "Urbanism"];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Archive() {
  return (
    <div className="ar">
      {/* ============ 1. Hero ============ */}
  {/* ============ 1. Hero ============ */}
<section className="ar-hero" aria-labelledby="ar-hero-title">
  {heroBg && <img className="ar-hero__img" src={heroBg} alt="" />}
  <div className="ar-hero__overlay" aria-hidden="true" />

  <div className="ar-hero__content">
    <h1 id="ar-hero-title">Archives</h1>
  </div>
</section>

{/* Breadcrumb image ke neeche */}
<nav className="ar-crumbs" aria-label="Breadcrumb">
  <ol>
    <li><Link to="/">Home</Link></li>
    <li className="ar-crumbs__arrow" aria-hidden="true">
      <Arrow />
    </li>
    <li aria-current="page">Archives</li>
  </ol>
</nav>

      {/* ============ 2. News cards (2 column) + side ke 3 box ============ */}
      <section className="ar-layout">
        {/* Intro video chhupane ki rule CSS mein hai (.ar-news) */}
        <div className="ar-news">
          <LatestNews />
        </div>

        <aside className="ar-side" aria-label="Sidebar">
          {/* ---------- Box 1: Popular Categories ---------- */}
          <div className="ar-box ar-cats">
            <span className="ar-eyebrow">Popular</span>
            <h2>Categories</h2>
            <ul>
              {categories.map((c, i) => (
                <li key={`${c}-${i}`}>
                  <Link to="/archive" onClick={scrollToTop}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Box 2: Call Center ---------- */}
          <div className="ar-box ar-call">
            <span className="ar-call__icon"><PhoneIcon /></span>
            <h2>Call Center</h2>
            <p>Call us for more information or business inquiry.</p>
            <a className="ar-call__phone" href="tel:+622120022013">+(6221)-2002-2013</a>
          </div>

          {/* ---------- Box 3: Request a Proposal (background pic, hover) ---------- */}
          <div className="ar-box ar-proposal">
            {proposalBg && <img className="ar-proposal__img" src={proposalBg} alt="" />}
            <div className="ar-proposal__overlay" aria-hidden="true" />
            <div className="ar-proposal__content">
              <h2>Request a Proposal?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
              <Link to="/contact" className="ar-btn" onClick={scrollToTop}>Call Us</Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}