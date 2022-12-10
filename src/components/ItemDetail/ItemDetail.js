import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { cartContext } from "../../Context/CartProvider"
import "./ItemDetail.css"

const ItemDetail = ({productSelected}) => {
    const [count, setCount] = useState(1)
    const{addToCart} = useContext(cartContext)

    return (
<div className="products-carts-detail">
    <img alt={productSelected.title} src={`/assets/${productSelected.imageId}`} className="img-detail"/>
    <h1>{productSelected.title}</h1>
    <h2>${productSelected.price}</h2>
    <h3 className="description">{productSelected.description}</h3>
    <h3 className="description">{count}</h3>
    <ItemCount className="add-cart" setCount={setCount}></ItemCount>
    <button onClick={()=> addToCart(productSelected, count)} className="add-cart">Agregar al carrito</button>
</div>
    )
}

export default ItemDetail 