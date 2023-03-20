import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Icon from "../Icon/Icon";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top--left ">
          <a href="facebook.com">
            <Icon icon="fb" />
          </a>
          <a href="instagram.com">
            <Icon icon="ig" />
          </a>
        </div>
        <Link to="/">
          <h1 className="header__top--logo">Decó</h1>
        </Link>
        <div className="header__top--right">
          <Icon icon="account" />
          <Icon icon="fav" />
          <CartWidget />
        </div>
      </div>
      <div className="header__divider"></div>
      <nav className="navBar">
        <ul className="navLinks">
          <li className="navLink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__divider"></div>
    </header>
  );
};

export default NavBar;
