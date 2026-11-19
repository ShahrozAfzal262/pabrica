
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelClosing, setPanelClosing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { pathname } = useLocation();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      dropdown: true,
      match: ["/", "/home-2"],
    },
    { name: "About Us", href: "/about" },
    {
      name: "Service",
      href: "/services",
      dropdown: true,
    },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
    {
      name: "Pages",
      href: "/team",
      dropdown: true,
      match: ["/team", "/archive", "/404"],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=85",
      alt: "Industrial engineering work",
    },
    {
      src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=700&q=85",
      alt: "Industrial machinery",
    },
    {
      src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=700&q=85",
      alt: "Engineering workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=85",
      alt: "Industrial manufacturing",
    },
    {
      src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=700&q=85",
      alt: "Industrial facility",
    },
  {
  src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85",
  alt: "Construction site",
},
  ];

  const isActive = (link) => {
    if (link.match) {
      return link.match.includes(pathname);
    }

    return (
      pathname === link.href ||
      (link.name === "Service" && pathname === "/single-service")
    );
  };

  const openPanel = () => {
    setPanelOpen(true);
    setPanelClosing(false);
    setSearchOpen(false);
  };

  const closePanel = () => {
    if (panelClosing) return;

    setPanelClosing(true);

    setTimeout(() => {
      setPanelOpen(false);
      setPanelClosing(false);
    }, 800);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    console.log("Search:", searchQuery);
  };

  // Close image with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (panelOpen) {
          closePanel();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, panelOpen, panelClosing]);

  return (
    <>
      {/* Navbar */}
      <header className="main-navbar">
        <div className="navbar-container">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setSearchOpen(false)}
          >
            <h1>
              Pabrica<span>.</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="navbar-menu">
            {navLinks.map((link) => (
              <div key={link.name} className="navbar-item">
                <Link
                  to={link.href}
                  className={`navbar-link ${
                    isActive(link) ? "active" : ""
                  }`}
                >
                  {link.name}

                  {link.dropdown && (
                    <span className="nav-arrow"></span>
                  )}
                </Link>

                {/* Home Dropdown */}
                {link.name === "Home" && (
                  <div className="navbar-dropdown">
                    <Link to="/">Home 1</Link>
                    <Link to="/home-2">Home 2</Link>
                  </div>
                )}

                {/* Service Dropdown */}
                {link.name === "Service" && (
                  <div className="navbar-dropdown">
                    <Link to="/single-service">
                      Single Service
                    </Link>
                  </div>
                )}

                {/* Pages Dropdown */}
                {link.name === "Pages" && (
                  <div className="navbar-dropdown">
                    <Link to="/team">Team</Link>
                    <Link to="/archive">Archive</Link>
                    <Link to="/blog/top-flood-emergency-response-plan-tips">
                      Single Post
                    </Link>
                    <Link to="/404">Error 404</Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Global Button */}
          <button className="global-btn" type="button">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0-20" />
            </svg>

            <span>Global</span>
          </button>

          {/* Search */}
          <form
            className={`navbar-search ${
              searchOpen ? "search-active" : ""
            }`}
            onSubmit={handleSearch}
          >
            {searchOpen && (
              <input
                type="search"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            )}

            <button
              className="search-btn"
              type="button"
              aria-label="Open search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setPanelOpen(false);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
          </form>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={openPanel}
            aria-label="Open contact panel"
            type="button"
          >
            <span className="hamburger-lines">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </button>

        </div>
      </header>

      {/* Contact Side Panel */}
      {panelOpen && (
        <div
          className={`contact-panel-overlay ${
            panelClosing ? "panel-closing" : ""
          }`}
          onClick={closePanel}
        >
          <aside
            className="contact-side-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="contact-panel-close"
              onClick={closePanel}
              type="button"
              aria-label="Close contact panel"
            >
              ×
            </button>

            <div className="contact-panel-content">

              {/* Panel Logo */}
              <Link
                to="/"
                className="contact-panel-logo"
                onClick={closePanel}
              >
                Pabrica<span>.</span>
              </Link>

              {/* Description */}
             <p className="contact-panel-description">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pabrica_great/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-panel-instagram"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>

                @pabrica_great
              </a>

              {/* Six Images Gallery */}
              <div className="contact-panel-gallery">
                {galleryImages.map((image, index) => (
                  <button
                    type="button"
                    className="gallery-image-btn"
                    key={index}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="eager"
                    />
                  </button>
                ))}
              </div>

              {/* Contact Information */}
              <div className="contact-panel-details">

                <div className="contact-panel-detail">
                  <span className="contact-detail-icon">✉</span>

                  <a href="mailto:shahroz@gmail.com">
                    shahroz@gmail.com
                  </a>
                </div>

                <div className="contact-panel-detail">
                  <span className="contact-detail-icon">☎</span>

                  <a href="tel:03007835262">
                    03007835262
                  </a>
                </div>

              </div>

              {/* Panel Links */}
              <div className="contact-panel-links">
                <Link to="/about" onClick={closePanel}>
                  About Us
                </Link>

                <Link to="/services" onClick={closePanel}>
                  Services
                </Link>

                <Link to="/careers" onClick={closePanel}>
                  Careers
                </Link>

                <Link to="/contact" onClick={closePanel}>
                  Contact Us
                </Link>
              </div>

            </div>
          </aside>
        </div>
      )}

      {/* Full Size Image - Outside Side Panel */}
     
{/* Full Size Image */}
{selectedImage && (
  <div
    className="gallery-lightbox"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="lightbox-image-wrap"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedImage}
        alt="Selected industrial image"
      />

      <button
        type="button"
        className="lightbox-close"
        onClick={() => setSelectedImage(null)}
        aria-label="Close image"
      >
        &times;
      </button>
    </div>
  </div>
)}

    </>
  );
}
