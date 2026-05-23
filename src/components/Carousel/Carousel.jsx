import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

export default function Carousel({ slides = [], interval = 6000, onIndexChange, children }) {
  const [index, setIndex]     = useState(0);
  const [prev, setPrev]       = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const animatingRef          = useRef(false);
  const timer                 = useRef(null);
  const touch                 = useRef({ startX: 0, deltaX: 0, active: false, startTime: 0 });

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    timer.current = setInterval(() => advance(1), interval);
    return () => clearInterval(timer.current);
  }, [slides, interval]);

  useEffect(() => {
    if (typeof onIndexChange === 'function') onIndexChange(index);
  }, [index, onIndexChange]);

  function advance(d) {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setIndex((cur) => {
      const next = ((cur + d) % slides.length + slides.length) % slides.length;
      setPrev(cur);
      setAnimKey((k) => k + 1);
      return next;
    });
    setTimeout(() => { animatingRef.current = false; setPrev(null); }, 1000);
  }

  function goto(i) {
    if (animatingRef.current || i === index) return;
    animatingRef.current = true;
    setPrev(index);
    setAnimKey((k) => k + 1);
    setIndex(i);
    restartTimer();
    setTimeout(() => { animatingRef.current = false; setPrev(null); }, 1000);
  }

  function restartTimer() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => advance(1), interval);
  }

  function onTouchStart(e) {
    touch.current.active    = true;
    touch.current.startX    = e.touches ? e.touches[0].clientX : e.clientX;
    touch.current.deltaX    = 0;
    touch.current.startTime = Date.now();
    if (timer.current) clearInterval(timer.current);
  }
  function onTouchMove(e) {
    if (!touch.current.active) return;
    touch.current.deltaX = (e.touches ? e.touches[0].clientX : e.clientX) - touch.current.startX;
  }
  function onTouchEnd() {
    touch.current.active = false;
    const delta    = touch.current.deltaX || 0;
    const velocity = Math.abs(delta / Math.max(1, Date.now() - touch.current.startTime));
    if      (delta >  60 || (delta >  30 && velocity > 0.5)) advance(-1);
    else if (delta < -60 || (delta < -30 && velocity > 0.5)) advance(1);
    restartTimer();
    touch.current.deltaX = 0;
  }

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured hero images"
      onMouseEnter={() => timer.current && clearInterval(timer.current)}
      onMouseLeave={restartTimer}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Outgoing slide — fades out */}
      {prev !== null && (
        <figure
          key={`prev-${prev}-${animKey}`}
          className="carousel-slide carousel-slide--out"
          aria-hidden="true"
        >
          <picture>
            {slides[prev].mobileImage && (
              <source media="(max-width: 1024px)" srcSet={slides[prev].mobileImage} />
            )}
            <img
              src={slides[prev].image}
              alt=""
              draggable={false}
              decoding="async"
            />
          </picture>
          <div className="carousel-slide-gradient" />
        </figure>
      )}

      {/* Active slide — fades in with Ken Burns zoom */}
      <figure
        key={`active-${index}-${animKey}`}
        className="carousel-slide carousel-slide--in"
        aria-hidden="false"
      >
        <picture>
          {slides[index].mobileImage && (
            <source media="(max-width: 1024px)" srcSet={slides[index].mobileImage} />
          )}
          <img
            src={slides[index].image}
            alt={slides[index].alt || slides[index].title || `Hero slide ${index + 1}`}
            draggable={false}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
        <div className="carousel-slide-gradient" />
      </figure>

      {/* Overlay content (text, buttons) passed from parent */}
      {children}

      <button
        className="carousel-arrow left"
        onClick={() => { advance(-1); restartTimer(); }}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="carousel-arrow right"
        onClick={() => { advance(1); restartTimer(); }}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === index && (
              <span
                className="dot-progress"
                key={`progress-${index}-${animKey}`}
                style={{ animationDuration: `${interval}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
