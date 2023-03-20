import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9lOd4Evx8L7pgRoL1i7-2Bd5uwUFvGxE",
  authDomain: "react-project-d7a96.firebaseapp.com",
  projectId: "react-project-d7a96",
  storageBucket: "react-project-d7a96.appspot.com",
  messagingSenderId: "320954460965",
  appId: "1:320954460965:web:af84d0967393d09fffc8cc",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
