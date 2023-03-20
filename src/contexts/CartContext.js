import React, { useState } from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const inCart = (id) => cart.find((item) => item.id === id);

  const addToCart = (item, qty) => {
    let newCart;
    if (inCart(item.id)) {
      if (qty < inCart(item.id).stock - inCart(item.id).quantity) {
        inCart(item.id).quantity += qty;
        newCart = [...cart];
      } else {
        inCart(item.id).quantity = inCart(item.id).stock;
        newCart = [...cart];
      }
    } else {
      newCart = [...cart, { ...item, quantity: qty }];
    }
    setCart(newCart);
  };

  const deleteOneFromCart = (item) => {
    let newCart;
    if (item.quantity > 0) {
      inCart(item.id).quantity -= 1;
      if (inCart(item.id).quantity === 0) {
        newCart = cart.filter((product) => product.id !== item.id);
      } else {
        newCart = [...cart];
      }
    } else {
      newCart = cart.filter((product) => product.id !== item.id);
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalProducts = () => {
    return cart.reduce((acc, current) => acc + current.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteOneFromCart,
        clearCart,
        totalProducts,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
