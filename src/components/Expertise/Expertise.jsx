
import "./Expertise.css";

export default function Expertise() {
  const expertiseItems = [
    {
      number: "01",
      title: "Industrial Engineering",
      description:
        "Delivering reliable engineering solutions for modern industrial projects.",
    },
    {
      number: "02",
      title: "Construction Management",
      description:
        "Managing construction projects with quality, safety and precision.",
    },
    {
      number: "03",
      title: "Technical Consulting",
      description:
        "Providing expert advice to improve project performance and efficiency.",
    },
    {
      number: "04",
      title: "Project Development",
      description:
        "Turning complex ideas into practical and sustainable solutions.",
    },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-heading">
          <span className="expertise-label">OUR EXPERTISE</span>
          <h2>
            Expertise that drives
            <br />
            <span>better solutions.</span>
          </h2>
          <p>
            We combine technical knowledge, innovation and experience
            to deliver exceptional results across every project.
          </p>
        </div>

        <div className="expertise-list">
          {expertiseItems.map((item) => (
            <div className="expertise-item" key={item.number}>
              <span className="expertise-number">{item.number}</span>

              <div className="expertise-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="expertise-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
