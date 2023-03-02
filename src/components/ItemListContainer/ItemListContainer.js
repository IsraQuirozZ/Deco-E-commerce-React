import React, { useState, useEffect } from "react";
// import { items } from "./items.js";
import ItemList from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";
import CartBtn from "../Btn/Btn";
import "./ItemListContainer.css";

const allItems = [
  {
    id: 1,
    name: "Couch 1",
    image:
      "https://www.elmueble.com/medio/2020/08/24/salon-pequeno-con-sofa-chaiselongue_7e35693f_1593x2000.jpg",
    descOne: "Descripción #1 del producto.",
    descTwo: "Descripción #2 del producto.",
    price: 250,
    category: "salas",
  },
  {
    id: 2,
    name: "Couch 2",
    image:
      "https://img.freepik.com/psd-gratis/sillon-almohada_176382-861.jpg?size=626&ext=jpg&ga=GA1.1.504898822.1674669788&semt=sph",
    descOne: "Descripción #1 del producto.",
    descTwo: "Descripción #2 del producto.",
    price: 150,
    category: "sofas",
  },
  {
    id: 3,
    name: "Couch 3",
    image:
      "https://img.freepik.com/foto-gratis/diseno-interiores-habitaciones_23-2148899445.jpg?size=626&ext=jpg&ga=GA1.1.504898822.1674669788&semt=sph",
    descOne: "Descripción #1 del producto.",
    descTwo: "Descripción #2 del producto.",
    price: 200,
    category: "salas",
  },
  {
    id: 4,
    name: "Couch 4",
    image:
      "https://img.freepik.com/foto-gratis/diseno-interiores-sala-estar-moderna-mediados-siglo-arbol-monstera_53876-129805.jpg?size=626&ext=jpg&ga=GA1.1.504898822.1674669788&semt=sph",
    descOne: "Descripción #1 del producto.",
    descTwo: "Descripción #2 del producto.",
    price: 100,
    category: "sofas",
  },
  {
    id: 5,
    name: "Couch 5",
    image:
      "https://img.freepik.com/fotos-premium/sofa-verde-interior-apartamento-moderno-pared-vacia-mesa-madera-render-3d_41470-3760.jpg?size=626&ext=jpg&ga=GA1.2.504898822.1674669788&semt=sph",
    descOne: "Descripción #1 del producto.",
    descTwo: "Descripción #2 del producto.",
    price: 250,
    category: "salas",
  },
];

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(allItems);
      }, 2000);
    });

    if (categoryId) {
      promise.then((res) =>
        setItems(res.filter((item) => item.category === categoryId))
      );
    } else {
      promise.then((res) => setItems(res));
    }
  }, [categoryId]);

  return (
    <>
      <h1>Categorías</h1>
      <div className="categoryBtns">
        <Link to={"/shop"}>
          <CartBtn text="Todo" />
        </Link>
        <Link to={"/shop/salas"}>
          <CartBtn text="Salas" />
        </Link>
        <Link to={"/shop/sofas"}>
          <CartBtn text="Sofás" />
        </Link>
      </div>

      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
