import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState()
    const {id} = useParams()

    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, "products", id)
        getDoc(query)
        .then((response) => {
            setProductSelected({id: response.id, ...response.data()})
        })
        .catch((error)=>{console.log(error);})
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

export default ItemDetailContainer;