import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import CartBtn from "../CartBtn/CartBtn";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="itemDetail">
      <div className="itemImages">
        <img src={data.image} />
        <div className="itemImagesSmall">
          <img src={data.image} />
          <img src={data.image} />
          <img src={data.image} />
          <img src={data.image} />
        </div>
      </div>
      <h1 className="itemName">{data.name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel odio
        tristique velit mollis pharetra at pulvinar arcu. Nam fermentum, elit at
        tempus vulputate, quam quam iaculis quam, in sollicitudin enim est a
        justo. Suspendisse ullamcorper, ante non eleifend ultricies, lorem sem
        cursus nulla, at rutrum est risus efficitur eros. Nullam placerat purus
        non nunc pharetra facilisis pharetra pellentesque ipsum. Fusce eget
        elementum eros. Nunc eu neque felis. Praesent lacinia eget tortor vitae
        elementum.
      </p>
      <div className="itemSelection">
        <div className="itemSelectionColor">
          <h3>Color</h3>
          <div className="itemColors">
            <div className="itemColor itemColor1"></div>
            <div className="itemColor itemColor2"></div>
            <div className="itemColor itemColor3"></div>
          </div>
        </div>
        <ItemCount />
      </div>
      <p>Price: {data.price}€</p>
      <CartBtn text="Add to Cart" />
    </div>
  );
};

export default ItemDetail;
