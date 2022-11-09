import { useEffect, useState } from "react";
import {data} from "../../data/data"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ()

    const getData = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })

    useEffect (() => {
        getData.then((response) => {
            setProduct(response[0]); //Agarro el primer producto de mi data.js = lampara colgante
        })
    }, []);
    return (
        <div>{product && <ItemDetail product={product}/>}</div>
    );
};

export default ItemDetailContainer;