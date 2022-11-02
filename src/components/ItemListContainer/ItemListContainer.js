import React from "react";
import "./ItemListContainer.css"

import Banner from "../../assets/espacio-decorado.webp"

const ItemListContainer = (props) => {
    return (
        <div className="message-greeting-container">
            <hr/>
            <h2 className="message">{props.name}</h2>
            <img src={Banner} className="banner"></img>
        </div>
    )
};

export default ItemListContainer;