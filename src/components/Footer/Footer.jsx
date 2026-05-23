import { Link } from 'react-router-dom';
import './Footer.css';

const WHATSAPP_NUMBER = '919904444990';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  return (
    <>
      <footer className="site-footer">

        <div className="footer-banner">
          <div className="footer-banner-inner">
            <div className="banner-copy">
              <h3>Get Vastu Consultation</h3>
              <p>Expert guidance to balance energy and harmonize your living spaces.</p>
            </div>
            <div className="banner-actions">
              <Link className="footer-btn footer-btn--primary" to="/contact#consultation-form">Get Vastu Consultation</Link>
              <Link className="footer-btn footer-btn--secondary" to="/category">Explore Vastu Products</Link>
            </div>
          </div>
        </div>

        <div className="footer-trust-bar">
          <span>✓ 100% Authentic Vedic Science</span>
          <span className="footer-trust-bar__dot" aria-hidden="true">·</span>
          <span>✓ Dosha Rectification</span>
          <span className="footer-trust-bar__dot" aria-hidden="true">·</span>
          <span>✓ Scientific Energy Maps</span>
        </div>

        <div className="footer-main">
          <div className="footer-grid">

            <div className="footer-col footer-col--brand">
              <img src="/holly%20zolly.png" alt="Holly Zolly" className="footer-logo" />
              <p className="footer-brand-desc">
                We offer authentic Vastu products and solutions designed to balance energy,
                attract positivity, and bring harmony, peace, and prosperity into your home and workspace.
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-col__heading">Quick Links</h4>
              <ul className="footer-col__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Shop</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col__heading">Customer Service</h4>
              <ul className="footer-col__list">
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/returns">Returns</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col__heading">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="footer-contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <a href="mailto:vastukkalp2007@gmail.com">vastukkalp2007@gmail.com</a>
                </li>
                <li>
                  <span className="footer-contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                  </span>
                  <a href="tel:+919909511961">+91 99095 11961</a>
                </li>
                <li className="footer-contact-address">
                  <span className="footer-contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <address>
                    Vastukkalp<br />
                    D-211 Adishwar Nagar<br />
                    Nikol Road, Naroda, Ahmedabad
                  </address>
                </li>
              </ul>

              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social__btn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.25 10.44 22v-7.03H7.9v-2.9h2.54V9.6c0-2.5 1.49-3.86 3.77-3.86 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.77l-.44 2.9h-2.33V22C18.34 21.25 22 17.09 22 12.07z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social__btn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social__btn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="currentColor"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/>
                  </svg>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social__btn footer-social__btn--whatsapp">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} HOLLY ZOLLY. All rights reserved.
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="currentColor"/>
        </svg>
      </a>
    </>
  );
}
