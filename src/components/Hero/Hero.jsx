import Carousel from '../Carousel/Carousel';
import { heroSlides } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active] || {};
  const titleParts = (slide.title || '').split('\n');

  return (
    <section className="hero" id="home">
      <Carousel slides={heroSlides} interval={5000} onIndexChange={(i) => setActive(i)}>
        <div className="hero-overlay">
          {slide.eyebrow && <p className="hero-eyebrow">{slide.eyebrow}</p>}
          <h1 className="hero-title">
            {titleParts[0]}
            {titleParts[1] ? <span>{titleParts[1]}</span> : null}
          </h1>
          {slide.description && <p className="hero-description">{slide.description}</p>}
          <div className="hero-actions">
            <Link className="button button-primary" to={slide.ctaHref || '/category'}>
              {slide.ctaText || 'Explore Collection'}
            </Link>
            {slide.ctaAltText && (
              <Link className="button button-secondary" to={slide.ctaAltHref || '/about'}>
                {slide.ctaAltText}
              </Link>
            )}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
