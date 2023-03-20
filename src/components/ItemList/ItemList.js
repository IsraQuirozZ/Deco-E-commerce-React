import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  items.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return (
    <div className="itemList">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
