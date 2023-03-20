import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import { CartContext } from "../../contexts/CartContext";
// ICONS
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ItemDetail = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  const [isFav, setIsFav] = useState(false);
  const [favHover, setFavHover] = useState(false);
  const favClick = () => {
    setIsFav(!isFav);
  };

  const [cancelHover, setCancelHover] = useState(false);
  const cancelHandler = () => {
    window.history.back();
  };

  const [cartLink, setCartLink] = useState(false);

  const onAdd = (quantity) => {
    setCartLink(true);
    addToCart(data, quantity);
  };

  return (
    <div
      className="itemDetail"
      onMouseEnter={() => setCancelHover(true)}
      onMouseLeave={() => setCancelHover(false)}
    >
      {cancelHover ? (
        <ClearIcon
          onClick={cancelHandler}
          className="itemDetail__cancel"
          sx={{ fontSize: 45 }}
        />
      ) : (
        ""
      )}

      <div className="itemImages">
        <img className="itemImages__one" src={data.image} alt={data.name} />
        <img className="itemImages__two" src={data.image} alt={data.name} />
        <img className="itemImages__three" src={data.image} alt={data.name} />
        <img className="itemImages__four" src={data.image} alt={data.name} />
        <img className="itemImages__five" src={data.image} alt={data.name} />
      </div>
      <div className="item__divider"></div>
      <h3 className="item__category">{data.category}</h3>
      <div className="itemDetail__top">
        <h1 className="item__name">{data.name}</h1>
        {isFav ? (
          <FavoriteIcon
            onClick={favClick}
            onMouseEnter={() => setFavHover(true)}
            onMouseLeave={() => setFavHover(false)}
            className="heartIcon"
            sx={favHover ? { fontSize: 45 } : { fontSize: 40 }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={favClick}
            onMouseEnter={() => setFavHover(true)}
            onMouseLeave={() => setFavHover(false)}
            className="heartIcon"
            sx={favHover ? { fontSize: 45 } : { fontSize: 40 }}
          />
        )}
      </div>
      <p className="item__largeDesc">{data.largeDesc}</p>

      <div className="itemDetail__selection">
        <div className="itemDetail__Selection--info">
          <div className="itemSelectionColor">
            <h3>Color:</h3>
            <div className="itemColors">
              <button className="itemColor itemColor1"></button>
              <button className="itemColor itemColor2"></button>
              <button className="itemColor itemColor3"></button>
            </div>
          </div>
          <p className="itemDetail__info--price">
            <span>Price:</span> {data.price}€
          </p>
        </div>
        {cartLink ? (
          <div className="itemDetail__selection--btns">
            <Link to="/shop">
              <div className="returnBtn">
                <KeyboardBackspaceIcon sx={{ fontSize: 30 }} />
                <h4>Return</h4>
              </div>
            </Link>
            <Link to="/cart">
              <Btn text="Go to Pay" />
            </Link>
          </div>
        ) : (
          <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
