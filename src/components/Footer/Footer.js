import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert"
import "./Footer.css"

const Footer = () => {
    return (
    <div className="container">
        <div className="row">

            <div className="col-sm-12 col-lg-4 align-self-center">
                <section className="newsletter">
                    <h3>Newsletter</h3>
                    <form className="newsletter" action="">
                        <div className="contenedor-input">
                            <input type="text" name="nombre" placeholder="Nombre" className="nombre-newsletter"/>
                        </div>

                        <div className="contenedor-input">
                            <input type="email" name="Correo Electronico" placeholder="Correo Electronico"
                                className="correo-newsletter"/>
                        </div>

                        <div className="enviar">
                            <input className="enviar" type="submit" value="Suscribirme"/>
                        </div>
                    </form>
                </section>
            </div>

            <div className="col-sm-12 col-lg-4 align-self-center">
                <section className="redes-sociales">
                    <a href="https://www.instagram.com/brumaadeco/" target="_blank">
                        <img className="red-instagram" src="../../../assets/instagram.webp" alt="Instagram"/>
                    </a>
                    <a href="https://www.facebook.com/Brumaadeco" target="_blank">
                        <img className="red-facebook" src="../../../assets/facebook.webp" alt="Facebook"/>
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img className="red-whatsapp" src="../../../assets/whatsapp.webp" alt="Whatsapp"/> 
                    </a>
                </section>
            </div>

            <div className="col-sm-12 col-lg-4 align-self-center">
                <section className="items">
                    <ul>
                        <li>
                            <NavLink className={"nav-link active"} aria-current="page" to="/">Inicio</NavLink>
                        </li>

                        <li>
                            <NavLink className={"nav-link"} to="/category/paraCasa">Para casa</NavLink>
                        </li>

                        <li>
                            <NavLink className={"nav-link"} to="/category/textil">Textil</NavLink>
                        </li>

                        <li>
                            <NavLink className={"nav-link"} to="/aboutUs">¿Quiénes somos?</NavLink>
                        </li>

                        <li>
                            <NavLink className={"nav-link"} to="/contact">Contacto</NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
    )
};

export default Footer;