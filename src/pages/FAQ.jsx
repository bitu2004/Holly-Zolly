import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './PolicyPages.css';

const faqs = [
  {
    category: 'Orders & Shipping',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 5–7 business days across India. Express delivery (2–3 days) is available for select pin codes at an additional charge.',
      },
      {
        q: 'Do you offer free delivery?',
        a: 'Yes! We offer free delivery on all orders above ₹499. Orders below ₹499 attract a flat shipping fee of ₹49.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. Once your order is dispatched, you will receive a tracking link via SMS and email. You can also track it from the Orders section in your account.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently we ship within India only. International shipping is coming soon — stay tuned!',
      },
    ],
  },
  {
    category: 'Products & Authenticity',
    items: [
      {
        q: 'Are your Vastu products authentic?',
        a: 'Yes. Every product at Holly Zolly is sourced from verified Vastu experts and artisans. Each item is quality-checked before dispatch.',
      },
      {
        q: 'How do I know which product is right for me?',
        a: 'You can book a free consultation with our in-house expert Astrologer Disha Shah, who will guide you based on your space and birth chart.',
      },
      {
        q: 'Are the crystals and gemstones energized?',
        a: 'Yes, all crystals and gemstones are energized using traditional Vedic methods before being packaged and shipped.',
      },
    ],
  },
  {
    category: 'Payments',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI, credit/debit cards, net banking, and popular wallets like Paytm and PhonePe. All transactions are secured with SSL encryption.',
      },
      {
        q: 'Is it safe to pay online on Holly Zolly?',
        a: 'Completely safe. We use industry-standard payment gateways and never store your card details on our servers.',
      },
      {
        q: 'Can I pay on delivery?',
        a: 'Cash on Delivery (COD) is available for orders up to ₹2,000 in select pin codes.',
      },
    ],
  },
  {
    category: 'Account & Support',
    items: [
      {
        q: 'How do I create an account?',
        a: 'Click the person icon in the top-right corner and select "Sign Up". Fill in your details and you\'re good to go.',
      },
      {
        q: 'I forgot my password. What do I do?',
        a: 'Click "Forgot Password" on the Sign In page and enter your registered email. You\'ll receive a reset link within a few minutes.',
      },
      {
        q: 'How can I contact customer support?',
        a: 'You can reach us at vastukkalp2007@gmail.com or call +91 99095 11961 between 10 AM – 6 PM, Monday to Saturday.',
      },
    ],
  },
];

function FaqGroup({ group }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="pp-faq-group">
      <h3 className="pp-faq-category">{group.category}</h3>
      {group.items.map((item, i) => (
        <div key={i} className={`pp-faq-item${open === i ? ' is-open' : ''}`}>
          <button
            className="pp-faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="pp-faq-icon" aria-hidden="true">+</span>
          </button>
          {open === i && <p className="pp-faq-a">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <span className="pp-eyebrow">Help Center</span>
            <h1 className="pp-hero-title">Frequently Asked Questions</h1>
            <p className="pp-hero-sub">Find quick answers to the most common questions about Holly Zolly.</p>
          </div>
        </section>

        <section className="pp-content section">
          <div className="pp-faq-list">
            {faqs.map((group, i) => (
              <FaqGroup key={i} group={group} />
            ))}
          </div>

          <div className="pp-contact-cta">
            <p>Still have questions?</p>
            <a href="mailto:vastukkalp2007@gmail.com" className="pp-cta-btn">Email Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
