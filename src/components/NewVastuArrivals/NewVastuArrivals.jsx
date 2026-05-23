import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { vastuArrivals } from '../../data';
import './NewVastuArrivals.css';

const INTERVAL = 3000; // ms
const TOTAL    = vastuArrivals.length;

/* How many cards are visible at each breakpoint */
function getVisible() {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 4;
}

export default function NewVastuArrivals() {
  const [index,   setIndex]   = useState(0); // active card index (0-based)
  const [visible, setVisible] = useState(getVisible);
  const timerRef  = useRef(null);
  const pausedRef = useRef(false);
  const sectionRef = useRef(null);

  const maxIndex = Math.max(0, TOTAL - visible);

  /* ── Update visible count on resize ─────────────────── */
  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Clamp index when visible count changes */
  useEffect(() => {
    setIndex(i => Math.min(i, Math.max(0, TOTAL - visible)));
  }, [visible]);

  /* ── Auto-slide timer ────────────────────────────────── */
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setIndex(prev => {
          const max = Math.max(0, TOTAL - getVisible());
          return prev >= max ? 0 : prev + 1;
        });
      }
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line

  /* ── Go to specific index ────────────────────────────── */
  const goTo = (i) => {
    setIndex(Math.min(Math.max(i, 0), maxIndex));
    startTimer(); // restart timer on manual interaction
  };

  /* ── Pause / resume ──────────────────────────────────── */
  const pause  = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  /* ── Touch swipe ─────────────────────────────────────── */
  const touchX = useRef(0);
  const onTouchStart = (e) => {
    pause();
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    resume();
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta < -40)      goTo(index + 1);
    else if (delta > 40)  goTo(index - 1);
  };

  /* ── Calculate translate % ───────────────────────────── */
  // Each card is (100 / visible)% wide. Shift by index card-widths.
  const translatePct = -(index * (100 / visible));

  return (
    <section
      className="nva section"
      ref={sectionRef}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Head ── */}
      <div className="nva__head">
        <h2 className="nva__title">
          New <span>Vastu</span> Arrivals
        </h2>
        <Link to="/category" className="nva__cta">
          Explore All <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* ── Slider ── */}
      <div className="nva__slider">

        {/* Left arrow */}
        <button
          className={`nva__arrow${index === 0 ? ' nva__arrow--dim' : ''}`}
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport */}
        <div className="nva__viewport">
          <div
            className="nva__strip"
            style={{ transform: `translateX(${translatePct}%)` }}
          >
            {vastuArrivals.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="nva-card"
                style={{ flex: `0 0 calc(${100 / visible}% - ${(visible - 1) * 20 / visible}px)` }}
              >
                <div className="nva-card__img">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.label}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="nva-card__label">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          className={`nva__arrow${index >= maxIndex ? ' nva__arrow--dim' : ''}`}
          onClick={() => goTo(index + 1)}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>

      {/* ── Dots ── */}
      <div className="nva__dots" role="tablist">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={index === i}
            className={`nva__dot${index === i ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
