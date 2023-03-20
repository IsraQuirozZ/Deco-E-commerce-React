import React, { useState } from "react";
import Loader from "../Loader/Loader";

const Home = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "1",
      quantity: 3,
    },
  ]);
  // list -> [{id:1, name: item.name, quantity: qty}, {id:2, name: item.name, quantity: qty}]

  const addToList = (item, qty) => {
    const newItem = {
      id: 2,
      name: "2",
      quantity: 2,
    };

    const itemEnCarrito = list.find((item) => item.id === newItem.id);
    // const tareaExistente = tareas.find(tarea => tarea.id === nuevaTarea.id)

    if (itemEnCarrito) {
      console.log("Este producto ya está en el carrito");
      // console.log(list);
    } else {
      setList([...list, newItem]);
      // console.log(list);
    }
    console.log(list.length);
  };

  return (
    <div>
      <h1>Soy Home</h1>
      <h4>Contenido Home</h4>
      <Loader />
      <button onClick={addToList}>addToCart</button>
    </div>
  );
};

export default Home;
