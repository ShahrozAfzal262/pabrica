
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-overlay">
        <div className="not-found-content">

          <div className="not-found-icon">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 66V54C20 32 38 14 60 14C82 14 100 32 100 54V66"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M44 20V54M60 14V54M76 20V54"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M16 66H104C108 66 111 69 111 73V78H9V73C9 69 12 66 16 66Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <rect
                x="19"
                y="91"
                width="82"
                height="25"
                rx="8"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M27 103H40M80 103H93M55 91H65"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M9 99H19M101 99H111"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>

          <h1>
            Error 404 – Not
            <br />
            Found
          </h1>

          <p>
            The page you are looking for does not exist; it
            <br className="not-found-desktop-break" />
            may have been moved, or removed altogether.
          </p>

          <Link to="/" className="not-found-home-btn">
            <span className="not-found-arrow">←</span>
            Back Home
          </Link>

        </div>
      </div>
    </main>
  );
}
