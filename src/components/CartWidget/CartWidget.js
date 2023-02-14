import React from "react";
import "./CartWidget.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const CartWidget = () => {
  return (
    <div className="cartContainer">
      <ShoppingBasketIcon sx={{ fontSize: 50 }} />
      <p className="cartNumber">3</p>
    </div>
  );
};

export default CartWidget;
