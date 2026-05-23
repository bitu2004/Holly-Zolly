import './SocialProof.css';

export default function SocialProof({ stats, testimonials }) {
  return (
    <div className="social-proof" id="about">
      <section className="stats-panel">
        <p className="eyebrow">Brand proof</p>
        <h2>Structured to build trust quickly</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-panel" aria-label="Customer feedback">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={testimonial.name}>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
