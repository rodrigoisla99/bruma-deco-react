import React from "react";
import logo from "../../assets/carrito.png";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="menu-navbar-logo">
            <img className="menu-navbar-imagen" src={logo} alt="cart widget"/>
        </div> 
    )
};

export default CartWidget;