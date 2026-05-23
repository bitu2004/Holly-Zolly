import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles.css';

export default function About() {
  const features = [
    {
      title: '100% Authentic Vedic Science',
      icon: '✓'
    },
    {
      title: 'Dosha Rectification',
      icon: '✓'
    },
    {
      title: 'Scientific Energy Maps',
      icon: '✓'
    }
  ];

  const values = [
    {
      title: 'Authenticity in Every Detail.',
      subtitle: 'Vetted by Experts',
      description: 'Every product is verified for its energy-shifting properties by seasoned Vastu consultants.'
    },
    {
      title: 'Safe & Pure Delivery',
      description: 'We ensure our spiritual items are handled with purity and delivered securely to your doorstep.'
    },
    {
      title: 'Trusted Solutions',
      description: 'Secure shopping with 100% guarantee on the authenticity of every Vastu pyramid and crystal.'
    }
  ];

  const testimonials = [
    {
      quote: 'After using Vastukkalp products, I noticed a positive shift in my office environment. My business growth has improved significantly.',
      author: 'Rohit Sharma',
      role: 'Business Owner'
    },
    {
      quote: 'The energy in my home feels so calm and peaceful now. These Vastu products truly bring harmony and positivity.',
      author: 'Priya Mehta',
      role: 'Homemaker'
    },
    {
      quote: 'I was skeptical at first, but after placing the Vastu items correctly, I experienced better focus and success in my work.',
      author: 'Amit Patel',
      role: 'Entrepreneur'
    },
    {
      quote: 'I recommend Vastukkalp products to my clients. They are beautifully designed and aligned with Vastu principles.',
      author: 'Neha Shah',
      role: 'Interior Designer'
    },
    {
      quote: 'Great quality and authentic products. I feel more positive and energetic at home after using them.',
      author: 'Karan Desai',
      role: 'IT Professional'
    }
  ];

  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section about-hero">
          <div className="about-hero-content">
            <p className="eyebrow">VASTUKKALP • AUTHENTIC VASTU SOLUTIONS</p>
            <h1>
              Energizing Spaces.
              <br />
              <span>Inviting Prosperity.</span>
            </h1>
            <p className="about-description">
              At Vastukkalp, we blend ancient Vastu Shastra with scientifically crafted tools to remove negative energies and align your home with cosmic balance.
            </p>
          </div>
        </section>

        {/* Core Section */}
        <section className="section about-core">
          <div className="about-core-container" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="about-core-image" style={{ flex: '1 1 300px' }}>
              <img 
                src="/vastu.png" 
                alt="The Core of Vastukkalp" 
                style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }} 
              />
            </div>
            <div className="about-core-content" style={{ flex: '1 1 400px' }}>
              <h2>The Core of Vastukkalp</h2>
              <p>
                Vastukkalp was born from a deep-rooted passion for Vedic sciences. We believe that a house is not just brick and mortar, but a living energy field that impacts your health, wealth, and happiness.
              </p>
              <p>
                Our products are not mere decorative items; they are precision-engineered Vastu corrections. From Pyramids to Energized Crystals, every piece is designed to rectify "Vastu Dosha" and create a flow of positive Prana.
              </p>

              {/* Features Grid */}
              <div className="about-features">
                {features.map((feature, idx) => (
                  <div key={idx} className="about-feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                  </div>
                ))}
              </div>

              <a href="#category" className="button button-primary about-cta">
                BROWSE VASTU TOOLS
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section about-mission">
          <div className="about-statement">
            <h3>VASTU MISSION</h3>
            <p className="mission-quote">
              "To remove structural negativity from every household using authentic Vastu remedies, ensuring a life of peace and abundance."
            </p>
          </div>

          <div className="about-statement">
            <h3>THE VISION</h3>
            <p className="vision-quote">
              "To become India's most trusted authority in Vastu corrections, blending spiritual heritage with modern lifestyle needs."
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="section about-values">
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <h3>{value.title}</h3>
                {value.subtitle && <p className="value-subtitle">{value.subtitle}</p>}
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section about-testimonials">
          <div className="testimonials-header">
            <h2>What Our Customers Say</h2>
            <p>Real experiences from our valued customers</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-item">
                <blockquote>"{testimonial.quote}"</blockquote>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section about-cta-section">
          <h2>Bring Harmony & Positive Energy to Your Space</h2>
          <p>
            Discover authentic Vastu solutions designed to balance energy, attract prosperity, and create a peaceful environment in your home or workspace.
          </p>
         
        </section>
      </main>
      <Footer />
    </div>
  );
}
