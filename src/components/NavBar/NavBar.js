import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="menu-navbar-container">
            <h1 className="menu-title">Bruma Deco</h1>
            <ul className="menu-items">
                <li>
                    <a href="" className="menu-list">Inicio</a>
                </li>
                <li>
                    <a href="" className="menu-list">Tienda</a>
                </li>
                <li>
                    <a href="" className="menu-list">Para casa</a>
                </li>
                <li>
                    <a href="" className="menu-list">Textil</a>
                </li>
                <li>
                    <a href="" className="menu-list">¿Quienes somos?</a>
                </li>
                <li>
                    <a href="../Contacto/Contacto.js" className="menu-list">Contacto</a>
                </li>
            </ul>

            {/* Logo carrito */}
            <CartWidget></CartWidget>

            {/* Buscador y boton buscar */}
            <input class="form-control-nav me-3" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </div> 
    )
};

export default NavBar;