import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", detailId);

    getDoc(itemRef).then((snapshot) => {
      const product = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      setItem(product);
    });
  }, [detailId]);

  return <ItemDetail data={item} />;
};

export default ItemDetailContainer;
