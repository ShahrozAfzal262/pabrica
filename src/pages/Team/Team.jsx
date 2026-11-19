import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

/* =====================================================================
   Team page. Images folder se khud uth jati hain:
     src/assets/images/team/     -> 8 leaders ki photos (naam ki tarteeb se)
     src/assets/images/careers/  -> career1 hero, career2 about,
                                    career3 shape, career4 last background
   ===================================================================== */
const teamImgs = import.meta.glob("../../assets/images/team/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });
const careerImgs = import.meta.glob("../../assets/images/careers/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" });

const toList = (obj) =>
    Object.keys(obj)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
        .map((k) => obj[k]);

const teamList = toList(teamImgs);
const careerList = toList(careerImgs);

const heroBg = careerList[0] || "";
const aboutImg = careerList[1] || careerList[0] || "";
const shapeImg = careerList[2] || careerList[0] || "";
const ctaBg = careerList[careerList.length - 1] || "";

/* ---------------- Leaders ---------------- */
const leaders = [
    { name: "Gregory G Sedillo", role: "CEO" },
    { name: "David C Mackey", role: "Vice President" },
    { name: "Jamie G Britton", role: "CCO" },
    { name: "Charles Lois", role: "CFO" },
    { name: "Scott F Kim", role: "Manager" },
    { name: "Evelyn S Curtis", role: "Finance" },
    { name: "Lindsey McDaniel", role: "Finance" },
    { name: "Malcolm Holland", role: "Manager" },
].map((p, i) => ({ ...p, img: teamList[i] || "" }));

/* ---------------- Icons ---------------- */
const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
};

const Arrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 12h18M14 5l7 7-7 7" />
    </svg>
);

