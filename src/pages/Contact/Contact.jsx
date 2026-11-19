import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

/* =====================================================================
   Contact page: sab sections isi ek file mein
   Images careers folder se (na milen to fallback dikhta hai, error nahi aata):
   src/assets/images/careers/ (jpg / jpeg / png / webp / avif):
     career1 -> Hero ki background picture
     career2 -> "Get in touch" ki picture (right side)
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

const heroBg = pick(careerImgs, "career1", 0) || pick(heroImgs, null, 0);
const touchImg = pick(careerImgs, "career2", 1) || pick(aboutImgs, "about", 0);

/* ---------------- Data ---------------- */
const MAP_ADDRESS = "Jln Cempaka Wangi No 22, Jakarta, Indonesia";
// hl=en: map ke naam/labels English mein, z=16: address ke qareeb zoom
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&hl=en&z=16&output=embed`;

const info = [
  {
    title: "Headquarter",
    lines: ["Jln Cempaka Wangi No 22, Jakarta - Indonesia"],
    icon: (
      <>
        <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    title: "Email Us",
    lines: ["support@yourdomain.tld"],
    href: "mailto:support@yourdomain.tld",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    title: "Office Hour",
    lines: ["Monday - Friday (09.00 AM - 05.00PM)", "Saturday - Sunday (Close)"],
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

const socials = [
  {
    name: "Facebook",
    fill: true,
    icon: <path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2z" />,
  },
  {
    name: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    fill: true,
    icon: <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.3 6.5v8h2.4v-8H7.3zm1.2-3.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm3.2 3.8v8h2.4v-4c0-1 .5-1.7 1.4-1.7s1.3.6 1.3 1.7v4h2.4v-4.5c0-2-1.1-3.7-3-3.7-1 0-1.7.5-2.1 1.1v-.9h-2.4z" />,
  },
  {
    name: "Twitter",
    fill: true,
    icon: <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20.2c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />,
  },
  {
    name: "YouTube",
    fill: true,
    icon: <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />,
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

const emptyForm = { name: "", company: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please write your message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // TODO: yahan apni API / email service (Formspree, EmailJS ...) ka call lagao
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <div className="ct">
      {/* ============ 1. Hero (70vh) ============ */}
      <section className="ct-hero" aria-labelledby="ct-hero-title">
        {heroBg && <img className="ct-hero__img" src={heroBg} alt="" />}
        <div className="ct-hero__overlay" aria-hidden="true" />
        <div className="ct-hero__content">
          <h1 id="ct-hero-title">Let's Build Relationship</h1>
          <p>Start the conversation to established good relationship and business</p>
        </div>
      </section>

      {/* ============ Home -> Contact Us, uske neeche bada "Contact Us": picture ke neeche, center ============ */}
      <div className="ct-crumbs-bar">
        <nav className="ct-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="ct-crumbs__arrow" aria-hidden="true"><Arrow /></li>
            <li aria-current="page">Contact Us</li>
          </ol>
        </nav>
        <h2 className="ct-pagetitle">Contact Us</h2>
      </div>

      {/* ============ 2. Get in touch: left (icons ke saath info), right pic ============ */}
      <section className="ct-touch" aria-labelledby="ct-touch-title">
        <div className="ct-touch__text">
          <h2 id="ct-touch-title">Get in touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <ul className="ct-info">
            {info.map((item) => (
              <li key={item.title}>
                <span className="ct-info__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a key={line} href={item.href}>{line}</a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="ct-touch__media">
          {touchImg ? <img src={touchImg} alt="Pabrica office" /> : <div className="ct-placeholder" aria-hidden="true" />}
        </div>
      </section>

      {/* ============ 3. Send us a message: heading center, left form, right map ============ */}
      <section className="ct-message" aria-labelledby="ct-message-title">
        <div className="ct-message__head">
          <span className="ct-eyebrow">Send us a message</span>
          <h2 id="ct-message-title">We're here to help.</h2>
        </div>

        <div className="ct-message__grid">
          <form className="ct-form" onSubmit={handleSubmit} noValidate>
            <div className="ct-row">
              <div className="ct-field">
                <label htmlFor="ct-name">Name</label>
                <input id="ct-name" name="name" type="text" value={form.name} onChange={update} aria-invalid={!!errors.name} />
                {errors.name && <span className="ct-error">{errors.name}</span>}
              </div>
              <div className="ct-field">
                <label htmlFor="ct-company">Company</label>
                <input id="ct-company" name="company" type="text" value={form.company} onChange={update} />
              </div>
            </div>

            <div className="ct-row">
              <div className="ct-field">
                <label htmlFor="ct-email">Email</label>
                <input id="ct-email" name="email" type="email" value={form.email} onChange={update} aria-invalid={!!errors.email} />
                {errors.email && <span className="ct-error">{errors.email}</span>}
              </div>
              <div className="ct-field">
                <label htmlFor="ct-phone">Phone Number</label>
                <input id="ct-phone" name="phone" type="tel" value={form.phone} onChange={update} />
              </div>
            </div>

            <div className="ct-field">
              <label htmlFor="ct-subject">Subject</label>
              <input id="ct-subject" name="subject" type="text" value={form.subject} onChange={update} />
            </div>

            <div className="ct-field">
              <label htmlFor="ct-message">Message</label>
              <textarea id="ct-message" name="message" rows="6" value={form.message} onChange={update} aria-invalid={!!errors.message} />
              {errors.message && <span className="ct-error">{errors.message}</span>}
            </div>

            <button type="submit" className="ct-btn">
              Send Message <Arrow />
            </button>
            <div className="ct-status" role="status">
              {sent && "Thank you! Your message has been sent."}
            </div>
          </form>

          <div className="ct-map">
            <iframe
              title="Pabrica headquarter map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ============ 4. Follow Our Social Media: center, icons neeche ============ */}
      <section className="ct-social" aria-labelledby="ct-social-title">
        <h2 id="ct-social-title">Follow Our Social Media</h2>
        <ul>
          {socials.map((s) => (
            <li key={s.name}>
              <a href="#" aria-label={s.name} onClick={(e) => e.preventDefault()}>
                <svg
                  viewBox="0 0 24 24"
                  fill={s.fill ? "currentColor" : "none"}
                  stroke={s.fill ? "none" : "currentColor"}
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}