import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import "./SingleService.css";

/* =====================================================================
   Single Service page: sab sections isi ek file mein
   Images (sab optional, na milen to placeholder dikhta hai, error nahi aata):
     Hero    -> src/assets/images/services/ ki 5vi image (s5), warna hero folder ki pehli
     About   -> src/assets/images/about/about.jpg
     Project -> src/assets/images/projects/pro1, pro2
     Video   -> YouTube (neeche IntroVideo section mein link)
   ===================================================================== */
const serviceImgs = import.meta.glob("../../assets/images/services/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const heroImgs = import.meta.glob("../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const aboutImgs = import.meta.glob("../../assets/images/about/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const projectImgs = import.meta.glob("../../assets/images/projects/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });

const natural = (obj) =>
  Object.keys(obj).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
const baseName = (p) => p.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
const pick = (obj, name, index = 0) => {
  const keys = natural(obj);
  const key = (name && keys.find((k) => baseName(k) === name)) || keys[index];
  return key ? obj[key] : "";
};

const heroImage = pick(serviceImgs, null, 4) || pick(heroImgs, null, 0);
const aboutImage = pick(aboutImgs, "about", 0);

/* ---------------- Data ---------------- */
const SERVICE_NAME = "Technical Consulting";
const CARD_TEXT = "Neque ad vitae felis augue aenean finibus maecenas adipiscing lacinia";

