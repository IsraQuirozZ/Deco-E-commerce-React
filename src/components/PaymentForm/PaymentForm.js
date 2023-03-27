import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./PaymentForm.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";

const PaymentForm = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const formBase = {
    name: "",
    email: "",
    phone: "",
    items: cart,
    total: total,
  };
  const [form, setForm] = useState(formBase);

  const [id, setId] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, "orders");
    addDoc(contactFormCollection, form).then((snapshot) => {
      setForm(formBase);
      setId(snapshot.id);
    });
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const changingTotal = () => {
    setTotal(totalPrice());
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
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={inputChangeHandler}
          />
          <label htmlFor="email">USER EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={inputChangeHandler}
          />
          <label htmlFor="phone">USER PHONE NUMBER</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={inputChangeHandler}
          />
          <label htmlFor="cardNumb">CARD NUMBER</label>
          <input
            type="number"
            id="cardNumb"
            name="cardNumb"
            placeholder="#### #### #### ####"
            value={form.cardNumb}
            onChange={inputChangeHandler}
          />
          {/* <div className="payForm__form--metaDataCard"> */}
          <label htmlFor="cardExp">EXPIES</label>
          <input
            type="number"
            id="cardExp"
            name="cardExp"
            placeholder="##/##"
            value={form.cardExp}
            onChange={inputChangeHandler}
          />
          <label htmlFor="cvv">CVV</label>
          <input
            type="number"
            id="cvv"
            name="cvv"
            placeholder="###"
            value={form.cvv}
            onChange={inputChangeHandler}
          />
          {/* </div> */}
          <h3>
            Payment amount: <span>{totalPrice()}€</span>
          </h3>
          <div className="paymentForm__Form--btns">
            <Link to="/cart">
              <Btn text="Return" />
            </Link>
            <input
              className="btn paymentBtn"
              type="submit"
              value="Pay Now"
              onClick={changingTotal}
            />
          </div>
        </form>
        <div className="cardContainer">
          <div className="card">
            <h3 className="card__top">Visa</h3>
            <h3 className="card__number">#### #### #### ####</h3>
            <div className="card__bottom">
              <div className="card__botom--cardHolder">
                <p>CARD HOLDER</p>
                <h4>Israel Quiroz</h4>
              </div>
              <div className="card__bottom--cardExp">
                <p>EXPIES</p>
                <h4>##/##</h4>
              </div>
              <div className="card__bottom--cardCvv">
                <p>CVV</p>
                <h4>###</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
