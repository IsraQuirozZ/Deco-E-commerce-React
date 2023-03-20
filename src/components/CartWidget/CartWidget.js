import React, { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cartContainer">
        <ShoppingBasketIcon sx={{ fontSize: 50 }} />
        <p className="cartNumber">{totalProducts()}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
