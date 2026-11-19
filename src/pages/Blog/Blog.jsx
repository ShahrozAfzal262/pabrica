
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import LatestNews from "../../components/LatestNews/LatestNews";
import "./Blog.css";

const heroImgs = import.meta.glob(
  "../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" }
);

const blogImgs = import.meta.glob(
  "../../assets/images/blog/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" }
);

const natural = (obj) =>
  Object.keys(obj).sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

const baseName = (p) =>
  p.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();

const pick = (obj, name, index = 0) => {
  const keys = natural(obj);
  const key =
    (name && keys.find((k) => baseName(k) === name)) || keys[index];

  return key ? obj[key] : "";
};

const heroBg = pick(heroImgs, "hero1", 0);
const featuredImg =
  pick(blogImgs, "blog1", 0) ||
  pick(heroImgs, null, 1) ||
  pick(heroImgs, null, 0);

const post = {
  title: "Setting a Low Carbon Pathway on the Baltic Rim",
  author: "Natalie Stanley",
  date: "December 9, 2025",
  comments: 0,
  category: "Editor's Choice",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur…",
};

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export default function Blog() {
  return (
    <div className="bl">
      <section className="bl-hero" aria-labelledby="bl-hero-title">
        {heroBg && <img className="bl-hero__img" src={heroBg} alt="" />}
        <div className="bl-hero__overlay" aria-hidden="true" />
        <div className="bl-hero__content">
          <h1 id="bl-hero-title">News &amp; Research The Expert</h1>
          <p>
            Company News and point of view from our expert about the industry
          </p>
        </div>
      </section>

      <div className="bl-crumbs-bar">
        <nav className="bl-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="bl-crumbs__arrow" aria-hidden="true">
              <Arrow />
            </li>
            <li aria-current="page">Blog</li>
          </ol>
        </nav>
        <h2 className="bl-pagetitle">Blog</h2>
      </div>

      <section className="bl-featured" aria-labelledby="bl-featured-title">
        <article className="bl-featured__post">
          <span className="bl-eyebrow">Featured</span>
          <span className="bl-tag">{post.category}</span>

          {featuredImg ? (
            <img
              className="bl-featured__img"
              src={featuredImg}
              alt={post.title}
            />
          ) : (
            <div className="bl-placeholder" aria-hidden="true" />
          )}

          <h2 id="bl-featured-title">
            <a href="#top" onClick={scrollToTop}>{post.title}</a>
          </h2>

          <div className="bl-meta">
            <a className="bl-meta__item" href="#top" onClick={scrollToTop}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="7" r="4.5" />
                <path d="M3 21c0-4.4 4-7 9-7s9 2.6 9 7z" />
              </svg>
              {post.author}
            </a>

            <time className="bl-meta__item">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zM5 10v10h14V10H5zm2 2h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 16h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
              </svg>
              {post.date}
            </time>

            <a
              className="bl-meta__item"
              href="#top"
              onClick={scrollToTop}
              aria-label={`${post.comments} comments`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 3C4.6 3 1 5.9 1 9.5c0 1.8.9 3.4 2.4 4.6L2.5 17l3.6-1.7c.9.2 1.9.3 2.9.3 4.4 0 8-2.9 8-6.5S13.4 3 9 3z" />
                <path d="M19.6 14c.9.9 1.4 2 1.4 3.2 0 1.3-.7 2.5-1.8 3.4l.6 2.4-2.8-1.3c-.5.1-1 .2-1.5.2-2.2 0-4.1-.9-5.2-2.3 4.8-.1 8.7-3.3 9.3-5.6z" />
              </svg>
              {post.comments}
            </a>
          </div>

          <p>{post.excerpt}</p>
        </article>
      </section>

      <section className="bl-sub" aria-labelledby="bl-sub-title">
        <div className="bl-sub__text">
          <h2 id="bl-sub-title">Stay up to date.</h2>
          <p>Sign up our newsletter for latest article and news.</p>
        </div>

        <form
          className="bl-sub__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <div className="bl-news">
        <LatestNews />
      </div>
    </div>
  );
}
