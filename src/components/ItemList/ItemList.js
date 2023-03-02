import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </>
  );
};

export default ItemList;
