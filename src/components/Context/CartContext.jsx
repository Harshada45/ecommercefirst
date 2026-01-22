import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartCount, setCartCount] = useState(() => {
    const storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];
    return storedIds.length;
  });

  // keep count in sync with localStorage
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];
    setCartCount(storedIds.length);
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
