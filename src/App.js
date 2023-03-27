import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import CartListContainer from "./components/CartListContainer/CartListContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./contexts/CartContext";
import PaymentForm from "./components/PaymentForm/PaymentForm";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider value="Israel">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/shop" element={<ItemListContainer />} />
          <Route
            exact
            path="/shop/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detail/:detailId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<CartListContainer />} />
          <Route exact path="/payment" element={<PaymentForm />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
