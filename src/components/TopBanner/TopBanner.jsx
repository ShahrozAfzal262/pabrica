
import { Link } from "react-router-dom";
import "./TopBanner.css";

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="top-banner-logo">
        <svg
          viewBox="0 0 32 32"
          className="envato-icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 3L8 17L17 16L5 29L24 15L15 16L25 3Z"
            fill="#82B440"
          />

          <path
            d="M8 17L5 29L17 16"
            stroke="#82B440"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        <span className="envato-bold">envato</span>
        <span className="envato-light">market</span>
      </div>

      <Link to="/auth" className="top-banner-buy-btn">
        Buy now
      </Link>
    </div>
  );
}
