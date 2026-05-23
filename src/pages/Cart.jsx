import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="cart-container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <p>Review your selected items before checkout</p>
          </div>

          <div className="cart-content">
            <div className="cart-empty-state">
              <div className="empty-icon">🛒</div>
              <h2>Your Cart is Empty</h2>
              <p>Start adding sacred products to your cart</p>
              <Link to="/category" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>

            <aside className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹0</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>₹0</span>
                </div>
                
                <div className="summary-row">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹0</span>
                </div>
                
                <button className="checkout-btn" disabled>
                  Proceed to Checkout
                </button>
                
                <Link to="/category" className="continue-link">
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  function handleConfirmOrder() {
    placeOrder(cartItems, { subtotal, shipping, tax, total }, user?.email);
    clearCart();
    navigate('/orders');
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>Review your selected items before checkout</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Action</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p className="item-category">{item.category}</p>
                  </div>
                </div>
                <div className="item-price">₹{item.price}</div>
                <div className="item-quantity">
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              
              <Link to="/category" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
