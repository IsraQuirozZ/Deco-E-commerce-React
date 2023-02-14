import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <div className="topHeader">
        <h1 className="logo"> Decó </h1>
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
            <a href="#"> Home </a>
          </li>
          <li className="navLink">
            <a href="#"> About Us </a>
          </li>
          <li className="navLink">
            <a href="#"> Shop </a>
          </li>
          <li className="navLink">
            <a href="#"> Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
