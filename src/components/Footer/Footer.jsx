import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Routes apne App.jsx ke hisab se hain
const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Investors", to: "/investors" },
      { label: "Career", to: "/careers" },
      { label: "News & Update", to: "/blog" },
      { label: "Legal Notice", to: "/legal" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Technology", to: "/services" },
      { label: "Industrial", to: "/services" },
      { label: "Advisory", to: "/services" },
      { label: "Construction", to: "/services" },
      { label: "Modeling", to: "/services" },
      { label: "Risk Management", to: "/services" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "F.A.Q", to: "/contact" },
      { label: "Help Center", to: "/contact" },
      { label: "Call Center", to: "/contact" },
    ],
  },
];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.3 6.5v8h2.4v-8H7.3zm1.2-3.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm3.2 3.8v8h2.4v-4c0-1 .5-1.7 1.4-1.7s1.3.6 1.3 1.7v4h2.4v-4.5c0-2-1.1-3.7-3-3.7-1 0-1.7.5-2.1 1.1v-.9h-2.4z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      return;
    }
    // TODO: yahan apni API / backend call lagao
    setMessage("Thanks! You are signed up.");
    setEmail("");
  };

  return (
    <footer className="pb-footer">
      <div className="pb-wrap">
        <div className="pb-top">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="pb-news">
            <h3>Newsletter</h3>
            <p>Sign up our newsletter to get update news and article about company.</p>
            <form className="pb-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                aria-label="Email address"
              />
              <button type="submit">Sign Up</button>
            </form>
            <div className="pb-msg" role="status">{message}</div>
          </div>
        </div>
      </div>

      <div className="pb-bottom">
        <div className="pb-wrap">
          <div className="pb-row">
            <div className="pb-social">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            </div>

            <Link className="pb-logo" to="/" aria-label="Pabrica home">
              Pabr<i>i</i>ca
            </Link>

            <div className="pb-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
          <p className="pb-copy">
            Copyright © {new Date().getFullYear()} Pabrica, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}