import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./CartListContainer.css";

import Btn from "../Btn/Btn";
import CartItem from "../CartItem/CartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CartContext } from "../../contexts/CartContext";
import PaymentForm from "../PaymentForm/PaymentForm";

const CartListContainer = () => {
  const { cart, clearCart, totalProducts, totalPrice } =
    useContext(CartContext);
  return (
    <>
      <div className="cartListContainer">
        <div>
          <div className="cartListContainer__top">
            <div className="cartListContainer__top--left">
              <Link to="/shop">
                <div className="return">
                  <KeyboardBackspaceIcon sx={{ fontSize: 30 }} />
                  <h4>Return</h4>
                </div>
              </Link>
              <h1>CART</h1>
            </div>

            <button className="clearCart" onClick={() => clearCart()}>
              <DeleteIcon sx={{ fontSize: 30 }} />
              Clear
            </button>
          </div>
          <div className="cartListContainer__sections">
            <h3 className="cartListContainer__sections--section product">
              PRODUCT
            </h3>
            <h3 className="cartListContainer__sections--section quantity">
              QUANTITY
            </h3>
            <h3 className="cartListContainer__sections--section price">
              PRICE
            </h3>
          </div>
        </div>
        {cart.length === 0 ? (
          <div className="emptyCart">
            <h1>El carrito está vacío</h1>
            <Link to="/shop">
              <div className="return">
                <KeyboardBackspaceIcon sx={{ fontSize: 30 }} />
                <h4>Return to Shop</h4>
              </div>
            </Link>
          </div>
        ) : (
          <div className="cartList">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="cartListContainer__bottom">
          <h2>Products ({totalProducts()})</h2>
          <h2>Total: {totalPrice()} €</h2>
          <Link to="/payment">
            <Btn text="Buy Now" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartListContainer;
