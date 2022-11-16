import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="menu-navbar-container">
            <h1 className="menu-title">Bruma Deco</h1>
            <ul className="menu-items">
                <li>
                    <NavLink className={"menu-list"} to="/">Inicio</NavLink>
                </li>
                {/* <li>
                    <a href="" className="menu-list">Tienda</a>
                    <Link to="/">Tienda</Link>
                </li> */}
                <li>
                    <NavLink className={"menu-list"} to="/category/paraCasa">Para casa</NavLink>
                </li>
                <li>
                    <NavLink className={"menu-list"} to="/category/textil">Textil</NavLink>
                </li>
                <li>
                    {/* <a href="" className="menu-list">¿Quienes somos?</a> */}
                    <NavLink className={"menu-list"} to="/aboutUs">¿Quienes somos?</NavLink>
                </li>
                <li>
                    {/* <a href="../Contacto/Contacto.js" className="menu-list">Contacto</a> */}
                    <NavLink className={"menu-list"} to="/contact">Contacto</NavLink>
                </li>
                <li>
                    {/* Logo carrito - VER COMO HACER QUE SEA CLICKEABLE */ }
                    <NavLink className={"menu-list"} to="/cart"><CartWidget></CartWidget></NavLink>
                </li>
            </ul>

            {/* Buscador y boton buscar */}
            <input class="form-control-nav me-3" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </div> 
    )
};

export default NavBar;