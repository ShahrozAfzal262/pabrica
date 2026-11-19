import { Link } from "react-router-dom";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__inner">
        <div>
          <h2 id="cta-title">Need Help?</h2>
          <p>Don’t hesitate to contact us for more information about company or service</p>
        </div>
        <Link className="cta__btn" to="/contact">
          Contact Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 12h18M14 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}