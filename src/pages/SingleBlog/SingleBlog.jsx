
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "./SingleBlog.css";

const blogPosts = [
  {
    slug: "understanding-the-origins-of-mass-notification-systems",
    title: "Understanding the Origins of Mass Notification Systems",
    category: "Featured",
    date: "December 18, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/industrial-power-plant-2025-03-25-08-00-59-utc2.jpg",
    author: "Michael Parker",
    role: "Engineering Consultant",
    intro:
      "Mass notification systems have become an essential part of modern safety and emergency communication. They help organizations communicate important information quickly and effectively.",
    paragraphs: [
      "The history of mass notification systems began with simple public warning methods. Over time, these systems developed into advanced communication platforms capable of reaching thousands of people in seconds.",
      "Today, organizations use integrated communication technologies to deliver emergency alerts through multiple channels, including mobile devices, loudspeakers, emails and digital displays.",
      "Modern systems are designed to improve response times, protect people and ensure that critical information reaches the right audience at the right moment."
    ],
    points: [
      "Fast and reliable emergency communication.",
      "Improved public safety and awareness.",
      "Multiple communication channels.",
      "Better coordination during emergencies."
    ]
  },
  {
    slug: "top-flood-emergency-response-plan-tips",
    title: "Top Flood Emergency Response Plan Tips",
    category: "Preventive System",
    date: "December 16, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/industrial-worker-cutting-and-welding-metal-with-m-2024-11-03-00-54-40-utc2.jpg",
    author: "Michael Parker",
    role: "Safety Specialist",
    intro:
      "Flood emergencies can cause serious damage to communities, businesses and infrastructure. A well-prepared emergency response plan can help reduce risks and protect lives.",
    paragraphs: [
      "Preparation is one of the most important parts of flood management. Organizations should identify vulnerable areas, understand potential hazards and establish clear emergency procedures.",
      "An effective response plan should include evacuation routes, emergency contacts, communication procedures and access to essential supplies.",
      "Regular training and emergency drills help teams understand their responsibilities and respond confidently when flooding occurs."
    ],
    points: [
      "Identify flood-prone areas and potential risks.",
      "Prepare clear evacuation routes.",
      "Keep emergency supplies accessible.",
      "Establish reliable communication channels.",
      "Conduct regular emergency response drills."
    ]
  },
  {
    slug: "tones-of-the-city-creating-urban-spaces-that-evoke-the-senses-and-energise-cities",
    title:
      "Tones of the City: Creating urban spaces that evoke the senses and energise cities",
    category: "Urbanism",
    date: "December 14, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/factory-engineers-2025-03-08-23-34-31-utc2.jpg",
    author: "Michael Parker",
    role: "Urban Design Consultant",
    intro:
      "Cities are more than buildings and roads. Successful urban spaces bring people together and create environments that are welcoming, accessible and inspiring.",
    paragraphs: [
      "Urban design plays an important role in shaping how people experience their surroundings. Public spaces, walkways and green areas can improve everyday life.",
      "Thoughtful planning considers accessibility, sustainability, safety and the needs of different communities.",
      "By combining creativity with practical engineering, cities can develop spaces that encourage social interaction and support future growth."
    ],
    points: [
      "Create accessible public spaces.",
      "Integrate green areas into urban planning.",
      "Improve pedestrian-friendly environments.",
      "Support sustainable city development."
    ]
  },
  {
    slug: "public-spaces-safety-and-security-boosting-our-wellbeing",
    title: "Public spaces, safety and security: boosting our wellbeing",
    category: "Featured",
    date: "December 12, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/engineer-and-architects-at-construction-site-2025-01-08-20-35-29-utc2.jpg",
    author: "Michael Parker",
    role: "Planning Consultant",
    intro:
      "Safe and welcoming public spaces are essential for healthy and connected communities. Good planning helps people feel comfortable using shared environments.",
    paragraphs: [
      "Public spaces provide opportunities for recreation, social interaction and community activities. Their design should consider the safety and comfort of everyone.",
      "Lighting, visibility, accessibility and well-maintained infrastructure all contribute to safer environments.",
      "Combining effective planning with community involvement can create public spaces that support wellbeing and improve quality of life."
    ],
    points: [
      "Provide safe and accessible walkways.",
      "Improve lighting and visibility.",
      "Maintain public infrastructure.",
      "Consider the needs of all community members."
    ]
  },
  {
    slug: "decarbonising-aviation-from-the-ground-up",
    title: "Decarbonising Aviation From the Ground Up",
    category: "Governmental",
    date: "December 10, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/welder-used-grinding-stone-on-steel-in-factory-with-sparks-e1765513971945.jpg",
    author: "Michael Parker",
    role: "Sustainability Consultant",
    intro:
      "The aviation industry is exploring new ways to reduce carbon emissions and build a more sustainable future for air travel.",
    paragraphs: [
      "Decarbonising aviation requires improvements across the entire industry. Airports, airlines and infrastructure providers all have a role to play.",
      "Energy-efficient ground operations, sustainable aviation fuels and improved infrastructure can contribute to reducing environmental impact.",
      "Long-term progress depends on collaboration, innovation and investment in cleaner technologies."
    ],
    points: [
      "Improve energy efficiency at airports.",
      "Support sustainable aviation fuels.",
      "Reduce emissions from ground operations.",
      "Invest in cleaner technologies."
    ]
  },
  {
    slug: "setting-a-low-carbon-pathway-on-the-baltic-rim",
    title: "Setting a Low Carbon Pathway on the Baltic Rim",
    category: "Featured",
    date: "December 8, 2025",
    image:
      "https://new.creativemox.com/pabrica/wp-content/uploads/sites/26/2025/12/group-of-construction-engineer-working-in-construc-2025-03-15-03-11-53-utc2.jpg",
    author: "Michael Parker",
    role: "Environmental Consultant",
    intro:
      "A low-carbon future requires coordinated planning, sustainable infrastructure and long-term investment in cleaner energy solutions.",
    paragraphs: [
      "Regions around the Baltic Rim are exploring opportunities to reduce emissions while supporting economic development.",
      "Sustainable transport, renewable energy and efficient buildings are important parts of this transition.",
      "Careful planning and collaboration between public and private organizations can help create lasting environmental benefits."
    ],
    points: [
      "Promote renewable energy solutions.",
      "Improve sustainable transport networks.",
      "Develop energy-efficient buildings.",
      "Encourage regional collaboration."
    ]
  }
];

