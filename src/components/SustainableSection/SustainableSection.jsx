
import "./SustainableSection.css";

const files = import.meta.glob(
  "../../assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);

const sustainableImage = Object.keys(files).find((path) =>
  path.toLowerCase().includes("/about/about.jpg")
);

const sustainableImageSrc = sustainableImage
  ? files[sustainableImage]
  : "";

export default function SustainableSection() {
  return (
    <section className="sustain">
      {/* LEFT SIDE CONTENT */}
      <div className="sustain__content">
        <span className="sustain__label">
          SUSTAINABILITY & INNOVATION
        </span>

        <h2>
          Let us help you invest in sustainable infrastructure.
        </h2>

        <h3>
          It is literally true that you can succeed best and quickest
          by helping others to succeed.
        </h3>

        <p>
          Adipiscing euismod sit bibendum ultrices pede letius eros
          ac inceptos nec a. Ipsum praesent faucibus quam urna
          feugiat libero pretium aptent ridiculus eros diam.
          Gravida lacus faucibus platea senectus venenatis sagittis
          finibus letius.
        </p>

        <a href="/about" className="sustain__btn">
          Discover More <span>↗</span>
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="sustain__media">
        {sustainableImageSrc ? (
          <img
            src={sustainableImageSrc}
            alt="Sustainable infrastructure project"
          />
        ) : (
          <div className="sustain__placeholder" />
        )}
      </div>
    </section>
  );
}
