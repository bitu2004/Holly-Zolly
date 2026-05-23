import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './PolicyPages.css';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number, shipping address) when you register or place an order.',
      'Payment information — processed securely through our payment gateway. We do not store card details on our servers.',
      'Usage data such as pages visited, time spent, and browser type to improve your experience.',
      'Cookies and similar tracking technologies to remember your preferences and cart items.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To process and fulfill your orders, including sending order confirmations and shipping updates.',
      'To personalize your shopping experience and recommend relevant Vastu products.',
      'To send promotional emails and offers — you can unsubscribe at any time.',
      'To improve our website, products, and customer service based on your feedback.',
      'To comply with legal obligations and prevent fraudulent transactions.',
    ],
  },
  {
    title: '3. Information Sharing',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We share data with trusted service providers (shipping partners, payment gateways) solely to fulfill your orders.',
      'We may disclose information when required by law or to protect the rights and safety of Holly Zolly and its users.',
    ],
  },
  {
    title: '4. Cookies',
    content: [
      'We use cookies to enhance your browsing experience, remember your cart, and analyze site traffic.',
      'You can choose to disable cookies through your browser settings, though some features may not function properly.',
      'We use Google Analytics to understand how visitors interact with our site. This data is anonymized and aggregated.',
    ],
  },
  {
    title: '5. Data Security',
    content: [
      'We implement industry-standard SSL encryption to protect data transmitted between your browser and our servers.',
      'Access to personal data is restricted to authorized personnel only.',
      'While we take every precaution, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal data at any time.',
      'You can opt out of marketing communications by clicking "Unsubscribe" in any email.',
      'To request data deletion or correction, contact us at vastukkalp2007@gmail.com.',
    ],
  },
  {
    title: '7. Children\'s Privacy',
    content: [
      'Our services are not directed to children under 13. We do not knowingly collect personal information from minors.',
      'If you believe a child has provided us with personal data, please contact us immediately.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.',
      'Continued use of our website after changes constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <span className="pp-eyebrow">Legal</span>
            <h1 className="pp-hero-title">Privacy Policy</h1>
            <p className="pp-hero-sub">Last updated: May 2026 &nbsp;·&nbsp; Effective immediately</p>
          </div>
        </section>

        <section className="pp-content section">
          <p className="pp-intro">
            At <strong>Holly Zolly (Vastukkalp)</strong>, your privacy is important to us. This policy explains what
            information we collect, how we use it, and the choices you have regarding your data.
          </p>

          <div className="pp-policy-sections">
            {sections.map((sec, i) => (
              <div key={i} className="pp-policy-section">
                <h2>{sec.title}</h2>
                <ul>
                  {sec.content.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pp-contact-cta">
            <p>Questions about our privacy practices?</p>
            <a href="mailto:vastukkalp2007@gmail.com" className="pp-cta-btn">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
