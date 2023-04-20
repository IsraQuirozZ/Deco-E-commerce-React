import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sum = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const res = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCount">
      <div className="counter">
        <button className="counterBtn sub" onClick={res}>
          -
        </button>
        <p className="countNum">{count === stock ? `${count} Max` : count}</p>
        <button className="counterBtn add" onClick={sum}>
          +
        </button>
      </div>
      <button className="btn" onClick={() => onAdd(count)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;
