import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El Producto fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, calcularTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
