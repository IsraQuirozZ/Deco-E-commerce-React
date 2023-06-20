import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./PaymentForm.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";

const PaymentForm = () => {
  const { cart, totalPrice, totalProducts } = useContext(CartContext);

  const formBase = {
    cardHolder: "",
    email: "",
    phone: "",
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const [form, setForm] = useState(formBase);
  const [id, setId] = useState();

  const [cardHolder, setCardHolder] = useState("Card Holder");
  const [cardNum, setCardNum] = useState("#### #### #### ####");
  const [exp, setExp] = useState("**/**");
  const [cvv, setCvv] = useState("***");

  const submitHandler = (e) => {
    e.preventDefault();
    // const db = getFirestore();
    // const contactFormCollection = collection(db, "orders");
    // addDoc(contactFormCollection, form).then((snapshot) => {
    //   setForm(formBase);
    //   setId(snapshot.id);
    // });
    setCardHolder("Card Holder");
    setCardNum("#### #### #### ####");
    setExp("**/**");
    setCvv("***");
    // setForm(formBase);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "cardHolder":
        if (value.length > 2) {
          setCardHolder(value);
        }
        break;
      case "cardNum":
        setCardNum(value);
        break;
      case "cardExp":
        setExp(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
    }
    if (form.hasOwnProperty(name)) {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="paymentContainer">
      <h1>Payment Details</h1>
      <p>Complete your pusrchase by providing your payment details</p>
      <p>
        Remember that this project is an e-commerce simulator, please, do not
        enter sensitive data, it will not save any sensitive information in the
        database anyway.
      </p>
      <form className="paymentForm" onSubmit={submitHandler}>
        <div className="cardDetails">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            className="cardHolder"
            placeholder="Card Holder Name"
            value=""
            onChange={changeHandler}
          />
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="cardNumber"
            placeholder="1234 1234 1234 1234"
            value=""
            onChange={changeHandler}
          />
          <div className="expiryCvv">
            <label htmlFor="expiry">Expiry</label>
            <input
              type="date"
              className="expiry"
              placeholder="12/12"
              value=""
              onChange={changeHandler}
            />
            <label htmlFor="cvv">CVV</label>
            <input
              type="number"
              className="cvv"
              placeholder="123"
              value=""
              onChange={changeHandler}
            />
          </div>
        </div>
        <label htmlFor="discountCode">Discount Code</label>
        <input
          type="text"
          className="discountCode"
          placeholder="C00-20-OFF"
          value=""
          onChange={changeHandler}
        />
        <Btn text="Pay Now" />
      </form>
      <div className="paymentDetails">
        <h2>You have to pay</h2>
        <h3>${totalPrice()}</h3>
        <h4>Products: {totalProducts()}</h4>
        <div className="paymentCard"></div>
      </div>
    </div>
  );
};

export default PaymentForm;
