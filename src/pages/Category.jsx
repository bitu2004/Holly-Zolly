import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Category.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Read ?cat= and ?search= query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    const search = params.get('search');
    if (search) {
      setSearchQuery(decodeURIComponent(search));
      setSelectedCategory('All Products');
    } else if (cat) {
      setSelectedCategory(decodeURIComponent(cat));
      setSearchQuery('');
    } else {
      setSelectedCategory('All Products');
      setSearchQuery('');
    }
  }, [location.search]);

  const categories = [
    'All Products',
    'AAYUDH FRAME',
    'VASTUKALP PRODUCT',
    'RUDRAKSH',
    'YANTRA',
    'POOJA VIDHI',
    'PLANET GLOW',
  ];

  const products = [
    {
      id: 1,
      name: 'AAYUDH - TRISHUL',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1650,
      discount: '3% OFF',
      rating: 4.4,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770186/holly-zolly/product-update-1778770186647-0.5641489810884092.jpg',
      hoverImage: '/aayudh_hover.png',
    },
    {
      id: 2,
      name: 'RATH',
      category: 'VASTUKALP PRODUCT',
      price: 4500,
      originalPrice: 5000,
      discount: '10% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771333/holly-zolly/product-update-1778771333135-0.7568441426879019.jpg',
      hoverImage: '/rath_hover.png',
    },
    {
      id: 3,
      name: 'AAYUDH - DHVAJ',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1900,
      discount: '16% OFF',
      rating: 4.4,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778769675/holly-zolly/product-update-1778769674875-0.5299806419029207.jpg',
      hoverImage: '/dhvaj_hover.png',
    },
    {
      id: 4,
      name: 'AAYUDH - TALVAR',
      category: 'AAYUDH FRAME',
      price: 1500,
      originalPrice: 2000,
      discount: '25% OFF',
      rating: 4.8,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778756729/holly-zolly/product-Agni%20-%20Talvar%20Aayudh-1778756729436-0.46569375358660836.png',
      hoverImage: '/talvar_hover.png',
    },
    {
      id: 5,
      name: '7 MUKHI RUDRAKSH',
      category: 'RUDRAKSH',
      price: 2700,
      originalPrice: 3500,
      discount: '23% OFF',
      rating: 4.6,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770838/holly-zolly/product-7%20MUKHI%20RUDRAKSH-1778770838445-0.23136162472650657.jpg',
      hoverImage: '/rudraksh_7_hover.png',
    },
    {
      id: 6,
      name: 'SILVER KAMAL',
      category: 'VASTUKALP PRODUCT',
      price: 2199,
      originalPrice: 2500,
      discount: '15% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771890/holly-zolly/product-SILVER%20KAMAL-1778771890611-0.37147833446099643.jpg',
    },
    {
      id: 7,
      name: 'GANESHA RUDRAKSH',
      category: 'RUDRAKSH',
      price: 3000,
      originalPrice: 3500,
      discount: '14% OFF',
      rating: 4,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778773476/holly-zolly/product-GANESH%20RUDRAKSH-1778773476163-0.2434889590233159.jpg',
    },
    {
      id: 8,
      name: 'GOMTI CHAKRA',
      category: 'POOJA VIDHI',
      price: 603,
      originalPrice: 804,
      discount: '25% OFF',
      rating: 4,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779112737/holly-zolly/product-GOMTI%20CHAKRA%20-1779112736967-0.6497762451411879.jpg',
    },
    {
      id: 9,
      name: 'LAGHU SHREEFAL',
      category: 'POOJA VIDHI',
      price: 350,
      originalPrice: 500,
      discount: '30% OFF',
      rating: 4.9,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779116944/holly-zolly/product-LAGHU%20SHREEFAL%20-1779116944126-0.08062071503906187.jpg',
    },
    {
      id: 10,
      name: 'MANGAL YANTRA',
      category: 'YANTRA',
      price: 900,
      originalPrice: 1200,
      discount: '25% OFF',
      rating: 4.9,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778775180/holly-zolly/product-MANGAL%20YANTRA-1778775180180-0.3447789050100817.jpg'
    },
    {
      id: 11,
      name: 'MANGAL GLOW [ ACNE BAR ]',
      category: 'PLANET GLOW',
      price: 109,
      originalPrice: 199,
      discount: '45% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166897/holly-zolly/product-update-1779166896920-0.7680736099840475.jpg'
    },
    {
      id: 12,
      name: 'GURU GLOW [ YASHTHI MADHU ]',
      category: 'PLANET GLOW',
      price: 129,
      originalPrice: 200,
      discount: '36% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166149/holly-zolly/product-GURU%20GLOW%20%5B%20YASHTHI%20MADHU%20%5D-1779166149012-0.1470430411451038.jpg'
    },
    {
      id: 13,
      name: 'AAYUDH - PASHA',
      category: 'AAYUDH FRAME',
      price: 1800,
      originalPrice: 2000,
      discount: '10% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778774336/holly-zolly/product-AAYUDH%20-%20PASHA-1778774336506-0.5437177525534022.jpg',
    },
    {
      id: 14,
      name: 'AAYUDH - GADA',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1800,
      discount: '11% OFF',
      rating: 5,
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779105014/holly-zolly/product-AAYUDH%20-GADA-1779105014247-0.21438576999660497.jpg',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="category-container">
        <div className="category-header">
          <h1>Explore Our Sacred Collection</h1>
          <p>Discover authentic Vedic products crafted with ancient wisdom and modern elegance</p>
          <div className="category-search">
            <input type="text" placeholder="Search sacred products..." />
            <button>Search</button>
          </div>
        </div>

        <div className="category-content">
          <aside className="category-sidebar">
            <div className="sidebar-header">
              <span className="filter-icon">⊙</span>
              <h3>CATEGORIES</h3>
            </div>
            <button
              className={`category-btn all-products ${selectedCategory === 'All Products' ? 'active' : ''}`}
              onClick={() => navigate('/category')}
            >
              All Products
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''
                  }`}
                onClick={() => navigate(`/category?cat=${encodeURIComponent(category)}`)}
              >
                {category}
              </button>
            ))}
          </aside>

          <main className="category-main">
            <div className="products-header">
              <span className="products-count">
                {searchQuery
                  ? <>Showing <strong>{filteredProducts.length}</strong> results for &ldquo;{searchQuery}&rdquo;</>
                  : <>Showing <strong>{filteredProducts.length}</strong> sacred items</>
                }
              </span>
              <span className="authentic-badge">✦ Authentic Vedic Products</span>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className={`product-image ${product.hoverImage ? 'has-hover' : ''}`} />
                    {product.hoverImage && (
                      <img src={product.hoverImage} alt={`${product.name} hover`} className="product-image hover-image" />
                    )}
                    <span className="discount-badge">{product.discount}</span>
                    <div className="product-actions">
                      <button
                        className="action-btn wishlist-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isInWishlist(product.id)) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(product);
                          }
                        }}
                      >
                        {isInWishlist(product.id) ? '❤️' : '♡'}
                      </button>
                      <button
                        className="action-btn cart-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                          navigate('/cart');
                        }}
                      >
                        🛒
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <div className="product-rating">
                      <span className="stars">★</span>
                      <span className="rating-value">{product.rating}</span>
                    </div>
                    <div className="product-price">
                      <span className="original-price">₹{product.originalPrice}</span>
                      <span className="current-price">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
