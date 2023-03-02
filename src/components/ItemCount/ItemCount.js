import React, { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const sum = () => {
    setCount(count + 1);
  };

  const res = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counterBtn sub" onClick={res}>
        -
      </button>
      <p className="countNum">{count}</p>
      <button className="counterBtn add" onClick={sum}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
