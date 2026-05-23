import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';

/* ── Product list (same as Category page) ─────────────── */
const ALL_PRODUCTS = [
  { id: 1,  name: 'AAYUDH - TRISHUL',           category: 'AAYUDH FRAME',      price: 1599, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770186/holly-zolly/product-update-1778770186647-0.5641489810884092.jpg' },
  { id: 2,  name: 'RATH',                        category: 'VASTUKALP PRODUCT', price: 4500, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771333/holly-zolly/product-update-1778771333135-0.7568441426879019.jpg' },
  { id: 3,  name: 'AAYUDH - DHVAJ',              category: 'AAYUDH FRAME',      price: 1599, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778769675/holly-zolly/product-update-1778769674875-0.5299806419029207.jpg' },
  { id: 4,  name: 'AAYUDH - TALVAR',             category: 'AAYUDH FRAME',      price: 1500, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778756729/holly-zolly/product-Agni%20-%20Talvar%20Aayudh-1778756729436-0.46569375358660836.png' },
  { id: 5,  name: '7 MUKHI RUDRAKSH',            category: 'RUDRAKSH',          price: 2700, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770838/holly-zolly/product-7%20MUKHI%20RUDRAKSH-1778770838445-0.23136162472650657.jpg' },
  { id: 6,  name: 'SILVER KAMAL',                category: 'VASTUKALP PRODUCT', price: 2199, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771890/holly-zolly/product-SILVER%20KAMAL-1778771890611-0.37147833446099643.jpg' },
  { id: 7,  name: 'GANESHA RUDRAKSH',            category: 'RUDRAKSH',          price: 3000, image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778773476/holly-zolly/product-GANESH%20RUDRAKSH-1778773476163-0.2434889590233159.jpg' },
  { id: 8,  name: 'GOMTI CHAKRA',                category: 'POOJA VIDHI',       price: 603,  image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779112737/holly-zolly/product-GOMTI%20CHAKRA%20-1779112736967-0.6497762451411879.jpg' },
  { id: 9,  name: 'LAGHU SHREEFAL',              category: 'POOJA VIDHI',       price: 350,  image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779116944/holly-zolly/product-LAGHU%20SHREEFAL%20-1779116944126-0.08062071503906187.jpg' },
  { id: 10, name: 'MANGAL YANTRA',               category: 'YANTRA',            price: 900,  image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778775180/holly-zolly/product-MANGAL%20YANTRA-1778775180180-0.3447789050100817.jpg' },
  { id: 11, name: 'MANGAL GLOW [ ACNE BAR ]',    category: 'PLANET GLOW',       price: 109,  image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166897/holly-zolly/product-update-1779166896920-0.7680736099840475.jpg' },
  { id: 12, name: 'GURU GLOW [ YASHTHI MADHU ]', category: 'PLANET GLOW',       price: 129,  image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166149/holly-zolly/product-GURU%20GLOW%20%5B%20YASHTHI%20MADHU%20%5D-1779166149012-0.1470430411451038.jpg' },
];

export default function Header() {
  const { getCartCount } = useCart();
  const { isLoggedIn } = useAuth();
  const { getWishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const overlayRef = useRef(null);

  /* Focus input when overlay opens */
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setSearchOpen(false); setMenuOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [searchOpen]);

  const results = query.trim().length > 0
    ? ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleResultClick = (product) => {
    setSearchOpen(false);
    navigate(`/category?cat=${encodeURIComponent(product.category)}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchOpen(false);
      navigate(`/category?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const actions = [
    {
      label: 'Wishlist',
      icon: <path d="M12 21s-7-4.4-7-10.5C5 7.1 6.8 5 9.3 5c1.4 0 2.7.7 3.6 1.8A4.8 4.8 0 0 1 16.6 5C19.2 5 21 7.1 21 10.5 21 16.6 12 21 12 21Z" />,
    },
    {
      label: 'Cart',
      icon: (
        <>
          <path d="M6 6h15l-1.5 8.5H8L6 6Z" />
          <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </>
      ),
    },
    {
      label: 'Account',
      icon: (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </>
      ),
    },
  ];

  return (
    <>
      <header className="site-header">
        <div className="brand-lockup">
          <Link className="brand-mark" to="/" aria-label="Holly Zolly home">
            <img className="brand-logo" src="/holly%20zolly.png" alt="Holly Zolly logo" />
          </Link>
          <div className="brand-text">
            <p className="brand-name">Holly Zolly</p>
            <p className="brand-tagline">Crystal-inspired home and lifestyle</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Primary">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/category" className="nav-link">Category</Link>
          <Link to="/orders" className="nav-link">Orders</Link>
        </nav>

        {/* Desktop action icons — hidden on mobile, shown in bottom-nav instead */}
        <div className="header-actions desktop-actions" aria-label="Quick actions">
          {/* Wishlist */}
          {(() => {
            const wishlistCount = getWishlistCount();
            return (
              <Link className="header-icon wishlist-icon" to="/wishlist" aria-label="Wishlist" title="Wishlist">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  {actions.find(a => a.label === 'Wishlist').icon}
                </svg>
                <span className="header-icon-label">Wishlist</span>
                {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
              </Link>
            );
          })()}

          {/* Search button */}
          <button
            className="header-icon search-toggle"
            aria-label="Search products"
            title="Search"
            onClick={() => setSearchOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="5.5" />
              <path d="M15.2 15.2 20 20" />
            </svg>
            <span className="header-icon-label">Search</span>
          </button>

          {/* Cart */}
          {(() => {
            const cartCount = getCartCount();
            return (
              <Link className="header-icon cart-icon" to="/cart" aria-label="Cart" title="Cart">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  {actions.find(a => a.label === 'Cart').icon}
                </svg>
                <span className="header-icon-label">Cart</span>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
            );
          })()}

          {/* Account */}
          <Link
            className="header-icon"
            to={isLoggedIn ? '/account' : '/signin'}
            aria-label={isLoggedIn ? 'Your profile' : 'Sign in'}
            title={isLoggedIn ? 'Your profile' : 'Sign in'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {actions.find(a => a.label === 'Account').icon}
            </svg>
            <span className="header-icon-label">Account</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
            <circle cx="12" cy="5" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="19" r="2"></circle>
          </svg>
        </button>
      </header>

      {/* ── Mobile slide-in menu drawer ─────────────────────── */}
      {menuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />
      )}
      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        {/* Drawer header */}
        <div className="mobile-drawer__head">
          <div className="mobile-drawer__brand">
            <img src="/holly%20zolly.png" alt="Holly Zolly" className="mobile-drawer__logo" />
            <span className="mobile-drawer__brand-name">Holly Zolly</span>
          </div>
          <button className="mobile-drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-drawer__nav">
          {[
            { to: '/',         label: 'Home'     },
            { to: '/about',    label: 'About'    },
            { to: '/category', label: 'Category' },
            { to: '/orders',   label: 'Orders'   },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="mobile-drawer__link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-drawer__link-label">{label}</span>
              <svg className="mobile-drawer__link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Category sub-links */}
        <div className="mobile-drawer__section-label">Shop by Category</div>
        <div className="mobile-drawer__cats">
          {[
            { label: 'AAYUDH FRAME',      cat: 'AAYUDH FRAME' },
            { label: 'VASTUKALP PRODUCT', cat: 'VASTUKALP PRODUCT' },
            { label: 'RUDRAKSH',          cat: 'RUDRAKSH' },
            { label: 'YANTRA',            cat: 'YANTRA' },
            { label: 'POOJA VIDHI',       cat: 'POOJA VIDHI' },
            { label: 'PLANET GLOW',       cat: 'PLANET GLOW' },
          ].map(({ label, cat }) => (
            <Link
              key={cat}
              to={`/category?cat=${encodeURIComponent(cat)}`}
              className="mobile-drawer__cat-chip"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile bottom navigation bar — rendered OUTSIDE <header> so
           position:fixed works correctly (no stacking context trap) ── */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {/* Wishlist */}
        {(() => {
          const wishlistCount = getWishlistCount();
          return (
            <Link className="mobile-nav-item wishlist-icon" to="/wishlist" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {actions.find(a => a.label === 'Wishlist').icon}
              </svg>
              <span>Wishlist</span>
              {wishlistCount > 0 && <span className="mobile-nav-badge">{wishlistCount}</span>}
            </Link>
          );
        })()}

        {/* Search */}
        <button
          className="mobile-nav-item search-toggle"
          aria-label="Search"
          onClick={() => setSearchOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="5.5" />
            <path d="M15.2 15.2 20 20" />
          </svg>
          <span>Search</span>
        </button>

        {/* Cart */}
        {(() => {
          const cartCount = getCartCount();
          return (
            <Link className="mobile-nav-item cart-icon" to="/cart" aria-label="Cart">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {actions.find(a => a.label === 'Cart').icon}
              </svg>
              <span>Cart</span>
              {cartCount > 0 && <span className="mobile-nav-badge">{cartCount}</span>}
            </Link>
          );
        })()}

        {/* Account */}
        <Link
          className="mobile-nav-item"
          to={isLoggedIn ? '/account' : '/signin'}
          aria-label={isLoggedIn ? 'Your profile' : 'Sign in'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {actions.find(a => a.label === 'Account').icon}
          </svg>
          <span>Account</span>
        </Link>
      </nav>

      {/* ── Search overlay ─────────────────────────────────── */}
      {searchOpen && (
        <div className="search-overlay" role="dialog" aria-label="Search products">
          <div className="search-overlay__backdrop" onClick={() => setSearchOpen(false)} />
          <div className="search-overlay__panel" ref={overlayRef}>
            <form className="search-overlay__bar" onSubmit={handleSearchSubmit}>
              <svg className="search-overlay__icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="5.5" />
                <path d="M15.2 15.2 20 20" />
              </svg>
              <input
                ref={inputRef}
                className="search-overlay__input"
                type="search"
                placeholder="Search products, categories…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className="search-overlay__clear"
                  onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <button type="submit" className="search-overlay__submit">Search</button>
              <button
                type="button"
                className="search-overlay__close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </form>

            {/* Results */}
            {query.trim().length > 0 && (
              <div className="search-overlay__results">
                {results.length > 0 ? (
                  <>
                    <p className="search-overlay__count">
                      {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
                    </p>
                    <ul className="search-overlay__list">
                      {results.map((product) => (
                        <li key={product.id}>
                          <button
                            className="search-result-item"
                            onClick={() => handleResultClick(product)}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="search-result-item__img"
                            />
                            <div className="search-result-item__info">
                              <span className="search-result-item__name">{product.name}</span>
                              <span className="search-result-item__cat">{product.category}</span>
                            </div>
                            <span className="search-result-item__price">₹{product.price.toLocaleString()}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="search-overlay__view-all"
                      onClick={handleSearchSubmit}
                    >
                      View all results for &ldquo;{query}&rdquo; →
                    </button>
                  </>
                ) : (
                  <div className="search-overlay__empty">
                    <span className="search-overlay__empty-icon">🔍</span>
                    <p>No products found for &ldquo;{query}&rdquo;</p>
                    <span>Try a different keyword or browse our categories</span>
                  </div>
                )}
              </div>
            )}

            {/* Default state — show popular categories */}
            {query.trim().length === 0 && (
              <div className="search-overlay__suggestions">
                <p className="search-overlay__suggestions-label">Popular categories</p>
                <div className="search-overlay__tags">
                  {['RUDRAKSH', 'YANTRA', 'PLANET GLOW', 'POOJA VIDHI', 'AAYUDH FRAME', 'VASTUKALP PRODUCT'].map(cat => (
                    <button
                      key={cat}
                      className="search-tag"
                      onClick={() => {
                        setSearchOpen(false);
                        navigate(`/category?cat=${encodeURIComponent(cat)}`);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
