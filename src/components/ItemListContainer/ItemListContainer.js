// import React, { useState } from "react";
// import { useEffect } from "react";
// import {data} from "../../data/data"
// import ItemList from "../ItemList/ItemList"
// import "./ItemListContainer.css"

// import Banner from "../../assets/espacio-decorado.webp"

// const ItemListContainer = ({name}) => {
//     return (
//         <div className="message-greeting-container">
//             <hr/>
//             <h2 className="message">{name}</h2>
//             <img src={Banner} className="banner"></img>
//         </div>
//     )
// };

//PROBANDO AGREGAR CART CON PRODUCTOS - CLASE 6 - REL/ ITEM.JS - ITEMLIST.JS - DATA.JS
// const ItemListContainer = ()=>{
//     const [productList, setProductList] = useState([]); 

// const getProducts = new Promise ((resolve, reject) => {
// setTimeout(() => {
//     resolve(data)
// }, 3000);
// });

//     useEffect (()=>{
//         getProducts.then(respuesta => {
//             setProductList(respuesta)
//         });
//         setTimeout(() => {
//             console.log(productList);
//         }, 4000);
//     }, [productList]);

//     return (
//         <div>
//             <ItemList productList={productList}/>
//         </div>
//         )
// };

import { useEffect, useState } from "react";
import {data} from "../../data/data";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    
const getProducts = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        resolve(data)
    }, 3000);
});

    useEffect(()=> {
        getProducts.then((respuesta) => {
            setProductList(respuesta)
        });
        setTimeout(() => {
            console.log(productList);
        }, 4000); 
}, [productList]);

    return <div><ItemList productList={productList}/></div>
};

export default ItemListContainer;