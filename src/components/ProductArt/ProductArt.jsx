import './ProductArt.css';

/**
 * Product visual: real image if `src` is set, otherwise CSS illustration via `variant`.
 *
 * @example
 * <ProductArt src="/products/rudraksha.jpg" alt="Rudraksha beads" />
 * <ProductArt variant="rudraksha" />
 */
export default function ProductArt({
  variant = 'frames',
  src = 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779104001/holly-zolly/category-AAYUDH%20FRAME-1779104000970.jpg',
  hoverSrc,
  alt = 'AAYUDH FRAME',
  className = '',
}) {
  if (src) {
    return (
      <div className={`product-art product-art--image ${className}`.trim()}>
        <img 
          src={src} 
          alt={alt} 
          loading="lazy" 
          decoding="async" 
          className={`art-img ${hoverSrc ? 'has-hover' : ''}`}
        />
        {hoverSrc && (
          <img 
            src={hoverSrc} 
            alt={`${alt} hover`} 
            loading="lazy" 
            decoding="async" 
            className="art-img art-img-hover" 
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`product-art product-art--${variant} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
