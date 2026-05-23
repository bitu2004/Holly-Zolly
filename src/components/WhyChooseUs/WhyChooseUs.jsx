import { useState } from 'react';
import './WhyChooseUs.css';

const faqs = [
  {
    q: 'What services does Holly Zolly (Vastukkalp) provide?',
    a: 'We offer authentic Vastu products, spiritual items, and personalized Vastu consultation services to help balance energy in your home and workspace.',
  },
  {
    q: 'Do you provide online Vastu consultation?',
    a: 'Yes, we provide online Vastu consultation through video calls and chat. Our expert astrologer will guide you based on your space and requirements.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'You can book a consultation by clicking "Book an Appointment" on our website or contacting us directly via phone or email.',
  },
  {
    q: 'Are the Vastu solutions customized?',
    a: 'Absolutely. Every consultation and product recommendation is tailored to your specific space, birth chart, and personal energy requirements.',
  },
  {
    q: 'What details are required for consultation?',
    a: 'We typically need your name, date of birth, floor plan or photos of your space, and the specific concerns you want to address.',
  },
];

export default function WhyChooseUs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="wcu-section section">

      <div className="wcu__head">
        <span className="wcu__eyebrow">FAQ</span>
        <h2 className="wcu__heading">Why Choose Holly Zolly</h2>
        <p className="wcu__subheading">Everything you need to know about our services</p>
      </div>

      <div className="wcu__body">

        {/* FAQ list — hover on item opens it, leaving the list closes all */}
        <div
          className="wcu__faq"
          onMouseLeave={() => setOpen(null)}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`wcu-faq-item${open === i ? ' is-open' : ''}`}
              onMouseEnter={() => setOpen(i)}
            >
              <div className="wcu-faq-item__q">
                <span>{item.q}</span>
                <span className="wcu-faq-item__icon" aria-hidden="true">
                  {/* SVG plus that rotates to × when open */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" className="wcu-icon-v" />
                    <line x1="5"  y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>
              <div className="wcu-faq-item__body">
                <p className="wcu-faq-item__a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wcu__img-wrap">
          <img
            src="https://final-hz-f.onrender.com/image/img/whyChoose.jpeg"
            alt="Holly Zolly product packaging with Ganesha idol"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}
