import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './PolicyPages.css';

const steps = [
  { icon: '📦', title: 'Initiate Return', desc: 'Contact us within 7 days of delivery via email or phone with your order ID and reason for return.' },
  { icon: '🔍', title: 'Review & Approval', desc: 'Our team reviews your request within 24–48 hours and sends you a return approval confirmation.' },
  { icon: '🚚', title: 'Ship the Item', desc: 'Pack the item securely in its original packaging and ship it to our address. We cover return shipping for defective items.' },
  { icon: '💰', title: 'Refund Processed', desc: 'Once we receive and inspect the item, your refund is processed within 5–7 business days to the original payment method.' },
];

const eligible = [
  'Damaged or defective products received',
  'Wrong item delivered',
  'Product significantly different from description',
  'Missing parts or accessories',
];

const notEligible = [
  'Items returned after 7 days of delivery',
  'Products that have been used or altered',
  'Items without original packaging',
  'Customized or personalized products',
  'Digital products or consultation services',
];

export default function Returns() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <span className="pp-eyebrow">Customer Service</span>
            <h1 className="pp-hero-title">Returns & Refunds</h1>
            <p className="pp-hero-sub">We want you to be completely satisfied. Here's everything you need to know about our return policy.</p>
          </div>
        </section>

        <section className="pp-content section">

          {/* Policy highlight */}
          <div className="pp-highlight-box">
            <span className="pp-highlight-icon">🔄</span>
            <div>
              <strong>7-Day Return Policy</strong>
              <p>You can return eligible items within 7 days of delivery for a full refund or exchange.</p>
            </div>
          </div>

          {/* Steps */}
          <h2 className="pp-section-title">How to Return an Item</h2>
          <div className="pp-steps">
            {steps.map((step, i) => (
              <div key={i} className="pp-step">
                <div className="pp-step-num">{i + 1}</div>
                <div className="pp-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="pp-two-col">
            <div className="pp-list-box pp-list-box--yes">
              <h3>✅ Eligible for Return</h3>
              <ul>
                {eligible.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="pp-list-box pp-list-box--no">
              <h3>❌ Not Eligible for Return</h3>
              <ul>
                {notEligible.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* Refund timeline */}
          <h2 className="pp-section-title">Refund Timeline</h2>
          <div className="pp-timeline">
            <div className="pp-timeline-item">
              <span className="pp-timeline-dot" />
              <div>
                <strong>Day 1–2</strong>
                <p>Return request reviewed and approved</p>
              </div>
            </div>
            <div className="pp-timeline-item">
              <span className="pp-timeline-dot" />
              <div>
                <strong>Day 3–5</strong>
                <p>Item received and inspected at our warehouse</p>
              </div>
            </div>
            <div className="pp-timeline-item">
              <span className="pp-timeline-dot" />
              <div>
                <strong>Day 5–7</strong>
                <p>Refund initiated to your original payment method</p>
              </div>
            </div>
            <div className="pp-timeline-item">
              <span className="pp-timeline-dot" />
              <div>
                <strong>Day 7–10</strong>
                <p>Amount reflects in your bank account (depends on your bank)</p>
              </div>
            </div>
          </div>

          <div className="pp-contact-cta">
            <p>Need help with a return?</p>
            <a href="mailto:vastukkalp2007@gmail.com" className="pp-cta-btn">Contact Support</a>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
