import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Contact.css';

export default function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#consultation-form') {
      const el = document.getElementById('consultation-form');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [hash]);
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main className="contact-page-main">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>We're here to help you bring harmony and prosperity to your life.</p>
          </div>
        </section>
        
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info-panel">
              <h2>Get in Touch</h2>
              <p>Have questions about our Vastu products or need consultation? Reach out to us.</p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:vastukkalp2007@gmail.com">vastukkalp2007@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919909511961">+91 99095 11961</a></p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>
                      Vastukkalp<br />
                      D-211 Adishwar Nagar<br />
                      Nikol Road, Naroda, Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel" id="consultation-form">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
                </div>
                
                <button type="submit" className="button button-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
