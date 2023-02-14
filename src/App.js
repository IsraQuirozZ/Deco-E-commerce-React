import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer
        greeting={"Hola! Este es el contenedor para los items."}
      />
    </div>
  );
}

export default App;
