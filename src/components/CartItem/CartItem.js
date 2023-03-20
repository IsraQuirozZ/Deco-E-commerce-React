import React, { useContext } from "react";
import "./CartItem.css";

import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ item }) => {
  const { deleteOneFromCart } = useContext(CartContext);
  return (
    <>
      <div className="cartItem">
        <div className="cartItem__product cartItem__section">
          <img src={item.image} alt="CartItem" />
          <div className="cartItem__product--text">
            <h2>{item.name}</h2>
            <h4>{item.category}</h4>
          </div>
        </div>
        <h1 className="cartItem__quantity "> {item.quantity} </h1>
        <div className="cartItem__price cartItem__section">
          <h2>{item.price * item.quantity} €</h2>
          <button
            className="deleteItem"
            onClick={() => deleteOneFromCart(item)}
          >
            <ClearIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
      </div>
      <div className="cartList__divider"></div>
    </>
  );
};

export default CartItem;
