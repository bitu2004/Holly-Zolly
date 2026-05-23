import { Link } from 'react-router-dom';
import { popularVastuProducts } from '../../data';
import ProductArt from '../ProductArt/ProductArt';
import './PopularVastuCollection.css';

export default function PopularVastuCollection() {
  return (
    <section className="pvc section">

      {/* ── Header — same style as Vastu categories head ── */}
      <div className="pvc__head">
        <span className="pvc__badge">TOP RATED</span>
        <h2 className="pvc__title">
          Our Popular <span>Vastu Collection</span>
        </h2>
        <p className="pvc__subtitle">
          Explore our most loved categories designed to bring harmony, prosperity,
          and positivity to your sacred space.
        </p>
      </div>

      {/* ── 4-card grid — card size matches Vastu categories ── */}
      <div className="pvc__grid">
        {popularVastuProducts.map((product) => (
          <Link key={product.id} to={product.href} className="pvc-card">

            {/* Square image frame — same size as vastu-cat-card__visual */}
            <div className="pvc-card__img">
              <ProductArt
                variant={product.art}
                src={product.image}
                hoverSrc={product.hoverImage}
                alt={product.imageAlt || product.title}
              />
            </div>

            {/* Title + gold bar */}
            <div className="pvc-card__foot">
              <p className="pvc-card__title">{product.title}</p>
              <span className="pvc-card__bar" aria-hidden="true" />
            </div>

          </Link>
        ))}
      </div>

      {/* ── View Full Collection ── */}
      <div className="pvc__cta">
        <Link to="/category" className="pvc__btn">
          View Full Collection
        </Link>
      </div>

    </section>
  );
}
