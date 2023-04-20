import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./PaymentForm.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";

const PaymentForm = () => {
  const { cart, totalPrice } = useContext(CartContext);

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
    console.log(form);
    setCardHolder("Card Holder");
    setCardNum("#### #### #### ####");
    setExp("**/**");
    setCvv("***");
    setForm(formBase);
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
    <>
      {typeof id !== "undefined" ? (
        <p>El form se ha enviado con el id: {id}</p>
      ) : (
        ""
      )}
      <div className="paymentForm">
        <form className="paymentForm__form" onSubmit={submitHandler}>
          <h1>Payment Details</h1>
          <label htmlFor="cardHolder">CARDHOLDER NAME</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            placeholder="Your name"
            value={form.cardHolder}
            onChange={changeHandler}
          />
          <label htmlFor="email">USER EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={changeHandler}
          />
          <label htmlFor="phone">USER PHONE NUMBER</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={changeHandler}
          />
          <label htmlFor="cardNum">CARD NUMBER</label>
          <input
            type="number"
            id="cardNum"
            name="cardNum"
            placeholder="#### #### #### ####"
            value={cardNum}
            onChange={changeHandler}
          />
          {/* <div className="payForm__form--metaDataCard"> */}
          <label htmlFor="cardExp">EXPIES</label>
          <input
            type="number"
            id="cardExp"
            name="cardExp"
            placeholder="##/##"
            value={exp}
            onChange={changeHandler}
          />
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            id="cvv"
            name="cvv"
            placeholder="###"
            value={cvv}
            onChange={changeHandler}
          />
          {/* </div> */}
          <h3>
            Payment amount: <span>{totalPrice()}€</span>
          </h3>
          <div className="paymentForm__Form--btns">
            <Link to="/cart">
              <Btn text="Return" />
            </Link>
            <input className="btn paymentBtn" type="submit" value="Pay Now" />
          </div>
        </form>
        <div className="cardContainer">
          <div className="card">
            <h2 className="card__top">Visa</h2>
            <h3 className="card__number">{cardNum}</h3>
            <div className="card__bottom">
              <div className="card__botom--cardHolder">
                <p>CARD HOLDER</p>
                <h4>{cardHolder}</h4>
              </div>
              <div className="card__bottom--cardExp">
                <p>EXPIES</p>
                <h4>{exp}</h4>
              </div>
              <div className="card__bottom--cardCvv">
                <p>CVV</p>
                <h4>{cvv}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
