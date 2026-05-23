import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetail.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const products = [
    {
      id: 1,
      name: 'AAYUDH - TRISHUL',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1650,
      discount: '3% OFF',
      rating: 4.4,
      happyCustomers: '1.2k',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770186/holly-zolly/product-update-1778770186647-0.5641489810884092.jpg',
      hoverImage: '/aayudh_hover.png',
      description: "Lord Shiva's weapon, the Trishul (Trident), is considered a powerful symbol in Vastu Shastra and spirituality. It represents protection, balance, strength, and spiritual energy. The Trishul is believed to protect the home, office, or shop from negative vibrations and unwanted energies.",
    },
    {
      id: 2,
      name: 'RATH',
      category: 'VASTUKALP PRODUCT',
      price: 4500,
      originalPrice: 5000,
      discount: '10% OFF',
      rating: 5,
      happyCustomers: '800',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771333/holly-zolly/product-update-1778771333135-0.7568441426879019.jpg',
      hoverImage: '/rath_hover.png',
      description: 'A sacred Rath (chariot) artifact representing victory and prosperity in Vedic tradition.',
    },
    {
      id: 3,
      name: 'AAYUDH - DHVAJ',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1900,
      discount: '16% OFF',
      rating: 4.4,
      happyCustomers: '900',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778769675/holly-zolly/product-update-1778769674875-0.5299806419029207.jpg',
      hoverImage: '/dhvaj_hover.png',
      description: 'The divine flag symbol representing victory and prosperity.',
    },
    {
      id: 4,
      name: 'AAYUDH - TALVAR',
      category: 'AAYUDH FRAME',
      price: 1500,
      originalPrice: 2000,
      discount: '25% OFF',
      rating: 4.8,
      happyCustomers: '1.1k',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778756729/holly-zolly/product-Agni%20-%20Talvar%20Aayudh-1778756729436-0.46569375358660836.png',
      hoverImage: '/talvar_hover.png',
      description: 'A powerful sword symbol representing strength and divine power.',
    },
    {
      id: 5,
      name: '7 MUKHI RUDRAKSH',
      category: 'RUDRAKSH',
      price: 2700,
      originalPrice: 3500,
      discount: '23% OFF',
      rating: 4.6,
      happyCustomers: '950',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778770838/holly-zolly/product-7%20MUKHI%20RUDRAKSH-1778770838445-0.23136162472650657.jpg',
      hoverImage: '/rudraksh_7_hover.png',
      description: '7 Mukhi Rudraksh for spiritual growth and inner peace.',
    },
    {
      id: 6,
      name: 'SILVER KAMAL',
      category: 'VASTUKALP PRODUCT',
      price: 2199,
      originalPrice: 2500,
      discount: '15% OFF',
      rating: 5,
      happyCustomers: '750',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771890/holly-zolly/product-SILVER%20KAMAL-1778771890611-0.37147833446099643.jpg',
      description: 'Sacred lotus symbol representing purity and enlightenment.',
    },
    {
      id: 7,
      name: 'GANESHA RUDRAKSH',
      category: 'RUDRAKSH',
      price: 3000,
      originalPrice: 3500,
      discount: '14% OFF',
      rating: 4,
      happyCustomers: '650',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778773476/holly-zolly/product-GANESH%20RUDRAKSH-1778773476163-0.2434889590233159.jpg',
      description: 'Ganesha Rudraksh for wisdom and obstacle removal.',
    },
    {
      id: 8,
      name: 'GOMTI CHAKRA',
      category: 'POOJA VIDHI',
      price: 603,
      originalPrice: 804,
      discount: '25% OFF',
      rating: 4,
      happyCustomers: '500',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779112737/holly-zolly/product-GOMTI%20CHAKRA%20-1779112736967-0.6497762451411879.jpg',
      description: 'Sacred Gomti Chakra for prosperity and protection.',
    },
    {
      id: 9,
      name: 'LAGHU SHREEFAL',
      category: 'POOJA VIDHI',
      price: 350,
      originalPrice: 500,
      discount: '30% OFF',
      rating: 4.9,
      happyCustomers: '600',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779116944/holly-zolly/product-LAGHU%20SHREEFAL%20-1779116944126-0.08062071503906187.jpg',
      description: 'Pure coconut shells for sacred rituals.',
    },
    {
      id: 10,
      name: 'MANGAL YANTRA',
      category: 'YANTRA',
      price: 900,
      originalPrice: 1200,
      discount: '25% OFF',
      rating: 4.9,
      happyCustomers: '700',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778775180/holly-zolly/product-MANGAL%20YANTRA-1778775180180-0.3447789050100817.jpg',
      description: 'Mangal Yantra for courage and strength.',
    },
    {
      id: 11,
      name: 'MANGAL GLOW [ ACNE BAR ]',
      category: 'PLANET GLOW',
      price: 109,
      originalPrice: 199,
      discount: '45% OFF',
      rating: 5,
      happyCustomers: '400',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166897/holly-zolly/product-update-1779166896920-0.7680736099840475.jpg',
      description: 'Natural acne bar for glowing skin.',
    },
    {
      id: 12,
      name: 'GURU GLOW [ YASHTHI MADHU ]',
      category: 'PLANET GLOW',
      price: 129,
      originalPrice: 200,
      discount: '36% OFF',
      rating: 5,
      happyCustomers: '350',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779166149/holly-zolly/product-GURU%20GLOW%20%5B%20YASHTHI%20MADHU%20%5D-1779166149012-0.1470430411451038.jpg',
      description: 'Honey-based natural skincare product.',
    },
    {
      id: 13,
      name: 'AAYUDH - PASHA',
      category: 'AAYUDH FRAME',
      price: 1800,
      originalPrice: 2000,
      discount: '10% OFF',
      rating: 5,
      happyCustomers: '850',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778774336/holly-zolly/product-AAYUDH%20-%20PASHA-1778774336506-0.5437177525534022.jpg',
      description: 'Divine noose symbol representing divine authority.',
    },
    {
      id: 14,
      name: 'AAYUDH - GADA',
      category: 'AAYUDH FRAME',
      price: 1599,
      originalPrice: 1800,
      discount: '11% OFF',
      rating: 5,
      happyCustomers: '900',
      image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1779105014/holly-zolly/product-AAYUDH%20-GADA-1779105014247-0.21438576999660497.jpg',
      description: 'Sacred mace symbol representing power and protection.',
    },
  ];

  useEffect(() => {
    const currentProduct = products.find(p => p.id === parseInt(id));
    setProduct(currentProduct);

    // Get related products from the same category
    if (currentProduct) {
      const related = products.filter(
        p => p.category === currentProduct.category && p.id !== currentProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleRelatedProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Header />
      <div className="product-detail-container">
        <button className="back-btn" onClick={() => navigate('/category')}>
          ← Continue Shopping
        </button>

        <div className="product-detail-main">
          {/* Product Image */}
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <span className="product-badge">{product.category}</span>
            <h1 className="product-detail-name">{product.name}</h1>

            <div className="product-detail-rating">
              <span className="rating-badge">{product.rating} ★</span>
              <span className="happy-customers">{product.happyCustomers} Happy Customers</span>
            </div>

            <div className="product-detail-price">
              <span className="detail-price">₹{product.price}</span>
              <span className="detail-original-price">₹{product.originalPrice}</span>
              <span className="detail-discount">{product.discount}</span>
            </div>

            {/* Product Details */}
            <div className="product-details-section">
              <h3>Product Details</h3>
              <p>{product.description}</p>
              <a href="#" className="read-more">Read More</a>
            </div>

            {/* Size Selector */}
            <div className="size-selector">
              <label>SELECT SIZE</label>
              <div className="size-options">
                <button className="size-btn active">5.5</button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <label>QUANTITY</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                🛒 Add To Cart
              </button>
              <button className="buy-now-btn">⚡ Buy Now</button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="badge-item">
                <span className="badge-icon">🚚</span>
                <span className="badge-text">Free Delivery</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🛡️</span>
                <span className="badge-text">Secure Payment</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">↩️</span>
                <span className="badge-text">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products-section">
            <h2>Related Products</h2>
            <a href="#" className="view-more">View More</a>
            <div className="related-products-grid">
              {relatedProducts.map(relProduct => (
                <div key={relProduct.id} className="related-product-card" onClick={() => handleRelatedProductClick(relProduct.id)}>
                  <div className="related-product-image">
                    <img src={relProduct.image} alt={relProduct.name} />
                    <button className="wishlist-icon">♡</button>
                  </div>
                  <h3 className="related-product-name">{relProduct.name}</h3>
                  <div className="related-product-rating">
                    <span className="stars">★</span>
                    <span className="rating">{relProduct.rating}</span>
                  </div>
                  <div className="related-product-price">
                    <span className="original">₹{relProduct.originalPrice}</span>
                    <span className="current">₹{relProduct.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
