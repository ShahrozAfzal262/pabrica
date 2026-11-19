
import { useState } from "react";
import { Link } from "react-router-dom";

import "./About.css";

import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

import heroImage from "../../assets/images/hero/hero-bg.jpg";
import aboutImage from "../../assets/images/about/about.jpg";
import valueImage from "../../assets/images/services/s1 (1).jpg";
import leadershipImage from "../../assets/images/services/s1 (2).jpg";

export default function About() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <main className="about-page">

      {/* HERO SECTION */}
    {/* HERO SECTION */}
<section
  className="about-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="about-hero__overlay">
    <div className="about-hero__content">
      <h1>Builds a Better World.</h1>
      <p>
        Builds a better world by applying world-class expertise
        to solve its clients greatest challenges.
      </p>
    </div>
  </div>
</section>

      {/* BREADCRUMB */}
      <div className="about-breadcrumb">
        <Link to="/">Home</Link>
        <span>→</span>
        <span>About Us</span>
      </div>

  

      {/* TRUSTED BRANDS */}
      <TrustedBrands />

      {/* HISTORY */}
      <section className="about-history">
        <div className="about-history__image">
          <img src={aboutImage} alt="Pabrica engineering history" />
        </div>

        <div className="about-history__content">
          <span className="about-eyebrow">HISTORY</span>

          <h2>Start from zero become to hero.</h2>

          <p>
            Sagittis placerat senectus magna. Congue senectus etiam
            vehicula. Condimentum arcu purus himenaeos. Cras sagittis
            habitant suspendisse. Sed adipiscing nisi ligula
            consectetuer himenaeos.
          </p>

          <p>
            Nisi neque tempor dictumst lobortis sociosqu tortor.
            Urna congue sagittis lacinia conubia maecenas integer
            fames. Litora sodales id nisl rhoncus quis vehicula.
          </p>

          <p>
            Dolor dapibus eget imperdiet ex gravida vel. Inceptos
            dis congue est accumsan rutrum aliquam porttitor.
            Sollicitudin tortor congue venenatis.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values">
        <div className="about-values__content">
          <span className="about-eyebrow">OUR VALUE</span>

          <h2>Why we are different.</h2>

          <p>
            Quisque purus at magnis cursus dapibus neque ullamcorper
            cubilia congue torquent tincidunt. Vulputate mi volutpat
            magnis proin congue ultrices nec convallis accumsan felis.
            Venenatis volutpat suspendisse malesuada purus lacus in
            elementum ultricies curae letius.
          </p>

          {/* VISION AND MISSION */}
          <div className="about-values__items">

            <div className="about-value-card">
              <span className="about-value-number">01</span>

              <div>
                <h3>Vision</h3>
                <p>
                  Habitasse inceptos taciti scelerisque dis aenean
                  dignissim ornare nulla nisl.
                </p>
              </div>
            </div>

            <div className="about-value-card">
              <span className="about-value-number">02</span>

              <div>
                <h3>Mission</h3>
                <p>
                  Habitasse inceptos taciti scelerisque dis aenean
                  dignissim ornare nulla nisl.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="about-values__image">
          <img src={valueImage} alt="Pabrica engineering values" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <WhatWeDo />

      {/* OUR LEADERSHIP */}
      <section className="about-leadership">
        <div className="about-leadership__image">
          <img
            src={leadershipImage}
            alt="Pabrica leadership"
          />
        </div>

        <div className="about-leadership__content">
          <span className="about-eyebrow">OUR LEADERSHIP</span>

          <h2>Leadership and Governance</h2>

          <p>
            Egestas feugiat suspendisse iaculis litora auctor vitae
            habitant gravida ac nec vulputate. Consectetur proin
            blandit sed at vehicula duis integer nostra consequat pede.
            Ipsum mus sapien convallis taciti enim volutpat.
          </p>

          <Link to="/contact" className="about-leadership__btn">
            Discover More <span>↗</span>
          </Link>
        </div>
      </section>

      {/* INTRODUCTION VIDEO - FULL WIDTH */}
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
              type="button"
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
              type="button"
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
            />
          </div>
        </div>
      )}

    </main>
  );
}
