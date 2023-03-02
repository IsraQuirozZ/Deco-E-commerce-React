import React from "react";
import "./item.css";
import CartBtn from "../CartBtn/CartBtn";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="itemImg" src={item.image} />
      <h1 className="itemName">{item.name}</h1>
      <p className="descOne">{item.descOne}</p>
      <div className="itemInfo-bottom">
        <p className="itemPrice">
          <span>{item.price}€</span>
        </p>
        <Link to={`/detail/${item.id}`}>
          <CartBtn text="See Product" />
        </Link>
      </div>
    </div>
  );
};

export default Item;
