import React from "react";
import "./Btn.css";

const Btn = ({ text, onBuy }) => {
  return <button className="btn">{text}</button>;
};

export default Btn;
