import { useState } from 'react';
import { Link } from 'react-router-dom';
import { spiritualCategories } from '../../data';
import ProductArt from '../ProductArt/ProductArt';
import './VastuSpiritualCategories.css';

const TOTAL = spiritualCategories.length; // 6
const VISIBLE = 5;
const MAX_OFFSET = TOTAL - VISIBLE; // = 1

export default function VastuSpiritualCategories() {
  const [activeId, setActiveId] = useState(
    spiritualCategories.find((c) => c.featured)?.id ?? spiritualCategories[0]?.id
  );
  const [offset, setOffset] = useState(0);

  const canLeft  = offset > 0;
  const canRight = offset < MAX_OFFSET;

  return (
    <section className="vastu-categories section" id="collections">

      {/* ── Head ── */}
      <div className="vastu-categories__head">
        <div>
          <p className="vastu-categories__eyebrow">DIVINE COLLECTION</p>
          <h2 className="vastu-categories__title">
            Vastu &amp; Spiritual <span>Categories</span>
          </h2>
        </div>
        <p className="vastu-categories__desc">
          Positivity and balance in every corner of your home. Explore our curated
          spiritual tools.
        </p>
      </div>

      {/* ── Slider ── */}
      <div className="vc-slider">

        {/* ← */}
        <button
          className={`vc-arrow vc-arrow--left${!canLeft ? ' vc-arrow--dim' : ''}`}
          onClick={() => setOffset(o => Math.max(0, o - 1))}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport */}
        <div className="vc-viewport">
          <div
            className="vc-strip"
            style={{
              transform: `translateX(calc(-${offset} * (var(--card-w) + var(--card-gap))))`,
            }}
          >
            {spiritualCategories.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`vastu-cat-card${isActive ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                >
                  <div className="vastu-cat-card__visual">
                    <ProductArt
                      variant={item.art}
                      src={item.image}
                      alt={item.imageAlt || item.label}
                    />
                  </div>
                  <p className="vastu-cat-card__label">{item.label}</p>
                  {isActive && (
                    <span className="vastu-cat-card__explore">
                      EXPLORE <span aria-hidden="true">→</span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* → */}
        <button
          className={`vc-arrow vc-arrow--right${!canRight ? ' vc-arrow--dim' : ''}`}
          onClick={() => setOffset(o => Math.min(MAX_OFFSET, o + 1))}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>

      {/* ── Dots ── */}
      <div className="vc-dots">
        {Array.from({ length: MAX_OFFSET + 1 }).map((_, i) => (
          <button
            key={i}
            className={`vc-dot${offset === i ? ' vc-dot--active' : ''}`}
            onClick={() => setOffset(i)}
            aria-label={`Position ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
