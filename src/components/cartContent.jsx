import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    // alert("Product Added");
    console.log("ADD TO CART CALLED:", product);
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      // If product already in cart, increase quantity
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      // Add new product
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Update item quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Number(newQty),
            }
          : item,
      ),
    );
  };

  // Remove one item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all items
  const removeAllItems = () => {
    setCartItems([]);
  };

  // Clear cart (same as remove all)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        removeAllItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  return useContext(CartContext);
}
