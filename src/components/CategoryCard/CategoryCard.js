import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/shop/${category.category}`}>
      <div className="categoryCard">
        <img src={category.img} alt="Category 1" />
        <h3>{category.category}</h3>
        <p>{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
