
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Services.css";

import heroImage from "../../assets/images/services/s1 (1).jpg";

import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Statistics from "../../components/Statistics/Statistics";

export default function Services() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <main className="service-page">

      {/* Hero */}
      <section className="service-hero">
        <img
          src={heroImage}
          alt="Pabrica Engineering Services"
          className="service-hero-image"
        />

        <div className="service-hero-overlay"></div>

        <div className="service-hero-content">
          <h1>What we do.</h1>
          <p>
            We develop creative, comprehensive, and sustainable engineering
            solutions for a future where society can thrive.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="service-breadcrumb">
        <Link to="/">Home</Link>
        <span>→</span>
        <span>Services</span>
      </div>

      {/* Page Heading */}
      <section className="service-heading">
        <h2>Services</h2>
      </section>

      {/* About Service */}
      <section className="service-about">

        <div className="service-about-content">
          <span className="service-small-title">ABOUT SERVICE</span>

          <h2>
            Delivering results, reliability, &amp; rock solid dependability.
          </h2>

          <h3>
            We develop creative, comprehensive and sustainable engineering
            solutions for a future where society can thrive.
          </h3>

          <p>
            Scelerisque molestie ipsum parturient aliquet leo non.
            Facilisis euismod tristique hac nunc enim commodo. Lacus ut
            praesent integer. Sed hac pede lobortis fusce habitant tincidunt.
            Auctor congue est cursus. Lorem facilisi ridiculus dolor.
            Vel fermentum porttitor aliquam aenean praesent etiam hendrerit.
            Mauris si ullamcorper libero eleifend habitasse penatibus.
          </p>

          <p>
            Vel rutrum luctus si interdum condimentum nullam finibus.
            Vehicula nunc risus eu. Ultricies lacus rhoncus metus ridiculus
            dui penatibus. Sapien et odio neque nulla mauris. Sit nam sed
            vehicula lacinia gravida. Dictum nulla metus venenatis etiam
            nunc quisque. Vehicula taciti dapibus mattis habitasse tortor
            viverra hac.
          </p>
        </div>

        {/* Call Center */}
        <aside className="service-call-card">

          <div className="service-call-icon">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="#FFBD00" />

              <g
                stroke="#004657"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M30 43a20 20 0 0 1 40 0" />
                <path d="M30 43v10h8V38h-5" />
                <path d="M70 43v10h-8V38h5" />
                <path d="M38 43a12 12 0 0 0 24 0" />
                <path d="M42 48l-3 7" />
                <path d="M58 48l3 7" />
                <circle cx="50" cy="37" r="11" />
                <path d="M43 37c4 2 10 2 14-2" />
                <path d="M43 43h2m10 0h2" />
                <path d="M35 75V65a15 15 0 0 1 15-15 15 15 0 0 1 15 15v10" />
                <path d="M30 75h40" />
                <rect x="39" y="60" width="22" height="15" rx="3" />
                <circle cx="50" cy="67" r="3" />
                <path d="M25 76h50" />
              </g>
            </svg>
          </div>

          <h3>Call Center</h3>

          <p>
            Call us for more information or business inquiry.
          </p>

          <div className="service-card-line"></div>

          <a href="tel:+622120022013">
            +(6221)-2002-2013
          </a>

          <span>(Toll Free)</span>

        </aside>
      </section>

      {/* What We Do */}
      <WhatWeDo />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics / Counting */}
      <Statistics />

      {/* Introduction Video */}
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

      {/* Video Popup */}
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
