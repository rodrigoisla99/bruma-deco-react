import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "./ItemDetail.css"

const ItemDetail = ({productSelected}) => {
    const [count, setCount] = useState(0)
    return (
<div className="products-carts-detail">
    <img alt={productSelected.nombre} src={`${productSelected.img}`}/>
    <h1>{productSelected.nombre}</h1>
    <h2>{productSelected.precio}</h2>
    <h3>{productSelected.description}</h3>
    <h3>{count}</h3>
    <ItemCount className="add-cart" setCount={setCount}></ItemCount>
</div>
    )
}

export default ItemDetail