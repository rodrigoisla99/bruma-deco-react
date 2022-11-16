import { useEffect, useState } from "react";
import {data} from "../../data/data"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState()
    const {id} = useParams()

    const getProduct = () => {
        const productFiltered = data.filter((producto) => {
            return producto.id == id;
        })
        setProductSelected(...productFiltered)
    }

    useEffect(()=> {
        getProduct()
    }, [id])

    return (
        <div>
            {productSelected && <ItemDetail productSelected={productSelected} />}
        </div>
    )
}

// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState ()
//     const {id} = useParams();

//     const getData = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 2000);
//     })

//     useEffect (() => {
//         getData.then((response) => {
//             setProduct(response[0]); //Agarro el primer producto de mi data.js = lampara colgante
//         })
//     }, []);
//     return (
//         <div>{product && <ItemDetail product={product}/>}</div>
//     );
// };

export default ItemDetailContainer;