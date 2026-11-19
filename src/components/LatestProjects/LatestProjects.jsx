import { scrollToTop } from "../../utils/scrollToTop";
import "./LatestProjects.css";

/*
  Cards ki pictures: src/assets/images/projects/ mein pro1, pro2, pro3, pro4
  (jpg / jpeg / png / webp / avif):
    pro1 = Wind Farms in Wales            pro2 = Wind energy at DePuy Synthes
    pro3 = Jakarta Airport International  pro4 = Loka Industrial Maluku
  Naam alag hon to images naam ke order mein cards par lag jati hain.
  Image na ho to dark placeholder dikhega, koi error nahi aayega.
*/
const files = import.meta.glob("../../assets/images/projects/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});
const baseName = (path) => path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
const sortedKeys = Object.keys(files).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
);
const imageAt = (i) => {
  const byName = sortedKeys.find((k) => baseName(k) === `pro${i + 1}`);
  const key = byName || sortedKeys[i];
  return key ? files[key] : "";
};

const projects = [
  { title: "Wind Farms in Wales" },
  { title: "Wind energy at DePuy Synthes" },
  { title: "Jakarta Airport International" },
  { title: "Loka Industrial Maluku" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export default function LatestProjects() {
  return (
    <section className="lp" aria-labelledby="lp-title">
      <div className="lp__head">
        <div>
          <span className="lp__eyebrow">Latest Project</span>
          <h2 id="lp-title">Awesome Project</h2>
        </div>
        <div className="lp__intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a className="lp__btn" href="#top" onClick={scrollToTop}>
            View All Project <Arrow />
          </a>
        </div>
      </div>

      <ul className="lp__grid">
        {projects.map((p, i) => (
          <li key={p.title} className="lp__card">
            {imageAt(i) && <img className="lp__img" src={imageAt(i)} alt="" loading="lazy" />}
            <div className="lp__body">
              <h3>{p.title}</h3>
              {/* description aur button sirf hover (ya keyboard focus) par nazar aate hain */}
              <div className="lp__more">
                <div className="lp__more-inner">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                  <a className="lp__link" href="#top" onClick={scrollToTop}>
                    Detail Project <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}