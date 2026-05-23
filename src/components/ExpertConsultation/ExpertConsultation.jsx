import { Link } from 'react-router-dom';
import './ExpertConsultation.css';

const services = [
  { icon: '🔮', label: 'Horoscope Reading' },
  { icon: '🃏', label: 'Tarot Reading' },
  { icon: '🔢', label: 'Numerology Reading' },
  { icon: '🏠', label: 'Vastu Consultation' },
];

export default function ExpertConsultation() {
  return (
    <section className="ec-section section">
      <div className="ec__body">

        <div className="ec__photo-wrap">
          <div className="ec__photo">
            <img
              src="https://kkvastukkalp.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.05.03-PM-2.jpeg"
              alt="Astrologer Disha Shah — Holly Zolly expert"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ec__badge">
            <span className="ec__badge-num">500+</span>
            <span className="ec__badge-text">Happy Clients</span>
          </div>
        </div>

        <div className="ec__text">
          <span className="ec__eyebrow">✨ Expert Guidance</span>

          <h2 className="ec__title">
            Get Personalized Guidance from <span>Our Expert</span>
          </h2>

          <p className="ec__desc">
            Meet <strong>Astrologer Disha Shah</strong>, our in-house spiritual guide at{' '}
            <strong>Holly Zolly</strong>. With years of experience and a deep understanding of
            cosmic energies, she helps you align your gemstones, mindset, and life path with
            your true destiny.
          </p>

          <ul className="ec__services">
            {services.map((s) => (
              <li key={s.label} className="ec__service-item">
                <span className="ec__service-icon" aria-hidden="true">{s.icon}</span>
                {s.label}
              </li>
            ))}
          </ul>

          <Link to="/contact#consultation-form" className="ec__btn">
            Book an Appointment
            <span className="ec__btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
