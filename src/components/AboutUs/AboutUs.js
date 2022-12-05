import React from "react";
import './AboutUs.css'

const AboutUs = (props) => {
    return (
        <div>
            <hr/>

        <h1>Quiénes somos</h1>

        <section>
            <p className="quienes-somos"><span>Bruma es el resultado vivo de nuestra pasión por la decoración y el
                    diseño</span> . Desde hace mucho tiempo teníamos ganas de empezar con este proyecto pero el miedo
                nos ganaba. Hoy, después de mil idas y vueltas, ESTAMOS ACA.
                En Bruma vas a poder encontrar la decoración que buscas para tu hogar: almohadones, frascos, growlers,
                lámparas, etc. Y próximamente van a entrar muchos más productos.
                <br/>
                <br/>
                Espero que les guste, con amor BRUMA
            </p>
        </section>

        <hr/>

        <section className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <h3>Veronica Isla</h3>
                    <p>En 2016 me recibí de diseñadora de interiores. Algo que me gusta y me apasiona muchísimo. Después
                        de unos años, con pandemia y mudanza de por medio, decidí lanzarme de lleno al mundo de la
                        decoración con este proyecto que recién empieza.</p>
                </div>

                <div className="col-sm-12 col-md-4 text-center mt-2">
                    <img className="rounded" src="../Imagenes/veronica.webp" alt="Veronica Isla"/>
                </div>
            </div>
        </section>

        <hr/>

        <section className="container">
            <div className="row flex-column-reverse">
                <div className="col-sm-12 col-md-4 text-center mt-2">
                    <img class="rounded" src="../Imagenes/jimena.webp" alt="Jimena Isla"/>
                </div>

                <div className="col-sm-12 col-md-8">
                    <h3>Jimena Isla</h3>
                    <p>Actualmente estoy en primer año de diseño gráfico en la UBA, pero desde que comenzó Bruma me
                        encargo de los diseños, las fotografías y manejo de las redes sociales. Me encanta poder darle
                        mi propia impronta a algo que la gente va a ver.</p>
                </div>
            </div>
        </section>
    </div>
    )
};

export default AboutUs;