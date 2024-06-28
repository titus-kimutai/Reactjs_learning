/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: {}, totalItems: 0, totalPrice: 0 });
  const [isCartVisible, setCartVisible] = useState(false);

  const addItem = (productId, price) => {
    setCart((prevCart) => {
      const items = { ...prevCart.items };
      items[productId] = (items[productId] || 0) + 1;
      const totalItems = prevCart.totalItems + 1;
      const totalPrice = prevCart.totalPrice + price;
      return { items, totalItems, totalPrice };
    });
  };

  const removeItem = (productId, price) => {
    setCart((prevCart) => {
      const items = { ...prevCart.items };
      if (items[productId] > 0) {
        items[productId] -= 1;
        const totalItems = prevCart.totalItems - 1;
        const totalPrice = prevCart.totalPrice - price;
        if (items[productId] === 0) {
          delete items[productId];
        }
        return { items, totalItems, totalPrice };
      }
      return prevCart;
    });
  };

  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
