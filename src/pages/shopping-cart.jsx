import React, { useState } from "react";
import "./shopping-cart.css";
import lock from "../assets/icon-lock.png";
import message from "../assets/icon-1.png";
import van from "../assets/icon-2.png";
import { useCart } from "../components/cartContent";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem, removeAllItems } = useCart();
  console.log("CART PAGE:", cartItems);
  const [coupon, setCoupon] = useState("");

  // Financial calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = subtotal > 0 ? 60.0 : 0.0;
  const tax = subtotal > 0 ? 14.0 : 0.0;
  const total = Math.max(0, subtotal - discount + tax);

  return (
    <div className="cart-container">
      <h2 className="cart-title">My cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some products to continue shopping.</p>
          <button className="btn-back" onClick={() => navigate("/products")}>
            ← Back to shop
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Main Left Section */}
          <div className="cart-main">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Product Image */}
                  <div className="item-img-box">
                    {item.image ? (
                      <img src={`${API_URL}${item.image}`} alt={item.title} />
                    ) : (
                      <div className="img-placeholder"></div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="item-details">
                    <div className="item-header">
                      <h3 className="item-title">{item.title}</h3>
                      <button className="mobile-menu-btn">⋮</button>
                    </div>

                    <p className="item-meta">
                      Size: {item.size}, Color: {item.color}, Material:{" "}
                      {item.material}
                    </p>

                    <p className="item-seller">Seller: {item.seller}</p>

                    <div className="item-actions desktop-only">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn-remove"
                      >
                        Remove
                      </button>
                      <button className="btn-save">Save for later</button>
                    </div>
                  </div>

                  {/* Price + Quantity */}
                  <div className="item-pricing-controls">
                    <span className="item-price">${item.price.toFixed(2)}</span>

                    <div className="quantity-controller">
                      {/* Desktop */}
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="desktop-qty-select desktop-only"
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            Qty: {x + 1}
                          </option>
                        ))}
                      </select>

                      {/* Mobile */}
                      <div className="mobile-qty-stepper mobile-only">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>

                        <input type="number" readOnly value={item.quantity} />

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="cart-footer-actions desktop-only">
              <button
                className="btn-back"
                onClick={() => navigate("/products")}
              >
                ← Back to shop
              </button>

              <button onClick={removeAllItems} className="btn-clear-all">
                Remove all
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="cart-sidebar">
            {/* Coupon */}
            <div className="sidebar-card coupon-card desktop-only">
              <label htmlFor="coupon">Have a coupon?</label>

              <div className="coupon-input-group">
                <input
                  id="coupon"
                  type="text"
                  placeholder="Add coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="btn-apply">Apply</button>
              </div>
            </div>

            {/* Summary */}
            <div className="sidebar-card summary-card">
              <div className="summary-row">
                <span className="desktop-only">Subtotal:</span>
                <span className="mobile-only">Items ({cartItems.length}):</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span className="desktop-only">Discount:</span>
                <span className="mobile-only">Shipping:</span>
                <span className="discount-text">
                  -{subtotal > 0 ? `$${discount.toFixed(2)}` : "$0.00"}
                </span>
              </div>

              <div className="summary-row">
                <span>Tax:</span>
                <span className="tax-text">
                  +{subtotal > 0 ? `$${tax.toFixed(2)}` : "$0.00"}
                </span>
              </div>

              <hr className="summary-divider" />

              <div className="summary-row total-row">
                <span>Total:</span>
                <span className="total-price">${total.toFixed(2)}</span>
              </div>

              <button className="btn-checkout">
                Checkout{" "}
                <span className="mobile-only">({cartItems.length} items)</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Footer Trust Badges */}
      <footer className="trust-badges-footer desktop-only">
        <div className="badge-item">
          <div className="badge-icon-placeholder">
            <img src={lock} alt="" />
          </div>
          <div>
            <h4>Secure payment</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>

        <div className="badge-item">
          <div className="badge-icon-placeholder">
            <img src={message} alt="" />
          </div>
          <div>
            <h4>Customer support</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>

        <div className="badge-item">
          <div className="badge-icon-placeholder">
            <img src={van} alt="" />
          </div>
          <div>
            <h4>Free delivery</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
