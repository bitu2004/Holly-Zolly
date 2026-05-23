import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './PolicyPages.css';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Holly Zolly (Vastukkalp) website, you agree to be bound by these Terms & Conditions.',
      'If you do not agree with any part of these terms, please do not use our website or services.',
      'We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance.',
    ],
  },
  {
    title: '2. Use of the Website',
    content: [
      'You must be at least 18 years old to make purchases on Holly Zolly.',
      'You agree not to use the website for any unlawful purpose or in a way that could damage, disable, or impair the site.',
      'You are responsible for maintaining the confidentiality of your account credentials.',
      'We reserve the right to terminate accounts that violate these terms.',
    ],
  },
  {
    title: '3. Products & Pricing',
    content: [
      'All product descriptions, images, and prices are as accurate as possible but may be subject to change without notice.',
      'Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.',
      'We reserve the right to refuse or cancel orders if a pricing error is identified.',
      'Product availability is subject to stock and may change without prior notice.',
    ],
  },
  {
    title: '4. Orders & Payments',
    content: [
      'Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order.',
      'Payment must be completed at the time of order. Orders are processed only after successful payment confirmation.',
      'We use secure, third-party payment gateways. Holly Zolly does not store your payment card details.',
      'In case of payment failure, please retry or contact our support team.',
    ],
  },
  {
    title: '5. Shipping & Delivery',
    content: [
      'Delivery timelines are estimates and may vary due to courier delays, public holidays, or unforeseen circumstances.',
      'Holly Zolly is not liable for delays caused by third-party logistics partners.',
      'Risk of loss and title for items pass to you upon delivery to the shipping address provided.',
    ],
  },
  {
    title: '6. Returns & Refunds',
    content: [
      'Returns are accepted within 7 days of delivery for eligible items. Please refer to our Returns Policy for full details.',
      'Refunds are processed to the original payment method within 5–7 business days of return approval.',
      'Customized, personalized, or used items are not eligible for return.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'All content on this website — including text, images, logos, and product descriptions — is the property of Holly Zolly.',
      'You may not reproduce, distribute, or use any content without prior written permission.',
      'Unauthorized use of our intellectual property may result in legal action.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'Holly Zolly shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.',
      'Our total liability in any matter is limited to the amount paid for the specific product or service in question.',
      'We do not guarantee specific spiritual or energy-related outcomes from the use of our Vastu products.',
    ],
  },
  {
    title: '9. Governing Law',
    content: [
      'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat.',
      'We encourage resolving disputes amicably. Contact us at vastukkalp2007@gmail.com before initiating legal proceedings.',
    ],
  },
];

export default function TermsConditions() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <span className="pp-eyebrow">Legal</span>
            <h1 className="pp-hero-title">Terms &amp; Conditions</h1>
            <p className="pp-hero-sub">Last updated: May 2026 &nbsp;·&nbsp; Please read carefully before using our services.</p>
          </div>
        </section>

        <section className="pp-content section">
          <p className="pp-intro">
            Welcome to <strong>Holly Zolly (Vastukkalp)</strong>. These Terms &amp; Conditions govern your use of our
            website and services. By using our platform, you agree to these terms in full.
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
            <p>Have questions about our terms?</p>
            <a href="mailto:vastukkalp2007@gmail.com" className="pp-cta-btn">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