export default function SingleBlog() {
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const post = blogPosts.find(
  (item) => item.slug.trim().toLowerCase() === slug?.trim().toLowerCase()
);

  if (!post) {
  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <h2>Blog Not Found</h2>
      <p>Current Slug: {slug}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
}

  const latestPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 5);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <main className="single-blog-page">
      <section
  className="single-blog-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("${post.image}")`,
  }}
>
  <div className="single-blog-hero-content">
          <span>OUR BLOG</span>
          <h1>{post.title}</h1>
          <div className="single-blog-breadcrumb">
            <Link to="/">Home</Link>
            <span>→</span>
            <Link to="/blog">Blog</Link>
            <span>→</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      <div className="single-blog-layout">
        <article className="single-blog-main">
          <div className="single-blog-feature-image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="single-blog-meta">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>

          <h2>{post.title}</h2>

          <p className="single-blog-intro">{post.intro}</p>

          {post.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h3>Key Points to Consider</h3>

          <ul className="single-blog-points">
            {post.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="single-blog-content-image">
            <img src={post.image} alt={post.title} />
            <span>{post.title}</span>
          </div>

          <p>
            At Pabrica, we believe that thoughtful planning, reliable
            engineering and sustainable solutions can make a meaningful
            difference. Our team works to deliver solutions that support
            communities and create a better future.
          </p>

          <div className="single-blog-author">
            <div className="single-blog-author-avatar">MP</div>
            <div>
              <h4>{post.author}</h4>
              <span>{post.role}</span>
            </div>
          </div>

          <section className="single-blog-comments">
            <h2>Leave a Reply</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>

            {submitted && (
              <div className="single-blog-success">
                Thank you! Your comment has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label htmlFor="comment">Comment *</label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Write your comment..."
                required
              />

              <div className="single-blog-form-row">
                <div>
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" placeholder="Your Name" required />
                </div>

                <div>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="Your Website"
              />

              <label className="single-blog-save">
                <input type="checkbox" name="saveInfo" />
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>

              <button type="submit">Post Comment ↗</button>
            </form>
          </section>
        </article>

        <aside className="single-blog-sidebar">
          <div className="single-blog-side-box">
            <h3>Latest Posts</h3>

            {latestPosts.map((item) => (
              <Link
                to={`/blog/${item.slug}`}
                className="single-blog-latest"
                key={item.slug}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                  <small>{item.date}</small>
                </div>
              </Link>
            ))}
          </div>

          <div className="single-blog-help-box">
            <span>NEED HELP?</span>
            <h3>Let's discuss your next project.</h3>
            <p>
              Our team is ready to help you find the right engineering
              solutions.
            </p>
            <Link to="/contact">Contact Us ↗</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
