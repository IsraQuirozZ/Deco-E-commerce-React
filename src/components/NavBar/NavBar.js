import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <div className="topHeader">
        <h1 className="logo">
          <Link to="/" style={{ color: "white" }}>
            Decó
          </Link>
        </h1>
        <form className="searchForm" id="searchForm">
          <input type="text" placeholder="SEARCH" />
          <button>
            <SearchIcon />
          </button>
        </form>
        <div className="topHeader-right">
          <CartWidget />
        </div>
      </div>
      <div className="divider"></div>
      <nav className="navBar">
        <ul className="navLinks">
          <li className="navLink">
            <Link to={"/"}>Home</Link>
            {/* <a href="#"> Home </a> */}
          </li>
          <li className="navLink">
            <Link to={"/aboutUs"}>About Us</Link>
            {/* <a href="#"> About Us </a> */}
          </li>
          <li className="navLink">
            <Link to="/shop">Shop</Link>
            {/* <a href="#"> Shop </a> */}
          </li>
          <li className="navLink">
            <Link to={"/contact"}>Contact</Link>
            {/* <a href="#"> Contact </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
