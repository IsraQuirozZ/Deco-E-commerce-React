import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Link, NavLink, useParams } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./ItemListContainer.css";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(
      categoryId
        ? query(itemsCollection, where("category", "==", categoryId))
        : itemsCollection
    ).then((snapshotList) => {
      const docs = snapshotList.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      setItems(docs);
    });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <div className="categoryBtns">
        <Link to="/shop">
          <Btn text="All" />
        </Link>
        <NavLink to="/shop/Sofas">
          <Btn text="Sofas" />
        </NavLink>
        <NavLink to="/shop/Armchairs">
          <Btn text="Armchairs" />
        </NavLink>
        <NavLink to="/shop/Chairs">
          <Btn text="Chairs" />
        </NavLink>
        <NavLink to="/shop/Desks">
          <Btn text="Desks" />
        </NavLink>
        <NavLink to="/shop/Tables">
          <Btn text="Tables" />
        </NavLink>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
