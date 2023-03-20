import React, { useState } from "react";
import "./ItemCount.css";
// import Btn from "../Btn/Btn";

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

  // const { cartList, addToCart } = useContext(CartContext);

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
      {/* <Btn text="Add to Cart" data={data} quantity={count} onClick={onAdd} /> */}
    </div>
  );
};

export default ItemCount;
