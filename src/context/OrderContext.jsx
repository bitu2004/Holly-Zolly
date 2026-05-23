import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

const ORDERS_KEY = 'hollyZolly_orders';

function readStoredOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistOrders(orders) {
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch { /* ignore */ }
}

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => readStoredOrders());

  /**
   * Place a new order from cart items.
   * Returns the new order object.
   */
  function placeOrder(cartItems, totals, userEmail) {
    const order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      userEmail: userEmail || 'guest',
      items: cartItems.map((i) => ({ ...i })),
      subtotal: totals.subtotal,
      shipping: totals.shipping,
      tax: totals.tax,
      total: totals.total,
      status: 'Confirmed',
    };
    const updated = [order, ...orders];
    setOrders(updated);
    persistOrders(updated);
    return order;
  }

  /** Orders for the currently logged-in user */
  function getMyOrders(userEmail) {
    if (!userEmail) return [];
    return orders.filter((o) => o.userEmail === userEmail);
  }

  return (
    <OrderContext.Provider value={{ orders, placeOrder, getMyOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrders must be used within OrderProvider');
  return ctx;
}
