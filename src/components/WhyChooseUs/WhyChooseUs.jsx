import "./WhyChooseUs.css";

const text = "Neque ad vitae felis augue aenean finibus maecenas adipiscing lacinia";

const items = [
  {
    title: "Resource",
    icon: (
      <>
        <path d="M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 17l9 5 9-5" />
      </>
    ),
  },
  {
    title: "Analyze",
    icon: <path d="M3 21h18M6 21V11M11 21V5M16 21v-7M21 21V9" />,
  },
  {
    title: "Target Oriented",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" />
      </>
    ),
  },
  {
    title: "Transparent",
    icon: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Quality",
    icon: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
        <path d="M9.5 9l1.8 1.8L14.5 7.5" />
      </>
    ),
  },
  {
    title: "Prestigious",
    icon: (
      <>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
      </>
    ),
  },
  {
    title: "Environmentally",
    icon: (
      <>
        <path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z" />
        <path d="M5 19c3-5 6-8 10-10" />
      </>
    ),
  },
  {
    title: "Confidential",
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15.5" r="1.2" />
      </>
    ),
  },
  {
    title: "24/7 Support",
    icon: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="1" />
        <rect x="17" y="14" width="4" height="6" rx="1" />
        <path d="M19 20c0 1.5-1.5 2-4 2h-2" />
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__head">
        <span className="why__eyebrow">Why Choose Us</span>
        <h2 id="why-title">Real People. Real Work. Real Rewards.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <ul className="why__grid">
        {items.map((item) => (
          <li key={item.title} className="why__card">
            <span className="why__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
            </span>
            <h3>{item.title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}