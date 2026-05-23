import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <>
        <Header />
        <div className="wishlist-container">
          <div className="wishlist-header">
            <h1>Your Wishlist</h1>
            <p>Save items you love for later</p>
          </div>

          <div className="wishlist-content">
            <div className="wishlist-empty-state">
              <div className="empty-icon">❤️</div>
              <h2>Your Wishlist is Empty</h2>
              <p>Start adding sacred products to your wishlist</p>
              <Link to="/category" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>Your Wishlist</h1>
          <p>Save items you love for later</p>
        </div>

        <div className="wishlist-content">
          <div className="wishlist-items">
            <div className="wishlist-items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Action</span>
              <span></span>
            </div>

            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p className="item-category">{item.category}</p>
                  </div>
                </div>
                <div className="item-price">₹{item.price}</div>
                <div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                  title="Remove from wishlist"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
