import React from "react";
import "./Banner.css"

import ImagenBanner from "../../assets/espacio-decorado.webp"

const Banner = ({name}) => {
    return (
        <div className="message-greeting-container">
            <hr/>
            <h2 className="message">{name}</h2>
            <img src={ImagenBanner} className="banner"></img>
        </div>
    )
};

export default Banner;