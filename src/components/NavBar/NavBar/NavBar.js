import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return ( <
        nav >
        <
        h1 > LOGO < /h1>{" "} <
        ul className = "navLinks" >
        <
        li >
        <
        a href = "#" > LINK < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > LINK < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > LINK < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > LINK < /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        CartWidget / >
        <
        /nav>
    );
};

export default NavBar;