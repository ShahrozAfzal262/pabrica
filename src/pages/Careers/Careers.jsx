import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import "./Careers.css";

/* =====================================================================
   Careers page: sab sections isi ek file mein
   Images (optional, na milen to placeholder / fallback dikhta hai, error nahi aata):
   src/assets/images/careers/ mein ye naam rakho (jpg / jpeg / png / webp / avif):
     career1 -> Hero ki background picture
     career2 -> "Join Us" ki picture (right side)
     career3 -> "Benefit" ki picture (left side)
     career4 -> "Starting your career" ka background
   Naam alag hon to images naam ke order mein lagti hain.
   ===================================================================== */
const careerImgs = import.meta.glob("../../assets/images/careers/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const heroImgs = import.meta.glob("../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const aboutImgs = import.meta.glob("../../assets/images/about/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });

const natural = (obj) =>
  Object.keys(obj).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
const baseName = (p) => p.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
const pick = (obj, name, index = 0) => {
  const keys = natural(obj);
  const key = keys.find((k) => baseName(k) === name) || keys[index];
  return key ? obj[key] : "";
};

const heroBg = pick(careerImgs, "career1", 0);
const joinImg = pick(careerImgs, "career2", 1);
const benefitImg = pick(careerImgs, "career3", 2);
const startBg = pick(careerImgs, "career4", 3);
/* ---------------- Data ---------------- */
const jobs = [
  { title: "Energy Geotechnics Director", place: "Jakarta, Indonesia" },
  { title: "Senior Civil Engineer", place: "Pulau Penang, Malaysia" },
  { title: "Senior Energy Consultant", place: "Manchester, United Kingdom" },
  { title: "People and Change Consultant", place: "London, United Kingdom" },
  { title: "Service Transition Leader", place: "Aceh, Indonesia" },
];

const perks = [
  {
    title: "Teamwork",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="9" r="2.8" />
        <path d="M2 20c0-3.6 3-6 7-6s7 2.4 7 6M16 14.5c3 0 6 1.7 6 5" />
      </>
    ),
  },
  {
    title: "Careers",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </>
    ),
  },
  {
    title: "Insurance",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export default function Careers() {
  return (
    <div className="cr">
      {/* ============ 1. Hero (70vh) ============ */}
      <section className="cr-hero" aria-labelledby="cr-hero-title">
        {heroBg && <img className="cr-hero__img" src={heroBg} alt="" />}
        <div className="cr-hero__overlay" aria-hidden="true" />
        <div className="cr-hero__content">
          <h1 id="cr-hero-title">Come Work with Us.</h1>
          <p>Start Your Future with Pabrica. Learn about the Work We Offer.</p>
        </div>
      </section>

      {/* ============ Home -> Careers: picture ke neeche, center ============ */}
      <div className="cr-crumbs-bar">
        <nav className="cr-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="cr-crumbs__arrow" aria-hidden="true"><Arrow /></li>
            <li aria-current="page">Careers</li>
          </ol>
        </nav>
      </div>

      {/* ============ 2. Career at Pabrica (center) ============ */}
     <section className="cr-split cr-intro">
  <div className="cr-split__media">
   {benefitImg && <img src={benefitImg} alt="Career at Pabrica" />}
  </div>

  <div className="cr-split__text">
    <span className="cr-eyebrow">Career at Pabrica</span>
    <h2>Are you ready to be challenged?</h2>
    <p>
      Egestas feugiat suspendisse iaculis litora auctor vitae habitant gravida ac nec
      vulputate. Consectetur proin blandit sed at vehicula duis integer nostra consequat pede.
      Ipsum mus sapien convallis taciti enim volutpat.
    </p>
    <a className="cr-btn" href="#top" onClick={scrollToTop}>
      Learn More <Arrow />
    </a>
  </div>
</section>

      {/* ============ 3. Join Us: left text, right pic ============ */}
      <section className="cr-split cr-join" aria-labelledby="cr-join-title">
        <div className="cr-split__text">
          <span className="cr-eyebrow">Join Us</span>
          <h2 id="cr-join-title">A world of opportunity</h2>
          <p>
            In sed nisl leo elit ultricies mauris. Sed nibh natoque eleifend mi ante. Magnis
            vivamus maximus senectus lacus inceptos. Feugiat natoque mi nascetur.
          </p>
          <p>
            Adipiscing imperdiet eget vel. Massa ligula sociosqu a. Mus viverra ut ornare tempor
            dictumst eros habitant. Nunc taciti massa in. Placerat platea si lobortis. Per et quam
            hac si nam nibh curabitur.
          </p>
          <a className="cr-btn" href="#top" onClick={scrollToTop}>
            Find Location <Arrow />
          </a>
        </div>
        <div className="cr-split__media">
          {joinImg ? <img src={joinImg} alt="Team at work" /> : <div className="cr-placeholder" aria-hidden="true" />}
        </div>
      </section>

      {/* ============ 4. Open Positions ============ */}
      <section className="cr-jobs" aria-labelledby="cr-jobs-title">
        <div className="cr-jobs__head">
          <h2 id="cr-jobs-title">Open Positions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <ul className="cr-jobs__list">
          {jobs.map((job) => (
            <li key={job.title} className="cr-job">
              <h3>{job.title}</h3>
              <span className="cr-job__place">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {job.place}
              </span>
              <a className="cr-job__apply" href="#top" onClick={scrollToTop}>
                Apply
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ 5. Fuelled by passionate people ============ */}
   

      {/* ============ 6. Benefit: left pic, right text ============ */}
     <section className="cr-split cr-benefit" aria-labelledby="cr-benefit-title">

  <div className="cr-benefit-cards">
    <div className="cr-benefit-card">
      <h3>Teamwork</h3>
      <p>Work together with talented and passionate people.</p>
    </div>

    <div className="cr-benefit-card">
      <h3>Career Growth</h3>
      <p>Discover new opportunities and develop your skills.</p>
    </div>

    <div className="cr-benefit-card">
      <h3>Insurance</h3>
      <p>Enjoy benefits that support your well-being.</p>
    </div>

    <div className="cr-benefit-card">
      <h3>Work Environment</h3>
      <p>Be part of a positive and supportive workplace.</p>
    </div>
  </div>

  <div className="cr-split__text">
    <span className="cr-eyebrow">Benefit</span>
    <h2 id="cr-benefit-title">Why you should joined Pabrica.</h2>
    <p>
      Odio ante nulla sit scelerisque habitasse viverra nec ultricies ornare.
      Magna aptent aenean tempus vehicula mauris pulvinar.
      Pellentesque hendrerit himenaeos cursus tortor condimentum tempus enim mus tempor quis congue.
    </p>
  </div>

</section>

      {/* ============ 7. Starting your career: background picture ============ */}
     

<section className="cr-start" aria-labelledby="cr-start-title">
  {startBg && <img className="cr-start__img" src={startBg} alt="" />}
  <div className="cr-start__overlay" />

  <div className="cr-start__content">
    <h2 id="cr-start-title">Starting your career</h2>
    <p>We have a wealth of opportunities available across our regions.</p>
    <a className="cr-btn" href="#top" onClick={scrollToTop}>
      Careers <Arrow />
    </a>
  </div>

  <div className="cr-start__quote">
    <blockquote>
      <p>
        “Coming together is a beginning, staying together is progress,
        and working together is success.”
      </p>
      <footer>– Henry Ford</footer>
    </blockquote>
  </div>
</section>

    </div>
  );
}