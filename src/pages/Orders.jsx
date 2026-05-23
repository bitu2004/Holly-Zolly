import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import './Orders.css';

/* ── Status badge colours ── */
const STATUS_COLOR = {
  Confirmed:  { bg: '#e8f5e9', color: '#2e7d32' },
  Processing: { bg: '#fff8e1', color: '#f57f17' },
  Shipped:    { bg: '#e3f2fd', color: '#1565c0' },
  Delivered:  { bg: '#f3e5f5', color: '#6a1b9a' },
  Cancelled:  { bg: '#fce4ec', color: '#c62828' },
};

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  } catch { return iso; }
}

/* ── Open box SVG — matches the screenshot icon exactly ── */
function EmptyBoxIcon() {
  return (
    <svg
      width="64" height="64" viewBox="0 0 64 64"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Box body */}
      <rect x="8" y="30" width="48" height="28" rx="3"
            fill="#e0e0e0" />
      {/* Left flap open (rotated up-left) */}
      <path d="M8 30 L20 18 L32 30 Z"
            fill="#cecece" stroke="#bdbdbd" strokeWidth="1" />
      {/* Right flap open (rotated up-right) */}
      <path d="M32 30 L44 18 L56 30 Z"
            fill="#d6d6d6" stroke="#bdbdbd" strokeWidth="1" />
      {/* Box front crease */}
      <line x1="8" y1="30" x2="56" y2="30"
            stroke="#bdbdbd" strokeWidth="1.5" />
      {/* Centre tape strip */}
      <rect x="26" y="30" width="12" height="7" rx="2"
            fill="#c8c8c8" />
      {/* Subtle shadow at bottom */}
      <ellipse cx="32" cy="58" rx="20" ry="3"
               fill="rgba(0,0,0,0.06)" />
    </svg>
  );
}

export default function Orders() {
  const { getMyOrders } = useOrders();
  const { user, isLoggedIn } = useAuth();
  const orders = isLoggedIn ? getMyOrders(user?.email) : [];

  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />

      <main className="orders-main">
        <div className="orders-wrap section">

          {/* ── Page title — matches screenshot ── */}
          <div className="orders-title-block">
            <h1 className="orders-title">
              My <span>Orders</span>
            </h1>
            <p className="orders-subtitle">Track and manage your orders</p>
            <div className="orders-title-bar" />
          </div>

          {/* ── Empty state card ── */}
          {orders.length === 0 ? (
            <div className="orders-empty-card">
              <div className="orders-empty-inner">
                <EmptyBoxIcon />
                <p className="orders-empty-label">No orders yet</p>
                <Link to="/category" className="orders-start-link">
                  Start Shopping
                </Link>
              </div>
            </div>
          ) : (
            /* ── Orders list ── */
            <div className="orders-list">
              {orders.map((order) => {
                const badge = STATUS_COLOR[order.status] || STATUS_COLOR.Confirmed;
                return (
                  <div key={order.id} className="order-card">

                    {/* Header row */}
                    <div className="order-card__head">
                      <div className="order-card__meta">
                        <span className="order-card__id">{order.id}</span>
                        <span className="order-card__date">{formatDate(order.date)}</span>
                      </div>
                      <span
                        className="order-card__badge"
                        style={{ background: badge.bg, color: badge.color }}
                      >
                        {order.status}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="order-card__items">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="order-item">
                          <div className="order-item__thumb">
                            {item.image
                              ? <img src={item.image} alt={item.name} />
                              : (
                                <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
                                  <rect width="40" height="40" rx="8" fill="#f0ece6" />
                                  <circle cx="20" cy="16" r="5"
                                          stroke="#c8b89a" strokeWidth="1.8" />
                                  <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10"
                                        stroke="#c8b89a" strokeWidth="1.8"
                                        strokeLinecap="round" />
                                </svg>
                              )
                            }
                          </div>
                          <div className="order-item__info">
                            <p className="order-item__name">{item.name}</p>
                            <p className="order-item__qty">Qty: {item.quantity}</p>
                          </div>
                          <p className="order-item__price">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Footer totals */}
                    <div className="order-card__foot">
                      <div className="order-card__rows">
                        <span>Subtotal</span>
                        <span>₹{order.subtotal.toFixed(2)}</span>
                        <span>Shipping</span>
                        <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
                        <span>Tax (5%)</span>
                        <span>₹{order.tax.toFixed(2)}</span>
                      </div>
                      <div className="order-card__total">
                        <span>Total</span>
                        <strong>₹{order.total.toFixed(2)}</strong>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
