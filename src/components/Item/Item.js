import React from "react";
import "./item.css";
import Btn from "../Btn/Btn";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="item__img" src={item.image} alt={item.name} />
      <div className="item__divider"></div>
      <h3 className="item__category">{item.category}</h3>
      <h1 className="item__name">{item.name}</h1>
      <p className="item__desc">{item.descOne}</p>
      <div className="item__info">
        <p className="item__info--price">{item.price}€</p>
        <Link to={`/detail/${item.id}`}>
          <Btn text="See Product" />
        </Link>
      </div>
    </div>
  );
};

export default Item;
