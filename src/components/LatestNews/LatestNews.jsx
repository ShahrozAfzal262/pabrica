
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestNews.css";

export default function LatestNews() {
  const [introOpen, setIntroOpen] = useState(false);

  const newsItems = [
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/industrial-power-plant-2025-03-25-08-00-59-utc2.jpg",
      category: "Featured",
      title: "Understanding the Origins of Mass Notification Systems",
      link: "understanding-the-origins-of-mass-notification-systems",
    },
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/industrial-worker-cutting-and-welding-metal-with-m-2024-11-03-00-54-40-utc2.jpg",
      category: "Preventive System",
      title: "Top Flood Emergency Response Plan Tips",
      link: "top-flood-emergency-response-plan-tips",
    },
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/factory-engineers-2025-03-08-23-34-31-utc2.jpg",
      category: "Urbanism",
      title:
        "Tones of the City: Creating urban spaces that evoke the senses and energise cities",
      link:
        "tones-of-the-city-creating-urban-spaces-that-evoke-the-senses-and-energise-cities",
    },
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/engineer-and-architects-at-construction-site-2025-01-08-20-35-29-utc2.jpg",
      category: "Featured",
      title: "Public spaces, safety and security: boosting our wellbeing",
      link: "public-spaces-safety-and-security-boosting-our-wellbeing",
    },
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/welder-used-grinding-stone-on-steel-in-factory-with-sparks-e1765513971945.jpg",
      category: "Governmental",
      title: "Decarbonising Aviation From the Ground Up",
      link: "decarbonising-aviation-from-the-ground-up",
    },
    {
      image:
        "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/group-of-construction-engineer-working-in-construc-2025-03-15-03-11-53-utc2.jpg",
      category: "Featured",
      title: "Setting a Low Carbon Pathway on the Baltic Rim",
      link: "setting-a-low-carbon-pathway-on-the-baltic-rim",
    },
  ];

  return (
    <>
      {/* LATEST NEWS */}
      <section className="latest-news-section">
        <div className="latest-news-container">
          <div className="latest-news-heading">
            <div>
              <span className="latest-news-label">UPDATE</span>
              <h2>
                Latest News
                <br />
                <span>& Articles.</span>
              </h2>
            </div>

            <Link to="/blog" className="latest-news-button">
              View All Articles <span>↗</span>
            </Link>
          </div>

          <div className="latest-news-grid">
            {newsItems.map((item, index) => (
              <article className="news-card" key={index}>
                <Link to={`/blog/${item.link}`} className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">
                    {item.category}
                  </span>
                </Link>

                <div className="news-content">
                  <h3>
                    <Link to={`/blog/${item.link}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur.
                  </p>

                  <Link
                    to={`/blog/${item.link}`}
                    className="news-read-more"
                  >
                    Read More <span>»</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO VIDEO SECTION */}
      <section className="news-video-section">
        <div className="news-video-container">
          <div className="news-video-content">
            <span className="news-video-label">
              INTRODUCTION VIDEO
            </span>

            <h2>Let's start your project to be realize.</h2>

            <p>
              We planted our roots with a commitment to earning your
              trust and protecting lives, property, and prestige.
            </p>

            <Link to="/contact" className="news-video-contact">
              Contact Us <span>↗</span>
            </Link>
          </div>

          <div className="news-video-action">
            <button
              className="intro-play-button"
              onClick={() => setIntroOpen(true)}
              aria-label="Play introduction video"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <h3>Play Intro</h3>

            <a
              href="https://www.youtube.com/results?search_query=industrial+manufacturing+factory+machinery"
              target="_blank"
              rel="noopener noreferrer"
              className="more-videos-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
              More Videos
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {introOpen && (
        <div
          className="intro-video-modal"
          onClick={() => setIntroOpen(false)}
        >
          <div
            className="intro-video-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="intro-video-close"
              onClick={() => setIntroOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>

            <iframe
              src="https://www.youtube.com/embed/75RCQZVB9MI?autoplay=1&start=0&end=20&rel=0"
              title="Pabrica Industrial Introduction Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