const Facebook = () => (
    <svg {...iconProps}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const Twitter = () => (
    <svg {...iconProps}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
);
const Linkedin = () => (
    <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* Staff ka icon (log) */
const UsersIcon = () => (
    <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

/* Awards ka icon (trophy) */
const TrophyIcon = () => (
    <svg {...iconProps}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
);

const socials = [
    { label: "Facebook", Icon: Facebook },
    { label: "Twitter", Icon: Twitter },
    { label: "LinkedIn", Icon: Linkedin },
];

/* ---------------- Stat: icon + 0 se ginti + label ---------------- */
function Stat({ end, label, Icon, duration = 2000 }) {
    const boxRef = useRef(null);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const el = boxRef.current;
        if (!el) return undefined;

        let raf;
        let started = false;

        const run = () => {
            if (started) return;
            started = true;
            const t0 = performance.now();
            const tick = (now) => {
                const p = Math.min((now - t0) / duration, 1);
                setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
                if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
        };

        // purane browser mein observer na ho to seedha chala do
        if (!("IntersectionObserver" in window)) {
            run();
            return () => cancelAnimationFrame(raf);
        }

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    run();
                    io.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        io.observe(el);

        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [end, duration]);

    return (
        <div className="tm-stat" ref={boxRef}>
            <span className="tm-stat__icon">
                <Icon />
            </span>
            <div>
                <strong>{val}+</strong>
                <span>{label}</span>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="tm">
            {/* ============ 1. Hero ============ */}
            <section className="tm-hero" aria-labelledby="tm-hero-title">
                {heroBg && <img className="tm-hero__img" src={heroBg} alt="" />}
                <div className="tm-hero__overlay" aria-hidden="true" />
                <div className="tm-hero__content">
                    <h1 id="tm-hero-title">Meet our experts.</h1>
                    <p>Get to know the Pabrica Expert Team.</p>
                </div>
            </section>

            {/* ============ Home -> Team, uske neeche bada "Team" ============ */}
            <div className="tm-crumbs-bar">
                <nav className="tm-crumbs" aria-label="Breadcrumb">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li className="tm-crumbs__arrow" aria-hidden="true"><Arrow /></li>
                        <li aria-current="page">Team</li>
                    </ol>
                </nav>
                <h2 className="tm-pagetitle">Team</h2>
            </div>

            {/* ============ 2. About Leadership: left pic, right text ============ */}
            <section className="tm-about" aria-labelledby="tm-about-title">
                <div className="tm-about__media">
                    {aboutImg ? (
                        <img src={aboutImg} alt="Pabrica leadership" />
                    ) : (
                        <div className="tm-placeholder" aria-hidden="true" />
                    )}
                </div>

                <div className="tm-about__text">
                    <span className="tm-eyebrow">About Leadership</span>
                    <h2 id="tm-about-title">No individual can win a game by himself</h2>
                    <p>
                        Egestas feugiat suspendisse iaculis litora auctor vitae habitant gravida ac nec
                        vulputate. Consectetur proin blandit sed at vehicula duis integer nostra consequat
                        pede. Ipsum mus sapien convallis taciti enim volutpat.
                    </p>

                    <div className="tm-stats">
                        <Stat end={250} label="staff members worldwide" Icon={UsersIcon} />
                        <Stat end={30} label="Awards Won" Icon={TrophyIcon} />
                    </div>
                </div>
            </section>

            {/* ============ 3. Our Leadership: 2 row x 4 ============ */}
            <section className="tm-leaders" aria-labelledby="tm-leaders-title">
                <span className="tm-eyebrow">Our Leadership</span>
                <h2 id="tm-leaders-title">Awesome Team Behind Us</h2>

                <div className="tm-grid">
                    {leaders.map((p) => (
                        <article className="tm-card" key={p.name}>
                            <div className="tm-card__media">
                                {p.img ? (
                                    <img className="tm-card__img" src={p.img} alt={p.name} />
                                ) : (
                                    <div className="tm-card__img tm-placeholder" aria-hidden="true" />
                                )}
                            </div>
                            <h3>{p.name}</h3>
                            <span className="tm-card__role">{p.role}</span>
                            <div className="tm-card__social">
                                {socials.map(({ label, Icon }) => (
                                    <a
                                        key={label}
                                        href="#"
                                        aria-label={`${p.name} on ${label}`}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ============ 4. Shape a better world: left pic, right text ============ */}
            <section className="tm-shape" aria-labelledby="tm-shape-title">
                <div className="tm-shape__media">
                    {shapeImg ? (
                        <img src={shapeImg} alt="" />
                    ) : (
                        <div className="tm-placeholder" aria-hidden="true" />
                    )}
                </div>

                <div className="tm-shape__text">
                    <h2 id="tm-shape-title">How will you shape a better world?</h2>
                    <h3>It is literally true that you can succeed best and quickest by helping others to succeed.</h3>
                    <p>
                        Adipiscing euismod sit bibendum ultrices pede letius eros ac inceptos nec a. Ipsum
                        praesent faucibus quam urna feugiat libero pretium aptent ridiculus eros diam. Gravida
                        lacus faucibus platea senectus venenatis sagittis finibus letius.
                    </p>
                    <Link to="/careers" className="tm-btn">Open Positions</Link>
                </div>
            </section>

            {/* ============ 5. Career + quote (background pic) ============ */}
            <section className="tm-cta" aria-labelledby="tm-cta-title">
                {ctaBg && <img className="tm-cta__img" src={ctaBg} alt="" />}
                <div className="tm-cta__overlay" aria-hidden="true" />

                <div className="tm-cta__inner">
                    <div className="tm-cta__left">
                        <h2 id="tm-cta-title">Starting your career</h2>
                        <p>We have a wealth of opportunities available across our regions.</p>
                        <Link to="/careers" className="tm-btn">Careers</Link>
                    </div>

                    <blockquote className="tm-cta__right">
                        <p>"Coming together is a beginning, staying together is progress, and working together is success."</p>
                        <cite>– Henry Ford</cite>
                    </blockquote>
                </div>
            </section>
        </div>
    );
}