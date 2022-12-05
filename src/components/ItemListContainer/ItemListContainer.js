
import { useEffect, useState } from "react";
// import {data} from "../../data/data";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";
import Banner from "../Banner/Banner";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    // const [items, setItems] = useState([])
    const {categoryName} = useParams();

// USANDO FIREBASE
const getProducts = ()=>{
    const db = getFirestore();
    const queryBase = collection(db, "products")
    const querySnapshot = categoryName 
    ? query(queryBase, where("categoryId", "==", categoryName))
    : queryBase

    getDocs(querySnapshot)
        .then((response) => {
            const data = response.docs.map((product)=>{
                return {id: product.id, ...product.data()}
            })
            setProductList(data)
        })
        .catch((error)=>{
            console.log(error);
        });
    
    };

useEffect(()=> {
    getProducts()
},[categoryName])

    return (
        <>
        {/* HAGO QUE EL BANNER SE MUESTRE SOLO EN EL INICIO */}
        { !categoryName && <Banner name="Armá tu espacio, decorá tu vida"/> }
        <hr/>
        <div><ItemList productList={productList}/></div>
        </>
        )
};

export default ItemListContainer;