
import heroBg from "../../assets/images/hero/hero-bg.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>Create. Enhance. <br /> and Sustain.</h1>

          <p>
            Accumsan ridiculus ante litora maecenas lobortis
            netus <br /> maximus gravida euismod
          </p>

          <a href="/about" className="hero-btn">
            Discover More <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