const groupItems = [
  { title: "Acoustic consulting", icon: <><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></> },
  { title: "Advanced technology and research", icon: <><path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3" /><path d="M7.5 15h9" /></> },
  { title: "Geotechnics", icon: <path d="M2 20l6-10 4 6 3-4 7 8H2z" /> },
  { title: "Audio visual and multimedia", icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M10 8.5v5l4.5-2.5L10 8.5z" /><path d="M8 21h8" /></> },
  { title: "Computational fluid dynamics", icon: <path d="M3 8c3-3 5 3 9 0s6 3 9 0M3 13c3-3 5 3 9 0s6 3 9 0M3 18c3-3 5 3 9 0s6 3 9 0" /> },
  { title: "Geographic information systems", icon: <><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></> },
  { title: "Hydrogeology", icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /> },
  { title: "Wind engineering", icon: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8a2.5 2.5 0 1 1-2.5 2.5" /> },
];

const projects = [
  { title: "Wind Farms in Wales", name: "pro1", index: 0 },
  { title: "Wind energy at DePuy Synthes", name: "pro2", index: 1 },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export default function SingleService() {
  const [introOpen, setIntroOpen] = useState(false);

  // video popup: Esc se band, aur khula ho to peeche ka page scroll na ho
  useEffect(() => {
    if (!introOpen) return;
    const onKey = (e) => e.key === "Escape" && setIntroOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [introOpen]);

  return (
    <div className="ss">
      {/* ============ 1. Hero: picture ke upar white text ============ */}
      <section className="ss-hero" aria-labelledby="ss-hero-title">
        {heroImage && <img className="ss-hero__img" src={heroImage} alt="" />}
        <div className="ss-hero__overlay" aria-hidden="true" />
        <div className="ss-hero__content">
          <h1 id="ss-hero-title">Finding real world solutions.</h1>
          <p>
            We develop creative, comprehensive, and sustainable engineering solutions for a future
            where society can thrive.
          </p>
        </div>
      </section>

      {/* ============ Home -> Technical Consulting: picture ke neeche, center ===== */}
      <div className="ss-crumbs-bar">
      <nav className="ss-crumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li className="ss-crumbs__arrow" aria-hidden="true"><Arrow /></li>
          <li aria-current="page">{SERVICE_NAME}</li>
        </ol>
      </nav>
      </div>

      {/* ============ 2. Our Expertise (center) ============ */}
      <section className="ss-center ss-expertise" aria-labelledby="ss-expertise-title">
        <span className="ss-eyebrow">Our Expertise</span>
        <h2 id="ss-expertise-title">Delivering results, reliability, &amp; rock solid dependability.</h2>
        <p>
          We develop creative, comprehensive, and sustainable engineering solutions for a future
          where society can thrive.
        </p>
      </section>

      {/* ============ 3. About Technical Consulting: left text, right pic ============ */}
      <section className="ss-about" aria-labelledby="ss-about-title">
        <div className="ss-about__text">
          <span className="ss-eyebrow">About {SERVICE_NAME}</span>
          <h2 id="ss-about-title">Reliable engineering takes many forms.</h2>
          <p>
            In sed nisl leo elit ultricies mauris. Sed nibh natoque eleifend mi ante. Magnis
            vivamus maximus senectus lacus inceptos. Feugiat natoque mi nascetur.
          </p>
          <p>
            Adipiscing imperdiet eget vel. Massa ligula sociosqu a. Mus viverra ut ornare tempor
            dictumst eros habitant.
          </p>
          <a className="ss-btn" href="#top" onClick={scrollToTop}>
            Find Location <Arrow />
          </a>
        </div>
        <div className="ss-about__media">
          {aboutImage ? (
            <img src={aboutImage} alt="Engineers at work on site" />
          ) : (
            <div className="ss-placeholder" aria-hidden="true" />
          )}
        </div>
      </section>

      {/* ============ 4. When you need experience (sab center) ============ */}
      <section className="ss-center ss-experience" aria-labelledby="ss-experience-title">
        <h2 id="ss-experience-title">When you need experience, we have it covered.</h2>
        <p>
          Tempus ut purus nulla in. Pulvinar volutpat ante mus ultrices nunc habitasse. Pulvinar
          egestas venenatis sed duis. Dui odio parturient volutpat lobortis leo.
        </p>
        <p>
          Potenti conubia libero massa eget senectus mollis. Augue consequat ipsum taciti dolor
          felis. Pretium at per mattis. Vivamus tellus purus aenean duis. Fames tortor dictumst
          scelerisque cursus condimentum. Fames nunc potenti adipiscing aptent. Hac dapibus
          laoreet mattis condimentum commodo consectetur class. Orci diam egestas adipiscing
          litora dui in sociosqu.
        </p>
        <p>
          Tempus ut purus nulla in. Pulvinar volutpat ante mus ultrices nunc habitasse. Pulvinar
          egestas venenatis sed duis. Dui odio parturient volutpat lobortis leo.
        </p>
      </section>

      {/* ============ 5. Service Group: 8 cards ============ */}
      <section className="ss-group" aria-labelledby="ss-group-title">
        <div className="ss-center ss-group__head">
          <span className="ss-eyebrow">Service Group</span>
          <h2 id="ss-group-title">We made passion our raw material.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <ul className="ss-group__grid">
          {groupItems.map((item) => (
            <li key={item.title} className="ss-group__card">
              <span className="ss-group__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </span>
              <h3>{item.title}</h3>
              <p>{CARD_TEXT}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ 6. Latest Project: 2 cards ============ */}
      <section className="ss-projects" aria-labelledby="ss-projects-title">
        <div className="ss-projects__head">
          <div>
            <span className="ss-eyebrow">Latest Project</span>
            <h2 id="ss-projects-title">Awesome Project from this Service.</h2>
          </div>
          <div className="ss-projects__intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a className="ss-btn" href="#top" onClick={scrollToTop}>
              View All Project <Arrow />
            </a>
          </div>
        </div>

        <ul className="ss-projects__grid">
          {projects.map((p) => {
            const img = pick(projectImgs, p.name, p.index);
            return (
              <li key={p.title} className="ss-pcard">
                {img && <img className="ss-pcard__img" src={img} alt="" loading="lazy" />}
                <div className="ss-pcard__body">
                  <h3>{p.title}</h3>
                  <div className="ss-pcard__more">
                    <div className="ss-pcard__more-inner">
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                      <a className="ss-pcard__link" href="#top" onClick={scrollToTop}>
                        Detail Project <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ============ 7. INTRODUCTION VIDEO - full width / full screen ============ */}
      <section className="ss-video" aria-labelledby="ss-video-title">
        <div className="ss-video__container">
          <div className="ss-video__content">
            <span className="ss-video__label">INTRODUCTION VIDEO</span>

            <h2 id="ss-video-title">Let's start your project to be realize.</h2>

            <p>
              We planted our roots with a commitment to earning your trust and protecting lives,
              property, and prestige.
            </p>

            <Link to="/contact" className="ss-btn">
              Contact Us <span>↗</span>
            </Link>
          </div>

          <div className="ss-video__action">
            <button
              type="button"
              className="ss-play"
              onClick={() => setIntroOpen(true)}
              aria-label="Play introduction video"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <h3>Play Intro</h3>

            <a
              href="https://www.youtube.com/results?search_query=industrial+manufacturing+factory+machinery"
              target="_blank"
              rel="noopener noreferrer"
              className="ss-video__more"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
              More Videos
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {introOpen && (
        <div className="ss-modal" role="dialog" aria-modal="true" onClick={() => setIntroOpen(false)}>
          <div className="ss-modal__box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ss-modal__close"
              onClick={() => setIntroOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>

            <iframe
              src="https://www.youtube.com/embed/75RCQZVB9MI?autoplay=1&start=0&end=20&rel=0"
              title="Pabrica Industrial Introduction Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}