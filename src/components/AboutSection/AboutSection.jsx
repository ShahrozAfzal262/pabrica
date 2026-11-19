import "./AboutSection.css";
import { scrollToTop } from "../../utils/scrollToTop";

import aboutImage from "../../assets/images/about/about.jpg";

export default function AboutSection({ showLead = true }) {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__content">
        <span className="about__eyebrow">About Pabrica</span>
        <h2 id="about-title">Reliable engineering takes many forms.</h2>
        <p>
          In sed nisl leo elit ultricies mauris. Sed nibh natoque eleifend mi ante. Magnis vivamus
          maximus senectus lacus inceptos. Feugiat natoque mi nascetur.
        </p>
        <p>
          Adipiscing imperdiet eget vel. Massa ligula sociosqu a. Mus viverra ut ornare tempor
          dictumst eros habitant.
        </p>
        <a className="about__btn" href="#top" onClick={scrollToTop}>
          Find Location
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 12h18M14 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="about__media">
        {aboutImage ? (
          <img src={aboutImage} alt="Engineers at work on site" />
        ) : (
          <div className="about__placeholder" aria-hidden="true" />
        )}
      </div>

      {showLead && (
        <div className="about__lead">
          <h3>Delivering results, reliability, &amp; rock solid dependability.</h3>
          <p>
            We develop creative, comprehensive, and sustainable engineering solutions for a future
            where society can thrive.
          </p>
        </div>
      )}
    </section>
  );
}