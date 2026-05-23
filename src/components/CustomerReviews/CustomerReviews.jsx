import './CustomerReviews.css';

const reviews = [
  {
    stars: 4,
    quote: 'After using Vastukkalp products, I noticed a positive shift in my office environment. My business growth has improved significantly.',
    name: 'Rohit Sharma',
    role: 'Business Owner',
  },
  {
    stars: 5,
    quote: 'The energy in my home feels so calm and peaceful now. These Vastu products truly bring harmony and positivity.',
    name: 'Priya Mehta',
    role: 'Homemaker',
  },
  {
    stars: 4,
    quote: 'Great quality and authentic products. I feel more positive and energetic at home after using them.',
    name: 'Amit Patel',
    role: 'Entrepreneur',
  },
];

function Stars({ count }) {
  return (
    <div className="cr-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'cr-star cr-star--on' : 'cr-star'}>★</span>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}

export default function CustomerReviews() {
  return (
    <section className="cr-section section">
      <div className="cr__head">
        <span className="cr__eyebrow">Testimonials</span>
        <h2 className="cr__title">What Our Customers Say</h2>
        <p className="cr__subtitle">Real experiences from our valued customers</p>
      </div>

      <div className="cr__grid">
        {reviews.map((r, i) => (
          <div key={i} className="cr-card">
            <div className="cr-card__quote-mark">"</div>
            <Stars count={r.stars} />
            <p className="cr-card__quote">{r.quote}</p>
            <div className="cr-card__author">
              <div className="cr-card__avatar" aria-hidden="true">
                {getInitials(r.name)}
              </div>
              <div className="cr-card__info">
                <p className="cr-card__name">{r.name}</p>
                <p className="cr-card__role">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
