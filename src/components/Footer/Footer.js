import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

const Footer = () => {
    return (
    <div className="container">
        <div className="row">

            <div className="col-sm-12 col-xl-4 align-self-center">
                <section className="newsletter">
                    <h3>Newsletter</h3>
                    <form className="newsletter" action="">
                        <div className="contenedor-input">
                            <input type="text" name="nombre" placeholder="Nombre" class="nombre-newsletter"/>
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

            {/* <div class="col-sm-12 col-xl-4 align-self-center">
                <section class="direccion">
                    <p>Av. Benito Boock 245 <br> Kilometro 4 <br> San Carlos de Bariloche</p>
                </section>

                <section class="direccion-laptop"/>
                    <p/>Av. Benito Boock 245 - KM 4 - San Carlos de Bariloche</p>
                </section>
            </div> */}

            <div className="col-sm-12 col-xl-2 align-self-center">
                <section className="redes-sociales">
                    <a href="https://www.instagram.com/brumaadeco/" target="_blank">
                        <img className="red-instagram" src="../bruma-deco-responsive/Imagenes/instagram.webp" alt="Instagram"/>
                    </a>
                    <a href="https://www.facebook.com/Brumaadeco" target="_blank">
                        <img className="red-facebook" src="../bruma-deco-responsive/Imagenes/facebook.webp" alt="Facebook"/>
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img className="red-whatsapp" src="../bruma-deco-responsive/Imagenes/whatsapp.webp" alt="Whatsapp"/> 
                    </a>
                </section>
            </div>

            <div className="col-sm-12 col-xl-2 align-self-center">
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